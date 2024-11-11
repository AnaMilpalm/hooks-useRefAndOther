import Player from "./assets/components/Player/Player";
 
const App = () => {
 
  // const valueRef = useRef(0);


  // const handleClick = () => {
	// 	// Кліки будуть після монтування,
	// 	// тому завжди буде посиланням на DOM-елемент
  //   valueRef.current += 1;
  // };

  return (
    <>
  
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </>
  );
};

export default App;