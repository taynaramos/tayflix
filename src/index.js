import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  {/* switch funciona como um if para as rotas */}
  <Switch>
    {/* as rotas sao as condições, ex: se o caminho for "/" renderizar o componente app */}
    {/* obs: quanto mais especifico a rota, melhor ficar acima das outras, pois o switch vai testando as rotas nas ordem */}
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />

    <Route exact path="/" component={Home} />
    {/* para retornar uma pagina de erro 404 não precisa colocar path, ou seja, td q nao estiver noos paths das rotas existentes irá renderizar o 404 */}
    {/* criar componente para 404 */}
    <Route component={() => (<span>Página de erro 404</span>)} />

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

