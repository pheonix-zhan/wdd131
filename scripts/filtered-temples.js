const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Kowloon Tong, China",
        dedicated: "1996, May, 26-27",
        area: 51921,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-53442.jpg"
    },
    {
        templeName: "Bangkok Thailand Temple",
        location: "Bangkok, Thailand",
        dedicated: "2019, January, 26",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"

    },
    {
        templeName: "Tokyo, Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27-29",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"
    },
    // Add more temple objects here...
];

// display 
function displayTemples(filter) {
    const container = document.querySelector("#templeCards");
    container.innerHTML = "";

    let filteredTemples = [];

    if (filter === "home") filteredTemples = temples;
    else if (filter === "old") {
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    } else if (filter === "new") {
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    } else if (filter === "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.append(name, location, dedicated, area, image);
        container.appendChild(card);
    });
}

// naviagtion
document.querySelector("#homeLink").addEventListener("click", () => displayTemples("home"));
document.querySelector("#oldLink").addEventListener("click", () => displayTemples("old"));
document.querySelector("#newLink").addEventListener("click", () => displayTemples("new"));
document.querySelector("#largeLink").addEventListener("click", () => displayTemples("large"));
document.querySelector("#smallLink").addEventListener("click", () => displayTemples("small"));

// Display all temples initially
displayTemples("home");

// footer
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;