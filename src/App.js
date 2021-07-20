import "./App.css";
import datas from "./data/movies_vze0mn.json";

function App() {
  return (
    <div>
    
      {
        datas.map( section => {
          return <div className="">
             <h2>{section.category}</h2>
        
          {section.images} 

          images.map( section.images => {
            {images}
          })
        
           </div> 
          // pour chaque catégorie mapper les images
        })
      }
 
    </div>
  );
}

export default App;
