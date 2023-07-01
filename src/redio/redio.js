import React, { useState } from 'react'

function Redioproject() {

    const [redio, setredio] = useState()
    console.log(`====>> redio>>>>>>`,redio)
    const[select,setselect]=useState();
    console.log(`====>> select>>>>>`,select)
    const [First,setfirst] =useState(true);
    console.log(`====>> bbbbbbb`,First)
    const [Second,setSecond]=useState(true);
    console.log(`====>> aaaaaaaa`,Second)



    function hendleredio() {
        setredio(redio)
    }

    function handalechange() {
        setfirst(First)
        setSecond(Second)
   
    }
    return(
        <div>
          <h1>{redio}</h1>
            <input type='radio' name='gender' value='Male' onChange={e=>setredio(e.target.value) }/>Male<br></br>
            <input type='radio' name='gender' value='Female' onChange={e=>setredio(e.target.value) }/>Female<br></br>
            <input type='radio' name='gender' value='Other' onChange={e=>setredio(e.target.value) }/>Other<br></br>
 
 
            <h1>{select}</h1>
            <select value={select} onChange={e=>setselect(e.target.value)}>
               <option>Choose option</option>
                    <option>Apple option </option>
                    <option>Mango option</option>
                    <option>Orange option</option>
            </select>
            <br />
            <br />   
 

            <input type="checkbox" value={First } onChange={()=>handalechange("First")} /> First option 
           <input type="checkbox" value={Second } onChange={()=>handalechange("Second")} /> Second option
              <br />
              <br />
              <br />



 
 
        </div>
    )
}

export default Redioproject