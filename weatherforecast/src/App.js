/* eslint-disable no-unused-vars */

import React,{useEffect,useState}from'react'
import axius from'axios'
import axios from 'axios';
function App() {


const [data,setData]=useState("");
const [date,setDate]=useState("");

useEffect(()=>{

axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
.then(res=>console.log(res.data[date]))
.catch(err=>console.log(err))
},[data,date])


  return (
    <div className="App">
     <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto mt-4">
          <h2 className="text-center text-white display-3">Türkiye Covid-19 Arama Motoru</h2>     
          <input type="text" placeholder="GG/AA/YY" className="form-control"
                  onChange={(e)=>setDate(e.target.value)} 
                  />
          <table class="table table-striped text-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Test Sayısı</th>
                <th scope="col">Hasta Sayısı</th>
                <th scope="col">Vefat Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white"> 
                <th scope="row">1</th>
                <td className={data===undefined?"bg-danger":"bg-succes"}>{data===undefined?"Veri Bekleniyor":data.totalTests}</td>
                <td>{data===undefined?"Veri Bekleniyor":data.patitents}</td>
                <td>{data===undefined?"Veri Bekleniyor":data.deaths}</td>
              </tr>
            </tbody>
          </table>
                  </div>
                </div>
              </div>
              </div>
            );
          }

export default App;
