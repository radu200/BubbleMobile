import React from 'react';
import renderer from 'react-test-renderer';
import Children from '../../profile/Children';

it('Children component renders correctly', () => {
    const data = [{
        age: 2,
        gender: 0
    },
    {
        age: 11,
        gender: 1
    }]
    const tree = renderer
        .create(<Children data={data} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})