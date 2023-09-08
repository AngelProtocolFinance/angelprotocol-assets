"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registrar__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_chainName",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "_accountsContractAddress",
                type: "string",
            },
        ],
        name: "AccountsContractStorageUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "ConfigUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "enum LibAccounts.FeeTypes",
                name: "_feeType",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_bpsRate",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_payoutAddress",
                type: "address",
            },
        ],
        name: "FeeSettingsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_tokenAddr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_gasFee",
                type: "uint256",
            },
        ],
        name: "GasFeeUpdated",
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
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "NetworkConnectionPosted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "NetworkConnectionRemoved",
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
        name: "RebalanceParamsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes4",
                name: "_strategyId",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "enum LocalRegistrarLib.StrategyApprovalState",
                name: "_approvalState",
                type: "uint8",
            },
        ],
        name: "StrategyApprovalUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes4",
                name: "_strategyId",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "string",
                name: "_network",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_lockAddr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_liqAddr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "enum LocalRegistrarLib.StrategyApprovalState",
                name: "_approvalState",
                type: "uint8",
            },
        ],
        name: "StrategyParamsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_tokenAddr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "_isAccepted",
                type: "bool",
            },
        ],
        name: "TokenAcceptanceUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_targetChain",
                type: "string",
            },
        ],
        name: "getAccountsContractAddressByChain",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum LibAccounts.FeeTypes",
                name: "_feeType",
                type: "uint8",
            },
        ],
        name: "getFeeSettingsByFeeType",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "payoutAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "bps",
                        type: "uint256",
                    },
                ],
                internalType: "struct LibAccounts.FeeSetting",
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
                internalType: "address",
                name: "_tokenAddr",
                type: "address",
            },
        ],
        name: "getGasByToken",
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
        name: "getRebalanceParams",
        outputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "rebalanceLiquidProfits",
                        type: "bool",
                    },
                    {
                        internalType: "uint32",
                        name: "lockedRebalanceToLiquid",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "interestDistribution",
                        type: "uint32",
                    },
                    {
                        internalType: "bool",
                        name: "lockedPrincipleToLiquid",
                        type: "bool",
                    },
                    {
                        internalType: "uint32",
                        name: "principleDistribution",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "basis",
                        type: "uint32",
                    },
                ],
                internalType: "struct LocalRegistrarLib.RebalanceParams",
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
                internalType: "bytes4",
                name: "_strategyId",
                type: "bytes4",
            },
        ],
        name: "getStrategyApprovalState",
        outputs: [
            {
                internalType: "enum LocalRegistrarLib.StrategyApprovalState",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_strategyId",
                type: "bytes4",
            },
        ],
        name: "getStrategyParamsById",
        outputs: [
            {
                components: [
                    {
                        internalType: "enum LocalRegistrarLib.StrategyApprovalState",
                        name: "approvalState",
                        type: "uint8",
                    },
                    {
                        internalType: "string",
                        name: "network",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "lockedVaultAddr",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "liquidVaultAddr",
                        type: "address",
                    },
                ],
                internalType: "struct LocalRegistrarLib.StrategyParams",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getUniswapFactoryAddress",
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
        name: "getUniswapRouterAddress",
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
        name: "getVaultEmitterAddress",
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
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
        ],
        name: "getVaultOperatorApproved",
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
                components: [
                    {
                        internalType: "address",
                        name: "apTeamMultisig",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "treasury",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "axelarGateway",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "axelarGasService",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "networkName",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "refundAddr",
                        type: "address",
                    },
                ],
                internalType: "struct RegistrarMessages.InstantiateRequest",
                name: "details",
                type: "tuple",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_chain",
                type: "string",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenAddr",
                type: "address",
            },
        ],
        name: "isTokenAccepted",
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
        name: "queryAllStrategies",
        outputs: [
            {
                internalType: "bytes4[]",
                name: "allStrategies",
                type: "bytes4[]",
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
                        name: "accountsContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "apTeamMultisig",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "treasury",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "indexFundContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "haloToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "govContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "fundraisingContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "uniswapRouter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "uniswapFactory",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "multisigFactory",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "multisigEmitter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "charityApplications",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "proxyAdmin",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "usdcAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "wMaticAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "gasFwdFactory",
                        type: "address",
                    },
                ],
                internalType: "struct RegistrarStorage.Config",
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
                internalType: "string",
                name: "networkName",
                type: "string",
            },
        ],
        name: "queryNetworkConnection",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "axelarGateway",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "gasReceiver",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "refundAddr",
                        type: "address",
                    },
                ],
                internalType: "struct LocalRegistrarLib.NetworkInfo",
                name: "response",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "queryTokenPriceFeed",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_chainName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_accountsContractAddress",
                type: "string",
            },
        ],
        name: "setAccountsContractAddressByChain",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum LibAccounts.FeeTypes",
                name: "_feeType",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "_rate",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_payout",
                type: "address",
            },
        ],
        name: "setFeeSettingsByFeesType",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_gasFee",
                type: "uint256",
            },
        ],
        name: "setGasByToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "rebalanceLiquidProfits",
                        type: "bool",
                    },
                    {
                        internalType: "uint32",
                        name: "lockedRebalanceToLiquid",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "interestDistribution",
                        type: "uint32",
                    },
                    {
                        internalType: "bool",
                        name: "lockedPrincipleToLiquid",
                        type: "bool",
                    },
                    {
                        internalType: "uint32",
                        name: "principleDistribution",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "basis",
                        type: "uint32",
                    },
                ],
                internalType: "struct LocalRegistrarLib.RebalanceParams",
                name: "_rebalanceParams",
                type: "tuple",
            },
        ],
        name: "setRebalanceParams",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_strategyId",
                type: "bytes4",
            },
            {
                internalType: "enum LocalRegistrarLib.StrategyApprovalState",
                name: "_approvalState",
                type: "uint8",
            },
        ],
        name: "setStrategyApprovalState",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_strategyId",
                type: "bytes4",
            },
            {
                internalType: "string",
                name: "_network",
                type: "string",
            },
            {
                internalType: "address",
                name: "_lockAddr",
                type: "address",
            },
            {
                internalType: "address",
                name: "_liqAddr",
                type: "address",
            },
            {
                internalType: "enum LocalRegistrarLib.StrategyApprovalState",
                name: "_approvalState",
                type: "uint8",
            },
        ],
        name: "setStrategyParams",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenAddr",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_isAccepted",
                type: "bool",
            },
        ],
        name: "setTokenAccepted",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_uniswapRouter",
                type: "address",
            },
            {
                internalType: "address",
                name: "_uniswapFactory",
                type: "address",
            },
        ],
        name: "setUniswapAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_vaultEmitter",
                type: "address",
            },
        ],
        name: "setVaultEmitterAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_isApproved",
                type: "bool",
            },
        ],
        name: "setVaultOperatorApproved",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "thisChain",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
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
                components: [
                    {
                        internalType: "address",
                        name: "accountsContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "apTeamMultisig",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "treasury",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "indexFundContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "haloToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "govContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "fundraisingContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "uniswapRouter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "uniswapFactory",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "multisigFactory",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "multisigEmitter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "charityApplications",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "proxyAdmin",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "usdcAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "wMaticAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "gasFwdFactory",
                        type: "address",
                    },
                ],
                internalType: "struct RegistrarMessages.UpdateConfigRequest",
                name: "details",
                type: "tuple",
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
                internalType: "string",
                name: "networkName",
                type: "string",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "router",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "axelarGateway",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "gasReceiver",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "refundAddr",
                        type: "address",
                    },
                ],
                internalType: "struct LocalRegistrarLib.NetworkInfo",
                name: "networkInfo",
                type: "tuple",
            },
            {
                internalType: "enum LocalRegistrarLib.NetworkConnectionAction",
                name: "action",
                type: "uint8",
            },
        ],
        name: "updateNetworkConnections",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "priceFeed",
                type: "address",
            },
        ],
        name: "updateTokenPriceFeed",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class Registrar__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Registrar__factory = Registrar__factory;
Registrar__factory.abi = _abi;
