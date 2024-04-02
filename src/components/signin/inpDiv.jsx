import css from "./inpDiv.module.css";

function InpDiv({tab,name,type}){
    return <>
    <div className={`${css.inpDiv}`}>
       <label className={`${css.inpLabel}`} htmlFor={name}>{`${name=="Username" && tab ?"Username/Email:":name}`}</label>
        <input required className={`${css.inp}`} type={type} id={name} name={name}/>
      </div>
    </>
}

export default InpDiv;