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
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "AllowanceSpent",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newBalance",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "added",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "deducted",
                type: "uint256",
            },
        ],
        name: "AllowanceUpdated",
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
                internalType: "uint32[]",
                name: "add",
                type: "uint32[]",
            },
            {
                indexed: false,
                internalType: "uint32[]",
                name: "remove",
                type: "uint32[]",
            },
        ],
        name: "DafApprovedEndowmentsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "donationMatchContract",
                type: "address",
            },
        ],
        name: "DonationMatchCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum LibAccounts.AllowlistType",
                name: "allowlistType",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "add",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "remove",
                type: "address[]",
            },
        ],
        name: "EndowmentAllowlistUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint32",
                                name: "endowId",
                                type: "uint32",
                            },
                            {
                                internalType: "address",
                                name: "addr",
                                type: "address",
                            },
                        ],
                        internalType: "struct LibAccounts.BeneficiaryData",
                        name: "data",
                        type: "tuple",
                    },
                    {
                        internalType: "enum LibAccounts.BeneficiaryEnum",
                        name: "enumData",
                        type: "uint8",
                    },
                ],
                indexed: false,
                internalType: "struct LibAccounts.Beneficiary",
                name: "beneficiary",
                type: "tuple",
            },
            {
                indexed: false,
                internalType: "uint32[]",
                name: "relinked",
                type: "uint32[]",
            },
        ],
        name: "EndowmentClosed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum LibAccounts.EndowmentType",
                name: "endowType",
                type: "uint8",
            },
        ],
        name: "EndowmentCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountLocked",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountLiquid",
                type: "uint256",
            },
        ],
        name: "EndowmentDeposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes4",
                name: "strategy",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "string",
                name: "network",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lockAmt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "liquidAmt",
                type: "uint256",
            },
        ],
        name: "EndowmentInvested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes4",
                name: "strategy",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "string",
                name: "network",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lockAmt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "liquidAmt",
                type: "uint256",
            },
        ],
        name: "EndowmentRedeemed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "setting",
                type: "string",
            },
        ],
        name: "EndowmentSettingUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
        ],
        name: "EndowmentUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum IVault.VaultType",
                name: "accountType",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "beneficiaryAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "beneficiaryEndowId",
                type: "uint32",
            },
        ],
        name: "EndowmentWithdraw",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "OwnerUpdated",
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
                name: "",
                type: "tuple",
            },
        ],
        name: "RefundNeeded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endowId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum IVault.VaultType",
                name: "accountType",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "TokenSwapped",
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
                name: "",
                type: "tuple",
            },
        ],
        name: "UnexpectedTokens",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "id",
                type: "uint32",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint32",
                                name: "endowId",
                                type: "uint32",
                            },
                            {
                                internalType: "address",
                                name: "addr",
                                type: "address",
                            },
                        ],
                        internalType: "struct LibAccounts.BeneficiaryData",
                        name: "data",
                        type: "tuple",
                    },
                    {
                        internalType: "enum LibAccounts.BeneficiaryEnum",
                        name: "enumData",
                        type: "uint8",
                    },
                ],
                internalType: "struct LibAccounts.Beneficiary",
                name: "beneficiary",
                type: "tuple",
            },
        ],
        name: "closeEndowment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "id",
                type: "uint32",
            },
            {
                internalType: "bytes4",
                name: "strategyId",
                type: "bytes4",
            },
        ],
        name: "forceSetStrategyInactive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class AccountsUpdateStatusEndowments__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
AccountsUpdateStatusEndowments__factory.abi = _abi;
