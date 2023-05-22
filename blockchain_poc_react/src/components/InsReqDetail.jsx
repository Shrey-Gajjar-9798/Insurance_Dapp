import React from 'react';
import "../storeform.css";

const InsReqDetail = (props) => {

  return (
    <table className="infotable">
          <thead className="thead-dark">
            <tr>
              <th scope="col" colSpan={2}>Insurance Req Details</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <td>Requirement Id</td>
                    <td>{props.table.insuranceRequirementId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Requirement CoverageDetail Id</td>
                    <td>{props.table.insuranceRequirementCoverageDetailId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage Id</td>
                    <td>{props.table.coverageId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage DetailID</td>
                    <td>{props.table.coverageDetailId.toNumber()}</td>
                </tr>
                <tr>
                    <td>Coverage Detail TypeID</td>
                    <td>{props.table.coverageDetailTypeId}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{props.table.name}</td>
                </tr>
                <tr>
                    <td>Value</td>
                    <td>{props.table.value.toNumber()}</td>
                </tr>
                <tr>
                    <td>Insured Value</td>
                    <td>{props.table.insuredValue.toNumber()}</td>
                </tr>
          </tbody>
        </table>
  )
}

export default InsReqDetail;