var lebroninfo = ['Professional athlete LeBron Raymone James was born on December 30, 1984, in Akron, Ohio. At an early age, he showed a natural talent for basketball. James was recruited by St. Vincent-St. Mary High School to join their basketball team in 1999. As a freshman, James averaged 18 points per game.',"James played high school basketball at St. Vincent–St. Mary High School in his hometown of Akron, Ohio, where he was highly promoted in the national media as a future NBA superstar. After graduating, he was selected by his home team, the Cleveland Cavaliers, as the first overall pick of the 2003 NBA draft.Forbes says James will earn $86 million in 2017, including a $31.2 million salary and a whopping $55 million in product endorsements. He has a net worth of $400 million, according to Celebrity Net Worth.",'Born in Ohio in 1984, LeBron James garnered national attention as the top high school basketball player in the country. With his unique combination of size, athleticism and court vision, he became one of the premier players in the NBA for the Cleveland Cavaliers. After leading the Miami Heat to titles in 2012 and 2013, he returned to Cleveland and helped the franchise claim its first championship in 2016.']
var menuposition = 'closed';
var number = -1;
var imgEl = document.getElementById("lebronjamesphoto");
var degree = 360
var basketballfact = "Basketball is a sport played by two teams of five players on a rectangular court. The objective is to shoot a ball through a hoop 10 feet high mounted to a backboard at each end. It was invented in 1891 by James Naismith, a teacher at a YMCA in Springfield, Massachusetts, who was looking for an indoor recreational activity."
var userlist = []; 
var sum = 0;
function controlopenclose(){
    document.getElementById("openclose").addEventListener("click",function(){
    if (menuposition == 'closed'){   
        document.getElementById("control").style.top = "100px";
        document.getElementById("control").style.opacity = "1";
        document.getElementById("control").style.zIndex = "0";
        menuposition = 'open';
    } else if (menuposition == 'open'){
        document.getElementById("control").style.top = "-500px";
        document.getElementById("control").style.opacity = "0";
        document.getElementById("control").style.zIndex = "-1";
        menuposition = 'closed';
    }
});
}


//document.getElementById("logo").addEventListener("click",function(){
    //document.getElementById("hiddenhoop").style.opacity = "1";
