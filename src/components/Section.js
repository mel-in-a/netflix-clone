import datas from "../data/movies_vze0mn.json";
const Section = () => {
  return (
    <>
      {datas.map((section) => {
        return (
          <div>
            <h2>{section.category}</h2>
            <div className="section">
              {section.images.map((image) => {
                return <img src={image} alt="" />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section;
