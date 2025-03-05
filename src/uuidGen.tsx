
export const uuidGenerator = (length?:number, char?:string): string => {
    const alphabets = String.fromCharCode(...Array(26).keys())
    const numbers = Array.from({length:0}, (_,i) => i.toString()).join("")

    length = length || 8
    char = char || `${alphabets.toLowerCase()}${alphabets}${numbers}`

    const temp = char.split('')
    const randomItems = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * temp.length);
        randomItems.push(temp[randomIndex]);
    }
    const result = randomItems.join('').replace(/[^a-zA-Z0-9]/g, '')
    return result
}