// Formulario.js
// este ficheiro irá conter o código para
// representar o formulário no ecrã
// ***************************************************

import React from 'react'

const state = {
    button: 1
  };
/**
 * Mostra uma lista com os artistas existentes,
 * para o utilizador escolher um
 */
const EscolheArtista = (props) => {
    // vamos recuperar os dados do parâmetro de entrada: inListaArtistas
    // o 'map' funciona como um 'foreach' que irá iterar todos os items dos dados lidos


    const opcoes = props.inListaArtistas.map((artista) => {
        return (
            <option key={artista.idArtista}
                required
                value={artista.idArtista}>{artista.nomeArtista}
            </option>
        );
    }
    )

    return (
        <select required className="form-select" onChange={props.outIdArtistaEscolhido}>
            <option value="">Escolha um artista</option>
            {opcoes}
        </select>
    );
}
/**
* Mostra uma lista com os generos existentes na BD,
* para o utilizador escolher um
*/
const EscolheGenero = (props) => {
    // vamos recuperar os dados do parâmetro de entrada: inListaGeneros
    // o 'map' funciona como um 'foreach' que irá iterar todos os items dos dados lidos
    const opcoes = props.inListaGeneros.map((genero) => {
        return (
            <option key={genero.idGenero}
                required
                value={genero.idGenero}>{genero.generoAlbum}
            </option>
        );
    }
    )
    return (
        <select required className="form-select" onChange={props.outIdGeneroEscolhido}>
            <option value="">Escolha um género</option>
            {opcoes}
        </select>
    );

}

/**
 * Formulário para adicionar (fazer upload) um album
 */
class EditForm extends React.Component {

    constructor(props) {
        
        super(props);
        
        // vamos recuperar os dados do parâmetro de entrada: inListaGeneros
    // o 'map' funciona como um 'foreach' que irá iterar todos os items dos dados lidos
        // variáveis para guardar os dados introduzidos pelo utilizador, no Formulário
        console.log("aqui")
        this.state = {
            tituloDoAlbum: "12312312312312",
            anoDoAlbum: "",
            editoraDoAlbum: "",
            fichCover: null,
            idDoGenero: "",
            idDoArtista: "",
            duracaoDoAlbum: "",
            nrfaixasDoAlbum: "",
            Id: "",
            acao: "",
            Status:""
        }
        //Se vier algo no inDadosAlbum, vou definir as variáveis para serem mostradas no formulário
        //Falta trazer a data para o formulário. 
        // if (props.editData != null) {
        //     this.state = {
        //         tituloDoAlbum: props.editData.TituloAlbum,
        //         anoDoAlbum: props.editData.anoAlbum,
        //         editoraDoAlbum: props.editData.editoraAlbum,
        //         // fichCover:null,
        //         idDoGenero: props.editData.idGenero,
        //         idDoArtista: props.editData.idArtista,
        //         duracaoDoAlbum: props.editData.Duracao,
        //         nrfaixasDoAlbum: props.editData.nrfaixasAlbum
        //         // Id:""
        //     //     TituloAlbum: this.state.tituloDoAlbum,
        //     // Duracao: this.state.duracaoDoAlbum,
        //     // NrFaixas: this.state.nrfaixasDoAlbum,
        //     // Ano: this.state.anoDoAlbum,
        //     // Editora: this.state.editoraDoAlbum,
        //     // UploadCover: this.state.fichCover,
        //     // GenerosFK: this.state.idDoGenero,
        //     // ArtistasFK: 
        //     }


        // }
    }

