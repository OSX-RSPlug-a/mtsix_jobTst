import React from 'react'

import Head from './../template/header';

import './styleTable.css';


export default function List() {
    return (
        <>

            <Head />

            <div className="table-swap">

                <a href="#top">Home</a>

                <a href="#top">Locais</a>

                <a href="#top">FAQ</a>

                <a href="#top">Categorias</a>

                <input type="text" id="opt_search" className="search-term" placeholder="Buscar" />

                <button className="add-item"><i className="material-icons" title="Adicionar">add_circle</i> Add item</button>

            </div>


            <div className="card">

                <table className="one">
                
                    <caption>FAQ - Perguntas Frequentes</caption>

                    <tr>
                        <th>Pergunta</th>
                        <th>Ordem</th> 
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    <tr>
                        <td>Como posso ser atendido no aplicativo Boa Vista?</td>
                        <td>1</td> 
                        <td><i className="material-icons edt" title="Editar">edit</i></td>
                        <td><i className="material-icons exc" title="Excluir">delete_forever</i></td>
                    </tr>
                    <tr>
                        <td>Como posso ser atendido no aplicativo Boa Vista?</td>
                        <td>1</td> 
                        <td><i className="material-icons edt" title="Editar">edit</i></td>
                        <td><i className="material-icons exc" title="Excluir">delete_forever</i></td>
                    </tr>
                    <tr>
                        <td>Como posso ser atendido no aplicativo Boa Vista?</td>
                        <td>1</td> 
                        <td><i className="material-icons edt" title="Editar">edit</i></td>
                        <td><i className="material-icons exc" title="Excluir">delete_forever</i></td>
                    </tr>
                    <tr>
                        <td>Como posso ser atendido no aplicativo Boa Vista?</td>
                        <td>1</td> 
                        <td><i className="material-icons edt" title="Editar">edit</i></td>
                        <td><i className="material-icons exc" title="Excluir">delete_forever</i></td>
                    </tr>
        
                </table>                    
        </div>

        </>
    )
}