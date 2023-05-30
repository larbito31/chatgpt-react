
const App =  () => {
  return (
    <div className="app">

      <section className="side-bar"> 
      <button>+ New chat</button>
      <ul className="history">
        <li> TESt TEST</li>
      </ul>
      <nav>
        <p> made by Larbi</p>
      </nav>
      
      </section>
      <section className="main"> 
        <h1>PersonalGPT</h1>
        <ul className="feed">

        </ul>
        <div class="bottom-section">
          <div class="input-container"> 
            {/* <input/> */}
            <input type="text" placeholder="Send a message..."></input>
            <div id="submit">➢</div>
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
