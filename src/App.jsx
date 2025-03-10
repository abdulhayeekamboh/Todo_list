import { useState } from 'react';

const App = () => {

  const [value, setvalue] = useState('');

  const fill = ()=>{
    setvalue('');
  }


  const submit = ()=>{
    fill();
    let iner = document.querySelector('.iner');
    let box = document.createElement('box');
    box.classList.add('box');
    iner.appendChild(box);
    let h1 = document.createElement('h1');
    box.appendChild(h1);
    
    if (value.trim()){
      h1.textContent = value;
    }else {
      box.style.backgroundColor = 'red';
      box.style.color = 'white';
      h1.textContent = 'Please first fill the keep form';
      setTimeout(() => {
        box.style.display = 'none';
      }, 1000);
    }

  }


  return (
    <div className="page">
      <div className="container">
        <div className="top">
          <input type="text"
           placeholder='Write somethings for keep down' 
           value={value}
           onChange={(e)=>{
            setvalue(e.target.value)
           }}
           onKeyDown={(e)=>{
            if (e.key == 'Enter'){
              submit()
            }
           }}
           />
          <button onClick={submit}>Keep</button>
        </div>
        <div className="store">
          <div className="iner">
          </div>
        </div>
      </div>
    </div>
  )
}

export default App