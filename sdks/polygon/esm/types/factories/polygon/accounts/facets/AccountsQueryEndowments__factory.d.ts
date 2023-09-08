import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AccountsQueryEndowments, AccountsQueryEndowmentsInterface } from "../../../../polygon/accounts/facets/AccountsQueryEndowments";
export declare class AccountsQueryEndowments__factory {
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
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }];
        readonly name: "getEndowmentBeneficiaries";
        readonly outputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "";
            readonly type: "uint32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "getWalletBeneficiaries";
        readonly outputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "";
            readonly type: "uint32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }];
        readonly name: "isDafApprovedEndowment";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queryConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "version";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "networkName";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "registrarContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nextAccountId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct AccountMessages.ConfigResponse";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }];
        readonly name: "queryEndowmentDetails";
        readonly outputs: readonly [{
            readonly components: readonly [{
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
                readonly internalType: "enum LibAccounts.Tier";
                readonly name: "tier";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum LibAccounts.EndowmentType";
                readonly name: "endowType";
                readonly type: "uint8";
            }, {
                readonly internalType: "string";
                readonly name: "logo";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "image";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "maturityTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "proposalLink";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "multisig";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "dao";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "donationMatch";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "donationMatchActive";
                readonly type: "bool";
            }, {
                readonly internalType: "address[]";
                readonly name: "allowlistedBeneficiaries";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "allowlistedContributors";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "maturityAllowlist";
                readonly type: "address[]";
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
                readonly name: "balanceFee";
                readonly type: "tuple";
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
            }, {
                readonly internalType: "uint32";
                readonly name: "parent";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "ignoreUserSplits";
                readonly type: "bool";
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
                readonly internalType: "uint256";
                readonly name: "referralId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "gasFwd";
                readonly type: "address";
            }];
            readonly internalType: "struct AccountMessages.EndowmentResponse";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }];
        readonly name: "queryState";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "closingEndowment";
                readonly type: "bool";
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
                readonly internalType: "struct LibAccounts.Beneficiary";
                readonly name: "closingBeneficiary";
                readonly type: "tuple";
            }];
            readonly internalType: "struct AccountMessages.StateResponse";
            readonly name: "stateResponse";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "id";
            readonly type: "uint32";
        }, {
            readonly internalType: "enum IVault.VaultType";
            readonly name: "accountType";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }];
        readonly name: "queryTokenAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AccountsQueryEndowmentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountsQueryEndowments;
}