    /**
     * processar os dados fornecidos pelo utilizador sobre o título do album
     * @param {*} evento - dados adicionados pelo utilizador
     */
    handlerTituloChange = (evento) => {
        // guardar os dados recolhidos sobre a título do album
        this.setState({
            tituloDoAlbum: evento.target.value
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador sobre a duração total do album
     * @param {*} evento - dados adicionados pelo utilizador
     */
    handlerDuracaoChange = (evento) => {
        // guardar os dados recolhidos sobre a duração total do album
        this.setState({
            duracaoDoAlbum: evento.target.value
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador sobre a duração total do album
     * @param {*} evento - dados adicionados pelo utilizador
     */
    handlerNrFaixasChange = (evento) => {
        // guardar os dados recolhidos sobre a duração total do album
        this.setState({
            nrfaixasDoAlbum: evento.target.value
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador sobre o ano do album
     * @param {*} evento - dados adicionados pelo utilizador
     */
    handlerAnoChange = (evento) => {
        // guardar os dados recolhidos sobre o ano do album

        this.setState({
            anoDoAlbum: evento.target.value
        });

    }

    /**
     * processar os dados fornecidos pelo utilizador no nome da editora do album
     * @param {*} evento - dados adicionados pelo utilizador
     */
    handlerEditoraChange = (evento) => {
        // validar os valores introduzidos na TextBox
        /*   if (/\d/.test(evento.target.value)) {
               evento.target.setCustomValidity("Não são permitidos números aqui.");
               return;
           } else {
               evento.target.setCustomValidity("");
           }
*/
        // guardar os dados recolhidos sobre a editora do album
        this.setState({
            editoraDoAlbum: evento.target.value
        });

    }

    /**
     * processar os dados fornecidos pelo utilizador no upload do cover do album
     * @param {*} evento - dados adicionados pelo utilizador
     */
    handlerCoverChange = (evento) => {

        // guardar os dados recolhidos pelo <select></select>
        this.setState({
            fichFoto: evento.target.files[0]
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador na escolha de um género
     * @param {*} evento - id do género que o utilizador seleciona
     */
    handlerGeneroChange = (evento) => {

        // guardar os dados recolhidos pelo <select></select>
        this.setState({
            idDoGenero: evento.target.value
        });
    }

    /**
     * processar os dados fornecidos pelo utilizador na escolha de um artista
     * @param {*} evento - id do artista que o utilizador seleciona
     */
    handlerArtistaChange = (evento) => {

        // guardar os dados recolhidos pelo <select></select>
        this.setState({
            idDoArtista: evento.target.value
        });
    }


    /**
     * handler para processar os dados fornecidos pelo Formulário
     * @param {*} evento - dados recolhido pelo <form></form>
     */
    handlerSubmitForm = (evento) => {
        // impedir o formulário de autoenviar os dados para o servidor
        // essa tarefa cabe, neste projeto, ao componente <App/>
        evento.preventDefault();


        // preparar os dados para serem enviados para a <App/>
        // posso já enviar os dados prontos para serem adicionados à API
        let dadosForm = {
            TituloAlbum: this.state.tituloDoAlbum,
            Duracao: this.state.duracaoDoAlbum,
            NrFaixas: this.state.nrfaixasDoAlbum,
            Ano: this.state.anoDoAlbum,
            Editora: this.state.editoraDoAlbum,
            UploadCover: this.state.fichCover,
            GenerosFK: this.state.idDoGenero,
            ArtistasFK: this.state.idDoArtista,
            //LEVAR AQUI O ID 
            Id: this.state.id,
            status:0
            //LEVAR AQUI O SELECTOR QUE DEFINE SE ESTAMOS A ESCREVER/ALTERAR OU FAZER DE NOVO 
            //acao = nome do botão do submit 
            //acao: this.state.evento, 

        };
        console.log({ evento });

        // concretizar a exportação de dados para a <App/>
        this.props.outDadosAlbuns(dadosForm);
    }

    render() {
        // ler os dados que foram/são fornecidos à Tabela,
        // como parâmetro de entrada/saída
        const { inDadosArtistas, inDadosGeneros, inDadosAlbum, Teste} = this.props;

        return (
            // o 'return' só consegue devolver UM objeto
            <form onSubmit={this.handlerSubmitForm} encType="multipart/form-data">
                <div className="row">
                    NERDADSADASDAS
                    <div className="col-md-4">
                        Título do album:  <input
                            value={this.state.tituloDoAlbum}
                            type="text"
                            required
                            onChange={this.handlerTituloChange}
                            className="form-control" /><br />
                        Editora:  <input
                            type="text"
                            required
                            onChange={this.handlerEditoraChange}
                            className="form-control" /><br />


                        Cover  : <input type="file"

                            accept=".jpg,.png"
                            onSubmit={this.handlerCoverChange}
                            encType="multipart/form-data"
                            className="form-control" /><br />
                    </div>
                    <div className="col-md-2">
                        Numero de faixas:  <input
                            type="text"
                            maxLength="2"
                            pattern="[0-9][0-9]?"
                            required
                            onChange={this.handlerNrFaixasChange}
                            className="form-control" /><br />
                        Ano:  <input
                            type="text"
                            minLength="4"
                            maxLength="4"
                            pattern="[1-2][0-9]{3}"
                            required
                            onChange={this.handlerAnoChange}
                            className="form-control" /><br />
                        Duração:  <input
                            type="text"
                            maxLength="2"
                            pattern="[0-9]{1,2}"
                            required
                            onChange={this.handlerDuracaoChange}
                            className="form-control" /><br />
                    </div>
                    <div className="col-md-4">
                        Genero: <EscolheGenero inListaGeneros={inDadosGeneros}
                            outIdGeneroEscolhido={this.handlerGeneroChange} /><br />
                        Artista: <EscolheArtista inListaArtistas={inDadosArtistas}
                            outIdArtistaEscolhido={this.handlerArtistaChange}
//                            Formulario inDadosAlbum ={album}

                        />
                        <br />
                    </div>
                </div>
                <input type="submit" value="Adicionar Album" className="btn btn-outline-primary" />
            </form>
        )
    }
}
export default EditForm;
