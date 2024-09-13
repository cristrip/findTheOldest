// information button
function info_but(){
    alert(`Informations:\nYou can enter the name the birth date and the death date.
         \nName and birth day are mandatory\nBy clicking Check you can shearch for a persons age.
        \nBy clicking Find you will see the max age`);
   }
   
    
const list1=[]
var person = {
    name:"", 
    bdate:"",
    ddate:"",
    dage:""
  };
  
    document.getElementById("Add").addEventListener("click", () => {
    person.name = document.getElementById("name").value;
    person.bdate = document.getElementById("bdate").value;
    person.ddate = document.getElementById("ddate").value; 
    if (person.name=="Name" || person.bdate=="Birth-date" || person.name=="" || person.bdate==""){
        alert('You must fill the manadatory fields !!!!!!!\nYour name !!!\nYour Birth date !!!\nThen try again !!!')  
    }
    
    else if (person.name!="" && person.bdate!="" && person.ddate==""){
        
        

        function get_age(born, now) {
          var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
          if (now >= birthday) 
            return now.getFullYear() - born.getFullYear();
          else
            return now.getFullYear() - born.getFullYear() - 1;
        }
    
        var input = document.getElementById("bdate").value;
              
        var now = new Date();
        var birthdate = input.split("-");
        var born = new Date(birthdate[0], birthdate[1]-1, birthdate[2]);
        age=get_age(born,now);
        person.dage=age;
        list1.push({name:person.name, bdate:person.bdate,dage:person.dage});
        
        var list = document.getElementById("list");
        // clear the list from the previus value
        document.getElementById("list").innerHTML = "";
        // clear the users values
        document.getElementById("name").value = "";
        document.getElementById("bdate").value = "";
        document.getElementById("ddate").value = "";
        
        list1.forEach(person => list.innerHTML += "<br>" + Object.values(person).join("-//-"));
        alert('The person is alive!!!!!!!')
      } 
   
    else if (person.name!="" && person.bdate!="" && person.ddate!="" ){
      function get_age(born, death) {
      
        var birthday = new Date(death.getFullYear(), born.getMonth(), born.getDate());
        if (death >= birthday) 
          return death.getFullYear() - born.getFullYear();
        else
          return death.getFullYear() - born.getFullYear() - 1;
      }
      var input1 = document.getElementById("ddate").value;
      var dateEntered = new Date(input1);
      var input = document.getElementById("bdate").value;
      var dateEntered = new Date(input);
      var death = new Date(input1);
      var birthdate = input.split("-");
      var deathdate=input1.split("-");
      var born = new Date(birthdate[0], birthdate[1]-1, birthdate[2]);
      var death = new Date(deathdate[0], deathdate[1]-1, deathdate[2]);
      age=get_age(born,death);
      person.dage=age;
    list1.push({name:person.name, bdate:person.bdate, ddate:person.ddate,dage:person.dage});
    
    var list = document.getElementById("list");
    // clear the list from the previus value
    document.getElementById("list").innerHTML = "";
    // clear the users values
    document.getElementById("name").value = "";
    document.getElementById("bdate").value = "";
    document.getElementById("ddate").value = "";
    
    list1.forEach(person => list.innerHTML += "<br>" + Object.values(person).join("-//-"));
    alert('The person is not alive!!!!!!!')
    } 
  
  });

  document.getElementById("check").addEventListener("click", () => {
    
    var user1=prompt("Enter the name you want to search?");
   
    var item = list1.find(item => item.name === user1);
    if(item)
      alert('The age of ' + item.name + ' ' + 'is'+ ' ' + item.dage)  
    else
      alert('The name'+ ' ' + user1 + ' ' + 'not exist')   
    
});

document.getElementById("find").addEventListener("click", () => {
 
    function fun(list1) {
        let maxV = Number.MIN_VALUE;
        for (let i = 0; i < list1.length; i++) {
            if (list1[i].dage > maxV) {
                maxV = list1[i].dage;
            }
        }
        return maxV;
    }
    
    let maxV = fun(list1);
    // alert(maxV);
    alert('The the max age is'+ ' ' + maxV + ' ' + '.')
  });
