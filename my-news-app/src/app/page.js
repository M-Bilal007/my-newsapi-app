import CounterApp from '../components/counterApp/CounterApp'
export default function Home() {
  const fruits=["mango","banana","cherry","orange","grapes"]
  const data=[{name:"uzair",degree:"se"},{name:"bilal",degree:"IT"}]
  return (
   <div>
    <CounterApp />
    {fruits.map((fruit,index)=>{
      return <div key={index}>{fruit}</div>
    })}
    {data.map((studentData,index)=>{
      return <div key={index}><h1>{studentData.name}</h1><h1>{studentData.degree}</h1></div>
    })}
   </div>
  );
}
