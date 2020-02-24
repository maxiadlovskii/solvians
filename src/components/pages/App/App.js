import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import {linkParams, links} from "../../../constants/routerLinks";
import '../../../styles/global.module.scss'
import styles from './App.module.scss'
import { List } from '../List/List'
import { Details } from '../Details/Details'

const routes = [
    { path: links.LIST, exact: true, component: List},
    { path: `${links.LIST}/:${linkParams.countryCode}`, exact: false, component: Details }
];

export const  App = () => {
    return (
        <div className={styles.App}>
            <Switch>
                {routes.map(
                    ({path, component, exact}) =>
                        <Route key={path} path={path} exact={exact} component={component}/>
                    )
                }
                <Redirect to={links.LIST}/>
            </Switch>
        </div>
    )};
