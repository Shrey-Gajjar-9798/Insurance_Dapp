import React from 'react'
import { useState } from 'react';
import AgentTable from './components/AgentTable';
import FetchTable from './components/FetchTable';
import InsReqDetail from './components/InsReqDetail';
import "./storeform.css";

const FetchForm = (props) => {
  const [policynumber, setpolicynumber] = useState();
  const [insurancetable, setinsurancetable] = useState([]);
  const [agenttable, setagenttable] = useState([]);
  const [insuranceReq, setinsuracnceReq] = useState([]);
  const [getnumber, setgetnumber] = useState(false);

  function handlepolicynumber(e) {
    setpolicynumber(e.target.value);
  }

  const fetchdata = async() =>{
    try {
      const details = await props.contract.getInsCovDetails(policynumber);
      console.log(details);
      setinsurancetable(details);
      const agnetdetails = await props.contract.getAgentDetails(policynumber);
      console.log(agnetdetails);
      setagenttable(agnetdetails);
      const insReqDetails = await props.contract.viewInsuranceReqDetails(policynumber);
      setinsuracnceReq(insReqDetails);
      setgetnumber(true);

    } catch (error) {
      alert("not able to fetch the data");
    }
    console.log("inserttable content",insurancetable);
  };
 
  return (
    <>
    <div className='storeformbody'>
        <div className='formcontainer'>
            <div className='formheader'>
            <h3>Fetch Data</h3>
            <button type='button' onClick={props.close} >close</button>
            </div>
            <form className='fetchdataform'>
            <div className='inputdesign'>
              <label>Insurance Requirement CoverageId</label>
              <input type="number" value={policynumber} onChange={handlepolicynumber}></input>
            </div>
              <button type='button' className='fetchbtn' onClick={fetchdata}>Fetch Data</button>
            </form>
            <div className='fetchtables'>
            {getnumber && <FetchTable table={insurancetable}/>}
            {getnumber && <AgentTable table={agenttable}/>}
            {getnumber && <InsReqDetail table={insuranceReq} />}
            </div>
        </div>
    </div>
    </>
  )
}

export default FetchForm; 