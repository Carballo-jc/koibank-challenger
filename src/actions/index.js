import axios from "axios";
//types
export const ALL_DATA = 'ALL_DATA';
export const ALL_TYPE = 'ALL_TYPE';
export const STATUS = 'STATUS';
export const GET_A_Z = 'GET_A_Z';
//url base
const API_URL = 'https://api.koibanx.com/stores';//recordar que esta URl no devolvera datos solo es simulacion

export const  getAllData =() =>async(dispatch)=>{
    try {
      const resp = await axios.get(API_URL);
      dispatch({
        type: ALL_DATA,
        payload: resp.data
             
      });
    } catch (error) {
      console.log("Hubo un Error al Hacer la peticion");
      console.log(error);
    }
  
};

export const getFilterType =(value)=> async(dispatch)=>{
  try {
    // const resp = await axios.get(API_URL);
    dispatch({
      type:ALL_TYPE,
      payload:value

    })
  } catch (error) {
    console.log(error)
  }
};

export const getOrder = (value) => async(dispatch)=>{
  dispatch({
    type:STATUS,
    payload:value
  })
};

export const getOrderCuit = ()=> async(dispatch) =>{
  
}
export const setOrderAZ = (commerce)=> async(dispatch) =>{
  dispatch({
    type:GET_A_Z,
    payload:commerce
  })
}