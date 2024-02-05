import { useState } from 'react';
import './App.css';
import Sidebaritem from './components/sidebar.js';
import Slider from './components/slider.js'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
const[options,setOptions] = useState(DEFAULT_OPTIONS);
const[selectedItemIndex, setSelectedItem] = useState(0);
const option = options[selectedItemIndex];

function handleonchange({target}){
  setOptions(options.map((option,index)=>{
    if(index !== selectedItemIndex) return option;
    return {...option,value:target.value}
  }))
}

function getImagestyle(){
  const filters = options.map((option)=>{
    return `${option.property}(${option.value}${option.unit})`;
  })

  return { filter : filters.join(' ')};
}

  return (
    <div className="App">
      <div className='container'>
        <div className='grid-1' style={getImagestyle()}></div>
        <div className='sidebar-container'>
          {options.map((option,index)=>{
            return (
              <Sidebaritem key={index} name={option.name} active={index === selectedItemIndex} handleclick={()=>setSelectedItem(index)}/>
            )
          })}
        </div>
        <div className='slider-container'>
          <Slider min={option.range.min} max={option.range.max} value={option.value} handlechange={handleonchange}/>
        </div>
      </div>
    </div>
  );
}

export default App;
