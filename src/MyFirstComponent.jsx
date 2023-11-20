

const MyFirstComponent = ({propOne}) => {
  
  const hello = 'hola';

  return (
    <div>
      {hello}, mi primer componente con react {propOne}
    </div>
  );
};

export default MyFirstComponent;
