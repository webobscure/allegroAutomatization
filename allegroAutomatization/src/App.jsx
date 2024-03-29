import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import generateExcel from 'zipcelx'

function App() {

  const config = {
    filename: 'allegro-doc',
    sheet: {
      data: []
    }
  }

  return (
    <>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Version: 5.1 (en), updated: 14.03.2024</th>
            <th style={{color: "red"}}>First 3 rows are for Allegro usage, do not change them. Do not remove any columns.</th>
          </tr>
          <tr>
            <th>Order Information</th>
            <th>Basic Information</th>
            <th>Tax parameters</th>
            <th>Terms of Sales</th>
            <th>Order Information</th>
            <th>Order Information</th>

          </tr>
          <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr><tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr><tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
        </table>
        <button onClick={() =>  generateExcel(config)}>
          Generate Excel document 
        </button>
      
    </>
  )
}

export default App
