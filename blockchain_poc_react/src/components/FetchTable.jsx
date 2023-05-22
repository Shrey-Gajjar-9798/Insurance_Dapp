import React from 'react';
import "../storeform.css";

const FetchTable = (props) => {

  return (
    <table className="infotable">
          <thead className="thead-dark">
            <tr>
              <th scope="col" colSpan={2}>Insurance Requirement</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <td>Requirement Id</td>
                    <td>{props.table.insuranceRequirementId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Requirement Coverage Id</td>
                    <td>{props.table.insuranceRequirementCoverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage Id</td>
                    <td>{props.table.coverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage Name</td>
                    <td>{props.table.coverageName}</td>
                </tr>
                <tr>
                    <td>Description Of Operation</td>
                    <td>{props.table.hasDescriptionOfOperation.toString()}</td>
                </tr>
                <tr>
                    <td>Insured Coverage Id</td>
                    <td>{props.table.insuredCoverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Contract Id</td>
                    <td>{props.table.contractId.toNumber()}</td>
                </tr>
          </tbody>
        </table>
  )
}

export default FetchTable;