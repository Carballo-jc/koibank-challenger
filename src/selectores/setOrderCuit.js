export const setOrderCuit = (value, array) => {
    switch (value) {
        case "MENOR":
          return array.sort((a, b) => {
            if (a.cuit > b.cuit) {
              return 1;
            } else {
              return -1;
            }
          });
        case "MAYOR":
          return array.sort((a, b) => {
            if (a.cuit < b.cuit) {
              return 1;
            } else {
              return -1;
            }
          });
          case "ALL":
            return array;
    
        default:
          return array;
      }
};

export default setOrderCuit;
