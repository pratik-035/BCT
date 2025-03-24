// SPDX-License-Identifier: MIT 

// Practical 7D : Write a smart contract to deposit and withdraw money 

pragma solidity ^0.8.0;

contract Bank {
    address public s;
    uint256 public bal;

    constructor(){
        s = msg.sender;
        bal = 0;
    }

    function deposit(uint256 a) public {
        bal += a;
        s = msg.sender;
    }

    function withdraw(uint256 a) public {
        if (bal >= a) {
            bal -= a;
        }

        s = msg.sender;
    }

    function displayOwn() public view returns(address) {
        return s;
    }
}