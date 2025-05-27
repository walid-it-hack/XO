import {  useState } from 'react'

import './App.css'


  type V="X"|"O"|""
function App() {
  
  const [data, setdata] = useState(Array<V>(9).fill(""))
  const [test,setTest]=useState<boolean>(true)
  const [final,setfinal]=useState<boolean>(true)
  function Generate(data:V[]){
    return data.map((item,i)=>
          <Square key={i} value={item} idx={i}/>
          )
  }
   
  return (
    <div className="App" >
      <div className='status'>Now Player X</div>
      
    {Generate(data)}
    <br />
    <button onClick={()=>reset()}>reset</button>
    
    </div>
  )
  function handleclick(idx:number){
    if(data[idx]!=""||!final)
      return
  const newdata=data.slice()
  newdata[idx]=test?"X":"O"
  const d=document.getElementsByClassName("status")
  d[0].innerHTML=test?"Now Player O":"Now Player X"
  let s=0
  newdata.forEach(element => {if(element=="")
    s++
  });
 if(s==0)
  d[0].innerHTML="Draw between  X and  O"

    
 setdata(newdata)
 setTest(!test)
 check(newdata)
 
}
function Square({idx,value}:{value:V,idx:number}) {
 return (
   <div >
     <button className="square" onClick={()=>handleclick(idx)}>{value}</button>
    
   </div>
 )
}
function check(data:V[]){
  
  const d=document.getElementsByClassName("status")[0]
 
 
  
  const mem=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8],[6,4,2]
  ]
  for (let k=0 ;k< mem.length;k++) {
    const [a,b,c]=mem[k]
    if(data[a]==data[b]&&data[b]==data[c]&&data[a]!=""){
      d.innerHTML=`🎉  WIN  <strong style="color:red">${data[a]}</strong>`
      mark(a,c)
      
      setfinal(false)
     
    }
   
    
    
  }
  }
  function reset(){
    const newdata=data.slice()
      for(let i=0;i<newdata.length;i++)
      {
        newdata[i]=""
      }
      document.getElementById('root')?.querySelector('#check')?.remove()
      document.getElementsByClassName('status')[0].innerHTML="Now Player X"
      setfinal(true)
      setdata(newdata)
      setTest(true)
      const f=document.getElementById("mark")
      if(f)
        f.remove()
      
  }
  function mark(a:number,c:number)
  {
    const d=document.createElement("div")
    d.id="mark"
    d.style.height="5px"
    d.style.backgroundColor="red"
    d.style.position="relative"
    d.style.width="270px"
    d.style.bottom=`${250-((a)/3)*100}px  `
     d.style.marginLeft="-185px"
     if(a==1||a==0&&c==6||a==2)
     {d.style.marginLeft=`${-285+((a))*100}px`
      d.style.bottom='150px'
       d.style.transform="rotate(90deg)"
     }
    if(a==0&&c==8)
   { d.style.marginLeft="-220px"
    d.style.bottom=`150px`
    d.style.width="350px"
    d.style.transform="rotate(45deg)"
   }
   if(a==6&&c==2)
   {
    d.style.marginLeft="-230px"
    d.style.bottom=`150px`
    d.style.width="350px"
    d.style.transform="rotate(-45deg)"
   }
    console.log(a,c)
document.getElementsByClassName("App")[0].appendChild(d)
  }
 



}
export default App
