 
@font-face {
    font-family: hand;
    src: url(./Bright\ Chalk.ttf);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: hand;
    font-size: 62.5%;
}

#crsr{
    z-index: 9999;
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(255, 0, 0, 0.775);
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.1s;
    
    
}
body,html{
    width: 100%;
    height:100%
}
body{
    /* cursor:none; */
    overflow-x: hidden;
}

.box img{
    height: 60px;
    width: 60px;
}
#main{
    -webkit-user-select: none;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(45deg,rgb(18, 18, 18),rgb(97, 93, 93));
    padding: 3vw 2vw;
    gap: 7rem;
    align-content: space-between;
    overflow: hidden;
}
#loader{
    overflow:hidden;
    z-index: 999;
    height: 100vh;
    width: 100%;
    position: absolute;
    background: linear-gradient(45deg,rgb(18, 18, 18),rgb(97, 93, 93));
}
#loader h1{
    font-size: 10vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-wrap: nowrap;
    font-family: cursive;
}
#box-add{
   
    height: 320px;
    width: 300px;
    font-size: 3.5rem;
}
#note-text{
    position: absolute;
    z-index: 99;
    display: none;
}
form{
    height: 320px;
    width: 300px;
    display: flex;
    flex-direction: column;
    /* z-index: -1; */
    position: absolute;
    background-color: rgb(128, 128, 128);
}
form textarea{
    color: black;
    outline: none;
    height: 85%;
    width: 100%;
    padding: 1em 2em;
    font-size: 2rem;
    resize: none;
    background-color: rgb(128, 128, 128);

}
::placeholder { 
    color: black;
  }
  
form input{
    
    font-size: 1.6rem;
    width: 100%;
    height:15%;
    margin: 0 auto;
    border: none;
    background-color: rgb(128, 128, 128);
    transition: background-color all ease-in-out 0.3s;
}
form input:hover{
    background-color:rgba(169, 169, 169, 0.496) ;
    transition: background-color ease-in-out 0.3s;
}
#bx-add{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background-color: rgba(128, 128, 128, 0.896);
}
#bx-add::before{
    content: "Click To Add Note";
    position: absolute;
    top: 5%;
}
#bx-add::after{
    content: "";
    position: absolute;
    bottom: 0;
}
.box-template{
    height: 320px;
    width: 300px;
    position: absolute;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.315);
}
#bx-t1{
    z-index: 4;
    background-color: rgb(128, 255, 0);
    transform: rotate(-4deg) translateX(10px);
}
#bx-t2{
    z-index: 2;
    background-color:rgba(135, 206, 250);
    transform: rotate(4deg) translateY(-20px);
}
#bx-t3{
    z-index: 1;
    background-color:rgba(255, 192, 203);
    transform: rotatex(6deg) translateX(-10px)
}
#bx-t4{
    z-index:3;
    background-color:#AC4DAC;
    transform: rotatex(9deg) translateY(-26px)
}


.box{
    height: 320px;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 1em 3em;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.141);
    position: relative;
overflow: hidden;
}
.box::after{
    height: 25px;
    content:'Double Click To Remove Note';
    position: absolute;
    bottom: 0;
    font-size: 1.5rem;
    opacity: 0.6;
    margin:0 auto;
    left: 50%;
    transform: translateX(-50%);
    text-wrap:nowrap;
  
}
.box p{
    font-size: 2.2rem;
    padding:0 0.5em;
}

/* #note-text{
    transition:all ease 1s;
}
.box-template{
    transition:all ease 1s;
} */


@media (max-width:780px) {
    .box img{
        height: 50px;
        width: 50px;
    }
    #main{
       gap: 6.5rem;
    }
    #loader h1{
        font-size: 7vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-wrap: nowrap;
        font-family: cursive;
    }
    #box-add{
   
        height: 300px;
        width: 250px;
        font-size: 2rem;
    }
    form{
        height: 300px;
        width: 250px;
    }
    .box-template{
        height: 300px;
        width: 250px;
        position: absolute;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.315);
    }
    .box{
        height: 300px;
        width: 250px;
}
.box p{
    font-size: 2rem;
    padding:0 0.5em;
}
}
@media(max-width:480px){
    .box img{
        height: 40px;
        width: 40px;
    }
    #main{
         display: flex;
         flex-direction: column;
         align-items: center;
         padding-left: 20%;
    }
    #loader h1{
        font-size: 7vw;
        font-family: cursive;
    }
    #box-add{
        width: 100%;
        margin: 0 auto;
        height: 300px;
        width: 250px;
        font-size: 2.5rem;
    }
    form{
        height: 300px;
        width: 250px;
    }
    .box-template{
        height: 300px;
        width: 250px;
        position: absolute;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.315);
    }
    .box{
        height: 300px;
        width: 250px;
}
.box p{
    font-size: 2.3rem;
    padding:0 0.5em;
}
}
