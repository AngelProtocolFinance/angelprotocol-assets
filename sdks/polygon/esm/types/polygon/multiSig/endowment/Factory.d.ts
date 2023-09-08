import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface FactoryInterface extends utils.Interface {
    functions: {
        "create(uint256,address,address[],uint256,uint256)": FunctionFragment;
        "endowmentIdToMultisig(uint256)": FunctionFragment;
        "getInstantiationCount(address)": FunctionFragment;
        "implementationAddress()": FunctionFragment;
        "instantiations(address,uint256)": FunctionFragment;
        "isInstantiation(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "proxyAdmin()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateImplementation(address)": FunctionFragment;
        "updateProxyAdmin(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "create" | "endowmentIdToMultisig" | "getInstantiationCount" | "implementationAddress" | "instantiations" | "isInstantiation" | "owner" | "proxyAdmin" | "renounceOwnership" | "transferOwnership" | "updateImplementation" | "updateProxyAdmin"): FunctionFragment;
    encodeFunctionData(functionFragment: "create", values: [BigNumberish, string, string[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "endowmentIdToMultisig", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getInstantiationCount", values: [string]): string;
    encodeFunctionData(functionFragment: "implementationAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "instantiations", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isInstantiation", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "updateProxyAdmin", values: [string]): string;
    decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endowmentIdToMultisig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInstantiationCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementationAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantiations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInstantiation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProxyAdmin", data: BytesLike): Result;
    events: {
        "ContractInstantiated(address,address)": EventFragment;
        "ImplementationUpdated(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProxyAdminUpdated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractInstantiated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ImplementationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyAdminUpdated"): EventFragment;
}
export interface ContractInstantiatedEventObject {
    sender: string;
    instantiation: string;
}
export type ContractInstantiatedEvent = TypedEvent<[
    string,
    string
], ContractInstantiatedEventObject>;
export type ContractInstantiatedEventFilter = TypedEventFilter<ContractInstantiatedEvent>;
export interface ImplementationUpdatedEventObject {
    implementationAddress: string;
}
export type ImplementationUpdatedEvent = TypedEvent<[
    string
], ImplementationUpdatedEventObject>;
export type ImplementationUpdatedEventFilter = TypedEventFilter<ImplementationUpdatedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProxyAdminUpdatedEventObject {
    admin: string;
}
export type ProxyAdminUpdatedEvent = TypedEvent<[
    string
], ProxyAdminUpdatedEventObject>;
export type ProxyAdminUpdatedEventFilter = TypedEventFilter<ProxyAdminUpdatedEvent>;
export interface Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FactoryInterface;
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
        create(endowmentId: BigNumberish, emitterAddress: string, owners: string[], required: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        endowmentIdToMultisig(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getInstantiationCount(creator: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        implementationAddress(overrides?: CallOverrides): Promise<[string]>;
        instantiations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isInstantiation(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxyAdmin(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateImplementation(_implementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateProxyAdmin(_proxyAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    create(endowmentId: BigNumberish, emitterAddress: string, owners: string[], required: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    endowmentIdToMultisig(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getInstantiationCount(creator: string, overrides?: CallOverrides): Promise<BigNumber>;
    implementationAddress(overrides?: CallOverrides): Promise<string>;
    instantiations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isInstantiation(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxyAdmin(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateImplementation(_implementationAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateProxyAdmin(_proxyAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        create(endowmentId: BigNumberish, emitterAddress: string, owners: string[], required: BigNumberish, transactionExpiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
        endowmentIdToMultisig(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getInstantiationCount(creator: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementationAddress(overrides?: CallOverrides): Promise<string>;
        instantiations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isInstantiation(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxyAdmin(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateImplementation(_implementationAddress: string, overrides?: CallOverrides): Promise<void>;
        updateProxyAdmin(_proxyAdmin: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractInstantiated(address,address)"(sender?: null, instantiation?: null): ContractInstantiatedEventFilter;
        ContractInstantiated(sender?: null, instantiation?: null): ContractInstantiatedEventFilter;
        "ImplementationUpdated(address)"(implementationAddress?: null): ImplementationUpdatedEventFilter;
        ImplementationUpdated(implementationAddress?: null): ImplementationUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "ProxyAdminUpdated(address)"(admin?: null): ProxyAdminUpdatedEventFilter;
        ProxyAdminUpdated(admin?: null): ProxyAdminUpdatedEventFilter;
    };
    estimateGas: {
        create(endowmentId: BigNumberish, emitterAddress: string, owners: string[], required: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        endowmentIdToMultisig(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getInstantiationCount(creator: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementationAddress(overrides?: CallOverrides): Promise<BigNumber>;
        instantiations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isInstantiation(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateImplementation(_implementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateProxyAdmin(_proxyAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        create(endowmentId: BigNumberish, emitterAddress: string, owners: string[], required: BigNumberish, transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        endowmentIdToMultisig(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInstantiationCount(creator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementationAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        instantiations(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInstantiation(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateImplementation(_implementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateProxyAdmin(_proxyAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
