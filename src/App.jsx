import './App.css'
import { useState, useEffect } from 'react';
import FileToHtmlConverter from './File';

function App() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    setFormattedDate(now.toLocaleDateString('en-US', options));
  }, []);

  return (
    <>
      <div className='container'>
        <h1>Hello Lion</h1>
        <div className='text-container'>
          <h2>[{formattedDate}]</h2>
          <div className='text-box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae cum sint dignissimos quis id, distinctio porro suscipit vel ad odit est dolores voluptatum non, doloremque debitis sequi officiis maxime eius consequatur expedita provident aut? Omnis sit quibusdam mollitia quas ullam ipsa aliquam nesciunt cupiditate possimus harum odit architecto, error repudiandae maxime. Ducimus quisquam culpa rem ad, neque optio, ratione mollitia adipisci veritatis porro aperiam dolores odio tempore minus rerum incidunt molestias similique architecto sint non? Cupiditate quos praesentium consequatur expedita recusandae qui sed est earum distinctio! Earum iste error eveniet, ratione dolores excepturi unde rerum! Reiciendis harum cumque sit nam in consectetur dolores vero, accusamus mollitia ipsam rem sunt, ducimus quia aliquid fugiat aspernatur dolorem culpa saepe tempore aliquam!
          </div>
        </div>
      </div>
      <div className='file-section'>
        <FileToHtmlConverter />
      </div>
    </>
  )
}

export default App
