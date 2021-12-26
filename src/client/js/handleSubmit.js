

function handleSubmit(event) {
    event.preventDefault()

    // check if url is valid or not
    let formText = document.getElementById('UrlInfo').value
    console.log("The url typed is",formText)
    const urlCheckerResult = MyClient.checkValidURL(formText)
    console.log("URL Checker Result is:",urlCheckerResult)

    console.log(" API_KEY is:",process.env.API_KEY)

    let key=process.env.API_KEY ?process.env.API_KEY:'068c4a24243764dec15e4e17499a2b10';

    console.log("API key is",key)

const inputUserURL =  document.getElementById('UrlInfo').value
const isRightURL = MyClient.checkValidURL(inputUserURL)
const meaningCloudAPIUrl = 'https://api.meaningcloud.com/deepcategorization-1.0'
const Model_API='IAB_2.0'


 const formdata = new FormData();
 formdata.append("key", key);
 formdata.append("url", inputUserURL);
 formdata.append("model", Model_API);  // like IAB_2.0_en
 
 const requestOptions = {
   method: 'POST',
   body: formdata,
   redirect: 'follow'
 };

if (isRightURL===false)
{
    alert('Invalid URL!');
}
else
{
   
    let jsonData = getArticleData(meaningCloudAPIUrl,requestOptions);
      
    jsonData.then(function(data){  
         
      console.log("jsonData back: ",data.category_list);
      postData('http://localhost:8081/addData',{
        model: data.category_list
                 
    });
      })
    .then(()=>addToHtml())
   
    }
  }


const getArticleData = async (apiUrl,requestOptions)=>{
  
      const response = await fetch(apiUrl, requestOptions)
      const json = await response.json();
      console.log("json:", json);
      return json;
    
    }

//this method used to post received article deepcategoraization api to the server endpoint

  const postData = async(url, data={})=>{
    console.log("the url is:" , url)
    try {
  const response = await fetch(url, {
    "method": 'POST',
    "credentials": 'same-origin',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(data) 
  });
  
    return;
  }catch(error) {
    console.log("Post error", error);
  }

}

const addToHtml = async ()=>{
  const myRequest = await fetch('http://localhost:8081/all')
  try{
    
    const data = await myRequest.json();
   
   const category_list=data.model;

    console.log("data of categories: ", data.model);
// loop all the categories of the data result processing

    for (var i = 0; i < category_list.length; i++) {

      var index=i+1;
      var ul = document.createElement("ul");
      ul.innerHTML="Result "+ index + "<br />";
      //ul.style.fontWeight = 'bold';
      document.getElementById('mainOutput').appendChild(ul);

      var li1 = document.createElement("li");
      li1.innerHTML="Abs_Relevance: "+category_list[i].abs_relevance
      ul.appendChild(li1);

      var li2 = document.createElement("li");
      li2.innerHTML="Code: "+category_list[i].code;
      ul.appendChild(li2);

      var li3 = document.createElement("li");
      li3.innerHTML="Label: "+category_list[i].label;
      ul.appendChild(li3);
     
      var li4 = document.createElement("li");
      li4.innerHTML="Relevance: "+category_list[i].relevance;
      ul.appendChild(li4);
    }
	  

  }
  catch(err){
    console.log('Error in add html results ' , err);
  }
}
 
export { handleSubmit }

