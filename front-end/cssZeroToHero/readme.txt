CSS Tutorial - Zero to Hero (Complete Course)
HTML and CSS Tutorials
https://youtu.be/1Rs2ND1ryYc
Channel:freecodecamp.org

new words

id="contact-us" :some-some is standerd form of id

units:
    pixels:px
    percentage;%

text-align: justify;  /*for classic align like research papers*/

background: linear-gradient(to right, rgb(0, 255, 0), rgba(0, 255, 0, 0)); 

background: radial-gradient(circle,rgb(0,255,127)10%,rgb(250, 121, 0)20%,rgb(0,250,154)60%);

float: right;

*->  line-height: 50px; -> It's commonly used to set the distance between lines of text.

-------------------flex box-----------------

display:flex
flex-direction:column;
flex-direction: column-reverse; 
flex-direction: row-reverse;

    justify-content: space-around;
        justify-content: center;

we should not use flex wrap

flex-grow: 1; ->how much does it need to be grow compare to other elements in a row
flex-shrink: 3;->how much does it need to shrink while responsive compare to others
flex-basis: 100px; 

above three properties can be write as flex : grow shrink basis ->flex:1 1 100px

align-self:center;
align-self:flex-start;
align-self:flex-end;

-------------------- grid --------------------------

 display: grid;
    /* grid-template-columns: 10px 50px 10px;
    grid-template-rows: 50px 250px; */
    /* grid-template-columns: auto 100px auto;
    grid-template-rows: auto auto; */
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;

--------------- animation -------------
transition: property duration style delay;

    /* transform: translate(100px,0px); */
    /* transform: rotate(360deg); */
    /* transform: skewX(45deg); */
    transform: matrix(1,0.45,0.45,1,100,50);

#about-me{
    animation-name:red-to-black;
    animation-duration:10s; ;
}

    ⌄---------------- keyframes ----------------------
    
    @keyframes red-to-black{
        0%{
            /* background:red ; */
            /* transform: translate(0px,0px); */
            color: red;
            rotate: 10deg;
        }
        50%{
            /* background:yellow ;
            transform: translate(10px,10px); */
            color: yellow;
        }
        75%{
            color: green;
        }
        100%{
            /* background:black ;
            transform: translate(20px,20px); */
            color: rgb(255, 215, 0);
        }
    }



    