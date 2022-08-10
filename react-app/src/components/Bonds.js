import React from 'react'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import './cssfiles/Bonds.css'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { getAllBond } from '../services/userServices';
import { useHistory } from 'react-router-dom'

const Bonds = () => {
  let isfav = false;
  const style_icon = { fontSize: "1.5em", color: "black" }
  const [bondsdata, setBonds] = useState([]);
  const history = useHistory();
  const getBonds = async () => {
    try {
      const response = await getAllBond();
      setBonds(response.data);
      console.log("BondsData: ",bondsdata);

    } catch (error) {
      console.log(error);
    }
  };
  const [dummydelete, setdummydelete] = useState([]);
  const handleOnEditClick = (id) => {
    console.log(id);
    history.push(`/bondinfo/${id}`);
  }
  const handleOnDeleteClick = (id) => {
    console.log(id);
    setdummydelete(id);
    //deleteapicall

  }

  const checkstatus=(maturitydate, status)=>{
    let newDate = new Date()
    let mat_date=new Date(maturitydate);
    if(mat_date<=newDate)
    {
       if(status=="Active")
       {
         return(
          <Button className="color_red">Error</Button>
         )
       }
       else
       {
        return(
           <Button className="statusbutton">Success</Button>
        )
  
       }
    }
    return(
      <Button className="color_yellow">Pending</Button>
  
    );
   
  }
  const columns = [
    // {
    //   name: "ID ",
    //   selector: row => row.id
    // },
    {
      name: "ISIN",
      selector: row => row.isin,
    },
    {
      name: "Cusip",
      selector: row => row.cusip
    },
    {
      name: "Maturity Date",
      selector: row => row.maturityDate,
      sortable: true,
    },
    {
      name: "Coupon",
      selector: row => row.coupon
    },
    {
      name: "Status",
      selector: row => row.status
    },
    {
      name: "Issuer",
      selector: row =>row.issuer
      
    },
    {
      name: "Face Value",
      selector: row =>row.faceValue
      
    },
    // {
    //   name: "Type",
    //   selector: row =>row.type
      
    // },
    {

      name: "Information",
      selector: row => <div><Button onClick={() => { handleOnEditClick(row.id) }} className='IconButton'><AiOutlineInfoCircle style={style_icon} /></Button>
        {/* <Button className='IconButton' onClick={() => { handleOnDeleteClick(row.name) }}><MdDelete style={style_icon}></MdDelete></Button> */}
        </div>
    },
    {
      name: "",
      selector: row=> <div>{checkstatus(row.maturityDate,row.status)}</div>,
    },


  ];
  useEffect(() => {
    getBonds();

  }, []);
  useEffect(() => {
    console.log("dummydelete");
    getBonds();
  }, [dummydelete]);


  return (
    <div className="tablecss">
      <h4>All Bonds</h4>
      <DataTable
        striped hover cellpadding="0"
        columns={columns}
        data={bondsdata}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='800px'
        selectableRowsHighlight
        highlightOnHover>
      </DataTable>
    </div>
  )
}

export default Bonds