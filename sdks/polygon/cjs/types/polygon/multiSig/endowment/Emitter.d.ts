import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface EmitterInterface extends utils.Interface {
    functions: {
        "approvalsRequirementChangedEndowment(uint256,uint256)": FunctionFragment;
        "createEndowmentMultisig(address,uint256,address,address[],uint256,bool,uint256)": FunctionFragment;
        "expiryChangedEndowment(uint256,uint256)": FunctionFragment;
        "initEndowmentMultiSigEmitter(address)": FunctionFragment;
        "ownerReplacedEndowment(uint256,address,address)": FunctionFragment;
        "ownersAddedEndowment(uint256,address[])": FunctionFragment;
        "ownersRemovedEndowment(uint256,address[])": FunctionFragment;
        "requireExecutionChangedEndowment(uint256,bool)": FunctionFragment;
        "transactionConfirmationRevokedEndowment(uint256,address,uint256)": FunctionFragment;
        "transactionConfirmedEndowment(uint256,address,uint256)": FunctionFragment;
        "transactionExecutedEndowment(uint256,uint256)": FunctionFragment;
        "transactionSubmittedEndowment(uint256,address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approvalsRequirementChangedEndowment" | "createEndowmentMultisig" | "expiryChangedEndowment" | "initEndowmentMultiSigEmitter" | "ownerReplacedEndowment" | "ownersAddedEndowment" | "ownersRemovedEndowment" | "requireExecutionChangedEndowment" | "transactionConfirmationRevokedEndowment" | "transactionConfirmedEndowment" | "transactionExecutedEndowment" | "transactionSubmittedEndowment"): FunctionFragment;
    encodeFunctionData(functionFragment: "approvalsRequirementChangedEndowment", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createEndowmentMultisig", values: [
        string,
        BigNumberish,
        string,
        string[],
        BigNumberish,
        boolean,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "expiryChangedEndowment", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initEndowmentMultiSigEmitter", values: [string]): string;
    encodeFunctionData(functionFragment: "ownerReplacedEndowment", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "ownersAddedEndowment", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "ownersRemovedEndowment", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "requireExecutionChangedEndowment", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "transactionConfirmationRevokedEndowment", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transactionConfirmedEndowment", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transactionExecutedEndowment", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transactionSubmittedEndowment", values: [BigNumberish, string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "approvalsRequirementChangedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createEndowmentMultisig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expiryChangedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initEndowmentMultiSigEmitter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerReplacedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownersAddedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownersRemovedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireExecutionChangedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactionConfirmationRevokedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactionConfirmedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactionExecutedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactionSubmittedEndowment", data: BytesLike): Result;
    events: {
        "ApprovalsRequirementChanged(uint256,uint256)": EventFragment;
        "EndowmentMultisigCreated(address,uint256,address,address[],uint256,bool,uint256)": EventFragment;
        "ExpiryChanged(uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnerReplaced(uint256,address,address)": EventFragment;
        "OwnersAdded(uint256,address[])": EventFragment;
        "OwnersRemoved(uint256,address[])": EventFragment;
        "RequireExecutionChanged(uint256,bool)": EventFragment;
        "TransactionConfirmationRevoked(uint256,address,uint256)": EventFragment;
        "TransactionConfirmed(uint256,address,uint256)": EventFragment;
        "TransactionExecuted(uint256,uint256)": EventFragment;
        "TransactionSubmitted(uint256,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalsRequirementChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EndowmentMultisigCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExpiryChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerReplaced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnersAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnersRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequireExecutionChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionConfirmationRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionSubmitted"): EventFragment;
}
export interface ApprovalsRequirementChangedEventObject {
    endowmentId: BigNumber;
    approvalsRequired: BigNumber;
}
export type ApprovalsRequirementChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ApprovalsRequirementChangedEventObject>;
export type ApprovalsRequirementChangedEventFilter = TypedEventFilter<ApprovalsRequirementChangedEvent>;
export interface EndowmentMultisigCreatedEventObject {
    multisigAddress: string;
    endowmentId: BigNumber;
    emitter: string;
    owners: string[];
    required: BigNumber;
    requireExecution: boolean;
    transactionExpiry: BigNumber;
}
export type EndowmentMultisigCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string[],
    BigNumber,
    boolean,
    BigNumber
], EndowmentMultisigCreatedEventObject>;
export type EndowmentMultisigCreatedEventFilter = TypedEventFilter<EndowmentMultisigCreatedEvent>;
export interface ExpiryChangedEventObject {
    endowmentId: BigNumber;
    transactionExpiry: BigNumber;
}
export type ExpiryChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ExpiryChangedEventObject>;
export type ExpiryChangedEventFilter = TypedEventFilter<ExpiryChangedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnerReplacedEventObject {
    endowmentId: BigNumber;
    currOwner: string;
    newOwner: string;
}
export type OwnerReplacedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], OwnerReplacedEventObject>;
export type OwnerReplacedEventFilter = TypedEventFilter<OwnerReplacedEvent>;
export interface OwnersAddedEventObject {
    endowmentId: BigNumber;
    owners: string[];
}
export type OwnersAddedEvent = TypedEvent<[
    BigNumber,
    string[]
], OwnersAddedEventObject>;
export type OwnersAddedEventFilter = TypedEventFilter<OwnersAddedEvent>;
export interface OwnersRemovedEventObject {
    endowmentId: BigNumber;
    owners: string[];
}
export type OwnersRemovedEvent = TypedEvent<[
    BigNumber,
    string[]
], OwnersRemovedEventObject>;
export type OwnersRemovedEventFilter = TypedEventFilter<OwnersRemovedEvent>;
export interface RequireExecutionChangedEventObject {
    endowmentId: BigNumber;
    requireExecution: boolean;
}
export type RequireExecutionChangedEvent = TypedEvent<[
    BigNumber,
    boolean
], RequireExecutionChangedEventObject>;
export type RequireExecutionChangedEventFilter = TypedEventFilter<RequireExecutionChangedEvent>;
export interface TransactionConfirmationRevokedEventObject {
    endowmentId: BigNumber;
    owner: string;
    transactionId: BigNumber;
}
export type TransactionConfirmationRevokedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], TransactionConfirmationRevokedEventObject>;
export type TransactionConfirmationRevokedEventFilter = TypedEventFilter<TransactionConfirmationRevokedEvent>;
export interface TransactionConfirmedEventObject {
    endowmentId: BigNumber;
    owner: string;
    transactionId: BigNumber;
}
export type TransactionConfirmedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], TransactionConfirmedEventObject>;
export type TransactionConfirmedEventFilter = TypedEventFilter<TransactionConfirmedEvent>;
export interface TransactionExecutedEventObject {
    endowmentId: BigNumber;
    transactionId: BigNumber;
}
export type TransactionExecutedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], TransactionExecutedEventObject>;
export type TransactionExecutedEventFilter = TypedEventFilter<TransactionExecutedEvent>;
export interface TransactionSubmittedEventObject {
    endowmentId: BigNumber;
    owner: string;
    transactionId: BigNumber;
    metadata: string;
}
export type TransactionSubmittedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    string
], TransactionSubmittedEventObject>;
export type TransactionSubmittedEventFilter = TypedEventFilter<TransactionSubmittedEvent>;
export interface Emitter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EmitterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        approvalsRequirementChangedEndowment(endowmentId: BigNumberish, approvalsRequired: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createEndowmentMultisig(multisigAddress: string, endowmentId: BigNumberish, emitter: string, owners: string[], required: BigNumberish, requireExecution: boolean, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        expiryChangedEndowment(endowmentId: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initEndowmentMultiSigEmitter(_multisigFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ownerReplacedEndowment(endowmentId: BigNumberish, currOwner: string, newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ownersAddedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ownersRemovedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requireExecutionChangedEndowment(endowmentId: BigNumberish, requireExecution: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transactionConfirmationRevokedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transactionConfirmedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transactionExecutedEndowment(endowmentId: BigNumberish, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transactionSubmittedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    approvalsRequirementChangedEndowment(endowmentId: BigNumberish, approvalsRequired: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createEndowmentMultisig(multisigAddress: string, endowmentId: BigNumberish, emitter: string, owners: string[], required: BigNumberish, requireExecution: boolean, transactionExpiry: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    expiryChangedEndowment(endowmentId: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initEndowmentMultiSigEmitter(_multisigFactory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ownerReplacedEndowment(endowmentId: BigNumberish, currOwner: string, newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ownersAddedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ownersRemovedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requireExecutionChangedEndowment(endowmentId: BigNumberish, requireExecution: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transactionConfirmationRevokedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transactionConfirmedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transactionExecutedEndowment(endowmentId: BigNumberish, transactionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transactionSubmittedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, metadata: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        approvalsRequirementChangedEndowment(endowmentId: BigNumberish, approvalsRequired: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createEndowmentMultisig(multisigAddress: string, endowmentId: BigNumberish, emitter: string, owners: string[], required: BigNumberish, requireExecution: boolean, transactionExpiry: BigNumberish, overrides?: CallOverrides): Promise<void>;
        expiryChangedEndowment(endowmentId: BigNumberish, transactionExpiry: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initEndowmentMultiSigEmitter(_multisigFactory: string, overrides?: CallOverrides): Promise<void>;
        ownerReplacedEndowment(endowmentId: BigNumberish, currOwner: string, newOwner: string, overrides?: CallOverrides): Promise<void>;
        ownersAddedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: CallOverrides): Promise<void>;
        ownersRemovedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: CallOverrides): Promise<void>;
        requireExecutionChangedEndowment(endowmentId: BigNumberish, requireExecution: boolean, overrides?: CallOverrides): Promise<void>;
        transactionConfirmationRevokedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transactionConfirmedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transactionExecutedEndowment(endowmentId: BigNumberish, transactionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transactionSubmittedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, metadata: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ApprovalsRequirementChanged(uint256,uint256)"(endowmentId?: null, approvalsRequired?: null): ApprovalsRequirementChangedEventFilter;
        ApprovalsRequirementChanged(endowmentId?: null, approvalsRequired?: null): ApprovalsRequirementChangedEventFilter;
        "EndowmentMultisigCreated(address,uint256,address,address[],uint256,bool,uint256)"(multisigAddress?: null, endowmentId?: null, emitter?: null, owners?: null, required?: null, requireExecution?: null, transactionExpiry?: null): EndowmentMultisigCreatedEventFilter;
        EndowmentMultisigCreated(multisigAddress?: null, endowmentId?: null, emitter?: null, owners?: null, required?: null, requireExecution?: null, transactionExpiry?: null): EndowmentMultisigCreatedEventFilter;
        "ExpiryChanged(uint256,uint256)"(endowmentId?: null, transactionExpiry?: null): ExpiryChangedEventFilter;
        ExpiryChanged(endowmentId?: null, transactionExpiry?: null): ExpiryChangedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnerReplaced(uint256,address,address)"(endowmentId?: null, currOwner?: null, newOwner?: null): OwnerReplacedEventFilter;
        OwnerReplaced(endowmentId?: null, currOwner?: null, newOwner?: null): OwnerReplacedEventFilter;
        "OwnersAdded(uint256,address[])"(endowmentId?: null, owners?: null): OwnersAddedEventFilter;
        OwnersAdded(endowmentId?: null, owners?: null): OwnersAddedEventFilter;
        "OwnersRemoved(uint256,address[])"(endowmentId?: null, owners?: null): OwnersRemovedEventFilter;
        OwnersRemoved(endowmentId?: null, owners?: null): OwnersRemovedEventFilter;
        "RequireExecutionChanged(uint256,bool)"(endowmentId?: null, requireExecution?: null): RequireExecutionChangedEventFilter;
        RequireExecutionChanged(endowmentId?: null, requireExecution?: null): RequireExecutionChangedEventFilter;
        "TransactionConfirmationRevoked(uint256,address,uint256)"(endowmentId?: null, owner?: null, transactionId?: null): TransactionConfirmationRevokedEventFilter;
        TransactionConfirmationRevoked(endowmentId?: null, owner?: null, transactionId?: null): TransactionConfirmationRevokedEventFilter;
        "TransactionConfirmed(uint256,address,uint256)"(endowmentId?: null, owner?: null, transactionId?: null): TransactionConfirmedEventFilter;
        TransactionConfirmed(endowmentId?: null, owner?: null, transactionId?: null): TransactionConfirmedEventFilter;
        "TransactionExecuted(uint256,uint256)"(endowmentId?: null, transactionId?: null): TransactionExecutedEventFilter;
        TransactionExecuted(endowmentId?: null, transactionId?: null): TransactionExecutedEventFilter;
        "TransactionSubmitted(uint256,address,uint256,bytes)"(endowmentId?: null, owner?: null, transactionId?: null, metadata?: null): TransactionSubmittedEventFilter;
        TransactionSubmitted(endowmentId?: null, owner?: null, transactionId?: null, metadata?: null): TransactionSubmittedEventFilter;
    };
    estimateGas: {
        approvalsRequirementChangedEndowment(endowmentId: BigNumberish, approvalsRequired: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createEndowmentMultisig(multisigAddress: string, endowmentId: BigNumberish, emitter: string, owners: string[], required: BigNumberish, requireExecution: boolean, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        expiryChangedEndowment(endowmentId: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initEndowmentMultiSigEmitter(_multisigFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ownerReplacedEndowment(endowmentId: BigNumberish, currOwner: string, newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ownersAddedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ownersRemovedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requireExecutionChangedEndowment(endowmentId: BigNumberish, requireExecution: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transactionConfirmationRevokedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transactionConfirmedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transactionExecutedEndowment(endowmentId: BigNumberish, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transactionSubmittedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approvalsRequirementChangedEndowment(endowmentId: BigNumberish, approvalsRequired: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createEndowmentMultisig(multisigAddress: string, endowmentId: BigNumberish, emitter: string, owners: string[], required: BigNumberish, requireExecution: boolean, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        expiryChangedEndowment(endowmentId: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initEndowmentMultiSigEmitter(_multisigFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ownerReplacedEndowment(endowmentId: BigNumberish, currOwner: string, newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ownersAddedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ownersRemovedEndowment(endowmentId: BigNumberish, owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requireExecutionChangedEndowment(endowmentId: BigNumberish, requireExecution: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transactionConfirmationRevokedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transactionConfirmedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transactionExecutedEndowment(endowmentId: BigNumberish, transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transactionSubmittedEndowment(endowmentId: BigNumberish, owner: string, transactionId: BigNumberish, metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
