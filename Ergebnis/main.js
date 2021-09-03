function passwortSichtbarkeitUmschalten(eingabefeldId) {
    const passwortFeld = document.getElementById(eingabefeldId);
    if(passwortFeld.type === "password") {
        passwortFeld.type = "text";
    } else {
        passwortFeld.type = "password";
    }
}