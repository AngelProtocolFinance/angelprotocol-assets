import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Registrar, RegistrarInterface } from "../../polygon/Registrar";
export declare class Registrar__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "param";
            readonly type: "string";
        }];
        readonly name: "InvalidAddress";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_chainName";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_accountsContractAddress";
            readonly type: "string";
        }];
        readonly name: "AccountsContractStorageUpdated";
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
            readonly internalType: "enum LibAccounts.FeeTypes";
            readonly name: "_feeType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_bpsRate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_payoutAddress";
            readonly type: "address";
        }];
        readonly name: "FeeSettingsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_tokenAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_gasFee";
            readonly type: "uint256";
        }];
        readonly name: "GasFeeUpdated";
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
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly name: "NetworkConnectionPosted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly name: "NetworkConnectionRemoved";
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
        readonly name: "RebalanceParamsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "_strategyId";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "enum LocalRegistrarLib.StrategyApprovalState";
            readonly name: "_approvalState";
            readonly type: "uint8";
        }];
        readonly name: "StrategyApprovalUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "_strategyId";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "_network";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_lockAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_liqAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "enum LocalRegistrarLib.StrategyApprovalState";
            readonly name: "_approvalState";
            readonly type: "uint8";
        }];
        readonly name: "StrategyParamsUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_tokenAddr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "_isAccepted";
            readonly type: "bool";
        }];
        readonly name: "TokenAcceptanceUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_targetChain";
            readonly type: "string";
        }];
        readonly name: "getAccountsContractAddressByChain";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum LibAccounts.FeeTypes";
            readonly name: "_feeType";
            readonly type: "uint8";
        }];
        readonly name: "getFeeSettingsByFeeType";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddr";
            readonly type: "address";
        }];
        readonly name: "getGasByToken";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRebalanceParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "rebalanceLiquidProfits";
                readonly type: "bool";
            }, {
                readonly internalType: "uint32";
                readonly name: "lockedRebalanceToLiquid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "interestDistribution";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "lockedPrincipleToLiquid";
                readonly type: "bool";
            }, {
                readonly internalType: "uint32";
                readonly name: "principleDistribution";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "basis";
                readonly type: "uint32";
            }];
            readonly internalType: "struct LocalRegistrarLib.RebalanceParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_strategyId";
            readonly type: "bytes4";
        }];
        readonly name: "getStrategyApprovalState";
        readonly outputs: readonly [{
            readonly internalType: "enum LocalRegistrarLib.StrategyApprovalState";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_strategyId";
            readonly type: "bytes4";
        }];
        readonly name: "getStrategyParamsById";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum LocalRegistrarLib.StrategyApprovalState";
                readonly name: "approvalState";
                readonly type: "uint8";
            }, {
                readonly internalType: "string";
                readonly name: "network";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "lockedVaultAddr";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "liquidVaultAddr";
                readonly type: "address";
            }];
            readonly internalType: "struct LocalRegistrarLib.StrategyParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUniswapFactoryAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUniswapRouterAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVaultEmitterAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_operator";
            readonly type: "address";
        }];
        readonly name: "getVaultOperatorApproved";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "apTeamMultisig";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "router";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "axelarGateway";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "axelarGasService";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "networkName";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "refundAddr";
                readonly type: "address";
            }];
            readonly internalType: "struct RegistrarMessages.InstantiateRequest";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_chain";
            readonly type: "string";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddr";
            readonly type: "address";
        }];
        readonly name: "isTokenAccepted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly name: "queryAllStrategies";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "allStrategies";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "view";
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
                readonly internalType: "address";
                readonly name: "apTeamMultisig";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "indexFundContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "haloToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "govContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "fundraisingContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "uniswapRouter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "uniswapFactory";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "multisigFactory";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "multisigEmitter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "charityApplications";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "proxyAdmin";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "usdcAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "wMaticAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gasFwdFactory";
                readonly type: "address";
            }];
            readonly internalType: "struct RegistrarStorage.Config";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "networkName";
            readonly type: "string";
        }];
        readonly name: "queryNetworkConnection";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "router";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "axelarGateway";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gasReceiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "refundAddr";
                readonly type: "address";
            }];
            readonly internalType: "struct LocalRegistrarLib.NetworkInfo";
            readonly name: "response";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "queryTokenPriceFeed";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_chainName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_accountsContractAddress";
            readonly type: "string";
        }];
        readonly name: "setAccountsContractAddressByChain";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum LibAccounts.FeeTypes";
            readonly name: "_feeType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_rate";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_payout";
            readonly type: "address";
        }];
        readonly name: "setFeeSettingsByFeesType";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasFee";
            readonly type: "uint256";
        }];
        readonly name: "setGasByToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "rebalanceLiquidProfits";
                readonly type: "bool";
            }, {
                readonly internalType: "uint32";
                readonly name: "lockedRebalanceToLiquid";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "interestDistribution";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "lockedPrincipleToLiquid";
                readonly type: "bool";
            }, {
                readonly internalType: "uint32";
                readonly name: "principleDistribution";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "basis";
                readonly type: "uint32";
            }];
            readonly internalType: "struct LocalRegistrarLib.RebalanceParams";
            readonly name: "_rebalanceParams";
            readonly type: "tuple";
        }];
        readonly name: "setRebalanceParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_strategyId";
            readonly type: "bytes4";
        }, {
            readonly internalType: "enum LocalRegistrarLib.StrategyApprovalState";
            readonly name: "_approvalState";
            readonly type: "uint8";
        }];
        readonly name: "setStrategyApprovalState";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_strategyId";
            readonly type: "bytes4";
        }, {
            readonly internalType: "string";
            readonly name: "_network";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "_lockAddr";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_liqAddr";
            readonly type: "address";
        }, {
            readonly internalType: "enum LocalRegistrarLib.StrategyApprovalState";
            readonly name: "_approvalState";
            readonly type: "uint8";
        }];
        readonly name: "setStrategyParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddr";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_isAccepted";
            readonly type: "bool";
        }];
        readonly name: "setTokenAccepted";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_uniswapRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_uniswapFactory";
            readonly type: "address";
        }];
        readonly name: "setUniswapAddresses";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vaultEmitter";
            readonly type: "address";
        }];
        readonly name: "setVaultEmitterAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_isApproved";
            readonly type: "bool";
        }];
        readonly name: "setVaultOperatorApproved";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "thisChain";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
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
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "accountsContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "apTeamMultisig";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "indexFundContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "haloToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "govContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "fundraisingContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "uniswapRouter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "uniswapFactory";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "multisigFactory";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "multisigEmitter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "charityApplications";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "proxyAdmin";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "usdcAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "wMaticAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gasFwdFactory";
                readonly type: "address";
            }];
            readonly internalType: "struct RegistrarMessages.UpdateConfigRequest";
            readonly name: "details";
            readonly type: "tuple";
        }];
        readonly name: "updateConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "networkName";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "router";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "axelarGateway";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gasReceiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "refundAddr";
                readonly type: "address";
            }];
            readonly internalType: "struct LocalRegistrarLib.NetworkInfo";
            readonly name: "networkInfo";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum LocalRegistrarLib.NetworkConnectionAction";
            readonly name: "action";
            readonly type: "uint8";
        }];
        readonly name: "updateNetworkConnections";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly name: "updateTokenPriceFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RegistrarInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Registrar;
}
