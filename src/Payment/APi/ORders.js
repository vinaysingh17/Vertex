// export const base_URL = "https://vertex-education.herokuapp.com";
export const base_URL =
  "https://3wsvy1ywcj.execute-api.us-east-2.amazonaws.com";

// export const base_URL = "http://localhost:5000";

export const getOrder = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    referrerPolicy: "unsafe-url",
  };

  fetch(base_URL + "/api/createorder", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //   console.log(result);
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

// export const getOrder = (callBack) => {
//   return fetch(`${base_URL}/createorder`, {
//     method: "GET",
//   })
//     .then((response) => callBack(response))
//     .catch((err) => console.log(err));
// };

export const grabStatus = (paymentId) => {
  return fetch(`${base_URL}/payments/${paymentId}`, {
    method: "GET",
    referrerPolicy: "unsafe-url",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
