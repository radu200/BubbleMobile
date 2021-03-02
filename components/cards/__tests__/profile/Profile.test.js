import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../profile/Profile';

it('Profile component renders correctly', () => {
    const user = {
        accountTotal: 0,
        profileImageUrl: "url",
        fullName: "Janet Stevans",
        email: "email@j.com",
        mobileNumber: "76236828",
        biography: "about me",
        address: {
            houseNo: "2",
            postcode: "3BD ST",
            street: "James Bond",
            town: "London"
        },
        children: [{
            age: 2,
            gender: 0
        }]
    }

    const tree = renderer
        .create(<Profile user={user} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

