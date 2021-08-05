import axios from "axios";
//types
export const ALL_DATA = 'ALL_DATA';
export const ALL_TYPE = 'ALL_TYPE';
export const STATUS = 'STATUS';
export const GET_A_Z = 'GET_A_Z';
export const MAYOR_MENOR = 'MAYOR_MENOR';
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
    const resp = await axios.get(`${API_URL}/?q={}&filter=${value}`);
  console.log(resp)
    dispatch({
      type:ALL_TYPE,
      payload:resp

    })
  } catch (error) {
    console.log(error)
  }
};

export const getOrderStatus = (value) => async(dispatch)=>{
  const resp = await axios.get(`${API_URL}/?grouphy=${value}`);
  console.log(resp)
  dispatch({
    type:STATUS,
    payload:resp
  })
};

export const getOrderCuit = (order)=> async(dispatch) =>{
  const resp = await axios.get(`${API_URL}/?q={}&dir=${order}`);
  console.log(resp)
  dispatch({
    type:MAYOR_MENOR,
    payload:resp
  })
};
export const setOrderAZ = (commerce)=> async(dispatch) =>{
  dispatch({
    type:GET_A_Z,
    payload:commerce
  })
};