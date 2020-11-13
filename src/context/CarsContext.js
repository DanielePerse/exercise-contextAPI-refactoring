import { createContext } from 'react';

// a função createContext() retorna um objeto, dentro desse objeto vem o Provider e o Consumer
// provider é um setter (fornecer informação)
// consumer é um getter (ler informação) - utiliza renderProps, ou seja, tenho que passar uma função que retorna um componente. O consumer é um filho do provider.
const CarsContext = createContext();

export default CarsContext;
