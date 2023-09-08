"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondInitFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "registrar",
                type: "address",
            },
            {
                internalType: "string",
                name: "networkName",
                type: "string",
            },
        ],
        name: "init",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class DiamondInitFacet__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DiamondInitFacet__factory = DiamondInitFacet__factory;
DiamondInitFacet__factory.abi = _abi;