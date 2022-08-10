import { hostNameUrl } from "../config/api";
import axios from "axios";

// export const findPets = () => {
//   return axios.get(`${hostNameUrl}/dogs`);
// };

export const login = async (user) => {

    const res = axios.post(`${hostNameUrl}/login/`, {
        "username": user.email,
        "password": user.password,
    });


    return res;
}
export const getAllBond = async () => {
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcml0aGlyYWoiLCJpYXQiOjE2NjAwMjk5NTYsImV4cCI6MTY2MDQ2MTk1Nn0.WSt-3_fPV_OiD9_cAncAiUWWKo2KeN4n8BH6CmUu79c");

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // fetch("https://db-grads-v6wg-group-12.nw.r.appspot.com/securities/", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));


    // const res = {
    //     data:
    //         [
    //             {
    //                 "id": 1,
    //                 "isin": "ABCDEFGHIJ1",
    //                 "cusip": "XYZCVBNMLK1",
    //                 "issuer": "Company1",
    //                 "maturityDate": "2022-08-06",
    //                 "coupon": 10.2,
    //                 "type": "Secured",
    //                 "faceValue": 1000,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 2,
    //                 "isin": "ABCDEFGHIJ2",
    //                 "cusip": "XYZCVBNMLK2",
    //                 "issuer": "Company2",
    //                 "maturityDate": "2022-08-16",
    //                 "coupon": 12.4,
    //                 "type": "Secured",
    //                 "faceValue": 1200,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 3,
    //                 "isin": "ABCDEFGHIJ3",
    //                 "cusip": "XYZCVBNMLK3",
    //                 "issuer": "Company3",
    //                 "maturityDate": "2022-08-22",
    //                 "coupon": 11.2,
    //                 "type": "Un-Secured",
    //                 "faceValue": 800,
    //                 "status": "Active"
    //             },
    //             {
    //                 "id": 4,
    //                 "isin": "ABCDEFGHIJ4",
    //                 "cusip": "XYZCVBNMLK4",
    //                 "issuer": "Company4",
    //                 "maturityDate": "2022-08-30",
    //                 "coupon": 14.1,
    //                 "type": "Secured",
    //                 "faceValue": 700,
    //                 "status": "Active"
    //             },
    //             {
    //                 "id": 5,
    //                 "isin": "ABCDEFGHIJ5",
    //                 "cusip": "XYZCVBNMLK5",
    //                 "issuer": "Company5",
    //                 "maturityDate": "2022-08-01",
    //                 "coupon": 9.5,
    //                 "type": "Un-Secured",
    //                 "faceValue": 1300,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 6,
    //                 "isin": "ABCDEFGHIJ6",
    //                 "cusip": "XYZCVBNMLK6",
    //                 "issuer": "Company6",
    //                 "maturityDate": "2022-08-04",
    //                 "coupon": 8.7,
    //                 "type": "Secured",
    //                 "faceValue": 1250,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 7,
    //                 "isin": "ABCDEFGHIJ7",
    //                 "cusip": "XYZCVBNMLK7",
    //                 "issuer": "Company7",
    //                 "maturityDate": "2022-08-11",
    //                 "coupon": 15.7,
    //                 "type": "Secured",
    //                 "faceValue": 1380,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 8,
    //                 "isin": "ABCDEFGHIJ8",
    //                 "cusip": "XYZCVBNMLK8",
    //                 "issuer": "Company8",
    //                 "maturityDate": "2022-08-19",
    //                 "coupon": 13.5,
    //                 "type": "Un-Secured",
    //                 "faceValue": 1100,
    //                 "status": "Active"
    //             },
    //             {
    //                 "id": 9,
    //                 "isin": "ABCDEFGHIJ9",
    //                 "cusip": "XYZCVBNMLK9",
    //                 "issuer": "Company9",
    //                 "maturityDate": "2022-08-08",
    //                 "coupon": 11.6,
    //                 "type": "Secured",
    //                 "faceValue": 900,
    //                 "status": "Active"
    //             },
    //             {
    //                 "id": 10,
    //                 "isin": "ABCDEFGHI10",
    //                 "cusip": "XYZCVBNML10",
    //                 "issuer": "Company10",
    //                 "maturityDate": "2022-08-20",
    //                 "coupon": 10.8,
    //                 "type": "Secured",
    //                 "faceValue": 1500,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 11,
    //                 "isin": "ABCDEFGHI11",
    //                 "cusip": "XYZCVBNML11",
    //                 "issuer": "Company11",
    //                 "maturityDate": "2022-08-02",
    //                 "coupon": 12.6,
    //                 "type": "Un-Secured",
    //                 "faceValue": 1400,
    //                 "status": "Matured"
    //             },
    //             {
    //                 "id": 12,
    //                 "isin": "ABCDEFGHI12",
    //                 "cusip": "XYZCVBNML12",
    //                 "issuer": "Company12",
    //                 "maturityDate": "2022-08-27",
    //                 "coupon": 7.8,
    //                 "type": "Secured",
    //                 "faceValue": 1080,
    //                 "status": "Active"
    //             },
    //             {
    //                 "id": 13,
    //                 "isin": "ABCDEFGHI13",
    //                 "cusip": "XYZCVBNML13",
    //                 "issuer": "Company13",
    //                 "maturityDate": "2022-08-13",
    //                 "coupon": 13.5,
    //                 "type": "Un-Secured",
    //                 "faceValue": 1260,
    //                 "status": "Active"
    //             }
    //         ]
    //    }
    // return res;

    
    //request  with user token and id
    const token= localStorage.getItem("jwt");
    const res= axios.get(`${hostNameUrl}/securities/`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    
    console.log("Response" ,res);
    return res;
    

}
export const getAllUsers = async () => {

    // const res = {
    //     data: [
    //         {
    //             "name": "Prithiraj",
    //             "email": "pb@db.com",
    //             "role": "ADMIN",
    //             "username": "prithiraj",
    //             "password": "pass1"
    //         },
    //         {
    //             "name": "Manish",
    //             "email": "mn@db.com",
    //             "role": "VIEWER",
    //             "username": "manish",
    //             "password": "pass2"
    //         },
    //         {
    //             "name": "Mihir",
    //             "email": "ms@db.com",
    //             "role": "VIEWER",
    //             "username": "mihir",
    //             "password": "pass3"
    //         },
    //         {
    //             "name": "Mufaddal",
    //             "email": "md@db.com",
    //             "role": "VIEWER",
    //             "username": "mufaddal",
    //             "password": "pass4"
    //         }
    //     ]
    // };
    // console.log("GetAllUser: ", res.data);
    // return res;
    
    // request  with user token and id
    const token = localStorage.getItem("jwt");
    const res = axios.get(`${hostNameUrl}/users/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    console.log("Response from getAllUsers", res);
    return res;
    

}
export const getAllTrades = async () => {

    // const res = {
    //     data: [
    //         {
    //             "id": 1,
    //             "securityId": 1,
    //             "bookId": 3,
    //             "counterPartyId": 2,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 2000,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-01",
    //             "settlementDate": "2022-09-01"
    //         },
    //         {
    //             "id": 2,
    //             "securityId": 2,
    //             "bookId": 2,
    //             "counterPartyId": 1,
    //             "quantity": 3,
    //             "status": "Completed",
    //             "price": 3600,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-05",
    //             "settlementDate": "2022-09-05"
    //         },
    //         {
    //             "id": 3,
    //             "securityId": 3,
    //             "bookId": 1,
    //             "counterPartyId": 3,
    //             "quantity": 1,
    //             "status": "Completed",
    //             "price": 800,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-13",
    //             "settlementDate": "2022-09-08"
    //         },
    //         {
    //             "id": 4,
    //             "securityId": 4,
    //             "bookId": 4,
    //             "counterPartyId": 4,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 1400,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-03",
    //             "settlementDate": "2022-09-18"
    //         },
    //         {
    //             "id": 5,
    //             "securityId": 5,
    //             "bookId": 3,
    //             "counterPartyId": 2,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 2600,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-05",
    //             "settlementDate": "2022-09-15"
    //         },
    //         {
    //             "id": 6,
    //             "securityId": 1,
    //             "bookId": 2,
    //             "counterPartyId": 1,
    //             "quantity": 3,
    //             "status": "Failed",
    //             "price": 3000,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-03",
    //             "settlementDate": "2022-09-20"
    //         },
    //         {
    //             "id": 7,
    //             "securityId": 1,
    //             "bookId": 1,
    //             "counterPartyId": 3,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 2000,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-04",
    //             "settlementDate": "2022-09-17"
    //         },
    //         {
    //             "id": 8,
    //             "securityId": 3,
    //             "bookId": 3,
    //             "counterPartyId": 2,
    //             "quantity": 4,
    //             "status": "Completed",
    //             "price": 3200,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-06",
    //             "settlementDate": "2022-09-06"
    //         },
    //         {
    //             "id": 9,
    //             "securityId": 3,
    //             "bookId": 2,
    //             "counterPartyId": 3,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 1600,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-03",
    //             "settlementDate": "2022-09-19"
    //         },
    //         {
    //             "id": 10,
    //             "securityId": 5,
    //             "bookId": 2,
    //             "counterPartyId": 4,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 2600,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-01",
    //             "settlementDate": "2022-09-09"
    //         },
    //         {
    //             "id": 11,
    //             "securityId": 5,
    //             "bookId": 4,
    //             "counterPartyId": 1,
    //             "quantity": 1,
    //             "status": "Completed",
    //             "price": 1300,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-03",
    //             "settlementDate": "2022-09-18"
    //         },
    //         {
    //             "id": 12,
    //             "securityId": 6,
    //             "bookId": 4,
    //             "counterPartyId": 2,
    //             "quantity": 2,
    //             "status": "Failed",
    //             "price": 2500,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-02",
    //             "settlementDate": "2022-09-11"
    //         },
    //         {
    //             "id": 13,
    //             "securityId": 4,
    //             "bookId": 4,
    //             "counterPartyId": 3,
    //             "quantity": 5,
    //             "status": "Completed",
    //             "price": 3500,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-03",
    //             "settlementDate": "2022-09-18"
    //         },
    //         {
    //             "id": 14,
    //             "securityId": 3,
    //             "bookId": 1,
    //             "counterPartyId": 4,
    //             "quantity": 1,
    //             "status": "Completed",
    //             "price": 800,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-05",
    //             "settlementDate": "2022-09-18"
    //         },
    //         {
    //             "id": 15,
    //             "securityId": 4,
    //             "bookId": 1,
    //             "counterPartyId": 3,
    //             "quantity": 3,
    //             "status": "Failed",
    //             "price": 2100,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-07",
    //             "settlementDate": "2022-09-14"
    //         },
    //         {
    //             "id": 16,
    //             "securityId": 2,
    //             "bookId": 2,
    //             "counterPartyId": 4,
    //             "quantity": 1,
    //             "status": "Completed",
    //             "price": 1200,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-03",
    //             "settlementDate": "2022-09-18"
    //         },
    //         {
    //             "id": 17,
    //             "securityId": 1,
    //             "bookId": 2,
    //             "counterPartyId": 3,
    //             "quantity": 1,
    //             "status": "Completed",
    //             "price": 1000,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-04",
    //             "settlementDate": "2022-09-21"
    //         },
    //         {
    //             "id": 18,
    //             "securityId": 7,
    //             "bookId": 2,
    //             "counterPartyId": 1,
    //             "quantity": 2,
    //             "status": "Completed",
    //             "price": 2760,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-01",
    //             "settlementDate": "2022-09-15"
    //         },
    //         {
    //             "id": 19,
    //             "securityId": 7,
    //             "bookId": 2,
    //             "counterPartyId": 2,
    //             "quantity": 4,
    //             "status": "Failed",
    //             "price": 5520,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-05",
    //             "settlementDate": "2022-09-19"
    //         },
    //         {
    //             "id": 20,
    //             "securityId": 6,
    //             "bookId": 2,
    //             "counterPartyId": 3,
    //             "quantity": 3,
    //             "status": "Completed",
    //             "price": 3750,
    //             "buySell": "TRUE",
    //             "tradeDate": "2022-02-04",
    //             "settlementDate": "2022-09-22"
    //         }
    //     ]
    // };
    // return res;


    // request  with user token and id
    const token = localStorage.getItem("jwt");
    const res = axios.get(`${hostNameUrl}/trade/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    console.log("Response from getAllTrades: ", res);
    return res;


}
export const AddUser = async (data) => {
    // request  with user token and id
    
    const token = localStorage.getItem("jwt");
    const res = axios.post(`${hostNameUrl}/users/`, {
        email: data.email,
        name: data.name,
        password: data.password,
        role: data.role,
        username: data.username
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    console.log("Response", res);
    return res;


}
export const getTradeBySecurityId = async (id) => {

    // const res = {
    //     data: [
    //         {
    //             "trade_id": 12,
    //             "buy_sell": true,
    //             "quantity": 2,
    //             "book_id": 4,
    //             "price": 2500,
    //             "status": "Failed",
    //             "counter_party_id": 2,
    //             "settlement_date": "2022-09-11",
    //             "trade_date": "2022-02-02",
    //             "book_name": "book4",
    //             "counter_party_name": "Aditi",
    //             "security_isin": "ABCDEFGHIJ6",
    //             "security_cusip": "XYZCVBNMLK6",
    //             "security_issuer": "Company6"
    //         },
    //         {
    //             "trade_id": 20,
    //             "buy_sell": true,
    //             "quantity": 3,
    //             "book_id": 2,
    //             "price": 3750,
    //             "status": "Completed",
    //             "counter_party_id": 3,
    //             "settlement_date": "2022-09-22",
    //             "trade_date": "2022-02-04",
    //             "book_name": "book2",
    //             "counter_party_name": "Riya",
    //             "security_isin": "ABCDEFGHIJ6",
    //             "security_cusip": "XYZCVBNMLK6",
    //             "security_issuer": "Company6"
    //         }
    //     ]
    // };

    // return res;


    // request  with user token and id
    const token = localStorage.getItem("jwt");
    // https://db-grads-v6wg-group-12.nw.r.appspot.com/securities/6/trade/
    const res = axios.get(`${hostNameUrl}/securities/${id}/trade/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    console.log("Response", res);
    return res;


}
export const getBondInfoById = async (id) => {
    //request  with user token and id
    //http://db-grads-v6wg-group-12.nw.r.appspot.com/securities/%7Bid%7D?id=1'
    const token = localStorage.getItem("jwt");
    const res = axios.get(`${hostNameUrl}/securities/%7Bid%7D?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    console.log("Response", res);
    return res;

    // const res = {
    //     data: {
    //         "id": 1,
    //         "isin": "ABCDEFGHIJ1",
    //         "cusip": "XYZCVBNMLK1",
    //         "issuer": "Company1",
    //         "maturityDate": "2022-08-06",
    //         "coupon": 10.2,
    //         "type": "Secured",
    //         "faceValue": 1000,
    //         "status": "Matured"
    //     }
    // }

    // return res;

}


