// SPDX-License-Identifier: MIT

// Practical 10A : Write a smart contract for Single Level Inheritance

pragma solidity ^0.8.0;

contract singer {
    string n;
    string[2]so;

    function setN(string memory a, string[2] memory arr) public {
        n = a;
        so = arr;
    }
}

contract song is singer {
    function getVal() public view returns (string memory, string[2] memory) {
        return (n, so);
    }
}

contract test {
    song s =  new song();
    
    function tInherit() public returns (string memory, string[2] memory) {
        s.setN("Iqlipse Nova", ["Khwab", "Sajke"]);
        return s.getVal();
    } 
}