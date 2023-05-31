import {useState, useEffect} from 'react'

const App =  () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState()

  const createNewChat = ()=> {
    setMessage(null)
    setValue('')
    setCurrentTitle(null)

  }
  
  const getMessages = async () => {
    const options= {
      method: 'POST',
      body: JSON.stringify({
      message: value
    }),
     headers: {
       "Content-Type": 'application/json'
     }
    }
      try{
          const response = await fetch('http://localhost:8000/completions', options)
          const data = await response.json()  
          setMessage(data.choices[0].message)
      } catch(error) {
          console.log(message)
      }
  }

useEffect(()=> {
console.log(currentTitle, value, message);
if (!currentTitle && value && message) {
  setCurrentTitle(value)
}
if(currentTitle&& value && message) {
  setPreviousChats(prevChats => (
    [...prevChats, {
        title: currentTitle,
        role: 'user',
        content: value
      }, 
      {
          title: currentTitle,
          role: message.role,
          content: message.content
      }  

  ]
  ))

}
}, [message, currentTitle])


console.log(previousChats);

const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
  return (
    <div className="app">

      <section className="side-bar"> 
      <button onClick={createNewChat}>+ New chat</button>
      <ul className="history">
        <li> TESt TEST</li>
      </ul>
      <nav>
        <p> made by Larbi</p>
      </nav>
      
      </section>
      <section className="main"> 
        {!currentTitle && <h1>PersonalGPT</h1>}
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => <li key={index}>
          <p className='role'>{chatMessage.role}</p>
          <p>{chatMessage.message}</p>
          </li>)}

        </ul>
        <div class="bottom-section">
          <div class="input-container"> 
           
            <input value={value} onChange={(e) => setValue(e.target.value)}></input>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
          ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
