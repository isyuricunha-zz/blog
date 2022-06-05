import Typing from './Typing';

const TYPING_MSGS = [
  'Eu sou um <strong>Administrador de Banco de Dados</strong>',
  'Amante de <strong>Open-Source</strong> 💙',
  'Só mais um cara tentando apressar a fila do mercado com o poder da mente',
  'Definitivamente nascido na terra, e não no quadrante <strong>gamma-7</strong>'
];

const Bio = () => {
  const options = {
    strings: TYPING_MSGS,
    typeSpeed: 65,
    backSpeed: 20,
    cursorChar: ';'
  };

  return (
    <section>
      <p className="text-xl">
        {/* text here */}
        <Typing options={options} />
      </p>
    </section>
  );
};
export default Bio;
