// SPDX-License-Identifier: MIT

// Practical 8B : Create a smart contract to calculate median of n numbers.

pragma solidity ^0.8.0;

contract medianNo {

    function median(uint256[] memory arr) public pure returns (uint256) {
        uint256 n = arr.length;

        for (uint256 i=0; i < n - 1; i++) {
            for (uint256 j=0; j < n - 1; j++) {
                 if (arr[j] > arr[j + 1]) {
                    (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
                 }
            }
        }

        uint256 med;

        if (n % 2 == 0) {
            med = (arr[n / 2 - 1] + arr[n / 2]) / 2;
        }
        else {
            med = arr[n / 2];
        }

        return med;
    }
}