// import config from "../config/config";
// const { AUTH: { USER, PASSWORD } } = config
// const IGNORE_IN_URL = ['validation'];

const MESSAGE_ERROR = {
  estado: 0,
  message: 'No se pudo realizar la peticion'
};

export default async function connection({ method = 'GET', url = '', extraHeaders = {}, body = {}, formDataMode = false }) {
  // const headers = new Headers({
  //   'Accept-Charset': 'utf-8',
  //   'Authorization': 'Basic ' + btoa(USER + ":" + PASSWORD),
  //   'Content-Type': formDataMode ? 'multipart/form-data' : 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // });

  // const userData = JSON.parse(localStorage.getItem('jphfront1'));

  // if (userData) {
  //   const { token } = userData;
  //   headers.append('token', token);
  // }


  /*AGREGRO LOS HEADERS EXTRAS ENVIADOS*/
  // if (Object.keys(extraHeaders).length !== 0) {
  //   for (var headers_key in extraHeaders) {
  //     headers.append(headers_key, extraHeaders[headers_key]);
  //   }
  // }

  const options = {
    method: method,
    // headers: headers,
    redirect: 'follow',
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    options.body = formDataMode ? body : JSON.stringify(body)
  }

  let response;
  try {
    response = await fetch(url, options);
    return response

  } catch (error) {
    // console.error('Request failed II', error);
    response = MESSAGE_ERROR;
    response.message = error;
  } finally {
    return response;
  }
}