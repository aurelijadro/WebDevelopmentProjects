document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("userName").value.toUpperCase();
    const birthday = document.getElementById("birthday").value;
    const date = new Date(birthday);
    generateUnicornName(name.charCodeAt(0) - 65, date.getMonth());
});

function generateUnicornName(charNum, month) {
    const secondPart = () => uni2[month];
    console.log(`${secondPart()}`);
    document.getElementById("unicornName").textContent = `${uni1[charNum]} ${secondPart()}`;
}



const uni1 = ["Diamond", "Beautiful", "Twilight", "Dazzling", "Pearl", "Fairy", "Glitter", "Happy", "Candy", "Jewel", "Silly", "Rainbow", "Magical", "Chocolate", "Glitzy", "Princess", "Elegant", "Lady", "Sunshine", "Twinkle", "Royal", "Bella", "Sweetie", "Queen", "Glitzy", "Fancy"];

const uni2 = ["Magical Starlight", "Sugar Pearl", "Honey Bloom", "Dazzle Petal", "Wind Song", "Emerald Dusk", "Shimmer Rain", "Moon Shine Dancer", "Twilight Shine", "Golden Cloud", "Saphire Angel", "Snow Dancer"];
