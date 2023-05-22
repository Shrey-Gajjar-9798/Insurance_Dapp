import React from 'react';
import { useState, useRef ,useEffect} from 'react';
import "./qrcode.css";
import QrCodeReader, { QRCode } from "react-qrcode-reader";
const {ethers} = require('ethers');

const QRCodePage= () => {

  const [qrval, setqrval] = useState('');
  const [qrdata, setqrdata] = useState([]);
  const [table, settable] = useState(false);
  const file = useRef(null);
  const handleqrcode = () =>{
    file.current.openImageDialog();
  };
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractadress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "checkPolicy",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "checkpolicyOwner",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_policyno",
          "type": "uint256"
        }
      ],
      "name": "getAgentDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "insuranceRequirementCoverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentCompanyId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "agentName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentEmail",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "agentContactId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "agentContactName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentContactEmail",
              "type": "string"
            }
          ],
          "internalType": "struct AgentDetails.AgentDetail",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_insRequirementId",
          "type": "uint256"
        }
      ],
      "name": "getInsCovDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "insuranceRequirementId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "insuranceRequirementCoverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coverageId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "coverageName",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "hasDescriptionOfOperation",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "insuredCoverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "contractId",
              "type": "uint256"
            }
          ],
          "internalType": "struct InsuranceCoverage.InsuranceCoverageInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "insuranceRequirementCoverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "agentCompanyId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "agentName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentEmail",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "agentContactId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "agentContactName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentContactEmail",
              "type": "string"
            }
          ],
          "internalType": "struct AgentDetails.AgentDetail",
          "name": "_agentinfo",
          "type": "tuple"
        }
      ],
      "name": "storeAgentDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "insuranceRequirementId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "insuranceRequirementCoverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coverageId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "coverageName",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "hasDescriptionOfOperation",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "insuredCoverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "contractId",
              "type": "uint256"
            }
          ],
          "internalType": "struct InsuranceCoverage.InsuranceCoverageInfo",
          "name": "_insCoverage",
          "type": "tuple"
        }
      ],
      "name": "storeInsuranceCoverDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "insuranceRequirementId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "insuranceRequirementCoverageDetailId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coverageDetailId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "coverageDetailTypeId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "insuredValue",
              "type": "uint256"
            }
          ],
          "internalType": "struct InsuranceCoverageDetails.InsuranceReqCoverageDetail",
          "name": "_insCovDetails",
          "type": "tuple"
        }
      ],
      "name": "storeInsuranceCoverageDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_coverageId",
          "type": "uint256"
        }
      ],
      "name": "viewInsuranceReqDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "insuranceRequirementId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "insuranceRequirementCoverageDetailId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coverageId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coverageDetailId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "coverageDetailTypeId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "insuredValue",
              "type": "uint256"
            }
          ],
          "internalType": "struct InsuranceCoverageDetails.InsuranceReqCoverageDetail",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  useEffect(() => {
    const requestAccounts = async () => {
      await provider.send("eth_requestAccounts", []);
    }
    requestAccounts()
      .catch(console.error)

  }, []);

  const contract = new ethers.Contract(contractadress, abi, signer);

  const getdata = async() =>{
    try {
      const response = await contract.getInsCovDetails(parseInt(qrval));
      setqrdata(response);
      settable(true);
      console.log(response);
      console.log(qrdata); 
    } catch (error) {
      alert(error);
    }
  };
 
  return (
    <>
    <div className="qrcodepage">
      <div className="qrcontent">
        <div className='qrheading'>
        <h2>Scan your QR code and compare the values: </h2>
        </div>
        <QrCodeReader className="qrscanner" delay={100} width={500} height={500} action={setqrval} /> 
        <h2>Private key of QR code : {qrval} </h2>
        {qrval!="" && <button className='qrcodebtn' onClick={getdata}>Compare Data</button>}
      </div>
      {table && <div className="blockchaindata">
      <table className="infotable" >
          <thead className="thead-dark">
            <tr>
              <th scope="col" >Insurance Requirement</th>
              <th scope="col" >Blockchain Data</th>
              <th scope="col" >DataBase Data</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <td>Requirement Id</td>
                    <td>{qrdata.insuranceRequirementId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Requirement Coverage Id</td>
                    <td>{qrdata.insuranceRequirementCoverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage Id</td>
                    <td>{qrdata.coverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage Name</td>
                    <td>{qrdata.coverageName}</td>
                </tr>
                <tr>
                    <td>Description Of Operation</td>
                    <td>{qrdata.hasDescriptionOfOperation.toString()}</td>
                </tr>
                <tr>
                    <td>Insured Coverage Id</td>
                    <td>{qrdata.insuredCoverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Contract Id</td>
                    <td>{qrdata.contractId.toNumber()}</td>
                </tr>
          </tbody>
        </table>
      </div>}
    </div>
    </>
  )
}

export default QRCodePage;