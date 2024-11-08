



let btnCreate =document.getElementById('create'); 





 btnCreate.addEventListener('click',AddNewRequest )

 

function AddNewRequest()

{
 
  let name1 = document.getElementById('title').value;
  let age1 = document.getElementById('price').value;
  let grades1 =  document.getElementById('taxes').value;
   let request = new XMLHttpRequest();

    request.open("Post","http://localhost:5082/api/Students");
   request.responseType ='json'
    request.setRequestHeader("Accept","Application/json");
    request.setRequestHeader("Content-Type","application/json")
    
    

    let bodyPar = {
      
       "id": 0,
      "name":name1,
      "age": age1,
     "grades": grades1
      
    };

    

    request.send(JSON.stringify( bodyPar));


    request.onload= function(){
      let response1 = request.response;
       response1.responseType ="json"

       if(request.status >= 200 && request.status <300)
       {
        //console.log(response1)
        console.log("Status Code is " + request.status)
        location.reload();

       }else{
        alert(" there are Error in add new request");
       }

     

    }

 
}






function  ReadRequest(){
 
  

  let request= new XMLHttpRequest()
  request.open("Get","http://localhost:5082/api/Students/All")
  request.responseType ="json"
  request.send();
  
  request.onload = function()
  {
    let products = request.response
      
     if (request.status >= 200 && request.status < 300)
     {
      let table = '';
      var St = start_index - 1;
      var en = end_index;

     
      {

        for (const product of products) {
    
          array = products;
          array_lenght = array.lenght;
           max_index = array.lenght / table_size;
         table = `
             <td>${product.id}</td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.name}</td>
            <td>${product.age}</td>
            <td>${product.age}</td>
            <td>${product.grades}</td>
            <td>${product.grades}</td>
           <td> <button id="update" > update</button></td>
           <td> <button id="delete" onclick= DeleteRequest(${product.id})> delete</button></td>
         `

         
        
         document.getElementById('tbody').innerHTML += table;
        }
        
        
      }
       
      
      
  
       
     // console.log(  request.responseText.length )
    
     }
     else{
  
      window.alert(" There is Error in  Server");
     }
  
    
  
  }
  }
  

//"id": 0,
//"name":${ name1.value},
///"age": ${ age1.value},
//"grades": ${grades1.value}
function UpdateRequest(id){

  request = new XMLHttpRequest();
  request.open("Put","http://localhost:5082/api/Students/"+id)
  request.responseType = "json"
  request.setRequestHeader("Accept","Application/json");
    request.setRequestHeader("Content-Type","application/json")
    
 
    let updaterequest = request.response;

    let name1 = document.getElementById('title').value.innerHTML = updaterequest.name;
    let age1 = document.getElementById('price').value.innerHTML = updaterequest.age;
    let grades1 =  document.getElementById('taxes').value.innerHTML = updaterequest.grades;
     

   let bodyPar = `{
        "id": ${id},
        "name": "Update Name",
        "age": "88",
        "grades": "80"
    }` 

request.send(bodyPar);
 

 request.onload = function(){

  //let updaterequest = request.response;
    
     if(request.status >= 200 && request.status < 300)
     {


        console.log(updaterequest);
        console.log(" the status code is " + request.status)
        alert("the Request has been Updated Successfuly ");
      

     } else
     {
      alert(" There is Errors")
     }


 }

}


function DeleteRequest(id) {
  request = new XMLHttpRequest();
  request.open("Delete","http://localhost:5082/api/Students/"+id)
  request.responseType = "json"
  request.setRequestHeader("Accept","Application/json");
    request.setRequestHeader("Content-Type","application/json")


  request.send();
 

 request.onload = function(){

  let Respons2 = request.response;
    
     if(request.status >= 200 && request.status < 300)
     {


        //console.log(Respons2);
        console.log(" the status code is " + request.status)
        alert("the Request has been deleted Successfuly ");
        location.reload();
        
      

     } else
     {
      alert(" There is Errors")
     }

}
}



function GetRequestByFilerting(id )
{
  
let request= new XMLHttpRequest()
request.open("Get","http://localhost:5082/api/Students/"+id)
request.responseType ="json"
request.send();



request.onload = function()
{
  let pro = request.response
    
   if (request.status >= 200 && request.status < 300)
   {
     

 
        document.getElementById('title').value = pro.name;
       document.getElementById('price').value = pro.age;
        document.getElementById('taxes').value = pro.grades;

      console.log( pro.name , pro.age , pro.grades)

   }
   else{

    window.alert(" There is Error in  Server");
   }

}

}


function getProductsby()
{
  axios.get("http://localhost:5082/api/Students/All")
  .then((response) => {
    console.log(response)
  })
}




//AddNewRequest();
ReadRequest();
getProductsby();
//console.log(name1,age1,grades1)
//GetRequestByFilerting(9);
//UpdateRequest(9)

//DeleteRequest(1009)


var array = [];
var array_lenght=60;
var table_size =10;
var start_index = 1;
var end_index = 10;
var current_index = 5;
var max_index = 6;


function displayIndexButtons(){

  $(".index_buttons button").remove();
  $(".index_buttons").append('<button>Pervios</button>')
  for(var i =1 ;  i < max_index ; i++){

  $(".index_buttons").append('<button index="'+i+'">'+i+'</button>')


  }

  $(".index_buttons").append('<button>Next</button>')

  highlightIndexbutton()

}


function highlightIndexbutton()
{
  start_index = ((current_index -1 ) * table_size) +1;
  end_index = (start_index + table_size)-1

  if(end_index > array_lenght){
    end_index = array_lenght
  }

  $(".footer span").text('Showing '+start_index+' to '+end_index+' of '+array_lenght+'')
  $(".index_buttons button").removeClass('active');

  $(".index_buttons button[index='"+current_index+"']").addClass('active');

}

 
displayIndexButtons();
 //console.log(Container); 






