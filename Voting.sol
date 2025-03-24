// SPDX-License-Identifier: MIT

// Practical 9 : Write a smart contract to create a voting application .

pragma solidity ^0.8.0;

contract voting {

    mapping (string => uint256) public c;
    mapping (address => bool) public voters;
    string[] public cn;

    constructor(string[] memory candN) {
        cn = candN;
    }

    function vote(string memory caNM) public {
        require(!voters[msg.sender], "Already Voting Done.");
        bool ce = false;

        for (uint256 i=0; i < cn.length; i++) {
            if (keccak256(bytes(caNM)) == keccak256(bytes(cn[i]))) {
                ce = true;
                break;
            }
        }

        require(ce, "Candidate does not exist.");
        c[caNM]++;
        voters[msg.sender] = true;
    }

    function getVoterC(string memory canM) public view  returns (uint256) {
        return c[canM];
    }

    function getWinner() public view returns (string memory) {
        string memory winner;

        uint256 temp = 0;
        for (uint256 j=0; j < cn.length; j++) {
            if (getVoterC(cn[j]) > temp) {
                temp = getVoterC(cn[j]);
            }
        }

        return winner;
    }

    function showPercentage(string memory canM) public view  returns (uint256) {
        uint256 total;

        for (uint256 i=0; i < cn.length; i++) {
            total = total + getVoterC(cn[i]);
        }

        uint256 per = getVoterC(canM) * (100 / total);
        return per;
    }
}