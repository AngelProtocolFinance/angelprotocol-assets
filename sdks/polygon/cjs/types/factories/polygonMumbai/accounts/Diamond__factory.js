"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diamond__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "contractowner",
                type: "address",
            },
            {
                internalType: "address",
                name: "diamondcutfacet",
                type: "address",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "initializationcontractaddress",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "InitializationFunctionReverted",
        type: "error",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
class Diamond__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Diamond__factory = Diamond__factory;
Diamond__factory.abi = _abi;