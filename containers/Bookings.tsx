import React, { useEffect, useState } from "react";
import BookingsScreen from "../screens/Bookings";
import { getConfirmedBookings } from "../api/Bookings";
import { BookingSummary } from '../types';
import StaticData from '../data/static';

interface state {
  confirmedBookings: Array<BookingSummary>,
  spinner: boolean,
  failure: boolean,
  msg: string
}

export default function Bookings() {

  const [state, setState] = useState<state>({
    confirmedBookings: [],
    failure: false,
    spinner: false,
    msg: "",
  });

  useEffect(() => {
    fetchConfirmedBookings();
  }, []);

  async function fetchConfirmedBookings() {
    try {
      setState({ ...state, spinner: true });
      const res = await getConfirmedBookings();
      if (res.status === 200) {
        const confirmedBookings = res.data.confirmedBookings
        setState({ ...state, spinner: false, confirmedBookings, });
      }
    } catch (err) {
      setState({ ...state, spinner: false, failure: true, msg: StaticData.msg.error });
    }
  }


  return <BookingsScreen {...state} />;
}
