import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace IVault {
    type VaultActionDataStruct = {
        destinationChain: string;
        strategyId: BytesLike;
        selector: BytesLike;
        accountIds: BigNumberish[];
        token: string;
        lockAmt: BigNumberish;
        liqAmt: BigNumberish;
        status: BigNumberish;
    };
    type VaultActionDataStructOutput = [
        string,
        string,
        string,
        number[],
        string,
        BigNumber,
        BigNumber,
        number
    ] & {
        destinationChain: string;
        strategyId: string;
        selector: string;
        accountIds: number[];
        token: string;
        lockAmt: BigNumber;
        liqAmt: BigNumber;
        status: number;
    };
}
export interface RouterInterface extends utils.Interface {
    functions: {
        "deposit((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),string,uint256)": FunctionFragment;
        "execute(bytes32,string,string,bytes)": FunctionFragment;
        "executeLocal(string,string,bytes)": FunctionFragment;
        "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
        "executeWithTokenLocal(string,string,bytes,string,uint256)": FunctionFragment;
        "gateway()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "registrar()": FunctionFragment;
        "sendTokens(string,string,bytes,string,uint256,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "execute" | "executeLocal" | "executeWithToken" | "executeWithTokenLocal" | "gateway" | "initialize" | "registrar" | "sendTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [IVault.VaultActionDataStruct, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "execute", values: [BytesLike, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeLocal", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeWithToken", values: [BytesLike, string, string, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeWithTokenLocal", values: [string, string, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendTokens", values: [
        string,
        string,
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithTokenLocal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;
    events: {
        "Deposit((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))": EventFragment;
        "ErrorBytesLogged((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),bytes)": EventFragment;
        "ErrorLogged((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),string)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Redeem((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),uint256)": EventFragment;
        "Refund((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),uint256)": EventFragment;
        "RewardsHarvested((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))": EventFragment;
        "Transfer((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ErrorBytesLogged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ErrorLogged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsHarvested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface DepositEventObject {
    action: IVault.VaultActionDataStructOutput;
}
export type DepositEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface ErrorBytesLoggedEventObject {
    action: IVault.VaultActionDataStructOutput;
    data: string;
}
export type ErrorBytesLoggedEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput,
    string
], ErrorBytesLoggedEventObject>;
export type ErrorBytesLoggedEventFilter = TypedEventFilter<ErrorBytesLoggedEvent>;
export interface ErrorLoggedEventObject {
    action: IVault.VaultActionDataStructOutput;
    message: string;
}
export type ErrorLoggedEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput,
    string
], ErrorLoggedEventObject>;
export type ErrorLoggedEventFilter = TypedEventFilter<ErrorLoggedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface RedeemEventObject {
    action: IVault.VaultActionDataStructOutput;
    amount: BigNumber;
}
export type RedeemEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput,
    BigNumber
], RedeemEventObject>;
export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export interface RefundEventObject {
    action: IVault.VaultActionDataStructOutput;
    amount: BigNumber;
}
export type RefundEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput,
    BigNumber
], RefundEventObject>;
export type RefundEventFilter = TypedEventFilter<RefundEvent>;
export interface RewardsHarvestedEventObject {
    action: IVault.VaultActionDataStructOutput;
}
export type RewardsHarvestedEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput
], RewardsHarvestedEventObject>;
export type RewardsHarvestedEventFilter = TypedEventFilter<RewardsHarvestedEvent>;
export interface TransferEventObject {
    action: IVault.VaultActionDataStructOutput;
    amount: BigNumber;
}
export type TransferEvent = TypedEvent<[
    IVault.VaultActionDataStructOutput,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterInterface;
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
        deposit(action: IVault.VaultActionDataStruct, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeWithTokenLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
        initialize(_registrar: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        registrar(overrides?: CallOverrides): Promise<[string]>;
        sendTokens(destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    deposit(action: IVault.VaultActionDataStruct, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeWithTokenLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    initialize(_registrar: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    registrar(overrides?: CallOverrides): Promise<string>;
    sendTokens(destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(action: IVault.VaultActionDataStruct, tokenSymbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: CallOverrides): Promise<IVault.VaultActionDataStructOutput>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeWithTokenLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<IVault.VaultActionDataStructOutput>;
        gateway(overrides?: CallOverrides): Promise<string>;
        initialize(_registrar: string, overrides?: CallOverrides): Promise<void>;
        registrar(overrides?: CallOverrides): Promise<string>;
        sendTokens(destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmt: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))"(action?: null): DepositEventFilter;
        Deposit(action?: null): DepositEventFilter;
        "ErrorBytesLogged((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),bytes)"(action?: null, data?: null): ErrorBytesLoggedEventFilter;
        ErrorBytesLogged(action?: null, data?: null): ErrorBytesLoggedEventFilter;
        "ErrorLogged((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),string)"(action?: null, message?: null): ErrorLoggedEventFilter;
        ErrorLogged(action?: null, message?: null): ErrorLoggedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Redeem((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),uint256)"(action?: null, amount?: null): RedeemEventFilter;
        Redeem(action?: null, amount?: null): RedeemEventFilter;
        "Refund((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),uint256)"(action?: null, amount?: null): RefundEventFilter;
        Refund(action?: null, amount?: null): RefundEventFilter;
        "RewardsHarvested((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8))"(action?: null): RewardsHarvestedEventFilter;
        RewardsHarvested(action?: null): RewardsHarvestedEventFilter;
        "Transfer((string,bytes4,bytes4,uint32[],address,uint256,uint256,uint8),uint256)"(action?: null, amount?: null): TransferEventFilter;
        Transfer(action?: null, amount?: null): TransferEventFilter;
    };
    estimateGas: {
        deposit(action: IVault.VaultActionDataStruct, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeWithTokenLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_registrar: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<BigNumber>;
        sendTokens(destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(action: IVault.VaultActionDataStruct, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeWithTokenLocal(sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_registrar: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendTokens(destinationChain: string, destinationAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, gasToken: string, gasFeeAmt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
