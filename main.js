function loadJSON(file,callback){
    
    var rawData=new XMLHttpRequest();
    rawData.overrideMimeType('application/json');
    rawData.open("GET",file,true);
    rawData.onreadystatechange= function (){
        if(rawData.readyState === 4 && rawData.status== "200"){
            callback(this.responseText)
        }
    }
    rawData.send(null)
    
}


// function calling

loadJSON("data/data.json",function(text){
    let data=JSON.parse(text)
    console.log(data)
    profile(data.basics)
})

var parent=document.querySelector(".parent");
var left=document.querySelector('.left');
var right=document.querySelector('.right')


function profile(profile_info){
       left.style.width="30%";   
       var uname=document.createElement('h1');
       uname.textContent=profile_info.name;
       left.appendChild(uname)
        
       var image=document.createElement('img');
       image.src="images/pic.jpg";
       left.appendChild(image)

       parent.appendChild(left)
}



