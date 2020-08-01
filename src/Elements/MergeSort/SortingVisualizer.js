import React, { Component } from 'react'
import './SortingVisualizer.css'
import {AnimatedMergeSort} from '../../Algorithm/mergeSort'
import {quickSort} from '../../Algorithm/quickSort'

export default class SortingVisualizer extends Component {
  constructor(props){
      super(props)

      this.state = {
          array:[]
      }
  }

  componentDidMount(){
      this.resetArray();
  }


  randomIntFromInterval(min, max){
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  resetArray=() =>{
    
      const array = [];

      for(let i=0;i<300;i++){
          array.push(this.randomIntFromInterval(5,600));
      }

      this.setState({array})
  }

quickSort(){
  const animations = quickSort(this.state.array)

  const bars =  document.getElementsByClassName('value-bar')
  
  for (let index = 0; index < animations.length; index++) {
  
    const colorChange = index % 3 !==2;
    if(colorChange){
      const [first,second] = animations[index]
      const barFirst = bars[first].style
      const barSecond = bars[second].style
      let color='';
      if(index%3 ===0){
        color = 'red'
      }
      else{
        color='green'
      }

      setTimeout(()=>{
        barFirst.background = color
        barSecond.background = color
      },index*1)
    }
    else{
      setTimeout(()=>{
        const [ first,height] = animations[index]
        const barFirst = bars[first].style
             barFirst.height = `${height}px`;
      },index*1)
    }
  }
}

  mergeSort(){
    
  const animations = AnimatedMergeSort(this.state.array)
  const bars =  document.getElementsByClassName('value-bar')
  
  for (let index = 0; index < animations.length; index++) {
  
    const colorChange = index % 3 !==2;
    if(colorChange){
      const [first,second] = animations[index]
      const barFirst = bars[first].style
      const barSecond = bars[second].style
      let color='';
      if(index%3 ===0){
        color = 'red'
      }
      else{
        color='green'
      }

      setTimeout(()=>{
        barFirst.background = color
        barSecond.background = color
      },index*1)
    }
    else{
      setTimeout(()=>{
        const [ first,height] = animations[index]
        const barFirst = bars[first].style
             barFirst.height = `${height}px`;
      },index*1)
    }
  }
  }


  
  
  render() {

        const {array} = this.state
        console.log("---",array)
        return (

            
            <div className="main-container">

            <div className="buttons">
            <button onClick={()=> this.resetArray() } >Ramdomize</button>
            <button onClick={()=> this.quickSort()}  >Quick sort </button>
            <button onClick={()=> this.mergeSort()}  >Merge Sort </button>
      
            </div>



              {
                  array.map((value,idx)=>(
                    <div
                    className="value-bar"
                    key={idx}
                    style={{
                
                      height: `${value}px`,
                    }}></div>
                  ))
              }
             
            
            </div>
          
        )
    }
}
