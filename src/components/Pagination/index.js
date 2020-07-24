import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';

function Pagination({ length }) {
    const a = length;
    const items = [];
    if (a <= 3) {
        for (let i = 0; i < a; i++) {
            items.push(<button >{i + 1}</button>)
        }
    } else {
        for (let i = 0; i < 3; i++) {
            items.push(<button >{i + 1}</button>)
        }
        items.push("...");
        items.push(<button >{a}</button>)
    }
    return (
        <Container>
            {items}
        </Container>
    );
}
Pagination.propTypes = {
    length: propTypes.number.isRequired,
    handlerZ: propTypes.func.isRequired
}
export default Pagination;