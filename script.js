
//read data from csv file
logJSONData();
let countryInfo;
let allInfo = [];
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

    //display population of the selected country
    let populationDiv = document.querySelector("#population");
    for(let i=0; i<countryInfo.length; i++){
        if(countryInfo[i].Name===selectedCountry){
            populationDiv.innerHTML=""+countryInfo[i].Population;
            break;
        }
    }

    //inserting image
    let flagImgDiv = document.querySelector("#flagImg");
    let imgHTML = `<img src="flags/${selectedCountry}.png"></img>`;
    flagImgDiv.innerHTML = imgHTML;

    //display area
    let sqAreaDisplay = document.querySelector("#sqAreaDisplay");
    let aUnitSelection = document.querySelector("#aUnitSelection").value;
    let area = countryInfo.find(country=>country.Name===selectedCountry).Area;

    if(aUnitSelection==="km"){
        area=(area*2.58999).toFixed(2);
        sqAreaDisplay.value=`${area} Sq. KM's`;
    }else{
        sqAreaDisplay.value=`${area} Sq. Miles`;
    }

    //change the href or the wikipage link/button
    let wikiLink = document.querySelector("#wikiPageLink");
    wikiLink.setAttribute("href", "https://en.wikipedia.org/wiki/" + selectedCountry); 
}

let aUnitSelection = document.querySelector("#aUnitSelection");
aUnitSelection.addEventListener("change", getCountryInfo);

//calculate population density

//convert sq miles to sq km and vice versa

//convert per sq miles to per sq km and vice versa
