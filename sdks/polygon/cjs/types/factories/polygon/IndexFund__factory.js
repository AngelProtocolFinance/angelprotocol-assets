"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexFund__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "param",
                type: "string",
            },
        ],
        name: "InvalidAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
        ],
        name: "ActiveFundUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "registrarContract",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fundingGoal",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fundRotation",
                type: "uint256",
            },
        ],
        name: "ConfigUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
        ],
        name: "DonationProcessed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "FundCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "FundRemoved",
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
                name: "registrarContract",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fundRotation",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fundingGoal",
                type: "uint256",
            },
        ],
        name: "Instantiated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "endowmentId",
                type: "uint32",
            },
        ],
        name: "MemberRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint32[]",
                name: "endowments",
                type: "uint32[]",
            },
        ],
        name: "MembersUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "StateUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "description",
                type: "string",
            },
            {
                internalType: "uint32[]",
                name: "endowments",
                type: "uint32[]",
            },
            {
                internalType: "bool",
                name: "rotatingFund",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "splitToLiquid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expiryTime",
                type: "uint256",
            },
        ],
        name: "createIndexFund",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "depositERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "registrarContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "fundRotation",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fundingGoal",
                type: "uint256",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "queryActiveFundDetails",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                    {
                        internalType: "uint32[]",
                        name: "endowments",
                        type: "uint32[]",
                    },
                    {
                        internalType: "uint256",
                        name: "splitToLiquid",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "expiryTime",
                        type: "uint256",
                    },
                ],
                internalType: "struct IIndexFund.FundResponse",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "queryConfig",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "registrarContract",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "fundRotation",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fundingGoal",
                        type: "uint256",
                    },
                ],
                internalType: "struct IndexFundStorage.Config",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
        ],
        name: "queryFundDetails",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                    {
                        internalType: "uint32[]",
                        name: "endowments",
                        type: "uint32[]",
                    },
                    {
                        internalType: "uint256",
                        name: "splitToLiquid",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "expiryTime",
                        type: "uint256",
                    },
                ],
                internalType: "struct IIndexFund.FundResponse",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "endowmentId",
                type: "uint32",
            },
        ],
        name: "queryInvolvedFunds",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "queryRotatingFunds",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "queryState",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "activeFund",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "roundDonations",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "nextRotationBlock",
                        type: "uint256",
                    },
                ],
                internalType: "struct IIndexFund.StateResponse",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
        ],
        name: "removeIndexFund",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "endowment",
                type: "uint32",
            },
        ],
        name: "removeMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "registrarContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "fundRotation",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fundingGoal",
                type: "uint256",
            },
        ],
        name: "updateConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fundId",
                type: "uint256",
            },
            {
                internalType: "uint32[]",
                name: "endowmentsAdd",
                type: "uint32[]",
            },
            {
                internalType: "uint32[]",
                name: "endowmentsRemove",
                type: "uint32[]",
            },
        ],
        name: "updateFundMembers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IndexFund__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IndexFund__factory = IndexFund__factory;
IndexFund__factory.abi = _abi;