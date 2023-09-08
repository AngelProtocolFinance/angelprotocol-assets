import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AccountsStrategy, AccountsStrategyInterface } from "../../../../polygon/accounts/facets/AccountsStrategy";
export declare class AccountsStrategy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "endowId";
            readonly type: "uint32";
        }];
        readonly name: "InsufficientFundsForGas";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAddressString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IVault.VaultActionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "InvestFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotApprovedByGateway";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IVault.VaultActionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "RedeemAllFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IVault.VaultActionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "RedeemFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "destinationChain";
                readonly type: "string";
            }, {
                readonly internalType: "bytes4";
                readonly name: "strategyId";
                readonly type: "bytes4";
            }, {
                readonly internalType: "bytes4";
                readonly name: "selector";
                readonly type: "bytes4";
            }, {
                readonly internalType: "uint32[]";
                readonly name: "accountIds";
                readonly type: "uint32[]";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IVault.VaultActionStatus";
                readonly name: "status";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IVault.VaultActionData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "UnexpectedCaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "destinationChain";
                readonly type: "string";
            }, {
                readonly internalType: "bytes4";
                readonly name: "strategyId";
                readonly type: "bytes4";
            }, {
                readonly internalType: "bytes4";
                readonly name: "selector";
                readonly type: "bytes4";
            }, {
                readonly internalType: "uint32[]";
                readonly name: "accountIds";
                readonly type: "uint32[]";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IVault.VaultActionStatus";
                readonly name: "status";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IVault.VaultActionData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "UnexpectedResponse";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAmount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "AllowanceSpent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "added";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "deducted";
            readonly type: "uint256";
        }];
        readonly name: "AllowanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "ConfigUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32[]";
            readonly name: "add";
            readonly type: "uint32[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32[]";
            readonly name: "remove";
            readonly type: "uint32[]";
        }];
        readonly name: "DafApprovedEndowmentsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "donationMatchContract";
            readonly type: "address";
        }];
        readonly name: "DonationMatchCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum LibAccounts.AllowlistType";
            readonly name: "allowlistType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "add";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "remove";
            readonly type: "address[]";
        }];
        readonly name: "EndowmentAllowlistUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "endowId";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "address";
                    readonly name: "addr";
                    readonly type: "address";
                }];
                readonly internalType: "struct LibAccounts.BeneficiaryData";
                readonly name: "data";
                readonly type: "tuple";
            }, {
                readonly internalType: "enum LibAccounts.BeneficiaryEnum";
                readonly name: "enumData";
                readonly type: "uint8";
            }];
            readonly indexed: false;
            readonly internalType: "struct LibAccounts.Beneficiary";
            readonly name: "beneficiary";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32[]";
            readonly name: "relinked";
            readonly type: "uint32[]";
        }];
        readonly name: "EndowmentClosed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum LibAccounts.EndowmentType";
            readonly name: "endowType";
            readonly type: "uint8";
        }];
        readonly name: "EndowmentCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLocked";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLiquid";
            readonly type: "uint256";
        }];
        readonly name: "EndowmentDeposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "strategy";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "network";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lockAmt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidAmt";
            readonly type: "uint256";
        }];
        readonly name: "EndowmentInvested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "strategy";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "network";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lockAmt";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liquidAmt";
            readonly type: "uint256";
        }];
        readonly name: "EndowmentRedeemed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "setting";
            readonly type: "string";
        }];
        readonly name: "EndowmentSettingUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }];
        readonly name: "EndowmentUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum IVault.VaultType";
            readonly name: "accountType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "beneficiaryAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "beneficiaryEndowId";
            readonly type: "uint32";
        }];
        readonly name: "EndowmentWithdraw";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnerUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "destinationChain";
                readonly type: "string";
            }, {
                readonly internalType: "bytes4";
                readonly name: "strategyId";
                readonly type: "bytes4";
            }, {
                readonly internalType: "bytes4";
                readonly name: "selector";
                readonly type: "bytes4";
            }, {
                readonly internalType: "uint32[]";
                readonly name: "accountIds";
                readonly type: "uint32[]";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IVault.VaultActionStatus";
                readonly name: "status";
                readonly type: "uint8";
            }];
            readonly indexed: false;
            readonly internalType: "struct IVault.VaultActionData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "RefundNeeded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum IVault.VaultType";
            readonly name: "accountType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }];
        readonly name: "TokenSwapped";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "destinationChain";
                readonly type: "string";
            }, {
                readonly internalType: "bytes4";
                readonly name: "strategyId";
                readonly type: "bytes4";
            }, {
                readonly internalType: "bytes4";
                readonly name: "selector";
                readonly type: "bytes4";
            }, {
                readonly internalType: "uint32[]";
                readonly name: "accountIds";
                readonly type: "uint32[]";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IVault.VaultActionStatus";
                readonly name: "status";
                readonly type: "uint8";
            }];
            readonly indexed: false;
            readonly internalType: "struct IVault.VaultActionData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "UnexpectedTokens";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "commandId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "sourceChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "sourceAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "commandId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "sourceChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "sourceAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "tokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "executeWithToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gateway";
        readonly outputs: readonly [{
            readonly internalType: "contract IAxelarGateway";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "strategy";
                readonly type: "bytes4";
            }, {
                readonly internalType: "string";
                readonly name: "token";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "gasFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct AccountMessages.InvestRequest";
            readonly name: "investRequest";
            readonly type: "tuple";
        }];
        readonly name: "strategyInvest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "strategy";
                readonly type: "bytes4";
            }, {
                readonly internalType: "string";
                readonly name: "token";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "lockAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidAmt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "gasFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct AccountMessages.RedeemRequest";
            readonly name: "redeemRequest";
            readonly type: "tuple";
        }];
        readonly name: "strategyRedeem";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "strategy";
                readonly type: "bytes4";
            }, {
                readonly internalType: "string";
                readonly name: "token";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "redeemLocked";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "redeemLiquid";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "gasFee";
                readonly type: "uint256";
            }];
            readonly internalType: "struct AccountMessages.RedeemAllRequest";
            readonly name: "redeemAllRequest";
            readonly type: "tuple";
        }];
        readonly name: "strategyRedeemAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AccountsStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountsStrategy;
}
