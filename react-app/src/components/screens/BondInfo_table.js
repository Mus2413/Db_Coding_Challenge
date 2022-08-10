import React from 'react'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react';
import './BondInfo.css'
import { getAllBond, getTradeBySecurityId } from '../../services/userServices';


function BondInfoTable(props){
  const id= props.id;
  // set the data using useEffect initially                                        ??
  const [tradeData, setTradeData] = React.useState([]);


  const getTradeById = async () => {
    
    try {
      const response = await getTradeBySecurityId(id);
      setTradeData(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getTradeById();
  },[]);


  const [bonddata, setBondData] = useState([]);;
  const [filterBond, setFilterBond] = useState([]);

  const getBondData = async () => {
    try {
      const response = await getAllBond();
      setBondData(response.data);
      setFilterBond(response.data);


    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "trade_id",
      selector: row => row.trade_id
    },
    // {
    //   name: "BookId",
    //   selector: row => row.book_id,
    //   sortable: true,
    // },
    // {
    //   name: "Counterpart",
    //   selector: row => row.counter_party_id
    // },
    {
      name: "counter_party_name",
      selector: row => row.counter_party_name
    },
    {
      name: "security_cusip",
      selector: row => row.security_cusip
    },
    {
      name: "security_issuer",
      selector: row => row.security_issuer
    },
    {
      name: "Security ISIN",
      selector: row => row.security_isin
    },
    {
      name: "Quantity",
      selector: row => row.quantity
    },
    {
      name: "Status",
      selector: row => row.status
    },
    {
      name: "Price",
      selector: row => row.price
    },
    // {
    //   name: "Buy_Sell",
    //   selector: row => row.buy_sell.toString()
    // },
    {
      name: "Trade Date",
      selector: row => row.trade_date
    },
    {
      name: "Settlement Date",
      selector: row => row.settlement_date
    },
    
  ];
  // "trade_id": 12,
  // "buy_sell": true,
  // "quantity": 2,
  // "book_id": 4,
  // "price": 2500,
  // "status": "Failed",
  // "counter_party_id": 2,
  // "settlement_date": "2022-09-11",
  // "trade_date": "2022-02-02",
  // "book_name": "book4",
  // "counter_party_name": "Aditi",
  // "security_isin": "ABCDEFGHIJ6",
  // "security_cusip": "XYZCVBNMLK6",
  // "security_issuer": "Company6"

  // useEffect(() => {
  //   getBondData();

  // }, []);




  return (
    <div className="tablecss">
      <h4>Trade  </h4>
      <DataTable
        striped hover cellpadding="0"
        columns={columns}
        data={tradeData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='800px'
        selectableRowsHighlight
        highlightOnHover
      >
      </DataTable>
    </div>
  )
}

export default BondInfoTable