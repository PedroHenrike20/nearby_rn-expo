import { api } from "@/service/api";
import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";


type MarketsProps = PlaceProps

export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps[]>([]);
    const [category, setCategory] = useState("");
    const [markets, setMarkets] = useState<MarketsProps[]>([]);

    async function fetchCategories() {
        try{
            const { data } = await api.get("/categories");
            setCategories(data);
            setCategory(data[0].id);
        }catch(err) {
            console.log(err);
            Alert.alert("Categorias", "Não foi possível carregar as categorias!");
        }
    }

    async function fetchMarkets() {
        try{
            if(!category){
                return
            }
            const { data } = await api.get("/markets/category/" + category);
            setMarkets(data);

        }catch(err){
            console.log(err);
            Alert.alert("Locais", "Não foi possível carregar os locais!")
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchMarkets();
    }, [category])

    return (
        <View style={{flex: 1, backgroundColor: "#CCC"}}>
            <Categories data={categories} selected={category} onSelected={setCategory}/>
            <Places data={markets}/>
        </View>
    )
}