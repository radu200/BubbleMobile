import React from 'react';
import renderer from 'react-test-renderer';
import Booking from '../../Booking';

it('Booking component renders correctly', () => {
    const data = {
        id: "2",
        bookingStatus: true,
        scheduledStart: "2020-10-13T07:45:00.000Z",
        scheduledDuration: 8.25,
        otherUserFullName: "Janet Stevans"
    }
    const tree = renderer
        .create(<Booking data={data} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})