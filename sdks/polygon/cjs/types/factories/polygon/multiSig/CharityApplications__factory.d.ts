import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CharityApplications, CharityApplicationsInterface } from "../../../polygon/multiSig/CharityApplications";
export declare class CharityApplications__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ApplicationConfirmationRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ApplicationConfirmed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "ApplicationExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "charityName";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expiry";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }];
        readonly name: "ApplicationProposed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "approvalsRequired";
            readonly type: "uint256";
        }];
        readonly name: "ApprovalsRequiredChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "transactionExpiry";
            readonly type: "uint256";
        }];
        readonly name: "ExpiryChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "member";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "GasSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "approvalsRequired";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "requireExecution";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "transactionExpiry";
            readonly type: "uint256";
        }];
        readonly name: "InitializedMultiSig";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "currOwner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnerReplaced";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly name: "OwnersAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly name: "OwnersRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "requireExecution";
            readonly type: "bool";
        }];
        readonly name: "RequireExecutionChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "SeedAssetSent";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "TransactionConfirmationRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "TransactionConfirmed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "TransactionExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "msAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }];
        readonly name: "TransactionSubmitted";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "activeOwnersCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly name: "addOwners";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "approvalsRequired";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_approvalsRequired";
            readonly type: "uint256";
        }];
        readonly name: "changeApprovalsRequirement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_requireExecution";
            readonly type: "bool";
        }];
        readonly name: "changeRequireExecution";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_transactionExpiry";
            readonly type: "uint256";
        }];
        readonly name: "changeTransactionExpiry";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "config";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "accountsContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "seedSplitToLiquid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "seedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "seedAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "confirmProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "confirmTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "confirmations";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "count";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "executeProposal";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "executeTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "getConfirmationCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "ownerAddr";
            readonly type: "address";
        }];
        readonly name: "getConfirmationStatus";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "ownerAddr";
            readonly type: "address";
        }];
        readonly name: "getOwnerStatus";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "getProposalConfirmationCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "ownerAddr";
            readonly type: "address";
        }];
        readonly name: "getProposalConfirmationStatus";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_approvalsRequired";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_requireExecution";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_transactionExpiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_accountsContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_seedSplitToLiquid";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_seedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_seedAmount";
            readonly type: "uint256";
        }];
        readonly name: "initializeApplications";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "isConfirmed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "isOwner";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "isProposalConfirmed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposalConfirmations";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "count";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposals";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "withdrawBeforeMaturity";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "maturityTime";
                readonly type: "uint256";
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
                readonly internalType: "address[]";
                readonly name: "members";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "threshold";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "duration";
                readonly type: "uint256";
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
                readonly internalType: "uint256";
                readonly name: "proposalLink";
                readonly type: "uint256";
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
            }];
            readonly internalType: "struct AccountMessages.CreateEndowmentRequest";
            readonly name: "application";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "executed";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "withdrawBeforeMaturity";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "maturityTime";
                readonly type: "uint256";
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
                readonly internalType: "address[]";
                readonly name: "members";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "threshold";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "duration";
                readonly type: "uint256";
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
                readonly internalType: "uint256";
                readonly name: "proposalLink";
                readonly type: "uint256";
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
            }];
            readonly internalType: "struct AccountMessages.CreateEndowmentRequest";
            readonly name: "_application";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_metadata";
            readonly type: "bytes";
        }];
        readonly name: "proposeApplication";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queryConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "accountsContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "seedSplitToLiquid";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "gasAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "seedAsset";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "seedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ApplicationsStorage.Config";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly name: "removeOwners";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "currOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "replaceOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requireExecution";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "revokeConfirmation";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "formerOwner";
            readonly type: "address";
        }];
        readonly name: "revokeConfirmationOfFormerOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "revokeProposalConfirmation";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }];
        readonly name: "submitTransaction";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "transactionCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "transactionExpiry";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "transactions";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "executed";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_transactionExpiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "accountsContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "seedSplitToLiquid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "seedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "seedAmount";
            readonly type: "uint256";
        }];
        readonly name: "updateConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): CharityApplicationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CharityApplications;
}
