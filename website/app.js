/* Global Variables */




//Declare the baseURL and the personal apiKey code
let baseURL="http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey="&appid=0a911fb439f2112c67d041eae8382b14";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//get the button with id generate using queryselector
const button=document.querySelector('#generate');
//add and event listener to the button to do a task when its clicked
button.addEventListener("click", function(){
    //get the values stored in the text areas with zip and feelings id
    const zip=document.querySelector('#zip').value;
    const feelings=document.querySelector('#feelings').value;
    //call the load by zip function to fetch the data from the api
    loadbyZip(zip)
    //.then is used as loadbyZip is an async function
            .then(function(data){
                //data is sent to the POST route
                postData('/weather',{date:d, temp:data.main.temp, feelings:feelings});
                //this function is used to display the data and update the ui
                displayData();
                    });
    });
    
    
    //this is the loadbyZip function which fetches data from the api according the zip code entered
    const loadbyZip=async function(code){
      //await fetch is used as the function is async the link then the dynamic zip code then the app id are used to fetch the data and units=metric to get the temperature by celsius degrees
      const response=await fetch(baseURL+code+apiKey+"&units=metric");
      //this is used to get the response in the form of a json object
      const data=await response.json();
      //a simple condition to check if the city was found or not as a way to validate the zipcode
      if(data.message!=="city not found"){
      try{
          //this is used to return the data from the function
          //console.log(data);
          return data;
      }
      catch(e){
          //logs the error to the console to handle the error gracefully
          console.log("error"+e);
      }
    }
    else{
          console.log("Error: the city was not found");
          alert("Please enter a valid zip code");
    }
};
    //this is the function that sends the data obtained from the fetch to the POST route
    const postData=async function(url='', data={}){
        //console.log(data);
        //this is used to send the data to a certain url (/weather) using method post and same-origin credentials and the application is of type json
        const response= await fetch(url,{
            method: 'POST',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            //used to convert the JSON body object to a string
            body: JSON.stringify(data)
        });
        try{
            //this is used to get the data sent to the post route
            const newData=await response.json();
            //console.log(newData);
            return newData;
        }
        catch(e){
            //used to handle the error gracefully
            console.log("error"+e);
        }
    };
    //this is the function used to update the elements of the DOM in the html 
    const displayData=async function(){
        const req=await fetch('/all');
        try{
            const allData=await req.json();
            //console.log(allData);
            document.querySelector('#date').innerHTML=allData.date;
            document.querySelector('#temp').innerHTML=allData.temp;
            document.querySelector('#content').innerHTML=allData.feelings;
        }
        catch(e){
            console.log("error"+e);
        }
    };
