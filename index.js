function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let x = 0; x < names.length; x++) {
        let message = `Thank you, ${names[x]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    };
}