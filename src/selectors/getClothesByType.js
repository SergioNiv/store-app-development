import { getClothesByGender } from './getClothesByGender';

export const getClothesByType = (type, gender) => {
	const clothes = getClothesByGender(gender);

	const validType = ['blusas', 'pantalones', 'polo', 'sueter', 'camisa', null];

	if (!validType.includes(type)) {
		throw new Error(`Type "${type}" no es correcto`);
	}

	return clothes.filter((clothes) => clothes.type === type);
};
