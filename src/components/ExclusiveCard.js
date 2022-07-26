// React Native Elements UI
import { Button, Card, Text } from "@rneui/themed";

import { StyleSheet, View } from "react-native";

function ExlusiveCard () {
    return (
        <Card containerStyle={styles.card}>
            <Card.Image style={styles.cardImage}
                source={{
                uri: 'https://am3pap006files.storage.live.com/y4mWpouhBJGPVfUpiNf3H76B-eg3XLhnlufC4toEOT4igwG44cO4kMlsEwWz2mlgy4FcGYCM_SFOvIL9aiPEc73WSBRXBcpVyCqQGKlhNvyQyyRSmz2L15W3BM84uZGTwclYoPAh3kLER-tw3V-K_HqRTuxQqjhoJR17acLIAVS00zY-N-W9I0XOXmnQaQrKoav?width=624&height=253&cropmode=none' 
                }} />
            <View style={styles.container}>
                <View>
                    <Text style={{fontWeight: "bold", color: "#6F6F6F" }}>
                    Podcast
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "#A9ABB1" }}>
                    Every Friday 10:00 EST
                    </Text>
                </View>
                <Button
                    containerStyle={{width: 127, height: 31 }} 
                    buttonStyle={styles.cardButton} 
                    titleStyle={styles.cardButtonTitle} 
                    title="Subscribe"
                />
            </View>
        </Card>
    );
};
  
const styles = StyleSheet.create({
    card: {
        height: 188,
        padding: 0,
        borderWidth: 0,
        elevation: 0,
        borderRadius: 20,
    },
    cardImage: {
        height: 136,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        height: 52
    },
    cardButton: {
        backgroundColor: "#5C21B5",
        borderRadius: 20,
        paddingHorizontal: 21,
        paddingVertical: 5
    },
    cardButtonTitle: {
        // fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 18
    }
});
    
export default ExlusiveCard;
