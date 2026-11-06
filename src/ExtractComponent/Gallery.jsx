import EcProfile from "./EcProfile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <EcProfile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
        profession="physicist and chemist"
        noAwards={4}
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
      />
     <EcProfile 
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        alt="Katsuko Saruhashi"
        width={70}
        height={70}
        profession="geochemist"
        noAwards={2}
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
     />
     
    </div>
  );
}
