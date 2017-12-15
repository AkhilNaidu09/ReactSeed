import React from 'react';
import './grid.css'
 export const Grid = ({data}) => 
     <table>
         <tbody>
             <tr>{
                 Object.keys(data[0]).map((headerName, i) => {
                     return (
                         <th key={i}>{headerName}</th>
                     )
                 })
             }
             </tr>
             {
                 data.map((row, i) => {
                     let properties = Object.keys(row);
                     return (
                         <tr key={i}>
                             {properties.map((rowValue, j) => {
                                 return (<td key={j}>{row[rowValue]}</td>)
                             })}
                         </tr>)
                 })}
         </tbody>
     </table>
  
export default Grid;