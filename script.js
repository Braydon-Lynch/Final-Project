
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


    //inserting image
    let flagImgDiv = document.querySelector("#flagImg");
    let imgHTML = `<img src="flags/${selectedCountry}.png"></img>`;
    flagImgDiv.innerHTML = imgHTML;

    //change the href or the wikipage link/button
    let wikiLink = document.querySelector("#wikiPageLink");
    wikiLink.setAttribute("href", "https://en.wikipedia.org/wiki/" + selectedCountry);
}

function calcPopulation()
{
    
}

//calculate population density

//convert sq miles to sq km and vice versa

//convert per sq miles to per sq km and vice versa



/*
//get the users country selection
let countrySelection = document.getElementById("countrySelection");

//get population data from the .json file
fetch("countries.json")
    .then(response=>response.json())
    .then(data=>{
        const population = data[selectedCountry];

        //population is available or not
        if(population){
            document.getElementById("result").innerHTML= `The population of ${selectedCountry} is ${population}`;
        }else{
            document.getElementById("result").innerHTML= `Population data not available for selected country`;
        }
        return;
    })
    .catch(error=>{
        console.error(error);
        document.getElementById("result").innerHTML= `An error has occured`;
        return;
    });
    */