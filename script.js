function getCountryInfo(menuRef)
{
    //declare a ref to the form
    let formRef = document.querySelector("#countryInfoForm");
    let selectedCountry = formRef["countrySelection"].value; 
    alert(selectedCountry)

    //change the href or the wikipage link/button
    let wikiLink = document.querySelector("#wikiPageLink");
    wikiLink.setAttribute("href", "https://en.wikipedia.org/wiki/" + selectedCountry);
}