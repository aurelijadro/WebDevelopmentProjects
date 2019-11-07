//Dancer constructor:

function Dancer(name, lastname, age, danceTitle, musicURL) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.danceTitle = danceTitle;
    this.musicURL = musicURL;
}

//Array of all registered dancers:

const dancers = [new Dancer("Kate", "Middleton", "31-40", "Royal Dance", "https://www.youtube.com/watch?v=nlcIKh6sBtc"), new Dancer("Sima", "Simutytė", "13-18", "Falala", "https://www.youtube.com/watch?v=b_4rdHIMDfk")];

//Search functionality:

document.querySelector("#searchbox").addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = document.querySelector("#searchInput").value;
    alertDancerInfo(searchInput);
    document.querySelector("#searchInput").value = "";
})

function alertDancerInfo(searchInput) {
    let info = "Dance not found.";
    dancers.forEach(function (dancer) {
        if (dancer.danceTitle.toLowerCase() == searchInput.toLowerCase()) {
            info = "Dancer: " + dancer.name + " " + dancer.lastname + "\nAge group: " + dancer.age + "\nMusic URL: " + dancer.musicURL;
        }
    })
    alert(info);

}

// Registration functionality:
document.querySelector("#registration").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let lastname = document.querySelector("#lastname").value;
    let age = document.querySelector("#age").value;
    let danceTitle = document.querySelector("#danceTitle").value;
    let musicURL = document.querySelector("#url").value;

    dancers.push(new Dancer(name, lastname, age, danceTitle, musicURL));
    alert("\u2605 Congratulations, your registration is successful!")
    document.querySelector("#registration").reset();
});
