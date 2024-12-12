import { FlatList, View } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export type CategoriesProps = {
  id: string;
  name: string;
};

type Props = {
  data: CategoriesProps[];
  selected: string;
  onSelected: (id: string) => void;
};

export function Categories({ data, onSelected, selected }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          isSelected={item.id === selected}
          onPress={() => onSelected(item.id)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
}
