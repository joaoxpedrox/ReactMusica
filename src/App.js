//******************* */
//App.js
//******************* */

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

//importar componentes
import Tabela from './Tabela';
//importa o formulario para o utilizador inserir os dados
import Formulario from './Formulario';

/**
 * Função que lê os dados 'albuns' da API
 */
async function getAlbuns(){
  
  //lê os dados API
  //Fazer o acesso a um 'endpoint' com os dados dos albuns
  //let resposta=await fetch("https://localhost:44342/api/AlbunsAPI/");

  let resposta=await fetch("api/AlbunsAPI/");

  if(!resposta.ok){
    //Não recebeu o código 200 do HTTP
    console.error("Não conseguimos ler os dados da API. Código:"+ resposta.status)

  }
// devolver os dados a serem usados na componente   
return await resposta.json();
}

async function getArtistas(){

  //Fazer o acesso a um 'endpoint' com os dados dos artistas
  //let resposta=await fetch("https://localhost:44342/api/ArtistasAPI/");
  let resposta = await fetch("api/ArtistasAPI");
  
  if(!resposta.ok){
    //Não recebeu o código 200 do HTTP
    console.error("Não conseguimos ler os dados dos Artistas. Código:"+ resposta.status)
  }
  // devolver os dados a serem usados na componente 
  return await resposta.json();
}

 async function getGeneros(){

  let resposta = await fetch("api/GenerosAPI/");
  
  if(!resposta.ok){
    //Não recebeu o código 200 do HTTP
    console.error("Não conseguimos ler os dados dos Géneros. Código:"+ resposta.status)
  }
  // devolver os dados a serem usados na componente 
  return await resposta.json();
} 

/**
 * invoca a API e envia os dados do novo Album
 * @param {*} dadosNovoAlbum 
 */
 async function adicionaAlbum(dadosNovoAlbum) {
   console.log(dadosNovoAlbum); 
  let formData = {
    Titulo:dadosNovoAlbum.TituloAlbum,
    Duracao:dadosNovoAlbum.Duracao,
    NrFaixas:dadosNovoAlbum.NrFaixas,
    Ano:dadosNovoAlbum.Ano,
    Editora:dadosNovoAlbum.Editora,
    GenerosFK:dadosNovoAlbum.GenerosFK ,
    ArtistasFK:dadosNovoAlbum.ArtistasFK
  
  }
  let resposta = await fetch("api/AlbunsAPI", {
    method: "POST",
    body: JSON.stringify(formData)
  });


  if (!resposta.ok) {
    // não obtivemos o 'código de erro' HTTP 200
    console.error(resposta);
    throw new Error('não foi possível enviar os dados do novo album. Código= ' + resposta.status);
  }

  // devolver os dados a serem usados na componente 
  return await resposta.json();
}





/**
 * Componente 'principal' do meu projeto
 */

class App extends React.Component{

