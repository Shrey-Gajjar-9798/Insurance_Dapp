pragma solidity >=0.7.0 <0.9.0;

contract InsuranceCoverage {

    struct InsuranceCoverageInfo{
        uint insuranceRequirementId; //mapping
        uint insuranceRequirementCoverageId;
        uint coverageId;
        string coverageName;
        bool hasDescriptionOfOperation;
        uint insuredCoverageId;
        uint contractId;
    }


    mapping(uint => InsuranceCoverageInfo)  private InsuranceCoverageByReqId;
    mapping(address => uint) private ownerOfPolicy;
    mapping(uint => bool) public checkPolicy;
    //mapping(address => mapping(uint => bool)) ownerOfPolicy; // key = address, value= key: policyid value: true
    //mapping(uint => AgentDetails) public getAgentDetailsbyRCoverageId;

    modifier checkOwner (uint _policyno) {
        require(ownerOfPolicy[msg.sender] == _policyno,"the policy is not assigned to this owner");
        _;
    }


//  function to store the insuranceCoverDetails 
    function storeInsuranceCoverDetails (InsuranceCoverageInfo memory _insCoverage) public {
        require(checkPolicy[_insCoverage.insuranceRequirementId] !=true, "Policy is already stored in the network");
        InsuranceCoverageByReqId[_insCoverage.insuranceRequirementId]= InsuranceCoverageInfo(
        _insCoverage.insuranceRequirementId,
        _insCoverage.insuranceRequirementCoverageId,
        _insCoverage.coverageId,
        _insCoverage.coverageName,
        _insCoverage.hasDescriptionOfOperation,
        _insCoverage.insuredCoverageId,
        _insCoverage.contractId
        );
        ownerOfPolicy[msg.sender] = _insCoverage.insuranceRequirementId;
        checkPolicy[_insCoverage.insuranceRequirementId] = true;
    }


//  function to get the covDetails
    function getInsCovDetails (uint _insRequirementId) external view returns (InsuranceCoverageInfo memory) {
        return (InsuranceCoverageByReqId[_insRequirementId]);
    }


    function checkpolicyOwner (address _owner) external view returns(uint) {
        return ownerOfPolicy[_owner];
    }
}