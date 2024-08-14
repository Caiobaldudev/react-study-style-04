import React from 'react'
import './Img.css'
// importando svg
import Dog from '../assets/dog.svg?react';
// importando normal 
import foto from '../assets/foto.jpg'
// retornando svg como componente
// import {ReactComponent} from '../assets/dog.svg'

const ImgApp = () => {
  return (
    <div>
      {/* aplicação de background (url) */}
      <p className="fundo"></p> 

      {/* svg */}
      <Dog />

      {/* aplicação direta  */}
      <img src={foto} />
    </div>
  )
}

export default ImgApp

// SVG
// Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.

// No Vite é necessário um plugin para ativar essa funcionalidade. No create-react-app essa funcionalidade vem instalada por padrão. Na versão nova do vite também é necessário utilizar os SVG's de uma forma mais simples.

// Basta importar o SVG (sem usar o as ReactComponent) e adicionar ?react no final do caminho.

// import Dog from './img/dog.svg?react';

// vite.config.js

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import eslintPlugin from 'vite-plugin-eslint';
// import svgr from 'vite-plugin-svgr';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     eslintPlugin({
//       cache: false,
//       include: ['./src/**/*.js', './src/**/*.jsx'],
//     }),
//     svgr(),
//   ],
// });

// import Dog from './img/dog.svg?react';

// const App = () => {
//   return (
//     <div>
//       <Dog />
//     </div>
//   );
// };