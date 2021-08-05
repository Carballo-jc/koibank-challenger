export const getItemActive = (value, array) => {
    switch (Number(value)) {
		case 1:
			return array.filter((el) => el.status === Number(value));

		case 0:
			return array.filter((el) =>  el.status === Number(value));

		case 'ALL':
			return array

		default:
			return array;
	}
  };
  
  export default getItemActive;
  