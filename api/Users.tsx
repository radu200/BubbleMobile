import { INSTANCE_API } from "../config/Api";

export const getUser = async () => {
	try {
		const url = "/api/user";
		const res = INSTANCE_API.get(url);
		return res;
	} catch (err) {
		return err;
	}
};
