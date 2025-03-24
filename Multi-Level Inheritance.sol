// SPDX-License-Identifier: MIT

// Practical 10B : Write a smart contract for Multi-Level Inheritance

pragma solidity ^0.8.0; 
 
contract college { 
    string internal cname; 
    string internal pname; 
 
    function setCollege(string memory cn, string memory pn) public { 
        cname = cn; 
        pname = pn; 
    } 
} 
 
contract student is college { 
    string internal sname; 
    uint internal rollno; 
 
    function setStudent(string memory sn, uint rn) public { 
        sname = sn; 
        rollno = rn; 
    } 
} 
 
contract exam is student { 
    uint8[5] marks; 
 
    function setMarks(uint8[5] memory m) public { 
        marks = m; 
    } 
 
 
    function getDetails() public view returns(string memory, string memory, string 
memory, uint, uint) { 
        uint total = 0; 
        for(uint i = 0; i < 5; i++) { 
            total += marks[i]; 
        } 
        uint per = total/5; 
        return (cname, pname, sname, rollno, per); 
    } 
} 

