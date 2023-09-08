import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AccountsUpdateEndowments, AccountsUpdateEndowmentsInterface } from "../../../../polygon/accounts/facets/AccountsUpdateEndowments";
export declare class AccountsUpdateEndowments__factory {
    static readonly abi: readonly [{
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
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly internalType: "enum IAccountsUpdateEndowments.ControllerSettingOption";
            readonly name: "setting";
            readonly type: "uint8";
        }];
        readonly name: "revokeDelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly internalType: "enum IAccountsUpdateEndowments.ControllerSettingOption";
            readonly name: "setting";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "delegateAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "delegateExpiry";
            readonly type: "uint256";
        }];
        readonly name: "setDelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "endowId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "tokenAddr";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeedAddr";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "tokenStatus";
            readonly type: "bool";
        }];
        readonly name: "updateAcceptedToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "id";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "sdgs";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "string";
                readonly name: "logo";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "image";
                readonly type: "string";
            }];
            readonly internalType: "struct AccountMessages.UpdateEndowmentDetailsRequest";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly name: "updateEndowmentDetails";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AccountsUpdateEndowmentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountsUpdateEndowments;
}
