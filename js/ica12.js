async function showCatFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const catFact = await response.json();
    console.log(catFact);
    document.getElementById("cat-fact").innerHTML = catFact.fact;
}