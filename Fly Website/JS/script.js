function FlightInfo(email, code, from, to) {
    this.email = email;
    this.code = code;
    this.from = from;
    this.to = to;
}

const flightLog = [new FlightInfo("justina@gmail.com", "123456", "Vilnius", "Barcelona"), new FlightInfo("aurelija@aurelija.com", "654321", "Vilnius", "Bali"), new FlightInfo("gerda@gerda.lt", "000000", "Kaunas", "Paris")];

function getDataByEmailAndCode(email, code) {
    let info = "Please check your email and registration code."
    flightLog.forEach(function (log) {
        if (log.email == email && log.code == code) {
            info = log.from + " \u2708 " + log.to;

        }

    });
    return info;

}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("#inputEmail").value;
    const code = document.querySelector("#inputReservationCode").value;

    alert(getDataByEmailAndCode(email, code));
});
