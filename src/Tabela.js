// *********************************
// Tabela.js
// *********************************

import React from 'react';

/**
 * componente que será utilizada na construção da Tabela
 */
function CabecalhoTabela() {
    return (
        <thead>
            <tr>
                <th>Título do album</th>
                <th>Duração</th>
                <th>Número de Faixas</th>
                <th>Ano</th>
                <th>Editora</th>
                <th>Cover</th>
                <th>Género</th>
                <th>Artista</th>
               
            </tr>
        </thead>
    );
}

/**
 * componente que representa o Corpo da Tabela
 * arrow function
 * Esta versão da componente recebe como parâmetro o conjunto das 'props'
 * existentes no projeto
 */
const CorpoTabela = (props) => {
    // vamos recuperar os dados do parâmetro de entrada: inDadosAlbunsCorpoTabela
    // o 'map' funciona como um 'foreach' que irá iterar todos os items dos dados lidos
    const rows = props.inDadosAlbunsCorpoTabela.map((row) => {
        return (
            <tr key={row.IdAlbum}>
                <td>{row.tituloAlbum}</td>
                <td>{row.duracaoAlbum}</td>
                <td>{row.nrFaixasAlbum}</td>
                <td>{row.anoAlbum}</td>
                <td>{row.editoraAlbum}</td>
                 <td><img src={'coverAlbum/'+row.coverAlbum}
                        alt={'cover do album ' + row.tituloAlbum}
                        title={row.tituloAlbum}
                        height="50" /></td>
                <td>{row.generoAlbum}</td>
                <td>{row.nomeArtista}</td>
                <td> <button type="reset" value="Reset"><img src={'./trash.png'} alt="" /></button></td>
                <td> <button type="reset" value="Reset"><img src={'./pencil.png'} alt="" /> </button></td>
            </tr>
        );
    }
    )

    return (<tbody>{rows}</tbody>);
}


/**
 * componente Tabela
 */
class Tabela extends React.Component {

    render() {
        // ler os dados que foram/são fornecidos à Tabela,
        // como parâmetro de entrada/saída
        const { inDadosAlbuns } = this.props;

        return (
            <table className="table">
                <CabecalhoTabela />
                {/* CorpoTabela tem um 'parâmetro de entrada', chamado 'inDadosAlbuns'.
                    Apesar do nome do parâmetro ser diferente do atribuído à Tabela,
                    a sua função é igual.
                */}
                <CorpoTabela inDadosAlbunsCorpoTabela={inDadosAlbuns} />
            </table>
        );
    }
}

export default Tabela;
