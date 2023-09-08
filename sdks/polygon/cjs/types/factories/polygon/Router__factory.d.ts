import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Router, RouterInterface } from "../../polygon/Router";
export declare class Router__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAddressString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotApprovedByGateway";
        readonly type: "error";
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
            readonly name: "action";
            readonly type: "tuple";
        }];
        readonly name: "Deposit";
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
            readonly name: "action";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "ErrorBytesLogged";
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
            readonly name: "action";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "ErrorLogged";
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
            readonly name: "action";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Redeem";
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
            readonly name: "action";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Refund";
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
            readonly name: "action";
            readonly type: "tuple";
        }];
        readonly name: "RewardsHarvested";
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
            readonly name: "action";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
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
            readonly name: "action";
            readonly type: "tuple";
        }, {
            readonly internalType: "string";
            readonly name: "tokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
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
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "executeLocal";
        readonly outputs: readonly [{
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
        readonly inputs: readonly [{
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
        readonly name: "executeWithTokenLocal";
        readonly outputs: readonly [{
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
            readonly internalType: "address";
            readonly name: "_registrar";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "registrar";
        readonly outputs: readonly [{
            readonly internalType: "contract ILocalRegistrar";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasFeeAmt";
            readonly type: "uint256";
        }];
        readonly name: "sendTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Router;
}
