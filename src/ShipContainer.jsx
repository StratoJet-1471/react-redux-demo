import React from 'react';
import { connect } from 'react-redux';
import { setCourse, setSpeed } from './react-redux-store/actions.js';

import Ship from './Ship.jsx';

/*
Компонент назван ...Container, поскольку он принадлежит к типу компонентов-контейнеров (Container Components), чья задача - обеспечение связи между хранилищем и презентационными компонентами (Presentational Components). В данном случае он обеспечивает связь между хранилищем и презентационным компонентом Ship. Сам компонент Ship не имеет выхода на хранилище и может получать оттуда данные и/или генерировать события (actions) лишь с помощью пропсов, знчения которых устанавливаются здесь, в ShipContainer.
*/

//"Преобразовать state в пропсы"
const mapStateToProps = state => {
    return {
        course: state.course,
        speed: state.speed
    };
};

//"Преобразовать dispatch() в пропсы"
const mapDispatchToProps = (dispatch) => {
    return {
        setCourse: course => dispatch(setCourse(course)),
        setSpeed: speed => dispatch(setSpeed(speed))
    };
};

const ShipContainer = connect(mapStateToProps, mapDispatchToProps) (Ship);

export default ShipContainer;