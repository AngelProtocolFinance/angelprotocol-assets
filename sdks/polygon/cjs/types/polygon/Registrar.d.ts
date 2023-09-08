import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace LibAccounts {
    type FeeSettingStruct = {
        payoutAddress: string;
        bps: BigNumberish;
    };
    type FeeSettingStructOutput = [string, BigNumber] & {
        payoutAddress: string;
        bps: BigNumber;
    };
}
export declare namespace LocalRegistrarLib {
    type RebalanceParamsStruct = {
        rebalanceLiquidProfits: boolean;
        lockedRebalanceToLiquid: BigNumberish;
        interestDistribution: BigNumberish;
        lockedPrincipleToLiquid: boolean;
        principleDistribution: BigNumberish;
        basis: BigNumberish;
    };
    type RebalanceParamsStructOutput = [
        boolean,
        number,
        number,
        boolean,
        number,
        number
    ] & {
        rebalanceLiquidProfits: boolean;
        lockedRebalanceToLiquid: number;
        interestDistribution: number;
        lockedPrincipleToLiquid: boolean;
        principleDistribution: number;
        basis: number;
    };
    type StrategyParamsStruct = {
        approvalState: BigNumberish;
        network: string;
        lockedVaultAddr: string;
        liquidVaultAddr: string;
    };
    type StrategyParamsStructOutput = [number, string, string, string] & {
        approvalState: number;
        network: string;
        lockedVaultAddr: string;
        liquidVaultAddr: string;
    };
    type NetworkInfoStruct = {
        chainId: BigNumberish;
        router: string;
        axelarGateway: string;
        gasReceiver: string;
        refundAddr: string;
    };
    type NetworkInfoStructOutput = [
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        chainId: BigNumber;
        router: string;
        axelarGateway: string;
        gasReceiver: string;
        refundAddr: string;
    };
}
export declare namespace RegistrarMessages {
    type InstantiateRequestStruct = {
        apTeamMultisig: string;
        treasury: string;
        router: string;
        axelarGateway: string;
        axelarGasService: string;
        networkName: string;
        refundAddr: string;
    };
    type InstantiateRequestStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        apTeamMultisig: string;
        treasury: string;
        router: string;
        axelarGateway: string;
        axelarGasService: string;
        networkName: string;
        refundAddr: string;
    };
    type UpdateConfigRequestStruct = {
        accountsContract: string;
        apTeamMultisig: string;
        treasury: string;
        indexFundContract: string;
        haloToken: string;
        govContract: string;
        fundraisingContract: string;
        uniswapRouter: string;
        uniswapFactory: string;
        multisigFactory: string;
        multisigEmitter: string;
        charityApplications: string;
        proxyAdmin: string;
        usdcAddress: string;
        wMaticAddress: string;
        gasFwdFactory: string;
    };
    type UpdateConfigRequestStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        accountsContract: string;
        apTeamMultisig: string;
        treasury: string;
        indexFundContract: string;
        haloToken: string;
        govContract: string;
        fundraisingContract: string;
        uniswapRouter: string;
        uniswapFactory: string;
        multisigFactory: string;
        multisigEmitter: string;
        charityApplications: string;
        proxyAdmin: string;
        usdcAddress: string;
        wMaticAddress: string;
        gasFwdFactory: string;
    };
}
export declare namespace RegistrarStorage {
    type ConfigStruct = {
        accountsContract: string;
        apTeamMultisig: string;
        treasury: string;
        indexFundContract: string;
        haloToken: string;
        govContract: string;
        fundraisingContract: string;
        uniswapRouter: string;
        uniswapFactory: string;
        multisigFactory: string;
        multisigEmitter: string;
        charityApplications: string;
        proxyAdmin: string;
        usdcAddress: string;
        wMaticAddress: string;
        gasFwdFactory: string;
    };
    type ConfigStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        accountsContract: string;
        apTeamMultisig: string;
        treasury: string;
        indexFundContract: string;
        haloToken: string;
        govContract: string;
        fundraisingContract: string;
        uniswapRouter: string;
        uniswapFactory: string;
        multisigFactory: string;
        multisigEmitter: string;
        charityApplications: string;
        proxyAdmin: string;
        usdcAddress: string;
        wMaticAddress: string;
        gasFwdFactory: string;
    };
}
export interface RegistrarInterface extends utils.Interface {
    functions: {
        "getAccountsContractAddressByChain(string)": FunctionFragment;
        "getFeeSettingsByFeeType(uint8)": FunctionFragment;
        "getGasByToken(address)": FunctionFragment;
        "getRebalanceParams()": FunctionFragment;
        "getStrategyApprovalState(bytes4)": FunctionFragment;
        "getStrategyParamsById(bytes4)": FunctionFragment;
        "getUniswapFactoryAddress()": FunctionFragment;
        "getUniswapRouterAddress()": FunctionFragment;
        "getVaultEmitterAddress()": FunctionFragment;
        "getVaultOperatorApproved(address)": FunctionFragment;
        "initialize((address,address,address,address,address,string,address))": FunctionFragment;
        "initialize(string)": FunctionFragment;
        "isTokenAccepted(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "queryAllStrategies()": FunctionFragment;
        "queryConfig()": FunctionFragment;
        "queryNetworkConnection(string)": FunctionFragment;
        "queryTokenPriceFeed(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAccountsContractAddressByChain(string,string)": FunctionFragment;
        "setFeeSettingsByFeesType(uint8,uint256,address)": FunctionFragment;
        "setGasByToken(address,uint256)": FunctionFragment;
        "setRebalanceParams((bool,uint32,uint32,bool,uint32,uint32))": FunctionFragment;
        "setStrategyApprovalState(bytes4,uint8)": FunctionFragment;
        "setStrategyParams(bytes4,string,address,address,uint8)": FunctionFragment;
        "setTokenAccepted(address,bool)": FunctionFragment;
        "setUniswapAddresses(address,address)": FunctionFragment;
        "setVaultEmitterAddress(address)": FunctionFragment;
        "setVaultOperatorApproved(address,bool)": FunctionFragment;
        "thisChain()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateConfig((address,address,address,address,address,address,address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "updateNetworkConnections(string,(uint256,address,address,address,address),uint8)": FunctionFragment;
        "updateTokenPriceFeed(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAccountsContractAddressByChain" | "getFeeSettingsByFeeType" | "getGasByToken" | "getRebalanceParams" | "getStrategyApprovalState" | "getStrategyParamsById" | "getUniswapFactoryAddress" | "getUniswapRouterAddress" | "getVaultEmitterAddress" | "getVaultOperatorApproved" | "initialize((address,address,address,address,address,string,address))" | "initialize(string)" | "isTokenAccepted" | "owner" | "queryAllStrategies" | "queryConfig" | "queryNetworkConnection" | "queryTokenPriceFeed" | "renounceOwnership" | "setAccountsContractAddressByChain" | "setFeeSettingsByFeesType" | "setGasByToken" | "setRebalanceParams" | "setStrategyApprovalState" | "setStrategyParams" | "setTokenAccepted" | "setUniswapAddresses" | "setVaultEmitterAddress" | "setVaultOperatorApproved" | "thisChain" | "transferOwnership" | "updateConfig" | "updateNetworkConnections" | "updateTokenPriceFeed"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAccountsContractAddressByChain", values: [string]): string;
    encodeFunctionData(functionFragment: "getFeeSettingsByFeeType", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasByToken", values: [string]): string;
    encodeFunctionData(functionFragment: "getRebalanceParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStrategyApprovalState", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStrategyParamsById", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getUniswapFactoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUniswapRouterAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVaultEmitterAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVaultOperatorApproved", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize((address,address,address,address,address,string,address))", values: [RegistrarMessages.InstantiateRequestStruct]): string;
    encodeFunctionData(functionFragment: "initialize(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "isTokenAccepted", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "queryAllStrategies", values?: undefined): string;
    encodeFunctionData(functionFragment: "queryConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "queryNetworkConnection", values: [string]): string;
    encodeFunctionData(functionFragment: "queryTokenPriceFeed", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAccountsContractAddressByChain", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setFeeSettingsByFeesType", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setGasByToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRebalanceParams", values: [LocalRegistrarLib.RebalanceParamsStruct]): string;
    encodeFunctionData(functionFragment: "setStrategyApprovalState", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStrategyParams", values: [BytesLike, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTokenAccepted", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setUniswapAddresses", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setVaultEmitterAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "setVaultOperatorApproved", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "thisChain", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateConfig", values: [RegistrarMessages.UpdateConfigRequestStruct]): string;
    encodeFunctionData(functionFragment: "updateNetworkConnections", values: [string, LocalRegistrarLib.NetworkInfoStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTokenPriceFeed", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getAccountsContractAddressByChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeSettingsByFeeType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasByToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRebalanceParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategyApprovalState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategyParamsById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUniswapFactoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUniswapRouterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVaultEmitterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVaultOperatorApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize((address,address,address,address,address,string,address))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenAccepted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryAllStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryNetworkConnection", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryTokenPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccountsContractAddressByChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeSettingsByFeesType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasByToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRebalanceParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategyApprovalState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategyParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenAccepted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUniswapAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVaultEmitterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVaultOperatorApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "thisChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateNetworkConnections", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenPriceFeed", data: BytesLike): Result;
    events: {
        "AccountsContractStorageUpdated(string,string)": EventFragment;
        "ConfigUpdated()": EventFragment;
        "FeeSettingsUpdated(uint8,uint256,address)": EventFragment;
        "GasFeeUpdated(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "NetworkConnectionPosted(uint256)": EventFragment;
        "NetworkConnectionRemoved(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RebalanceParamsUpdated()": EventFragment;
        "StrategyApprovalUpdated(bytes4,uint8)": EventFragment;
        "StrategyParamsUpdated(bytes4,string,address,address,uint8)": EventFragment;
        "TokenAcceptanceUpdated(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountsContractStorageUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeSettingsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NetworkConnectionPosted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NetworkConnectionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RebalanceParamsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyApprovalUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyParamsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenAcceptanceUpdated"): EventFragment;
}
export interface AccountsContractStorageUpdatedEventObject {
    _chainName: string;
    _accountsContractAddress: string;
}
export type AccountsContractStorageUpdatedEvent = TypedEvent<[
    string,
    string
], AccountsContractStorageUpdatedEventObject>;
export type AccountsContractStorageUpdatedEventFilter = TypedEventFilter<AccountsContractStorageUpdatedEvent>;
export interface ConfigUpdatedEventObject {
}
export type ConfigUpdatedEvent = TypedEvent<[], ConfigUpdatedEventObject>;
export type ConfigUpdatedEventFilter = TypedEventFilter<ConfigUpdatedEvent>;
export interface FeeSettingsUpdatedEventObject {
    _feeType: number;
    _bpsRate: BigNumber;
    _payoutAddress: string;
}
export type FeeSettingsUpdatedEvent = TypedEvent<[
    number,
    BigNumber,
    string
], FeeSettingsUpdatedEventObject>;
export type FeeSettingsUpdatedEventFilter = TypedEventFilter<FeeSettingsUpdatedEvent>;
export interface GasFeeUpdatedEventObject {
    _tokenAddr: string;
    _gasFee: BigNumber;
}
export type GasFeeUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], GasFeeUpdatedEventObject>;
export type GasFeeUpdatedEventFilter = TypedEventFilter<GasFeeUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface NetworkConnectionPostedEventObject {
    chainId: BigNumber;
}
export type NetworkConnectionPostedEvent = TypedEvent<[
    BigNumber
], NetworkConnectionPostedEventObject>;
export type NetworkConnectionPostedEventFilter = TypedEventFilter<NetworkConnectionPostedEvent>;
export interface NetworkConnectionRemovedEventObject {
    chainId: BigNumber;
}
export type NetworkConnectionRemovedEvent = TypedEvent<[
    BigNumber
], NetworkConnectionRemovedEventObject>;
export type NetworkConnectionRemovedEventFilter = TypedEventFilter<NetworkConnectionRemovedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RebalanceParamsUpdatedEventObject {
}
export type RebalanceParamsUpdatedEvent = TypedEvent<[
], RebalanceParamsUpdatedEventObject>;
export type RebalanceParamsUpdatedEventFilter = TypedEventFilter<RebalanceParamsUpdatedEvent>;
export interface StrategyApprovalUpdatedEventObject {
    _strategyId: string;
    _approvalState: number;
}
export type StrategyApprovalUpdatedEvent = TypedEvent<[
    string,
    number
], StrategyApprovalUpdatedEventObject>;
export type StrategyApprovalUpdatedEventFilter = TypedEventFilter<StrategyApprovalUpdatedEvent>;
export interface StrategyParamsUpdatedEventObject {
    _strategyId: string;
    _network: string;
    _lockAddr: string;
    _liqAddr: string;
    _approvalState: number;
}
export type StrategyParamsUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    number
], StrategyParamsUpdatedEventObject>;
export type StrategyParamsUpdatedEventFilter = TypedEventFilter<StrategyParamsUpdatedEvent>;
export interface TokenAcceptanceUpdatedEventObject {
    _tokenAddr: string;
    _isAccepted: boolean;
}
export type TokenAcceptanceUpdatedEvent = TypedEvent<[
    string,
    boolean
], TokenAcceptanceUpdatedEventObject>;
export type TokenAcceptanceUpdatedEventFilter = TypedEventFilter<TokenAcceptanceUpdatedEvent>;
export interface Registrar extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RegistrarInterface;
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
        getAccountsContractAddressByChain(_targetChain: string, overrides?: CallOverrides): Promise<[string]>;
        getFeeSettingsByFeeType(_feeType: BigNumberish, overrides?: CallOverrides): Promise<[LibAccounts.FeeSettingStructOutput]>;
        getGasByToken(_tokenAddr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRebalanceParams(overrides?: CallOverrides): Promise<[LocalRegistrarLib.RebalanceParamsStructOutput]>;
        getStrategyApprovalState(_strategyId: BytesLike, overrides?: CallOverrides): Promise<[number]>;
        getStrategyParamsById(_strategyId: BytesLike, overrides?: CallOverrides): Promise<[LocalRegistrarLib.StrategyParamsStructOutput]>;
        getUniswapFactoryAddress(overrides?: CallOverrides): Promise<[string]>;
        getUniswapRouterAddress(overrides?: CallOverrides): Promise<[string]>;
        getVaultEmitterAddress(overrides?: CallOverrides): Promise<[string]>;
        getVaultOperatorApproved(_operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        "initialize((address,address,address,address,address,string,address))"(details: RegistrarMessages.InstantiateRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "initialize(string)"(_chain: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isTokenAccepted(_tokenAddr: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        queryAllStrategies(overrides?: CallOverrides): Promise<[string[]] & {
            allStrategies: string[];
        }>;
        queryConfig(overrides?: CallOverrides): Promise<[RegistrarStorage.ConfigStructOutput]>;
        queryNetworkConnection(networkName: string, overrides?: CallOverrides): Promise<[
            LocalRegistrarLib.NetworkInfoStructOutput
        ] & {
            response: LocalRegistrarLib.NetworkInfoStructOutput;
        }>;
        queryTokenPriceFeed(token: string, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setAccountsContractAddressByChain(_chainName: string, _accountsContractAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFeeSettingsByFeesType(_feeType: BigNumberish, _rate: BigNumberish, _payout: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setGasByToken(_tokenAddr: string, _gasFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setRebalanceParams(_rebalanceParams: LocalRegistrarLib.RebalanceParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setStrategyApprovalState(_strategyId: BytesLike, _approvalState: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setStrategyParams(_strategyId: BytesLike, _network: string, _lockAddr: string, _liqAddr: string, _approvalState: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setTokenAccepted(_tokenAddr: string, _isAccepted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setUniswapAddresses(_uniswapRouter: string, _uniswapFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setVaultEmitterAddress(_vaultEmitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setVaultOperatorApproved(_operator: string, _isApproved: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        thisChain(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateConfig(details: RegistrarMessages.UpdateConfigRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateNetworkConnections(networkName: string, networkInfo: LocalRegistrarLib.NetworkInfoStruct, action: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateTokenPriceFeed(token: string, priceFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    getAccountsContractAddressByChain(_targetChain: string, overrides?: CallOverrides): Promise<string>;
    getFeeSettingsByFeeType(_feeType: BigNumberish, overrides?: CallOverrides): Promise<LibAccounts.FeeSettingStructOutput>;
    getGasByToken(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
    getRebalanceParams(overrides?: CallOverrides): Promise<LocalRegistrarLib.RebalanceParamsStructOutput>;
    getStrategyApprovalState(_strategyId: BytesLike, overrides?: CallOverrides): Promise<number>;
    getStrategyParamsById(_strategyId: BytesLike, overrides?: CallOverrides): Promise<LocalRegistrarLib.StrategyParamsStructOutput>;
    getUniswapFactoryAddress(overrides?: CallOverrides): Promise<string>;
    getUniswapRouterAddress(overrides?: CallOverrides): Promise<string>;
    getVaultEmitterAddress(overrides?: CallOverrides): Promise<string>;
    getVaultOperatorApproved(_operator: string, overrides?: CallOverrides): Promise<boolean>;
    "initialize((address,address,address,address,address,string,address))"(details: RegistrarMessages.InstantiateRequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "initialize(string)"(_chain: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isTokenAccepted(_tokenAddr: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    queryAllStrategies(overrides?: CallOverrides): Promise<string[]>;
    queryConfig(overrides?: CallOverrides): Promise<RegistrarStorage.ConfigStructOutput>;
    queryNetworkConnection(networkName: string, overrides?: CallOverrides): Promise<LocalRegistrarLib.NetworkInfoStructOutput>;
    queryTokenPriceFeed(token: string, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setAccountsContractAddressByChain(_chainName: string, _accountsContractAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFeeSettingsByFeesType(_feeType: BigNumberish, _rate: BigNumberish, _payout: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setGasByToken(_tokenAddr: string, _gasFee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setRebalanceParams(_rebalanceParams: LocalRegistrarLib.RebalanceParamsStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setStrategyApprovalState(_strategyId: BytesLike, _approvalState: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setStrategyParams(_strategyId: BytesLike, _network: string, _lockAddr: string, _liqAddr: string, _approvalState: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setTokenAccepted(_tokenAddr: string, _isAccepted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setUniswapAddresses(_uniswapRouter: string, _uniswapFactory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setVaultEmitterAddress(_vaultEmitter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setVaultOperatorApproved(_operator: string, _isApproved: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    thisChain(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateConfig(details: RegistrarMessages.UpdateConfigRequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateNetworkConnections(networkName: string, networkInfo: LocalRegistrarLib.NetworkInfoStruct, action: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateTokenPriceFeed(token: string, priceFeed: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAccountsContractAddressByChain(_targetChain: string, overrides?: CallOverrides): Promise<string>;
        getFeeSettingsByFeeType(_feeType: BigNumberish, overrides?: CallOverrides): Promise<LibAccounts.FeeSettingStructOutput>;
        getGasByToken(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRebalanceParams(overrides?: CallOverrides): Promise<LocalRegistrarLib.RebalanceParamsStructOutput>;
        getStrategyApprovalState(_strategyId: BytesLike, overrides?: CallOverrides): Promise<number>;
        getStrategyParamsById(_strategyId: BytesLike, overrides?: CallOverrides): Promise<LocalRegistrarLib.StrategyParamsStructOutput>;
        getUniswapFactoryAddress(overrides?: CallOverrides): Promise<string>;
        getUniswapRouterAddress(overrides?: CallOverrides): Promise<string>;
        getVaultEmitterAddress(overrides?: CallOverrides): Promise<string>;
        getVaultOperatorApproved(_operator: string, overrides?: CallOverrides): Promise<boolean>;
        "initialize((address,address,address,address,address,string,address))"(details: RegistrarMessages.InstantiateRequestStruct, overrides?: CallOverrides): Promise<void>;
        "initialize(string)"(_chain: string, overrides?: CallOverrides): Promise<void>;
        isTokenAccepted(_tokenAddr: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        queryAllStrategies(overrides?: CallOverrides): Promise<string[]>;
        queryConfig(overrides?: CallOverrides): Promise<RegistrarStorage.ConfigStructOutput>;
        queryNetworkConnection(networkName: string, overrides?: CallOverrides): Promise<LocalRegistrarLib.NetworkInfoStructOutput>;
        queryTokenPriceFeed(token: string, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAccountsContractAddressByChain(_chainName: string, _accountsContractAddress: string, overrides?: CallOverrides): Promise<void>;
        setFeeSettingsByFeesType(_feeType: BigNumberish, _rate: BigNumberish, _payout: string, overrides?: CallOverrides): Promise<void>;
        setGasByToken(_tokenAddr: string, _gasFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRebalanceParams(_rebalanceParams: LocalRegistrarLib.RebalanceParamsStruct, overrides?: CallOverrides): Promise<void>;
        setStrategyApprovalState(_strategyId: BytesLike, _approvalState: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setStrategyParams(_strategyId: BytesLike, _network: string, _lockAddr: string, _liqAddr: string, _approvalState: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTokenAccepted(_tokenAddr: string, _isAccepted: boolean, overrides?: CallOverrides): Promise<void>;
        setUniswapAddresses(_uniswapRouter: string, _uniswapFactory: string, overrides?: CallOverrides): Promise<void>;
        setVaultEmitterAddress(_vaultEmitter: string, overrides?: CallOverrides): Promise<void>;
        setVaultOperatorApproved(_operator: string, _isApproved: boolean, overrides?: CallOverrides): Promise<void>;
        thisChain(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateConfig(details: RegistrarMessages.UpdateConfigRequestStruct, overrides?: CallOverrides): Promise<void>;
        updateNetworkConnections(networkName: string, networkInfo: LocalRegistrarLib.NetworkInfoStruct, action: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateTokenPriceFeed(token: string, priceFeed: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccountsContractStorageUpdated(string,string)"(_chainName?: null, _accountsContractAddress?: null): AccountsContractStorageUpdatedEventFilter;
        AccountsContractStorageUpdated(_chainName?: null, _accountsContractAddress?: null): AccountsContractStorageUpdatedEventFilter;
        "ConfigUpdated()"(): ConfigUpdatedEventFilter;
        ConfigUpdated(): ConfigUpdatedEventFilter;
        "FeeSettingsUpdated(uint8,uint256,address)"(_feeType?: null, _bpsRate?: null, _payoutAddress?: null): FeeSettingsUpdatedEventFilter;
        FeeSettingsUpdated(_feeType?: null, _bpsRate?: null, _payoutAddress?: null): FeeSettingsUpdatedEventFilter;
        "GasFeeUpdated(address,uint256)"(_tokenAddr?: null, _gasFee?: null): GasFeeUpdatedEventFilter;
        GasFeeUpdated(_tokenAddr?: null, _gasFee?: null): GasFeeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "NetworkConnectionPosted(uint256)"(chainId?: null): NetworkConnectionPostedEventFilter;
        NetworkConnectionPosted(chainId?: null): NetworkConnectionPostedEventFilter;
        "NetworkConnectionRemoved(uint256)"(chainId?: null): NetworkConnectionRemovedEventFilter;
        NetworkConnectionRemoved(chainId?: null): NetworkConnectionRemovedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "RebalanceParamsUpdated()"(): RebalanceParamsUpdatedEventFilter;
        RebalanceParamsUpdated(): RebalanceParamsUpdatedEventFilter;
        "StrategyApprovalUpdated(bytes4,uint8)"(_strategyId?: null, _approvalState?: null): StrategyApprovalUpdatedEventFilter;
        StrategyApprovalUpdated(_strategyId?: null, _approvalState?: null): StrategyApprovalUpdatedEventFilter;
        "StrategyParamsUpdated(bytes4,string,address,address,uint8)"(_strategyId?: null, _network?: null, _lockAddr?: null, _liqAddr?: null, _approvalState?: null): StrategyParamsUpdatedEventFilter;
        StrategyParamsUpdated(_strategyId?: null, _network?: null, _lockAddr?: null, _liqAddr?: null, _approvalState?: null): StrategyParamsUpdatedEventFilter;
        "TokenAcceptanceUpdated(address,bool)"(_tokenAddr?: null, _isAccepted?: null): TokenAcceptanceUpdatedEventFilter;
        TokenAcceptanceUpdated(_tokenAddr?: null, _isAccepted?: null): TokenAcceptanceUpdatedEventFilter;
    };
    estimateGas: {
        getAccountsContractAddressByChain(_targetChain: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFeeSettingsByFeeType(_feeType: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGasByToken(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRebalanceParams(overrides?: CallOverrides): Promise<BigNumber>;
        getStrategyApprovalState(_strategyId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStrategyParamsById(_strategyId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getUniswapFactoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getUniswapRouterAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getVaultEmitterAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getVaultOperatorApproved(_operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        "initialize((address,address,address,address,address,string,address))"(details: RegistrarMessages.InstantiateRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "initialize(string)"(_chain: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isTokenAccepted(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        queryAllStrategies(overrides?: CallOverrides): Promise<BigNumber>;
        queryConfig(overrides?: CallOverrides): Promise<BigNumber>;
        queryNetworkConnection(networkName: string, overrides?: CallOverrides): Promise<BigNumber>;
        queryTokenPriceFeed(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setAccountsContractAddressByChain(_chainName: string, _accountsContractAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFeeSettingsByFeesType(_feeType: BigNumberish, _rate: BigNumberish, _payout: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setGasByToken(_tokenAddr: string, _gasFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setRebalanceParams(_rebalanceParams: LocalRegistrarLib.RebalanceParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setStrategyApprovalState(_strategyId: BytesLike, _approvalState: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setStrategyParams(_strategyId: BytesLike, _network: string, _lockAddr: string, _liqAddr: string, _approvalState: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setTokenAccepted(_tokenAddr: string, _isAccepted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setUniswapAddresses(_uniswapRouter: string, _uniswapFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setVaultEmitterAddress(_vaultEmitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setVaultOperatorApproved(_operator: string, _isApproved: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        thisChain(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateConfig(details: RegistrarMessages.UpdateConfigRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateNetworkConnections(networkName: string, networkInfo: LocalRegistrarLib.NetworkInfoStruct, action: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateTokenPriceFeed(token: string, priceFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAccountsContractAddressByChain(_targetChain: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFeeSettingsByFeeType(_feeType: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasByToken(_tokenAddr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRebalanceParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrategyApprovalState(_strategyId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrategyParamsById(_strategyId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUniswapFactoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUniswapRouterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVaultEmitterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVaultOperatorApproved(_operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "initialize((address,address,address,address,address,string,address))"(details: RegistrarMessages.InstantiateRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "initialize(string)"(_chain: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isTokenAccepted(_tokenAddr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryAllStrategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryNetworkConnection(networkName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryTokenPriceFeed(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setAccountsContractAddressByChain(_chainName: string, _accountsContractAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFeeSettingsByFeesType(_feeType: BigNumberish, _rate: BigNumberish, _payout: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setGasByToken(_tokenAddr: string, _gasFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setRebalanceParams(_rebalanceParams: LocalRegistrarLib.RebalanceParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setStrategyApprovalState(_strategyId: BytesLike, _approvalState: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setStrategyParams(_strategyId: BytesLike, _network: string, _lockAddr: string, _liqAddr: string, _approvalState: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setTokenAccepted(_tokenAddr: string, _isAccepted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setUniswapAddresses(_uniswapRouter: string, _uniswapFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setVaultEmitterAddress(_vaultEmitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setVaultOperatorApproved(_operator: string, _isApproved: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        thisChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateConfig(details: RegistrarMessages.UpdateConfigRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateNetworkConnections(networkName: string, networkInfo: LocalRegistrarLib.NetworkInfoStruct, action: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateTokenPriceFeed(token: string, priceFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
