import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
	{
		_id: 1007,
		firstName: "Derek",
		lastName: "Bishop",
		email: "derek@bishop.com",
		password: "asdfasdf",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
