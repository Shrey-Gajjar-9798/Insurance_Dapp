pragma solidity >=0.7.0 <0.9.0;
import "./InsuranceCoverage.sol";

contract AgentDetails is InsuranceCoverage {

    struct AgentDetail{
        uint insuranceRequirementCoverageId; //mapping
        uint agentCompanyId;
        string agentName;
        string agentEmail;
        uint agentContactId;
        string agentContactName;
        string agentContactEmail;
    }

    mapping(uint => bool) private checkAgentAssigned;
    mapping(uint => AgentDetail) getAgentDetailsbyRCoverageId;

    modifier checkAgent(uint _coverageId) {
        require(checkAgentAssigned[_coverageId]== false,"the agent is already assigned");
        _;
    }

    function storeAgentDetails (AgentDetail memory _agentinfo) public checkAgent(_agentinfo.insuranceRequirementCoverageId) checkOwner(_agentinfo.insuranceRequirementCoverageId) {
        getAgentDetailsbyRCoverageId[_agentinfo.insuranceRequirementCoverageId] = AgentDetail(
        _agentinfo.insuranceRequirementCoverageId, //mapping
        _agentinfo.agentCompanyId,
        _agentinfo.agentName,
        _agentinfo.agentEmail,
        _agentinfo.agentContactId,
        _agentinfo.agentContactName,
        _agentinfo.agentContactEmail
        );
        checkAgentAssigned[_agentinfo.insuranceRequirementCoverageId] = true;
    }

    function getAgentDetails (uint _policyno) external view returns(AgentDetail memory) {
        return (getAgentDetailsbyRCoverageId[_policyno]);
    }
}