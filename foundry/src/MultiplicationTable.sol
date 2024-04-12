// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract MultiplicationTable {
    uint256[12][12] public table;

    constructor() {
        for (uint256 i = 0; i < 12; i++) {
            for (uint256 j = 0; j < 12; j++) {
                table[i][j] = (i + 1) * (j + 1);
            }
        }
    }

    function getMultiplicationValue(uint256 row, uint256 column) public view returns (uint256) {
        require(row > 0 && row <= 12, "Row out of bounds");
        require(column > 0 && column <= 12, "Column out of bounds");
        return table[row - 1][column - 1];
    }

    function getTable() public view returns (uint256[12][12] memory) {
        return table;
    }
}
