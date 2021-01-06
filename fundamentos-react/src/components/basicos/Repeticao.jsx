import React from 'react';

import produtos from '../../data/produtos'

export default props => {

    function getProdutoListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.nome} -> R${prod.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>{getProdutoListItem()}</ul>
        </div>
    )
}
