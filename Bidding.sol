// SPDX-License-Identifier: MIT

// Practical 6B : Write a simple auction where a user can bid on an item and the highest bidder wins.

pragma solidity ^0.8.0;

contract Auction {
    address public owner; // owner (creater of contract)
    address public highestBidder; // higest bidder address (higest bidder)
    uint public highestBid; // highest bid (bid amount)
    bool public auctionEnded; // auction ended (true or false)

    constructor(){
        owner = msg.sender; // The address that deploys the contract becomes the owner
        highestBid = 0;  // Initial highest bid is set to 0
        auctionEnded = false;  // The auction starts in an inactive state
    }

    function bid(uint256 a) public payable {
        require(!auctionEnded, "Auction has ended!");
        require(a > highestBid, "Bid must be greater than current value");
        highestBid = a;
        highestBidder = msg.sender;
    }

    function endA() public {
        require(msg.sender == owner, "Only owner can end!");
        auctionEnded = true;
    }

    function withdraw() public view returns (uint256) {
        require(msg.sender == highestBidder, "Only highest bidder can withdraw");
        return highestBid;
    }
}