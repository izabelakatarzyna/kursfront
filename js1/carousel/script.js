//Stwórz tablicę obiektów, z których każdy obiekt będzie zawierał tytuł i źródło zdjęcia
const views = [
    {
        "src" : "1.webp",
        "name" : "Pierwszy",
        "alt" : "City"
    }
    {
        "src" : "2.webp",
        "name" : "Drugi",
        "alt" : "Skyscrapers"
    }
    {
        "src" : "3.webp",
        "name" : "Trzeci",
        "alt" : "Beach"
    }
];
//Stwórz funkcję, która będzie pobierała w argumencie numer slajdu (0 - 2) i na jego podstawie będzie wyświetlała wartości z tablicy (z pkt 1) w dokumencie html’a (będzie wyświetlała zdjęcie i tytuł)
function getSingleView( index ){
const h2 = document.querySelector("h2")
h2.innerHTML = "test"
}

getSingleView(0)