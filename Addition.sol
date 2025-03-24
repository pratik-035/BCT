// SPDX-License-Identifier: MIT

// Practical 6A : Create a smart contract for addtion of two numbers.
pragma solidity ^0.8.0;

contract AddNumbers {
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }
}