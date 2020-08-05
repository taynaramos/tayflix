import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault(); //anula o efeito do evento
    setCategorias([
      ...categorias,
      values
    ])
    setValues(valoresIniciais)
  }

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

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

        {/* <div>
          <label>
            Descrição:
          <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Cor:
          <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;