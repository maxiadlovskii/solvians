import React from 'react';
import Adapter from 'enzyme-adapter-react-16/build';
import { shallow, configure  } from 'enzyme/build';
configure({ adapter: new Adapter() });
import { shallowToJson } from 'enzyme-to-json';
import { Details } from '../../components/presentational/Detais/Details';
import { ListItem } from '../../components/presentational/ListItem/ListItem';
import { List } from '../../components/presentational/List/List';
import { list } from "../moks";


describe('Details', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Details isFetching={true} country={list[0]} isFailed={false}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});

describe('ListItem', () => {
    it('should render correctly', () => {
        const output = shallow(
            <ListItem country={list[0]} onClick={console.log}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
describe('List', () => {
    it('should render correctly', () => {
        const output = shallow(
            <List list={list} isFetching={false} onItemClick={console.log}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});