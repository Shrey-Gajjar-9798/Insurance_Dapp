import "./homepage.css";
import {useState , useEffect} from "react";
import StoreForm from "./StoreForm";
import FetchForm from "./FetchForm";
import { Route,Routes } from "react-router-dom";
import QRCode from './components/QRCodePage.jsx';
const {ethers} = require('ethers');

function App() {

  const [storeform, setstoreform] = useState(false);
  const [fetchform, setfetchform] = useState(false);
  function openStoreForm (){
    setstoreform(true);
    setfetchform(false);
  }

  function closeStoreForm (){
    setstoreform(false);
  }

  function openFetchForm (){
    setfetchform(true);
    setstoreform(false);
  }

  function closeFetchForm (){
    setfetchform(false);
  }

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

  return (
    <>
    <div className="homepage_body">
      <div className="hpcontent">
        <div className="bgimage">
          <img src="https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"></img>
        </div>
        <div className="hplogo">
          <img src="https://www.injala.com/images/logo.svg"></img>
        </div>
        <div className="hgtextarea">
          <div className="hgmaintext">Asuretify Blockchain</div>
          <div className="hgsubtext">Indisputable digital insurance verification that eliminates documents, errors, fraud, and significantly reduces costly administration.</div>
          <div className="hgbuttons">
          <button type="button" onClick={openStoreForm}>Secure Data</button>
          <button type="button" onClick={openFetchForm} href="/fetch">Get Data</button>  
          </div>
        </div>
      </div>
        {storeform && <StoreForm close={closeStoreForm} contract= {contract} />}
        {fetchform && <FetchForm close = {closeFetchForm} contract = {contract} />}
         
    </div>
    </>
  );
}

export default App;
