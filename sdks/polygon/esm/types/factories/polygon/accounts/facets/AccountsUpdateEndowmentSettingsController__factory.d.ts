import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AccountsUpdateEndowmentSettingsController, AccountsUpdateEndowmentSettingsControllerInterface } from "../../../../polygon/accounts/facets/AccountsUpdateEndowmentSettingsController";
export declare class AccountsUpdateEndowmentSettingsController__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "key";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "currVal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "decrVal";
            readonly type: "uint256";
        }];
        readonly name: "DecrAmountExceedsValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "key";
            readonly type: "address";
        }];
        readonly name: "NonExistentKey";
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
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly internalType: "enum LibAccounts.AllowlistType";
            readonly name: "allowlistType";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "add";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "remove";
            readonly type: "address[]";
        }];
        readonly name: "updateEndowmentAllowlist";
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
                readonly components: readonly [{
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "acceptedTokens";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "lockedInvestmentManagement";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "liquidInvestmentManagement";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "allowlistedBeneficiaries";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "allowlistedContributors";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "maturityAllowlist";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "maturityTime";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "earlyLockedWithdrawFee";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "withdrawFee";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "depositFee";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "balanceFee";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "name";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "image";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "logo";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "sdgs";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "splitToLiquid";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bool";
                        readonly name: "locked";
                        readonly type: "bool";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "addr";
                            readonly type: "address";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "expires";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct LibAccounts.Delegate";
                        readonly name: "delegate";
                        readonly type: "tuple";
                    }];
                    readonly internalType: "struct LibAccounts.SettingsPermission";
                    readonly name: "ignoreUserSplits";
                    readonly type: "tuple";
                }];
                readonly internalType: "struct LibAccounts.SettingsController";
                readonly name: "settingsController";
                readonly type: "tuple";
            }];
            readonly internalType: "struct AccountMessages.UpdateEndowmentControllerRequest";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly name: "updateEndowmentController";
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
                readonly internalType: "bool";
                readonly name: "donationMatchActive";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "maturityTime";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "max";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "min";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "defaultSplit";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LibAccounts.SplitDetails";
                readonly name: "splitToLiquid";
                readonly type: "tuple";
            }, {
                readonly internalType: "bool";
                readonly name: "ignoreUserSplits";
                readonly type: "bool";
            }];
            readonly internalType: "struct AccountMessages.UpdateEndowmentSettingsRequest";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly name: "updateEndowmentSettings";
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
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "payoutAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bps";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LibAccounts.FeeSetting";
                readonly name: "earlyLockedWithdrawFee";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "payoutAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bps";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LibAccounts.FeeSetting";
                readonly name: "depositFee";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "payoutAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bps";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LibAccounts.FeeSetting";
                readonly name: "withdrawFee";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "payoutAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bps";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct LibAccounts.FeeSetting";
                readonly name: "balanceFee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct AccountMessages.UpdateFeeSettingRequest";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly name: "updateFeeSettings";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AccountsUpdateEndowmentSettingsControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountsUpdateEndowmentSettingsController;
}
