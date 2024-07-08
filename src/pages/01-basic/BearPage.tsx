import { WhiteCard } from '../../components';
import { useBearStore } from '../../store';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        {/* BlackBearsCount */}
        <BlackBearsCount/>

        {/* PolarBearsCount */}
        <PolarBearsCount/>

        {/* PnadaBearsCount */}
        <PnadaBearsCount/>
        
      </div>
    </>
  );
};


export const BlackBearsCount = () => {

  //! Ocupamos el contenido del store sobre los osos negros
  const blackBears = useBearStore(state => state.blackbears);
  const increment = useBearStore(state => state.increase);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increment(+1)}> +1 </button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increment(-1)}> -1 </button>
      </div>

    </WhiteCard>
  );
}

export const PolarBearsCount = () => {
  const polarBears = useBearStore( state => state.polarBears );
  const incrementPolarBears = useBearStore( state => state.increasePolar );

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => incrementPolarBears( + 1 ) } > +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> { polarBears } </span>
        <button onClick={ () => incrementPolarBears( - 1 ) } >-1</button>

      </div>

    </WhiteCard>
  );
}

export const PnadaBearsCount = () => {
  const pandaBears = useBearStore( state => state.pandaBears );
  const increasePanda = useBearStore( state => state.increasePanda );

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={ () => increasePanda( + 1 ) }> +1 </button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={ () => increasePanda( - 1 ) }> -1 </button>
      </div>

    </WhiteCard>
  );
}
