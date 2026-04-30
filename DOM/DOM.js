document.body.style.backgroundColor = "rgb(199, 205, 216)";
document.body.style.margin = "20px";
document.body.style.fontFamily = "Arial, sans-serif";

const navbar = document.querySelector(".navbar");
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";
navbar.style.background = "black";
navbar.style.color = "white";
navbar.style.padding = "15px 30px";
navbar.style.position = "sticky";
navbar.style.top = "0";
navbar.style.zIndex = "100";

const logo = document.querySelector(".logo");
logo.style.fontSize = "22px";
logo.style.fontWeight = "bold";

const navlinks = document.querySelector(".nav-links");
navlinks.style.display = "flex";
navlinks.style.listStyle = "none";
navlinks.style.gap = "20px";

const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.style.textDecoration = "none";
    link.style.color = "white";
    link.style.fontSize = "16px";
});

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "yellow";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "white";
    });
});

const searchinput = document.querySelector(".search input");
searchinput.style.padding = "6px";

const searchbtn = document.querySelector(".search button");
searchbtn.style.padding = "6px 10px";
searchbtn.style.background = "orange";
searchbtn.style.border = "none";
searchbtn.style.cursor = "pointer";

searchbtn.addEventListener("mouseenter", () => {
    searchbtn.style.background = "yellow";
});
searchbtn.addEventListener("mouseleave", () => {
    searchbtn.style.background = "orange";
});

const menutoggle = document.getElementById("menu-toggle");
menutoggle.style.display = "none";

const menuicon = document.querySelector(".menu-icon");
menuicon.style.display = "none";
menuicon.style.flexDirection = "column";
menuicon.style.cursor = "pointer";
menuicon.style.gap = "5px";

const spans = document.querySelectorAll(".menu-icon span");
spans.forEach(span => {
    span.style.width = "25px";
    span.style.height = "3px";
    span.style.background = "white";
});


const items = document.getElementById("items");
items.style.display = "flex";
items.style.flexWrap = "wrap";
items.style.gap = "20px";
items.style.justifyContent = "center";
items.style.marginTop = "20px";

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.style.background = "white";
    card.style.width = "500px";
    card.style.minHeight = "220px";
    card.style.border = "2px solid black";
    card.style.padding = "20px";
    card.style.position = "relative";
});

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.background = "rgb(223, 221, 221)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.background = "white";
    });
});

const images = document.querySelectorAll("img");
images.forEach(img => {
    img.style.width = "200px";
    img.style.height = "130px";
    img.style.position = "absolute";
    img.style.right = "20px";
    img.style.bottom = "20px";
});

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.style.color = "rgb(116, 227, 26)";
    btn.style.background = "white";
    btn.style.padding = "6px 12px";
    btn.style.border = "1px solid black";
    btn.style.cursor = "pointer";
});


buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.background = "aqua";
        btn.style.color = "black";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.background = "white";
        btn.style.color = "rgb(116, 227, 26)";
    });
});

cards.forEach(card => {
    let tag = document.createElement("span");
    tag.innerText = "Offer closes soon";

    tag.style.position = "absolute";
    tag.style.background = "red";
    tag.style.color = "white";
    tag.style.padding = "5px";
    tag.style.top = "10px";
    tag.style.right = "10px";
    tag.style.fontSize = "12px";
    card.appendElement(tag);
});