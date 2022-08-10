import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './BondInfo.css';
import BondInfoTable from './BondInfo_table';
import { getBondInfoById } from '../../services/userServices';
const cardelement = (title, value) => {
    return (
        <div className='displayinline' >
            <div className='cardtitle'>{title}  </div>
            <div className='cardvalue'>{value} </div>
        </div>
    );

}
export default function BondInfoCards() {
    const { id } = useParams();
    console.log("Bond Id: ", id);
    // set the data using useEffect initially                                        ??
    const [bondInfo, setbondInfo] = React.useState({
        "id": 1,
        "isin": "ABCDEFGHIJ1",
        "cusip": "XYZCVBNMLK1",
        "issuer": "Company1",
        "maturityDate": "2022-08-06",
        "coupon": 10.2,
        "type": "Secured",
        "faceValue": 1000,
        "status": "Matured"
   });


    const getBondById = async () => {
        try {
            const response = await getBondInfoById(id);
            setbondInfo(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBondById();
    }, []);
    /*
        1.get bonds info by ID
        2. get all trades  where security_id=id

    */
    return (
        <div className='maindiv'>
            <h4 className='titleh4'>Bond Info - # {bondInfo.isin} </h4>

            <div className='Cardbox' >

                <h5>Details-</h5>
                <div className='flex'>
                    {/* {cardelement("Id", bondInfo.id)} */}
                    {cardelement("Isin", bondInfo.isin)}
                    {cardelement("Cusip", bondInfo.cusip)}
                    {cardelement("Issuer", bondInfo.issuer)}
                    {cardelement("MaturityDate", bondInfo.maturityDate)}
                    {cardelement("Coupon", bondInfo.coupon)}
                    {cardelement("Type", bondInfo.type)}
                    {cardelement("FaceValue", bondInfo.faceValue)}
                    {cardelement("Status", bondInfo.status)}
                  
                </div>


            </div>
            <BondInfoTable id={id}/>
        </div>
    )
}
