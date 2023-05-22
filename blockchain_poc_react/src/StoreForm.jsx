import React from 'react'
import "./storeform.css";
import { useState } from 'react';
import QRCode from "qrcode";
import Stepper from 'react-stepper-horizontal';
import { Web3Storage } from 'web3.storage';

const StoreForm = (props) => {
    const [count, setcount] = useState(3);
    const [filepdf, setfilepdf] = useState();
    const [cid, setcid] = useState("");
    const [qrimg, setqrimg] = useState("");

    const [insuaranceReqId, setinsuaranceReqId] = useState();
    const [ReqCovID, setReqCovID] = useState("");
    const [CovId, setCovId] = useState();
    const [CovName, setCovName] = useState();
    const [InsCovId, setInsCovId] = useState();
    const [contractId, setcontractId] = useState();

    const [agentname, setagentname] = useState("");
    const [companyId, setcompanyId] = useState();
    const [email, setemail] = useState("");
    const [agcontractId, setagcontractId] = useState();
    const [agConName, setagConName] = useState("");
    const [contractemail, setcontractemail] = useState("");

    const [insReqCovDetailId, setinsReqCovDetailId] = useState();
    const [coverageId, setcoverageId] = useState();
    const [coverageDetailId, setcoverageDetailId] = useState();
    const [coverageDetailTypeId, setcoverageDetailTypeId] = useState("");
    const [name, setname] = useState("");
    const [value, setvalue] = useState();
    const [insuredValue, setinsuredValue] = useState();


    function incskipper () {
        if(count <4){
            setcount(curr => curr + 1);
        }
    }
    function decskipper () {
        if(count==0){
            setcount(0);
        }else{
            setcount(curr => curr - 1);
        }
     }

     function handlefileupload(e){
        setfilepdf(e.target.value)
        console.log(filepdf)
     }
     function handleInsuaranceReqId(e) {
        setinsuaranceReqId(e.target.value);
     }
     function handleReqCovID (e) {
        setReqCovID(e.target.value);
     }
     function handleCovId (e) {
        setCovId(e.target.value);
     }
     function handleCovName (e) {
        setCovName(e.target.value);
     }
     function handleInsCovId (e) {
        setInsCovId(e.target.value);
     }
     function handleContractId (e) {
        setcontractId(e.target.value);
     }
     function handleagentname (e) {
        setagentname(e.target.value);
     }
     function handlecompanyId(e) {
        setcompanyId(e.target.value);
     }
     function handleemail(e) {
        setemail(e.target.value);
     }
     function handleagcontractId(e) {
        setagcontractId(e.target.value);
     }
     function handleagCovName (e) {
        setagConName(e.target.value);
     }
     function handlecontractemail(e) {
        setcontractemail(e.target.value);
     }

     function handleinsReqCovDetailId(e){
        setinsReqCovDetailId(e.target.value);
     }
     function handlecoverageId(e){
        setcoverageId(e.target.value);
     }
     function handlecoverageDetailId(e){
        setcoverageDetailId(e.target.value);
     }
     function handlecoverageDetailTypeId(e){
        setcoverageDetailTypeId(e.target.value);
     }
     function handlename(e){
        setname(e.target.value);
     }
     function handlevalue(e){
        setvalue(e.target.value);
     }
     function handleinsuredValue(e){
        setinsuredValue(e.target.value);
     }


     const SubmitToIpfs = async (e) => {
        e.preventDefault();
        const storage =  new Web3Storage({token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxMDVDZTFGODU5RTZBODU2QzQwNTAyRDY0NDM5NGE0NjFhRDg3MTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njc0NzU3MTgxMDQsIm5hbWUiOiJwb2NkZW1vIn0.r5qhsBm00fAv9c1rmuXEOYZrOfDKkMm4rd8_DHOWhrU'});
        console.log("PLease wait");
        const fileInput = document.querySelector('input[type="file"]')
        try {
            const uniquecode =await storage.put(fileInput.files);
            console.log("Done");
            setcid(uniquecode);
            console.log("Successfully added !");
        } catch (e) {
            alert(e)
        }
        setcount(curr => curr + 1);
     }

     const addinsuranceDetails = async(e) =>{
        e.preventDefault();
        try {
          const addInsDetails = await props.contract.storeInsuranceCoverDetails([insuaranceReqId,ReqCovID,CovId,CovName,CovName,InsCovId,contractId]);
          console.log([parseInt(insuaranceReqId),parseInt(ReqCovID),parseInt(CovId),CovName,true,parseInt(InsCovId),parseInt(contractId)]);
        console.log("form 1 submitted successfully");
        setcount(curr => curr + 1);
        } catch (error) {
          alert(error);
        }
      }
      const addAgentDetails = async(e) =>{
        e.preventDefault();
        try {
          const addAgent = await props.contract.storeAgentDetails([insuaranceReqId,companyId, agentname,email,agcontractId,agConName,contractemail]); //id,name, email,contractid,cname ,cemial
          console.log(addAgent);
        console.log("form 2 submitted successfully");
        setcount(curr => curr + 1);
        } catch (error) {
          alert(error);
        }
      }
      const addInsuranceReqDetails = async(e) =>{
        e.preventDefault();
        try {
          const addInsReq = await props.contract.storeInsuranceCoverageDetails([insuaranceReqId,insReqCovDetailId,coverageId,coverageDetailId,coverageDetailTypeId,name,value,insuredValue]); //id,name, email,contractid,cname ,cemial
          console.log(addInsReq);
        console.log("form 3 submitted successfully");
        console.log({insuaranceReqId});
        const res = await QRCode.toDataURL(insuaranceReqId);
        console.log(res);
        setqrimg(res);
        setcount(curr => curr + 1);
        } catch (error) {
          alert(error);
        }
      }

  return (
    <>
    <div className='storeformbody'>
        <div className='formcontainer'>
            <div className='formheader'>
            <h3>Store Data Form</h3>
            <button type='button' onClick={props.close} >close</button>
            </div>
            <div className= "formdetails">
                <div className='stepper'>
                <Stepper steps={ [{title: 'Insurance Details'}, {title: 'Agent Details'}, {title: 'Insurance Requirement'}, {title: 'Decentralized Storage'},{title:"QRCode"}] } activeStep={ count } completeColor="#8a2be2" activeColor="#8a2be2" />
                </div>
                {count===0 && <section>
                    <h2>Insurance Details</h2>
                    <form onSubmit={addinsuranceDetails}>
                        <div className='inputdesign'>
                            <label>Insurance Requirement Id</label>
                            <input type="number" value={insuaranceReqId} onChange={handleInsuaranceReqId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Insurance Requirement CoverageId</label>
                            <input type="number" value={ReqCovID} onChange={handleReqCovID}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>CoverageId</label>
                            <input type="number" value={CovId} onChange={handleCovId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Coverage Name</label>
                            <input type="text" value={CovName} onChange={handleCovName}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Insured Coverage Id</label>
                            <input type="number" value={InsCovId} onChange={handleInsCovId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>ContractId</label>
                            <input type="number" value={contractId} onChange={handleContractId}></input>
                        </div>
                    </form>
                </section>}


                {count===1 && <section>
                    <h2>Agent Details</h2>
                    <form action="">
                        <div className='inputdesign'>
                            <label>Insurance Requirement CoverageId</label>
                            <input type="number" value={insuaranceReqId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Agent Name</label>
                            <input type="text" value={agentname} onChange={handleagentname} ></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Agent CompanyId</label>
                            <input type="number" value={companyId} onChange={handlecompanyId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Agent Email</label>
                            <input type="text" value={email} onChange={handleemail} ></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Agent ContactId</label>
                            <input type="number" value={agcontractId} onChange={handleagcontractId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Agent Contact Name</label>
                            <input type="text" value={agConName} onChange={handleagCovName}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Agent Contact Email</label>
                            <input type="text" value={contractemail} onChange={handlecontractemail}></input>
                        </div>
                    </form>
                </section>}


                {count===2 && <section>
                    <h2>Insurance Requirement Details</h2>
                    <form action="">
                        <div className='inputdesign'>
                            <label>Requirement Id</label>
                            <input type="number" value={insuaranceReqId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Requirement Coverage DetailId</label>
                            <input type="number" value={insReqCovDetailId} onChange={handleinsReqCovDetailId} ></input>
                        </div>
                        <div className='inputdesign'>
                            <label>CoverageId</label>
                            <input type="number" value={coverageId} onChange={handlecoverageId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Coverage DetailId</label>
                            <input type="number" value={coverageDetailId} onChange={handlecoverageDetailId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Coverage Detail TypeId</label>
                            <input type="text" value={coverageDetailTypeId} onChange={handlecoverageDetailTypeId}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Name</label>
                            <input type="text" value={name} onChange={handlename}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Value</label>
                            <input type="number" value={value} onChange={handlevalue}></input>
                        </div>
                        <div className='inputdesign'>
                            <label>Insured Value</label>
                            <input type="number" value={insuredValue} onChange={handleinsuredValue}></input>
                        </div>
                    </form>
                </section>}
                {count == 4 && insuaranceReqId!=null && <section className='qrcode'>
                    <div className="qrcode">
                        <div className="qrcodetitle">
                        <h2>Here's the unique QR code for requirementId : {insuaranceReqId}</h2>
                        </div>
                        <a href={qrimg} download><img src={qrimg} width='200px' classname="qrcodeimg" alt="img"></img></a>
                    </div>
                </section>}

                {count===3 && <section className='dnetwork'>
                    <h2>Decentralized Storage</h2>
                    <p>When you add a file to IPFS, your file is split into smaller chunks, cryptographically hashed, and given a unique fingerprint called a content identifier (CID). This CID acts as a permanent record of your file as it exists at that point in time.</p>
                    <form onSubmit={SubmitToIpfs} name="fileform">
                        <div className='inputdesign'>
                            <label>Select the insurance document</label>
                            <input type="file" onChange={handlefileupload}></input>
                            <br></br>
                            {"Stored File with a CID : "+ cid}
                        </div>
                    </form>
                </section>}
                <div className='skipperfooter'>
                    <button className='back' onClick={decskipper}>Back</button>
                    {count === 3 && <button type='submit' name='fileform' className='next' onClick={SubmitToIpfs}>Submit</button>}
                    {count === 0 && <button className='next' onClick={addinsuranceDetails}>Next</button>}
                    {count === 1 && <button className='next' onClick={addAgentDetails}>Next</button>}
                    {count === 2 && <button className='next' onClick={addInsuranceReqDetails}>Next</button>}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default StoreForm;