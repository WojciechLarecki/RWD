const englishBtn = document.getElementsByClassName("englishBtn");
const allBtn = document.getElementsByClassName("allBtn");
const biologyBtn = document.getElementsByClassName("biologyBtn");
const chemistryBtn = document.getElementsByClassName("chemistryBtn");
const physicsBtn = document.getElementsByClassName("physicsBtn");
const mathBtn = document.getElementsByClassName("mathBtn");
const polishBtn = document.getElementsByClassName("polishBtn");
for (const btn of englishBtn) {
    btn.addEventListener("click", () => disableCardsWithGivenIdPart("angielski"));
}
for (const btn of biologyBtn) {
    btn.addEventListener("click", () => disableCardsWithGivenIdPart("biologia"));
}
for (const btn of chemistryBtn) {
    btn.addEventListener("click", () => disableCardsWithGivenIdPart("chemia"));
}
for (const btn of physicsBtn) {
    btn.addEventListener("click", () => disableCardsWithGivenIdPart("fizyka"));
}
for (const btn of mathBtn) {
    btn.addEventListener("click", () => disableCardsWithGivenIdPart("matematyka"));
}
for (const btn of polishBtn) {
    btn.addEventListener("click", () => disableCardsWithGivenIdPart("polski"));
}
for (const btn of allBtn) {
    btn.addEventListener("click", () => {
        const cards = document.getElementsByClassName("card");
        for (const card of cards) {
            card.style.display = "block";
        }
    });
}

function disableCardsWithGivenIdPart(idPart) {
    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
        if (card.id.includes(idPart))
            card.style.display = "block";
        else
            card.style.display = "none";
    }
}