//})
function changepage(){
    document.getElementById("jordanlogo").addEventListener("click",function(){
        document.getElementById("background").style.display = "none";
        document.getElementById("lebronpage").style.display = "none";
        document.getElementById("kobepage").style.display = "none";
        document.getElementById("jordanpage").style.display = "block";
    })
    document.getElementById("lebronlogo").addEventListener("click",function(){
        document.getElementById("background").style.display = "none";
        document.getElementById("jordanpage").style.display = "none";
        document.getElementById("kobepage").style.display = "none";
        document.getElementById("lebronpage").style.display = "block";
    })
    document.getElementById("kobelogo").addEventListener("click",function(){
        document.getElementById("background").style.display = "none";
        document.getElementById("lebronpage").style.display = "none";
        document.getElementById("jordanpage").style.display = "none";
        document.getElementById("kobepage").style.display = "block";
    })
    document.getElementById("shoes").addEventListener("click",function(){
        document.getElementById("background").style.display = "none";
        document.getElementById("lebronpage").style.display = "none";
        document.getElementById("jordanpage").style.display = "none";
        document.getElementById("kobepage").style.display = "none";
        document.getElementById("shoeinputdiv").style.display = "block";
    })
}
function changeLebron(arrayNumber){
    if (arrayNumber >= 0 && arrayNumber < lebroninfo.length){
            document.getElementById("textbox").innerHTML = lebroninfo[arrayNumber];
    }

    
}
function changetext(){
    document.body.addEventListener("keyup",function(ev){
        if (ev.keyCode==39){
            number = number+1;
            if (number == lebroninfo.length)
                {
                    number = 0
                }
            changeLebron(number);
        }
        if (ev.keyCode==37 && number>0){
             number = number-1;
           if (number == -1)
                {
                    number = 0
                }
            changeLebron(number);
        }
    })
}
function lebronchaton(){
    document.getElementById("lebronjamesphoto").addEventListener("mouseover",function(){
        document.getElementById("lebronchat").style.height = "18%";
        document.getElementById("lebronchat").style.width = "20%";
        document.getElementById("lebronchat").style.opacity = "1";
    })
}
function lebronchatoff(){
    document.getElementById("lebronjamesphoto").addEventListener("mouseout",function(){
        document.getElementById("lebronchat").style.height = "0%";
        document.getElementById("lebronchat").style.width = "0%";
        document.getElementById("lebronchat").style.opacity = "0";
        
    })
}
function kobefacthover(){
    document.getElementById("kobegif1").addEventListener("mouseover",function(){
        document.getElementById("kobefact1").style.zIndex = "1";
        document.getElementById("kobefact1").style.opacity = "0.8";
    })
    document.getElementById("kobegif1").addEventListener("mouseout",function(){
        document.getElementById("kobefact1").style.zIndex = "0";
        document.getElementById("kobefact1").style.opacity = "0";
    })
    
}
function kobefactschange(){
    document.getElementById("kobegif1").addEventListener("click",function(){
        document.getElementById("reset").style.display = "block";
        document.getElementById("kobefactsbox").style.display = "none";
        document.getElementById("kobefactsbox1").style.top = "3%";
    })
    document.getElementById("kobegif2").addEventListener("click",function(){
        document.getElementById("reset").style.display = "block";
        document.getElementById("kobefactsbox").style.display = "none";
        document.getElementById("kobefactsbox2").style.height = "90%";
        document.getElementById("kobefactsbox2").style.width = "50%";
        document.getElementById("kobefactsbox2").style.opacity = "1";
        document.getElementById("kobefactsbox2").style.transform = "rotate(" + degree + "deg)";
        degree = degree + 360
    })
    document.getElementById("kobegif3").addEventListener("click",function(){
        document.getElementById("reset").style.display = "block";
        document.getElementById("kobefactsbox").style.display = "none";
        document.getElementById("kobefactsbox3").style.left = "40%";
    })
    document.getElementById("kobegif4").addEventListener("click",function(){
        document.getElementById("reset").style.display = "block";
        document.getElementById("kobefactsbox").style.display = "none";
        document.getElementById("kobefactsbox4").style.top = "3%";
    })
}
function kobereset(){
    document.getElementById("reset").addEventListener("click",function(){
        document.getElementById("kobefactsbox1").style.top = "-200%";
        document.getElementById("kobefactsbox2").style.height = "1px";
        document.getElementById("kobefactsbox2").style.width ="1px";
        document.getElementById("kobefactsbox2").style.opacity ="0";
        document.getElementById("kobefactsbox2").style.left ="0%";
        document.getElementById("kobefactsbox3").style.left = "150%";
        document.getElementById("kobefactsbox4").style.top = "150%";
        document.getElementById("kobefactsbox").style.display = "block";
        document.getElementById("kobefactsbox").style.zindex = "0";

    })
}
function jordanshrink(){
    document.getElementById("spacejam").addEventListener("click",function(){
        document.getElementById("jordanphoto").style.top = "20%";
        document.getElementById("jordanphoto").style.left = "80%";
        document.getElementById("jordanphoto").style.height = "1px";
        document.getElementById("jordanphoto").style.transform = "rotate(500deg)";
        
    })
}
function tunesquadout(){
    document.getElementById("spacejam").addEventListener("click",function(){
        document.getElementById("bugsbunny").style.width = "auto";
        document.getElementById("bugsbunny").style.height = "40%";
        document.getElementById("bugsbunny").style.right = "80%";
        document.getElementById("bugsbunny").style.top = "60%";
        document.getElementById("bugsbunny").style.transform = "rotate(360deg)";
        document.getElementById("lola").style.width = "auto";
        document.getElementById("lola").style.height = "45%";
        document.getElementById("lola").style.right = "62%";
        document.getElementById("lola").style.top = "57%";
        document.getElementById("lola").style.transform = "rotate(-360deg)";
        document.getElementById("tasmanian").style.width = "auto";
        document.getElementById("tasmanian").style.height = "40%";
        document.getElementById("tasmanian").style.right = "40%";
        document.getElementById("tasmanian").style.top = "59.5%";
        document.getElementById("tasmanian").style.transform = "rotate(-360deg)";
    })
}
function tunesquadlogo(){
    document.getElementById("bugsbunny").addEventListener("click",function(){
        document.getElementById("spacejam").style.transform = "rotate(-360deg)";
        document.getElementById("spacejam").style.height = "0%";
        document.getElementById("tunesquad").style.width = "auto";
        document.getElementById("tunesquad").style.height = "50%";
        document.getElementById("tunesquad").style.transform = "rotate(-360deg)";
        document.getElementById("tunesquadfact").style.bottom = "0";
        document.getElementById("bugsbunny").style.top = "150%";
    })
}
function tasmanianint(){
    document.getElementById("tasmanian").addEventListener("click",function(){
        document.getElementById("tasmanian").src = "tazspin.png"
        document.getElementById("tasmanian").style.top = "-50%";
        document.getElementById("tasmanian").style.right = "30%";
        document.getElementById("tasmanianfact").style.bottom = "0";
        document.getElementById("tasmanianfact").style.transform = "rotate(-360deg)";
        document.getElementById("tasmanianfact").style.right = "35%";
    })
}
function lolaint(){
    document.getElementById("lola").addEventListener("click",function(){
        document.getElementById("lola").src = "jordandunk.png";
        document.getElementById("lola").style.top = "10%";
        document.getElementById("lola").style.right = "80%";
        document.getElementById("jordantext").style.display = "none";
        document.getElementById("basketballhoop").style.height = "50%"; 
        document.getElementById("basketballhoop").style.width =  "10%"; 
        document.getElementById("jordandunk").style.height = "30%"
        document.getElementById("jordandunk").style.width = "30%"
        document.getElementById("jordandunk").style.opacity = "1"
    })
}
function addingshoes(){
    var ndiv = document.createElement("div");
    var nimg = document.createElement("img");
    var ntit = document.createElement('div');
    var ageInput = document.getElementById("age");
    var age = parseInt(ageInput.value);
    var playername = document.getElementById("playername").value;
    ndiv.className='shoediv';
    nimg.className="shoeimages";
    ndiv.appendChild(nimg);
    ndiv.appendChild(ntit);
    ntit.style.color = "white";
    ntit.style.fontWeight = "bold";

    if ((age <= 10 && age > 0 ) && (playername == "Lebron")){
       nimg.src = "shoes/lebron1-10.jpg";
        ntit.innerHTML = "Lebron 5";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((11<= age && age <= 18)  && (playername == "Lebron")){
        nimg.src = "shoes/lebron11-18.jpg";
        ntit.innerHTML = "Lebron 8";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((19<= age && age <= 30) && (playername == "Lebron")){
        nimg.src = "shoes/lebron19-30.jpg";
        ntit.innerHTML = "Lebron 14";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((age >= 31 && age <= 100) && (playername == "Lebron")){
        nimg.src = "shoes/lebron31+.jpg";
        ntit.innerHTML = "Lebron Soldiers 11";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((age <= 10 && age > 0) && (playername == "Jordan")){
        nimg.src = "shoes/jordan1-10.jpg"
        ntit.innerHTML = "Jordan 32";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((11<= age && age <= 18)  && (playername == "Jordan")){
        nimg.src = "shoes/jordan11-18.jpg";
        ntit.innerHTML = "Jordan 11";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((19<= age && age <= 30) && (playername == "Jordan")){
        nimg.src = "shoes/jordan19-30.jpg";
        ntit.innerHTML = "Jordan 31";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((age >= 31 && age <= 100) && (playername == "Jordan")){
        nimg.src = "shoes/jordan31+.jpg";
        ntit.innerHTML = "Jordan 1";
        document.getElementById("shoepopup").appendChild(ndiv);
    } else if ((age <= 10 && age > 0) && (playername == "Kobe")){
        nimg.src = "shoes/kobe1-10.jpg"
        ntit.innerHTML = "Kobe 6";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((11<= age && age <= 18)  && (playername == "Kobe")){
        nimg.src = "shoes/kobe11-18.jpg";
        ntit.innerHTML = "Kobe 9";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((19<= age && age <= 30) && (playername == "Kobe")){
        nimg.src = "shoes/kobe19-30.jpg";
        ntit.innerHTML = "Kobe 11";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else if ((age >= 31 && age <= 100) && (playername == "Kobe")){
        nimg.src = "shoes/kobe31+.jpg";
        ntit.innerHTML = "Kobe 9 High";
        document.getElementById("shoepopup").appendChild(ndiv);
        pushtolist();
    } else {
        alert("Invalid inputs")
    }
    
    console.log(userlist)
        
       
}
document.getElementById("go").addEventListener("click",function(){
    addingshoes();
    document.getElementById("save").style.display = "block";
})
function basketballinteraction(){

    document.getElementById("logo").addEventListener("click",function(){
        document.getElementById("kobepage").style.display = "none";
        document.getElementById("shoeinputdiv").style.display = "none";
        document.getElementById("jordanpage").style.display = "none";
        document.getElementById("lebronpage").style.display = "none";
        document.getElementById("background").style.display = "none";
        document.getElementById("logo").style.transform = "rotate(" + degree + "deg)";
        document.getElementById("logo").style.top = "1000%";
        document.getElementById("hoop").style.opacity = 1;
        document.getElementById("basketballfact").style.opacity = 1;
        document.getElementById("basketballfact").style.height = "30%";
        document.getElementById("basketballfact").style.width = "30%";
        document.getElementById("basketballfact").innerHTML = basketballfact;
       degree += 360
    })
}
function pushtolist(){
    var playername = document.getElementById("playername").value;
        var ageInput = document.getElementById("age");
    var age = parseInt(ageInput.value);
        userlist.push({
        "playername":playername,
        "userage": parseInt(ageInput.value)
    })
    
}
function savelocal(){
    document.getElementById("save").addEventListener("click",function(){
         var arrText = JSON.stringify(userlist)
        localStorage.setItem("items",arrText);
        document.getElementById("average").style.display = "block";
        alert("Input saved locally");
    })
}
document.getElementById("average").addEventListener("click",function(){
    averageage();
    document.getElementById("statistics").style.height = "80px";
    document.getElementById("statistics").style.width = "350px";
    document.getElementById("statistics").style.bottom = "5%";
    document.getElementById("statistics").style.left = "0%";
})
function averageage(){
    for (var i in userlist){
        sum = userlist[i].userage + sum
        average_age = sum/userlist.length
        
        console.log(average_age)
        document.getElementById("avgage").innerHTML = "Average age :" + Math.round(average_age);
    }
}
changetext();
controlopenclose();
changepage();
lebronchaton();
lebronchatoff();
kobefactschange();
kobereset();
jordanshrink();
tunesquadout();
tunesquadlogo();
tasmanianint();
lolaint();
basketballinteraction();
savelocal();