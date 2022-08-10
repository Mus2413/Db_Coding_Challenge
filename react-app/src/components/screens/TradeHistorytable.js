import React from 'react'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react';
import '../cssfiles/Bonds.css'
import { getAllBond, getAllTrades, getDummyAllBond } from '../../services/userServices';
const TradeHistorytable = () => {

  const [tradedata, setTradeData] = useState([]);
  const [search, setSearch] = useState([]);
  const [filterTrade, setFilterTrade] = useState([]);

  const getTradeData = async () => {
    try {
      //change below two lines in actual code ==========================================================================>
      // const response = await getAllBond();
      const response = await getAllTrades();
      setTradeData(response.data);
      setFilterTrade(response.data);


    } catch (error) {
      console.log(error);
    }
  };
  /*
     @JsonProperty("trade_id") long getId();

    @JsonProperty("book_id") long getBookId();
    @JsonProperty("book_name") String getBookName();

    @JsonProperty("counter_party_id") long getCounterPartyId();
    @JsonProperty("counter_party_name") String getCounterPartyName();

    @JsonProperty("security_isin") String getSecurityIsin();
    @JsonProperty("security_cusip") String getSecurityCusip();
    @JsonProperty("security_issuer") String getSecurityIssuer();

    @JsonProperty("quantity") int getQuantity();
    @JsonProperty("status") String getStatus();
    @JsonProperty("price") int getPrice();
    @JsonProperty("buy_sell") boolean getBuySell();
    @JsonProperty("trade_date") Date getTradeDate();
    @JsonProperty("settlement_date") Date getSettlementDate();
  */
  const columns = [
    {
      name: "trade_id",
      selector: row => row.trade_id
    },
    {
      name: "Book Name",
      selector: row => row.book_name,
      sortable: true,
    },
    {
      name: "Counter Party Name",
      selector: row => row.counter_party_name
    },
    {
      name: "Security Isin",
      selector: row => row.security_isin
    },
    // {
    //   name: "security_cusip",
    //   selector: row => row.security_cusip
    // },
    {
      name: "security_issuer",
      selector: row => row.security_issuer
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
    {
      name: "Trade Date",
      selector: row => row.trade_date
    },
    {
      name: "Settlement Date",
      selector: row => row.settlement_date
    },
  ];


  useEffect(() => {
    getTradeData();

  }, []);

  useEffect(() => {
    const result = tradedata.filter((trade) => {
      return trade.security_isin.toString().match(search.toString());
    })
    setFilterTrade(result);
  }, [search]);
  
  return (
    <div className="tablecss">
      <h4>Trade History</h4>

      <DataTable
        striped hover cellpadding="0"
        columns={columns}
        data={filterTrade}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='800px'
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input type="text" placeholder="Search by ISIN" className='w-25 form-control' value={search}
            onChange={(e) => setSearch(e.target.value)} />
        }
      >
      </DataTable>
    </div>
  )
}

export default TradeHistorytable