"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "InvalidAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAddressString",
        type: "error",
    },
    {
        inputs: [],
        name: "NotApprovedByGateway",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
        ],
        name: "Deposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "ErrorBytesLogged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "ErrorLogged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Redeem",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Refund",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
        ],
        name: "RewardsHarvested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                internalType: "struct IVault.VaultActionData",
                name: "action",
                type: "tuple",
            },
            {
                internalType: "string",
                name: "tokenSymbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commandId",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "sourceChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "sourceChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
        ],
        name: "executeLocal",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                internalType: "struct IVault.VaultActionData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commandId",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "sourceChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                internalType: "string",
                name: "tokenSymbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "executeWithToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "sourceChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "sourceAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                internalType: "string",
                name: "tokenSymbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "executeWithTokenLocal",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "destinationChain",
                        type: "string",
                    },
                    {
                        internalType: "bytes4",
                        name: "strategyId",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "selector",
                        type: "bytes4",
                    },
                    {
                        internalType: "uint32[]",
                        name: "accountIds",
                        type: "uint32[]",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "lockAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liqAmt",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IVault.VaultActionStatus",
                        name: "status",
                        type: "uint8",
                    },
                ],
                internalType: "struct IVault.VaultActionData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "gateway",
        outputs: [
            {
                internalType: "contract IAxelarGateway",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_registrar",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "registrar",
        outputs: [
            {
                internalType: "contract ILocalRegistrar",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "destinationChain",
                type: "string",
            },
            {
                internalType: "string",
                name: "destinationAddress",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "gasToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "gasFeeAmt",
                type: "uint256",
            },
        ],
        name: "sendTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class Router__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Router__factory = Router__factory;
Router__factory.abi = _abi;