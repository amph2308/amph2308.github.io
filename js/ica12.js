async function showCatFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const catFact = await response.json();
    console.log(catFact);
    document.getElementById("cat-fact").innerHTML = catFact.fact;
}

let toggle = false;
btn.addEventListener('click', () => {
  if(!toggle){
    document.getElementById("cat-fact").innerHTML =catFact.fact
    toggle = true
  }
  else{
    toggle = false;
  }
});