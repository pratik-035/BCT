// SPDX-License-Identifier: MIT

// Practical 8A : Create a smart contract to calculate mean of n numbers.

pragma solidity ^0.8.0;

contract meanNo{

    function mean(uint256[] memory arr) public pure returns (uint256){
        uint res = 0;

        for (uint i = 0; i < arr.length; i++) {
            res = res + arr[i];
        }

        return res = res / arr.length;
    }
}