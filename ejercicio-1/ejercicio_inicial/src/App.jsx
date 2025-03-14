function App() {
  const names = ['Kevin','Javier','Lamilla','Vera'];
  return (
    <section>
      <h1>Ejercicio 1 utilizando el DOM</h1>
      <ul>
        {
          names.map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App
