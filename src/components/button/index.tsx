import { Text, TextProps, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { colors } from "@/styles/theme";
import { styles } from "./styles";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;

}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps){
    return(
        <TouchableOpacity disabled={isLoading} style={[styles.container, style]} activeOpacity={0.8} {...rest}>
            {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
        </TouchableOpacity>
    )
}

function Title({ children }: TextProps){
    return <Text style={styles.title}>{children}</Text>
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps){
    return <Icon size={24} color={colors.gray[100]} />

}


Button.Title = Title;
Button.Icon = Icon;

export { Button };