  //Construtor
  constructor(props){
    super(props); // <--Sempre a primeira instrução no uso de um construtor 

    this.state = {

      /* 
       * array que contem os dados dos albuns
      */
      /**
       * irá guardar a lista de albuns, artistas e generos vindas da API
       */
       albuns:[],
       artistas:[],
       generos:[],
      /**
       * estados do projeto, durante a leitura de dados na API
       * @type {"carregando dados" | "erro" | "sucesso"}
       */
       loadState: "A carregar dados",
       /**
        * se algo correr mal, irá aqui ser colocado a mensagem de erro
        */
       errorMessage: null,

    }
}
        

/*
 * Carrega os dados para dentro da aplicação
 */
componentDidMount(){
 // ler os dados dos albuns, e adicioná-los à state 'albuns' 
//Carrega toda a tabela de albuns 
this.loadAlbuns();
// ler os dados dos artistas, e adicioná-los à state 'artistas'
//Carrega o selector dos artistas. 
this.loadArtistas();
// ler os dados dos generos, e adicioná-los à state 'generos'
//Carrega o selector dos generos. 
this.loadGeneros();
}


/**
 * Carrega os albuns da API e adiciona ao array 'albuns'
 */
async loadAlbuns(){
/**
 * lê os dados da API(fetch)
 * e atualiza os dados na var. state
 */

try {
  //lê os dados
  //Adiciona ao state (setState())
  this.setState({
    loadState:"A carregar dados"
  });
  let albunsDaAPI = await getAlbuns();

  this.setState({
    albuns: albunsDaAPI,
    loadState: "sucesso"
  });

}  catch (erro) {
  this.setState({
    loadState: "erro",
    errorMessage: erro.toString()
  });
  console.error("Erro na leitura dos Albuns da API", erro)
}
}


/**
 * Carrega os Artistas da API e adiciona ao array 'artistas'
 */
async loadArtistas() {
  /**
   * lê os dados da API(fetch)
   * e atualiza os dados na var. state
   */
  try {
    //lê os dados
    //Adiciona ao state (setState())
    this.setState({
      loadState:"A carregar dados"
    });
    let artistasDaAPI = await getArtistas();

    this.setState({
      artistas: artistasDaAPI,
    });

  }  catch (erro) {
    this.setState({
      loadState: "erro",
      errorMessage: erro.toString()
    });
    console.error("Erro na leitura dos artistas da API", erro);
  }
 
}

/**
 * Carrega os Generos da API e adiciona ao array 'generos'
 */
  async loadGeneros() {
  /**
   * lê os dados da API(fetch)
   * e atualiza os dados na var. state
   */
  try {
    //lê os dados
    //Adiciona ao state (setState())
    this.setState({
      loadState:"A carregar dados"
    });
    let generosDaAPI = await getGeneros();
    

    this.setState({
      generos: generosDaAPI,
      loadState: "sucesso"
    });
    console.log("Generos da API");
    console.log(this.state.generos);
  }  catch (erro) {
    this.setState({
      loadState: "erro",
      errorMessage: erro.toString()
    });
    console.error("Erro na leitura dos generos da API", erro);
  }
} 
 
/**
   * processar os dados recolhidos pelo Formulário para a API
   * @param {*} dadosDoFormulario 
   */
 handlerDadosForm = async (dadosDoFormulario) => {
  /**
   * TAREFAS:
   * 1. preparar os dados para serem enviados para a API
   * 2. enviar os dados para a API
   * 3. efetuar o reload da tabela
   */

//Os dados estão prontos, vamos tentar enviar para a API 
  try {
    // 2.
    await adicionaAlbum(dadosDoFormulario);

    // 3.
    await this.loadAlbuns();

  } catch (erro) {
    this.setState({
      errorMessage: erro.toString()
    });
    console.error("Erro ao submeter os dados do novo album: ", erro)
  }
}



  render() {
    //lê os dados nos arrays
    const{albuns, artistas,generos } = this.state;
    switch (this.state.loadState) {
      case "A carregar dados":
        return <p>A carregar dados. Aguarde, por favor...</p>
      case "erro":
        return <p>Ocorreu um erro: {this.state.errorMessage}.</p>
      case "sucesso":
    return (
      <div className="container">
        <h1>Albuns</h1>
        {/*este componente - tabela - irá apresentar os dados dos 'albuns' no ecrã, os 'albuns' devem ser lidos dna API */}
        <h4>Carregar novo Album</h4>
            <Formulario inDadosArtistas={artistas}
              outDadosAlbuns={this.handlerDadosForm}
              inDadosGeneros={generos}
            />
               <div className="row">
              <div className="col-md-8">
                <hr />
                 {/* Início da tabela*/}
                <h4>Albuns</h4>
              
        <Tabela inDadosAlbuns={albuns}/>
      </div>
    </div>
  </div> 
    );
    default:
      return null;
    }
  }
}
export default App;
