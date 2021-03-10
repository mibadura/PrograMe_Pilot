import { StyleSheet } from 'react-native';

const darkGreen = '#3a6351'
const lightBeige = '#f2edd7'
const lightOrange = '#e48257'
const darkBrown = '#393232'

const nicePalette = {"Phthalo Green":"#14281d","Hunter Green":"#355834","Antique Bronze":"#6e633d","Light French Beige":"#c2a878","Baby Powder":"#f1f5f2"}

const betterPalette = {"Black Olive":"#3b3e3b","Honey Yellow":"#f7b32b","Asparagus":"#88ab75","Vermilion":"#cd5334",
"Terra Cotta":"#d6745c","Ruby Red":"#a41623","Sky Blue":"#8ec9e0","Eggshell":"#f2edd7","Battleship Grey":"#818881"}

const vintagePalette = {"Antique Brass":"#cb997e","Desert Sand":"#ddbea9","Champagne Pink":"#ffe8d6","Ash Gray":"#b7b7a4","Artichoke":"#a5a58d","Ebony":"#6b705c"}

export const mainStyles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: vintagePalette.Ebony
    },
    buttonContainer: {
        marginTop: 20
    },
    logo: {
        fontSize: 64,
        padding: 40,
        color: vintagePalette['Champagne Pink']
    },
    slogan: {
        fontSize: 20,
        padding: 20,
        color: vintagePalette['Champagne Pink']
    }

});

