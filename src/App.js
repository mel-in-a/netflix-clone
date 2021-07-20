import "./App.css";
import datas from "./data/movies_vze0mn.json";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {datas.map((section) => {
        return (
          <div className="">
            <h2>{section.category}</h2>
            <div className="section">
         
              {section.images.map((image) => {
                return  <img src={image} alt="" /> ;
              })}
        
            </div>
            {/* Il faut mapper ici sur ton deuxième tableau d'objet, donc
            section.images et non images ! Attention à ta syntaxe 😃 ! */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
