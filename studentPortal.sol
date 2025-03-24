// SPDX-License-Identifier: MIT

// Practical 7C : Create a student portal to register students and record their marks using their student ID. 
// The portal should calculate the grades for three subjects and display the results.

pragma solidity ^0.8.0;

contract studentsMarks {

    struct std {
        uint sid;
        string sname;
        address add;
        uint[3] marks;
        uint Physics;
        uint chemistry;
        uint Biology;
        string grade;
    }


    mapping (uint256 => std) public s1;

    function Registration(uint i, string memory n) public {
        s1[i].sname = n;
        s1[i].add = msg.sender;
        s1[i].sid = i;
    }

    function SMarks(uint id, uint p, uint c, uint b) public {
        s1[id].chemistry = c;
        s1[id].Physics = p;
        s1[id].Biology = b;
        s1[id].grade = CSM(id);
    }

    function CSM(uint id) internal view returns (string memory) {
        std storage student = s1[id];
        uint256 totalMarks = student.Physics + student.chemistry + student.Biology;
        uint256 percentage = (totalMarks * 100) / 300;

        if (percentage >= 90) {
            return "A+";
        } else if (percentage >= 80){
            return "A";
        }
        else if (percentage >= 70){
            return "B+";
        } else if (percentage >= 60) {
            return "B";
        } else if (percentage >= 50) {
            return "C";
        } else if (percentage >= 40){
            return "D";
        }
        else {
            return "F";
        }
    }

    function display(uint256 id) external view returns (std memory) {
        return s1[id];
    }
}