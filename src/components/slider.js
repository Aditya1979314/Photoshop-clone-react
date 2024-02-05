
export default function Slider({min,max,value,handlechange}){
    return(
        <input type="range" className="slider" min={min} max={max} value={value} onChange={handlechange} ></input>
    )
}