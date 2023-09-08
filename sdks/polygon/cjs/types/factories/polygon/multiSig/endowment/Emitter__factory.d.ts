import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Emitter, EmitterInterface } from "../../../../polygon/multiSig/endowment/Emitter";
export declare class Emitter__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "approvalsRequired";
            readonly type: "uint256";
        }];
        readonly name: "ApprovalsRequirementChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "multisigAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "required";
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
        readonly name: "EndowmentMultisigCreated";
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
            readonly name: "endowmentId";
            readonly type: "uint256";
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
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
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
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
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
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
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
            readonly name: "owner";
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
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
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
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
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
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "approvalsRequired";
            readonly type: "uint256";
        }];
        readonly name: "approvalsRequirementChangedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "multisigAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "requireExecution";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "transactionExpiry";
            readonly type: "uint256";
        }];
        readonly name: "createEndowmentMultisig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "transactionExpiry";
            readonly type: "uint256";
        }];
        readonly name: "expiryChangedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_multisigFactory";
            readonly type: "address";
        }];
        readonly name: "initEndowmentMultiSigEmitter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "currOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "ownerReplacedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly name: "ownersAddedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly name: "ownersRemovedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "requireExecution";
            readonly type: "bool";
        }];
        readonly name: "requireExecutionChangedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "transactionConfirmationRevokedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "transactionConfirmedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }];
        readonly name: "transactionExecutedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "endowmentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "transactionId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }];
        readonly name: "transactionSubmittedEndowment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmitterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Emitter;
}
