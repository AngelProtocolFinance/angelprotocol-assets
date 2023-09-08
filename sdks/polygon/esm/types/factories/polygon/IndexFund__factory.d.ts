import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IndexFund, IndexFundInterface } from "../../polygon/IndexFund";
export declare class IndexFund__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "param";
            readonly type: "string";
        }];
        readonly name: "InvalidAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidToken";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }];
        readonly name: "ActiveFundUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "registrarContract";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundingGoal";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundRotation";
            readonly type: "uint256";
        }];
        readonly name: "ConfigUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }];
        readonly name: "DonationProcessed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "FundCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "FundRemoved";
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
            readonly name: "registrarContract";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundRotation";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundingGoal";
            readonly type: "uint256";
        }];
        readonly name: "Instantiated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "endowmentId";
            readonly type: "uint32";
        }];
        readonly name: "MemberRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32[]";
            readonly name: "endowments";
            readonly type: "uint32[]";
        }];
        readonly name: "MembersUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "StateUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "description";
            readonly type: "string";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "endowments";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "bool";
            readonly name: "rotatingFund";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "splitToLiquid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiryTime";
            readonly type: "uint256";
        }];
        readonly name: "createIndexFund";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "depositERC20";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "registrarContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fundRotation";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fundingGoal";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queryActiveFundDetails";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "description";
                readonly type: "string";
            }, {
                readonly internalType: "uint32[]";
                readonly name: "endowments";
                readonly type: "uint32[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "splitToLiquid";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiryTime";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IIndexFund.FundResponse";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queryConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "registrarContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fundRotation";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "fundingGoal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IndexFundStorage.Config";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }];
        readonly name: "queryFundDetails";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "description";
                readonly type: "string";
            }, {
                readonly internalType: "uint32[]";
                readonly name: "endowments";
                readonly type: "uint32[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "splitToLiquid";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiryTime";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IIndexFund.FundResponse";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "endowmentId";
            readonly type: "uint32";
        }];
        readonly name: "queryInvolvedFunds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queryRotatingFunds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "queryState";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "activeFund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "roundDonations";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "nextRotationBlock";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IIndexFund.StateResponse";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }];
        readonly name: "removeIndexFund";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "endowment";
            readonly type: "uint32";
        }];
        readonly name: "removeMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "registrarContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fundRotation";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fundingGoal";
            readonly type: "uint256";
        }];
        readonly name: "updateConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fundId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "endowmentsAdd";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "endowmentsRemove";
            readonly type: "uint32[]";
        }];
        readonly name: "updateFundMembers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IndexFundInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IndexFund;
}
