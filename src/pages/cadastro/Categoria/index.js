import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function handleSubmit(event) {
    event.preventDefault(); // anula o efeito do evento
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(valoresIniciais);
  }

  useEffect(() => {
    console.log('testte');
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://tayflix-two.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Exemplo de categoria',
    //       cor: '#6CD0FA',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outro exemplo de categoria',
    //       cor: '#4DC970',
    //     },
    //   ]);
    // }, 4000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(event) => handleSubmit(event)}>

        <FormField
          type="text"
          name="nome"
          label="Nome da Categoria:"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          type="text"
          name="descricao"
          label="Descrição:"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
