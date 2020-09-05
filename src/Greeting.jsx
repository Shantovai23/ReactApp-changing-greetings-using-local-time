import React from 'react'

var currentDate=new Date().getHours()
var greeting=''
var cssStyle={}

if(currentDate>=6 && currentDate<12){
  greeting='Good Morning'
  cssStyle.color='darkblue'
}
else if(currentDate>=12 && currentDate<18){
  greeting='Good Afternoon'
  cssStyle.color='darkred'
}
else if(currentDate>18 && currentDate<20){
  greeting='Good Evening'
  cssStyle.color='darkgreen'
}
else{
  greeting='Good Night'
  cssStyle.color='indigo'
}

function Greeting(){
    return (<React.Fragment>
        <div> <h1>Hello Sir! <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </React.Fragment>)
}
export default Greeting