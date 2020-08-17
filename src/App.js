import React, { Component } from 'react';
import './App.css';
let marked = require('marked');



class App extends Component{


  state={
    markdown:'<h1>h1 heading</h1> <h2>h2 heading</h2> <a href="">link</a> <span>Hello World</span> <code>&lt;</code> <li>list item</li> <blockquote>quote</blockquote> <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.png">  <b>bold text</b>   ' 
  }

  setMarkdown = function(markdown){
      this.setState({markdown});
  }

  render(){

    let {markdown}=this.state;

    return(
         <div id='conatiner'>
         
            {/* <h2>Markdown input</h2> */}
           <textarea id='editor' placeholder='Enter the mark down here' value={markdown} onChange={(event)=> this.setMarkdown(event.target.value)} >
            <h1>h1 heading</h1> 
            <h2>h2 heading</h2>
           </textarea>
        

           <div id='output' >
             <h2>Markdown Output</h2>
             <div id='preview' dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
           </div>
       



         </div>
    )
  }


}












export default App;
