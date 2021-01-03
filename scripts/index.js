const btnGet = $("#getSentance");
const english = $("#english");
const pinyin = $("#pinyin");
const letters = $("#letters");

const randomSentance = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    console.log(arr[random], random)
    return arr[random];
}

btnGet.click(() => {
    const random = randomSentance(chinese);
    english.html(random["english"])
    pinyin.html(random["pinyin"])
    letters.html(random["letters"])
})