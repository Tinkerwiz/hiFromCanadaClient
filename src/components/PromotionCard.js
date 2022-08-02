// React Native Elements UI
import { Button, Card, Text } from "@rneui/themed";

// Native UI
import { StyleSheet, View } from "react-native";

function PromotionCard() {
    return (
        <Card containerStyle={styles.card}>
            <View style={styles.container}>
                <Card.Image
                    style={{display: "flex", width: 100, height: 80}}
                    resizeMode="contain"
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png',
                    }}
                />
                <View style={{width: 119}}>
                    <Text style={styles.cardHeader}>
                        Join our English Speaking Club
                    </Text>

                    <Button
                        buttonStyle={styles.cardButton}
                        titleStyle={styles.cardButtonTitle}
                        title="Join Now!"
                    />
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#DAD2C7",
        boxShadow: "0 8 24 rgba(129, 135, 189, 0.25)",
        borderRadius: 20,
        maxWidth: 248,
        height: 152,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardHeader: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 9
    },
    cardButton: {
        backgroundColor: "#5C21B5",
        borderRadius: 19,
        paddingVertical: 3,
        width: "80%"
    },
    cardButtonTitle: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 9,
        lineHeight: 18,
    }
});

export default PromotionCard;
