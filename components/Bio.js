import Typing from './Typing';

const TYPING_MSGS = [
<<<<<<< HEAD
  "I'm Fullstack Developer.",
  "I'm Technology Evangelist.",
  "I'm <strong>me<strong>."
=======
  'Eu sou um <strong>Administrador de Banco de Dados</strong>',
  'Amante de <strong>Open-Source</strong> 💙',
  'Só mais um cara tentando apressar a fila do mercado com o poder da mente',
  'Definitivamente nascido na terra, e não no quadrante <strong>gamma-7</strong>'
>>>>>>> parent of 0f2823e (remove all)
];

const Bio = () => {
  const options = {
    strings: TYPING_MSGS,
    typeSpeed: 65,
<<<<<<< HEAD
    backSpeed: 70,
    cursorChar: '|'
=======
    backSpeed: 20,
    cursorChar: ';'
>>>>>>> parent of 0f2823e (remove all)
  };

  return (
    <section>
      <p className="text-xl">
<<<<<<< HEAD
        Hello 👋, <Typing options={options} />
        {/* teste */}
=======
        {/* text here */}
        <Typing options={options} />
>>>>>>> parent of 0f2823e (remove all)
      </p>
    </section>
  );
};
export default Bio;
