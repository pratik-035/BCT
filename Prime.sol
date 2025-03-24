// SPDX-License-Identifier: MIT

// Practical 7C : Write a smart contract to check if the number is prime or not .

pragma solidity ^0.8.0;

contract primeno {

    function prime(uint256 a) public pure returns (bool) {

        for (uint256 i = 2; i < a; i++) {

            if (a % i == 0) {

                return false;
            }
        }

        return true;
    }
}