/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "approvalsRequired",
                type: "uint256",
            },
        ],
        name: "ApprovalsRequiredChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionExpiry",
                type: "uint256",
            },
        ],
        name: "ExpiryChanged",
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
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "approvalsRequired",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "requireExecution",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionExpiry",
                type: "uint256",
            },
        ],
        name: "InitializedMultiSig",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "currOwner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerReplaced",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
        ],
        name: "OwnersAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
        ],
        name: "OwnersRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "requireExecution",
                type: "bool",
            },
        ],
        name: "RequireExecutionChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "TransactionConfirmationRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "TransactionConfirmed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "TransactionExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "msAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "metadata",
                type: "bytes",
            },
        ],
        name: "TransactionSubmitted",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [],
        name: "activeOwnersCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
        ],
        name: "addOwners",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "approvalsRequired",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_approvalsRequired",
                type: "uint256",
            },
        ],
        name: "changeApprovalsRequirement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "_requireExecution",
                type: "bool",
            },
        ],
        name: "changeRequireExecution",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_transactionExpiry",
                type: "uint256",
            },
        ],
        name: "changeTransactionExpiry",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "confirmTransaction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "confirmations",
        outputs: [
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "executeTransaction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "getConfirmationCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "ownerAddr",
                type: "address",
            },
        ],
        name: "getConfirmationStatus",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "ownerAddr",
                type: "address",
            },
        ],
        name: "getOwnerStatus",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
            {
                internalType: "uint256",
                name: "_approvalsRequired",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_requireExecution",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "_transactionExpiry",
                type: "uint256",
            },
        ],
        name: "initializeAPTeam",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "isConfirmed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "owners",
                type: "address[]",
            },
        ],
        name: "removeOwners",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "currOwner",
                type: "address",
            },
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "replaceOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "requireExecution",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        name: "revokeConfirmation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "formerOwner",
                type: "address",
            },
        ],
        name: "revokeConfirmationOfFormerOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "metadata",
                type: "bytes",
            },
        ],
        name: "submitTransaction",
        outputs: [
            {
                internalType: "uint256",
                name: "transactionId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "transactionCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "transactionExpiry",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "transactions",
        outputs: [
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "bool",
                name: "executed",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "expiry",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "metadata",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
export class ApTeam__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ApTeam__factory.abi = _abi;
