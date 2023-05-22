import React from 'react';
import "../storeform.css";

const AgentTable = (props) => {

  return (
    <table className="infotable">
          <thead className="thead-dark">
            <tr>
              <th scope="col" colSpan={2}>Agent Details</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <td>Requirement Id</td>
                    <td>{props.table.insuranceRequirementCoverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Agent CompanyId</td>
                    <td>{props.table.agentCompanyId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Agent Name</td>
                    <td>{props.table.agentName}</td>
                </tr>
                <tr>
                    <td>Agent Email</td>
                    <td>{props.table.agentEmail}</td>
                </tr>
                <tr>
                    <td>Agent ContractID</td>
                    <td>{props.table.agentContactId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Agent ContactName</td>
                    <td>{props.table.agentContactName}</td>
                </tr>
                <tr>
                    <td>Agent ContractEmail</td>
                    <td>{props.table.agentContactEmail}</td>
                </tr>
          </tbody>
        </table>
  )
}

export default AgentTable;