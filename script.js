
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
            populationDiv.innerHTML=countryInfo[i].Population.toLocaleString();
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

    //display population per sq. miles and sq. kms
    let popPerDisplay = document.querySelector("#popPerDisplay");
    let pUnitSelection = formRef["pUnitSelection"].value;
    let populationDensity;

    if(pUnitSelection==="km"){
        populationDensity=(countryInfo.find(country=>country.Name===selectedCountry).Population/area).toFixed(2);
        popPerDisplay.value=`${populationDensity} per Sq. KM's`;
    }else{
        populationDensity=(countryInfo.find(country=>country.Name===selectedCountry).Population/(area/2.58999)).toFixed(2);
        popPerDisplay.value=`${populationDensity} per Sq. Miles`;
    }

    //calculate percentage of the worlds population
    let percentDisplay = document.querySelector("#percentDisplay");
    let worldPopulation = 8045311447 //world population according to "Macrotrends.net 2023"
    let countryPopulation = countryInfo.find(country=>country.Name===selectedCountry).Population;
    let percentOfWorldsPopulation = ((countryPopulation/worldPopulation)*100).toFixed(2);
    percentDisplay.value = `${percentOfWorldsPopulation}%`;

    //wiki button
    let wikiButton = document.querySelector("#wikiCountryButton");

    //event listener for the wiki button
    wikiButton.addEventListener("click", function(){
        let selectedCountry=formRef["countrySelection"].value;
        window.open("https://en.wikipedia.org/wiki/" + selectedCountry);
    });
}


//area unit selection
let aUnitSelection = document.querySelector("#aUnitSelection");
aUnitSelection.addEventListener("change", getCountryInfo);

//population per unit selection 
let pUnitSelection = document.querySelectorAll("input[name='pUnitSelection']");
for(let i=0; i<pUnitSelection.length; i++){
    pUnitSelection[i].addEventListener('change', getCountryInfo);
}
