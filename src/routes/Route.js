import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '../store';
export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const signed = store.getState().auth.signed;

    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }
    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Route {...rest}
            component={Component}
        />
    )
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}
RouteWrapper.defaultProps = {
    isPrivate: false
}