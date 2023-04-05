
//read data from csv file
function getCountryInfo(menuRef)
{
    //declare a reference to the form
    let formRef = document.querySelector("#countryInfoForm");
    let selectedCountry = formRef["countrySelection"].value; 
    let pUnitSelected = formRef["pUnitSelection"].value;
    alert(selectedCountry)

    //change the href or the wikipage link/button
    let wikiLink = document.querySelector("#wikiPageLink");
    wikiLink.setAttribute("href", "https://en.wikipedia.org/wiki/" + selectedCountry);
}

//calculate populaton %

//calculate population density

//convert sq miles to sq km and vice versa

//convert per sq miles to per sq km and vice versa
