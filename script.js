
//read data from csv file
logJSONData();
let countryInfo;
async function logJSONData()
{
    const response = await fetch("http://127.0.0.1:5500/countries.json");
    const jsonData = await response.json();
    countryInfo = jsonData;
    createMenuOptions();
}

function createMenuOptions()
{
    //<options value="Canada">Canada</options>
    const countrySelectRef = document.querySelector("#countrySelection");
    countrySelectRef.innerHTML="";

    //start inserting options for the menu
    for(let i=0; i<countryInfo.length; i++)
    {
        countrySelectRef.innerHTML+= `<option value="${countryInfo[i].Name}">${countryInfo[i].Name}</option>`;
    }
}

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

function calcPopulationPercentage()
{
    //calculate populaton %
    let popPercent
}

//calculate population density

//convert sq miles to sq km and vice versa

//convert per sq miles to per sq km and vice versa
