export default function Color(props){
    // let colorName = {props.name}
    function changeColor(val){
        document.body.style.backgroundColor =  val
    }
    return(
        <>
            <li onClick={()=>changeColor(props.name)}>{props.name}</li>
        </>
    )
}