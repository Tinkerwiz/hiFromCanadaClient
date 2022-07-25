// React Native Elements UI
import { Button, Card, Text } from "@rneui/themed";

// Native UI
import { StyleSheet, View } from "react-native";

function PromotionCard() {
    return (
        <Card containerStyle={styles.card}>
            <View style={styles.container}>
                <Card.Image
                    style={{display: "block", width: "100px", height: "100px"}}
                    resizeMode="contain"
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png',
                    }}
                />
                <View style={{width: "60%"}}>
                    <Text style={styles.cardHeader}>
                        Join our English Speaking Club
                    </Text>
                    <Button
                        containerStyle={{width: 'fit-content'}} 
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
        boxShadow: "0px 8px 24px rgba(129, 135, 189, 0.25)",
        borderRadius: "20px",
        maxWidth: "335px",
        height: "205px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px"
    },
    cardHeader: {
        fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "19px",
        lineHeight: "30px",
        marginBottom: "12px"
    },
    cardButton: {
        backgroundColor: "#5C21B5",
        borderRadius: "19px",
        width: "fit-content",
        paddingHorizontal: "21px",
        paddingVertical: "5px"
    },
    cardButtonTitle: {
        fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: "18px"
    }
});

export default PromotionCard;
