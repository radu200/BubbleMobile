import { INSTANCE_API } from "../config/Api";

export const getConfirmedBookings = async () => {
  try {
    const url = "/api/booking/activesummary";
    const res = INSTANCE_API.get(url);
    return res;
  } catch (err) {
    return err;
  }
};
