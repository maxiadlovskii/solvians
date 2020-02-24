import React from 'react';
import styles from './ListItem.module.scss'
import {Image} from "../../common/Image/Image";
import {countryModel} from "../../../constants/models";

export const ListItem = ({ country, onClick }) => (
    <li className={styles.wrapper} onClick={() => onClick(country[countryModel.ALPHA_3_CODE]) }>
        <Image src={country[countryModel.FLAG]} width={100}/>
        <article className={styles.info}>
            <h4 className={styles.name}>{country[countryModel.NAME]}</h4>
            <span>{'Population:'}</span>
            <span>{country[countryModel.POPULATION]}</span>
        </article>
    </li>
);