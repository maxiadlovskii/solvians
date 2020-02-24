import React from 'react';
import Adapter from 'enzyme-adapter-react-16/build';
import { shallow, configure  } from 'enzyme/build';
configure({ adapter: new Adapter() });
import { shallowToJson } from 'enzyme-to-json';
import { Loader } from '../../components/common/Loader/Loader';
import { Failed } from '../../components/common/Failed/Failed';
import { Image } from '../../components/common/Image/Image';
import {skeletons, pictureUrl } from "../moks";


describe('Loader', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Loader type={skeletons.LINE} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});


describe('Failed', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Failed />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Image', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Image src={pictureUrl}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
