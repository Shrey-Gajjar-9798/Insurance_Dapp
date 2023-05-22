pragma solidity >=0.7.0 <0.9.0;
import "./AgentDetails.sol";

contract InsuranceCoverageDetails is AgentDetails {

 struct InsuranceReqCoverageDetail {
    uint insuranceRequirementId; // mapping
    uint insuranceRequirementCoverageDetailId;
    uint coverageId;
    uint coverageDetailId;
    string coverageDetailTypeId;
    string name;
    uint value;
    uint insuredValue;
 }

 mapping(uint => InsuranceReqCoverageDetail) private insuranceRequirementCoverageId;
 


   function storeInsuranceCoverageDetails(InsuranceReqCoverageDetail memory _insCovDetails) external  {
      require(checkPolicy[_insCovDetails.insuranceRequirementId],"Policy details are not stored.");
      insuranceRequirementCoverageId[_insCovDetails.insuranceRequirementId] = InsuranceReqCoverageDetail(
         _insCovDetails.insuranceRequirementId,
         _insCovDetails.insuranceRequirementCoverageDetailId,
         _insCovDetails.coverageId,
         _insCovDetails.coverageDetailId,
         _insCovDetails.coverageDetailTypeId,
         _insCovDetails.name,
         _insCovDetails.value,
         _insCovDetails.insuredValue
      );
   }

   function viewInsuranceReqDetails  (uint _coverageId) view external returns(InsuranceReqCoverageDetail memory){
      return insuranceRequirementCoverageId[_coverageId];
   }

}