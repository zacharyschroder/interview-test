export default function getAutocompleteResults(query, signal = AbortSignal) {
    const fruits = [
        "Apple",
        "Banana",
        "Kiwi",
        "Orange",
        "Strawberry",
        "Watermelon",
        "Mango",
        "Grape",
        "Lemon",
        "Lime",
        "Peach",
        "Pear",
        "Raspberry",
        "Blueberry",
        "Blackberry",
        "Cherry",
        "Cranberry",
        "Cucumber",
        "Grapefruit",
        "Honeydew",
        "Jackfruit",
        "Mandarin",
        "Nectarine",
        "Wintermelon",
        "Sweetmelon",
        "Nectarine",
        "Papaya",
        "Pineapple",
        "Plum",
        "Pomegranate",
        "Tangerine",
        "Tomato",
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (signal?.aborted) {
                reject(signal.reason)
            }

            resolve (
                fruits.filter((fruit) => 
                    fruit.toLowerCase().includes(query.toLowerCase())
                )
            )
        }, Math.random() * 1000);
    })
}