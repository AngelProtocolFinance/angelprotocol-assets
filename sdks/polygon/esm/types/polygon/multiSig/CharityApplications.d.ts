import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace LibAccounts {
    type FeeSettingStruct = {
        payoutAddress: string;
        bps: BigNumberish;
    };
    type FeeSettingStructOutput = [string, BigNumber] & {
        payoutAddress: string;
        bps: BigNumber;
    };
    type DelegateStruct = {
        addr: string;
        expires: BigNumberish;
    };
    type DelegateStructOutput = [string, BigNumber] & {
        addr: string;
        expires: BigNumber;
    };
    type SettingsPermissionStruct = {
        locked: boolean;
        delegate: LibAccounts.DelegateStruct;
    };
    type SettingsPermissionStructOutput = [
        boolean,
        LibAccounts.DelegateStructOutput
    ] & {
        locked: boolean;
        delegate: LibAccounts.DelegateStructOutput;
    };
    type SettingsControllerStruct = {
        acceptedTokens: LibAccounts.SettingsPermissionStruct;
        lockedInvestmentManagement: LibAccounts.SettingsPermissionStruct;
        liquidInvestmentManagement: LibAccounts.SettingsPermissionStruct;
        allowlistedBeneficiaries: LibAccounts.SettingsPermissionStruct;
        allowlistedContributors: LibAccounts.SettingsPermissionStruct;
        maturityAllowlist: LibAccounts.SettingsPermissionStruct;
        maturityTime: LibAccounts.SettingsPermissionStruct;
        earlyLockedWithdrawFee: LibAccounts.SettingsPermissionStruct;
        withdrawFee: LibAccounts.SettingsPermissionStruct;
        depositFee: LibAccounts.SettingsPermissionStruct;
        balanceFee: LibAccounts.SettingsPermissionStruct;
        name: LibAccounts.SettingsPermissionStruct;
        image: LibAccounts.SettingsPermissionStruct;
        logo: LibAccounts.SettingsPermissionStruct;
        sdgs: LibAccounts.SettingsPermissionStruct;
        splitToLiquid: LibAccounts.SettingsPermissionStruct;
        ignoreUserSplits: LibAccounts.SettingsPermissionStruct;
    };
    type SettingsControllerStructOutput = [
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput,
        LibAccounts.SettingsPermissionStructOutput
    ] & {
        acceptedTokens: LibAccounts.SettingsPermissionStructOutput;
        lockedInvestmentManagement: LibAccounts.SettingsPermissionStructOutput;
        liquidInvestmentManagement: LibAccounts.SettingsPermissionStructOutput;
        allowlistedBeneficiaries: LibAccounts.SettingsPermissionStructOutput;
        allowlistedContributors: LibAccounts.SettingsPermissionStructOutput;
        maturityAllowlist: LibAccounts.SettingsPermissionStructOutput;
        maturityTime: LibAccounts.SettingsPermissionStructOutput;
        earlyLockedWithdrawFee: LibAccounts.SettingsPermissionStructOutput;
        withdrawFee: LibAccounts.SettingsPermissionStructOutput;
        depositFee: LibAccounts.SettingsPermissionStructOutput;
        balanceFee: LibAccounts.SettingsPermissionStructOutput;
        name: LibAccounts.SettingsPermissionStructOutput;
        image: LibAccounts.SettingsPermissionStructOutput;
        logo: LibAccounts.SettingsPermissionStructOutput;
        sdgs: LibAccounts.SettingsPermissionStructOutput;
        splitToLiquid: LibAccounts.SettingsPermissionStructOutput;
        ignoreUserSplits: LibAccounts.SettingsPermissionStructOutput;
    };
    type SplitDetailsStruct = {
        max: BigNumberish;
        min: BigNumberish;
        defaultSplit: BigNumberish;
    };
    type SplitDetailsStructOutput = [BigNumber, BigNumber, BigNumber] & {
        max: BigNumber;
        min: BigNumber;
        defaultSplit: BigNumber;
    };
}
export declare namespace AccountMessages {
    type CreateEndowmentRequestStruct = {
        withdrawBeforeMaturity: boolean;
        maturityTime: BigNumberish;
        name: string;
        sdgs: BigNumberish[];
        tier: BigNumberish;
        endowType: BigNumberish;
        logo: string;
        image: string;
        members: string[];
        threshold: BigNumberish;
        duration: BigNumberish;
        allowlistedBeneficiaries: string[];
        allowlistedContributors: string[];
        maturityAllowlist: string[];
        earlyLockedWithdrawFee: LibAccounts.FeeSettingStruct;
        withdrawFee: LibAccounts.FeeSettingStruct;
        depositFee: LibAccounts.FeeSettingStruct;
        balanceFee: LibAccounts.FeeSettingStruct;
        proposalLink: BigNumberish;
        settingsController: LibAccounts.SettingsControllerStruct;
        parent: BigNumberish;
        ignoreUserSplits: boolean;
        splitToLiquid: LibAccounts.SplitDetailsStruct;
        referralId: BigNumberish;
    };
    type CreateEndowmentRequestStructOutput = [
        boolean,
        BigNumber,
        string,
        BigNumber[],
        number,
        number,
        string,
        string,
        string[],
        BigNumber,
        BigNumber,
        string[],
        string[],
        string[],
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.FeeSettingStructOutput,
        BigNumber,
        LibAccounts.SettingsControllerStructOutput,
        number,
        boolean,
        LibAccounts.SplitDetailsStructOutput,
        BigNumber
    ] & {
        withdrawBeforeMaturity: boolean;
        maturityTime: BigNumber;
        name: string;
        sdgs: BigNumber[];
        tier: number;
        endowType: number;
        logo: string;
        image: string;
        members: string[];
        threshold: BigNumber;
        duration: BigNumber;
        allowlistedBeneficiaries: string[];
        allowlistedContributors: string[];
        maturityAllowlist: string[];
        earlyLockedWithdrawFee: LibAccounts.FeeSettingStructOutput;
        withdrawFee: LibAccounts.FeeSettingStructOutput;
        depositFee: LibAccounts.FeeSettingStructOutput;
        balanceFee: LibAccounts.FeeSettingStructOutput;
        proposalLink: BigNumber;
        settingsController: LibAccounts.SettingsControllerStructOutput;
        parent: number;
        ignoreUserSplits: boolean;
        splitToLiquid: LibAccounts.SplitDetailsStructOutput;
        referralId: BigNumber;
    };
}
export declare namespace ApplicationsStorage {
    type ConfigStruct = {
        accountsContract: string;
        seedSplitToLiquid: BigNumberish;
        gasAmount: BigNumberish;
        seedAsset: string;
        seedAmount: BigNumberish;
    };
    type ConfigStructOutput = [
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber
    ] & {
        accountsContract: string;
        seedSplitToLiquid: BigNumber;
        gasAmount: BigNumber;
        seedAsset: string;
        seedAmount: BigNumber;
    };
}
export interface CharityApplicationsInterface extends utils.Interface {
    functions: {
        "activeOwnersCount()": FunctionFragment;
        "addOwners(address[])": FunctionFragment;
        "approvalsRequired()": FunctionFragment;
        "changeApprovalsRequirement(uint256)": FunctionFragment;
        "changeRequireExecution(bool)": FunctionFragment;
        "changeTransactionExpiry(uint256)": FunctionFragment;
        "config()": FunctionFragment;
        "confirmProposal(uint256)": FunctionFragment;
        "confirmTransaction(uint256)": FunctionFragment;
        "confirmations(uint256)": FunctionFragment;
        "executeProposal(uint256)": FunctionFragment;
        "executeTransaction(uint256)": FunctionFragment;
        "getConfirmationCount(uint256)": FunctionFragment;
        "getConfirmationStatus(uint256,address)": FunctionFragment;
        "getOwnerStatus(address)": FunctionFragment;
        "getProposalConfirmationCount(uint256)": FunctionFragment;
        "getProposalConfirmationStatus(uint256,address)": FunctionFragment;
        "initializeApplications(address[],uint256,bool,uint256,address,uint256,uint256,address,uint256)": FunctionFragment;
        "isConfirmed(uint256)": FunctionFragment;
        "isOwner(address)": FunctionFragment;
        "isProposalConfirmed(uint256)": FunctionFragment;
        "proposalConfirmations(uint256)": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "proposeApplication((bool,uint256,string,uint256[],uint8,uint8,string,string,address[],uint256,uint256,address[],address[],address[],(address,uint256),(address,uint256),(address,uint256),(address,uint256),uint256,((bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256))),uint32,bool,(uint256,uint256,uint256),uint256),bytes)": FunctionFragment;
        "queryConfig()": FunctionFragment;
        "removeOwners(address[])": FunctionFragment;
        "replaceOwner(address,address)": FunctionFragment;
        "requireExecution()": FunctionFragment;
        "revokeConfirmation(uint256)": FunctionFragment;
        "revokeConfirmationOfFormerOwner(uint256,address)": FunctionFragment;
        "revokeProposalConfirmation(uint256)": FunctionFragment;
        "submitTransaction(address,uint256,bytes,bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transactionCount()": FunctionFragment;
        "transactionExpiry()": FunctionFragment;
        "transactions(uint256)": FunctionFragment;
        "updateConfig(uint256,address,uint256,uint256,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "activeOwnersCount" | "addOwners" | "approvalsRequired" | "changeApprovalsRequirement" | "changeRequireExecution" | "changeTransactionExpiry" | "config" | "confirmProposal" | "confirmTransaction" | "confirmations" | "executeProposal" | "executeTransaction" | "getConfirmationCount" | "getConfirmationStatus" | "getOwnerStatus" | "getProposalConfirmationCount" | "getProposalConfirmationStatus" | "initializeApplications" | "isConfirmed" | "isOwner" | "isProposalConfirmed" | "proposalConfirmations" | "proposals" | "proposeApplication" | "queryConfig" | "removeOwners" | "replaceOwner" | "requireExecution" | "revokeConfirmation" | "revokeConfirmationOfFormerOwner" | "revokeProposalConfirmation" | "submitTransaction" | "supportsInterface" | "transactionCount" | "transactionExpiry" | "transactions" | "updateConfig"): FunctionFragment;
    encodeFunctionData(functionFragment: "activeOwnersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "addOwners", values: [string[]]): string;
    encodeFunctionData(functionFragment: "approvalsRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeApprovalsRequirement", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeRequireExecution", values: [boolean]): string;
    encodeFunctionData(functionFragment: "changeTransactionExpiry", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmProposal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "confirmTransaction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "confirmations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getConfirmationCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getConfirmationStatus", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getOwnerStatus", values: [string]): string;
    encodeFunctionData(functionFragment: "getProposalConfirmationCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalConfirmationStatus", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "initializeApplications", values: [
        string[],
        BigNumberish,
        boolean,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "isConfirmed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "isProposalConfirmed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalConfirmations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposeApplication", values: [AccountMessages.CreateEndowmentRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "queryConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOwners", values: [string[]]): string;
    encodeFunctionData(functionFragment: "replaceOwner", values: [string, string]): string;
    encodeFunctionData(functionFragment: "requireExecution", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokeConfirmation", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokeConfirmationOfFormerOwner", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "revokeProposalConfirmation", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "submitTransaction", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transactionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "transactionExpiry", values?: undefined): string;
    encodeFunctionData(functionFragment: "transactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateConfig", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "activeOwnersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvalsRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeApprovalsRequirement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeRequireExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeTransactionExpiry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfirmationCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfirmationStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwnerStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalConfirmationCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalConfirmationStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeApplications", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isConfirmed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProposalConfirmed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalConfirmations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeApplication", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeConfirmation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeConfirmationOfFormerOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeProposalConfirmation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactionExpiry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateConfig", data: BytesLike): Result;
    events: {
        "ApplicationConfirmationRevoked(uint256,address)": EventFragment;
        "ApplicationConfirmed(uint256,address)": EventFragment;
        "ApplicationExecuted(uint256)": EventFragment;
        "ApplicationProposed(uint256,address,string,uint256,bytes)": EventFragment;
        "ApprovalsRequiredChanged(address,uint256)": EventFragment;
        "ExpiryChanged(address,uint256)": EventFragment;
        "GasSent(uint256,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "InitializedMultiSig(address,address[],uint256,bool,uint256)": EventFragment;
        "OwnerReplaced(address,address,address)": EventFragment;
        "OwnersAdded(address,address[])": EventFragment;
        "OwnersRemoved(address,address[])": EventFragment;
        "RequireExecutionChanged(address,bool)": EventFragment;
        "SeedAssetSent(uint256,address,uint256)": EventFragment;
        "TransactionConfirmationRevoked(address,address,uint256)": EventFragment;
        "TransactionConfirmed(address,address,uint256)": EventFragment;
        "TransactionExecuted(address,uint256)": EventFragment;
        "TransactionSubmitted(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApplicationConfirmationRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApplicationConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApplicationExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApplicationProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalsRequiredChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExpiryChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializedMultiSig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerReplaced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnersAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnersRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequireExecutionChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SeedAssetSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionConfirmationRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionSubmitted"): EventFragment;
}
export interface ApplicationConfirmationRevokedEventObject {
    proposalId: BigNumber;
    owner: string;
}
export type ApplicationConfirmationRevokedEvent = TypedEvent<[
    BigNumber,
    string
], ApplicationConfirmationRevokedEventObject>;
export type ApplicationConfirmationRevokedEventFilter = TypedEventFilter<ApplicationConfirmationRevokedEvent>;
export interface ApplicationConfirmedEventObject {
    proposalId: BigNumber;
    owner: string;
}
export type ApplicationConfirmedEvent = TypedEvent<[
    BigNumber,
    string
], ApplicationConfirmedEventObject>;
export type ApplicationConfirmedEventFilter = TypedEventFilter<ApplicationConfirmedEvent>;
export interface ApplicationExecutedEventObject {
    proposalId: BigNumber;
}
export type ApplicationExecutedEvent = TypedEvent<[
    BigNumber
], ApplicationExecutedEventObject>;
export type ApplicationExecutedEventFilter = TypedEventFilter<ApplicationExecutedEvent>;
export interface ApplicationProposedEventObject {
    proposalId: BigNumber;
    proposer: string;
    charityName: string;
    expiry: BigNumber;
    metadata: string;
}
export type ApplicationProposedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    string
], ApplicationProposedEventObject>;
export type ApplicationProposedEventFilter = TypedEventFilter<ApplicationProposedEvent>;
export interface ApprovalsRequiredChangedEventObject {
    msAddress: string;
    approvalsRequired: BigNumber;
}
export type ApprovalsRequiredChangedEvent = TypedEvent<[
    string,
    BigNumber
], ApprovalsRequiredChangedEventObject>;
export type ApprovalsRequiredChangedEventFilter = TypedEventFilter<ApprovalsRequiredChangedEvent>;
export interface ExpiryChangedEventObject {
    msAddress: string;
    transactionExpiry: BigNumber;
}
export type ExpiryChangedEvent = TypedEvent<[
    string,
    BigNumber
], ExpiryChangedEventObject>;
export type ExpiryChangedEventFilter = TypedEventFilter<ExpiryChangedEvent>;
export interface GasSentEventObject {
    endowmentId: BigNumber;
    member: string;
    amount: BigNumber;
}
export type GasSentEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], GasSentEventObject>;
export type GasSentEventFilter = TypedEventFilter<GasSentEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface InitializedMultiSigEventObject {
    msAddress: string;
    owners: string[];
    approvalsRequired: BigNumber;
    requireExecution: boolean;
    transactionExpiry: BigNumber;
}
export type InitializedMultiSigEvent = TypedEvent<[
    string,
    string[],
    BigNumber,
    boolean,
    BigNumber
], InitializedMultiSigEventObject>;
export type InitializedMultiSigEventFilter = TypedEventFilter<InitializedMultiSigEvent>;
export interface OwnerReplacedEventObject {
    msAddress: string;
    currOwner: string;
    newOwner: string;
}
export type OwnerReplacedEvent = TypedEvent<[
    string,
    string,
    string
], OwnerReplacedEventObject>;
export type OwnerReplacedEventFilter = TypedEventFilter<OwnerReplacedEvent>;
export interface OwnersAddedEventObject {
    msAddress: string;
    owners: string[];
}
export type OwnersAddedEvent = TypedEvent<[
    string,
    string[]
], OwnersAddedEventObject>;
export type OwnersAddedEventFilter = TypedEventFilter<OwnersAddedEvent>;
export interface OwnersRemovedEventObject {
    msAddress: string;
    owners: string[];
}
export type OwnersRemovedEvent = TypedEvent<[
    string,
    string[]
], OwnersRemovedEventObject>;
export type OwnersRemovedEventFilter = TypedEventFilter<OwnersRemovedEvent>;
export interface RequireExecutionChangedEventObject {
    msAddress: string;
    requireExecution: boolean;
}
export type RequireExecutionChangedEvent = TypedEvent<[
    string,
    boolean
], RequireExecutionChangedEventObject>;
export type RequireExecutionChangedEventFilter = TypedEventFilter<RequireExecutionChangedEvent>;
export interface SeedAssetSentEventObject {
    endowmentId: BigNumber;
    asset: string;
    amount: BigNumber;
}
export type SeedAssetSentEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], SeedAssetSentEventObject>;
export type SeedAssetSentEventFilter = TypedEventFilter<SeedAssetSentEvent>;
export interface TransactionConfirmationRevokedEventObject {
    msAddress: string;
    sender: string;
    transactionId: BigNumber;
}
export type TransactionConfirmationRevokedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransactionConfirmationRevokedEventObject>;
export type TransactionConfirmationRevokedEventFilter = TypedEventFilter<TransactionConfirmationRevokedEvent>;
export interface TransactionConfirmedEventObject {
    msAddress: string;
    sender: string;
    transactionId: BigNumber;
}
export type TransactionConfirmedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransactionConfirmedEventObject>;
export type TransactionConfirmedEventFilter = TypedEventFilter<TransactionConfirmedEvent>;
export interface TransactionExecutedEventObject {
    msAddress: string;
    transactionId: BigNumber;
}
export type TransactionExecutedEvent = TypedEvent<[
    string,
    BigNumber
], TransactionExecutedEventObject>;
export type TransactionExecutedEventFilter = TypedEventFilter<TransactionExecutedEvent>;
export interface TransactionSubmittedEventObject {
    msAddress: string;
    sender: string;
    transactionId: BigNumber;
    metadata: string;
}
export type TransactionSubmittedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], TransactionSubmittedEventObject>;
export type TransactionSubmittedEventFilter = TypedEventFilter<TransactionSubmittedEvent>;
export interface CharityApplications extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CharityApplicationsInterface;
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
        activeOwnersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        addOwners(owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        approvalsRequired(overrides?: CallOverrides): Promise<[BigNumber]>;
        changeApprovalsRequirement(_approvalsRequired: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        changeRequireExecution(_requireExecution: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        changeTransactionExpiry(_transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        config(overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            string,
            BigNumber
        ] & {
            accountsContract: string;
            seedSplitToLiquid: BigNumber;
            gasAmount: BigNumber;
            seedAsset: string;
            seedAmount: BigNumber;
        }>;
        confirmProposal(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmTransaction(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
        executeProposal(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeTransaction(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getConfirmationCount(transactionId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getConfirmationStatus(transactionId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<[boolean]>;
        getOwnerStatus(ownerAddr: string, overrides?: CallOverrides): Promise<[boolean]>;
        getProposalConfirmationCount(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getProposalConfirmationStatus(proposalId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<[boolean]>;
        initializeApplications(owners: string[], _approvalsRequired: BigNumberish, _requireExecution: boolean, _transactionExpiry: BigNumberish, _accountsContract: string, _gasAmount: BigNumberish, _seedSplitToLiquid: BigNumberish, _seedAsset: string, _seedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isConfirmed(transactionId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isOwner(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        isProposalConfirmed(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        proposalConfirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            AccountMessages.CreateEndowmentRequestStructOutput,
            string,
            BigNumber,
            boolean
        ] & {
            proposer: string;
            application: AccountMessages.CreateEndowmentRequestStructOutput;
            metadata: string;
            expiry: BigNumber;
            executed: boolean;
        }>;
        proposeApplication(_application: AccountMessages.CreateEndowmentRequestStruct, _metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        queryConfig(overrides?: CallOverrides): Promise<[ApplicationsStorage.ConfigStructOutput]>;
        removeOwners(owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        replaceOwner(currOwner: string, newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requireExecution(overrides?: CallOverrides): Promise<[boolean]>;
        revokeConfirmation(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeConfirmationOfFormerOwner(transactionId: BigNumberish, formerOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeProposalConfirmation(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        submitTransaction(destination: string, value: BigNumberish, data: BytesLike, metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        transactionExpiry(overrides?: CallOverrides): Promise<[BigNumber]>;
        transactions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            boolean,
            BigNumber,
            string
        ] & {
            destination: string;
            value: BigNumber;
            data: string;
            executed: boolean;
            expiry: BigNumber;
            metadata: string;
        }>;
        updateConfig(_transactionExpiry: BigNumberish, accountsContract: string, seedSplitToLiquid: BigNumberish, gasAmount: BigNumberish, seedAsset: string, seedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    activeOwnersCount(overrides?: CallOverrides): Promise<BigNumber>;
    addOwners(owners: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    approvalsRequired(overrides?: CallOverrides): Promise<BigNumber>;
    changeApprovalsRequirement(_approvalsRequired: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    changeRequireExecution(_requireExecution: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    changeTransactionExpiry(_transactionExpiry: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    config(overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber
    ] & {
        accountsContract: string;
        seedSplitToLiquid: BigNumber;
        gasAmount: BigNumber;
        seedAsset: string;
        seedAmount: BigNumber;
    }>;
    confirmProposal(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmTransaction(transactionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    executeProposal(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeTransaction(transactionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getConfirmationCount(transactionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getConfirmationStatus(transactionId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<boolean>;
    getOwnerStatus(ownerAddr: string, overrides?: CallOverrides): Promise<boolean>;
    getProposalConfirmationCount(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getProposalConfirmationStatus(proposalId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<boolean>;
    initializeApplications(owners: string[], _approvalsRequired: BigNumberish, _requireExecution: boolean, _transactionExpiry: BigNumberish, _accountsContract: string, _gasAmount: BigNumberish, _seedSplitToLiquid: BigNumberish, _seedAsset: string, _seedAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isConfirmed(transactionId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isOwner(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    isProposalConfirmed(proposalId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    proposalConfirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        AccountMessages.CreateEndowmentRequestStructOutput,
        string,
        BigNumber,
        boolean
    ] & {
        proposer: string;
        application: AccountMessages.CreateEndowmentRequestStructOutput;
        metadata: string;
        expiry: BigNumber;
        executed: boolean;
    }>;
    proposeApplication(_application: AccountMessages.CreateEndowmentRequestStruct, _metadata: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    queryConfig(overrides?: CallOverrides): Promise<ApplicationsStorage.ConfigStructOutput>;
    removeOwners(owners: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    replaceOwner(currOwner: string, newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requireExecution(overrides?: CallOverrides): Promise<boolean>;
    revokeConfirmation(transactionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeConfirmationOfFormerOwner(transactionId: BigNumberish, formerOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeProposalConfirmation(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    submitTransaction(destination: string, value: BigNumberish, data: BytesLike, metadata: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transactionCount(overrides?: CallOverrides): Promise<BigNumber>;
    transactionExpiry(overrides?: CallOverrides): Promise<BigNumber>;
    transactions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string,
        boolean,
        BigNumber,
        string
    ] & {
        destination: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        expiry: BigNumber;
        metadata: string;
    }>;
    updateConfig(_transactionExpiry: BigNumberish, accountsContract: string, seedSplitToLiquid: BigNumberish, gasAmount: BigNumberish, seedAsset: string, seedAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        activeOwnersCount(overrides?: CallOverrides): Promise<BigNumber>;
        addOwners(owners: string[], overrides?: CallOverrides): Promise<void>;
        approvalsRequired(overrides?: CallOverrides): Promise<BigNumber>;
        changeApprovalsRequirement(_approvalsRequired: BigNumberish, overrides?: CallOverrides): Promise<void>;
        changeRequireExecution(_requireExecution: boolean, overrides?: CallOverrides): Promise<void>;
        changeTransactionExpiry(_transactionExpiry: BigNumberish, overrides?: CallOverrides): Promise<void>;
        config(overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            string,
            BigNumber
        ] & {
            accountsContract: string;
            seedSplitToLiquid: BigNumber;
            gasAmount: BigNumber;
            seedAsset: string;
            seedAmount: BigNumber;
        }>;
        confirmProposal(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        confirmTransaction(transactionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        confirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        executeProposal(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        executeTransaction(transactionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getConfirmationCount(transactionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getConfirmationStatus(transactionId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<boolean>;
        getOwnerStatus(ownerAddr: string, overrides?: CallOverrides): Promise<boolean>;
        getProposalConfirmationCount(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalConfirmationStatus(proposalId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<boolean>;
        initializeApplications(owners: string[], _approvalsRequired: BigNumberish, _requireExecution: boolean, _transactionExpiry: BigNumberish, _accountsContract: string, _gasAmount: BigNumberish, _seedSplitToLiquid: BigNumberish, _seedAsset: string, _seedAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isConfirmed(transactionId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isOwner(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        isProposalConfirmed(proposalId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        proposalConfirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            AccountMessages.CreateEndowmentRequestStructOutput,
            string,
            BigNumber,
            boolean
        ] & {
            proposer: string;
            application: AccountMessages.CreateEndowmentRequestStructOutput;
            metadata: string;
            expiry: BigNumber;
            executed: boolean;
        }>;
        proposeApplication(_application: AccountMessages.CreateEndowmentRequestStruct, _metadata: BytesLike, overrides?: CallOverrides): Promise<void>;
        queryConfig(overrides?: CallOverrides): Promise<ApplicationsStorage.ConfigStructOutput>;
        removeOwners(owners: string[], overrides?: CallOverrides): Promise<void>;
        replaceOwner(currOwner: string, newOwner: string, overrides?: CallOverrides): Promise<void>;
        requireExecution(overrides?: CallOverrides): Promise<boolean>;
        revokeConfirmation(transactionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        revokeConfirmationOfFormerOwner(transactionId: BigNumberish, formerOwner: string, overrides?: CallOverrides): Promise<void>;
        revokeProposalConfirmation(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        submitTransaction(destination: string, value: BigNumberish, data: BytesLike, metadata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transactionCount(overrides?: CallOverrides): Promise<BigNumber>;
        transactionExpiry(overrides?: CallOverrides): Promise<BigNumber>;
        transactions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            boolean,
            BigNumber,
            string
        ] & {
            destination: string;
            value: BigNumber;
            data: string;
            executed: boolean;
            expiry: BigNumber;
            metadata: string;
        }>;
        updateConfig(_transactionExpiry: BigNumberish, accountsContract: string, seedSplitToLiquid: BigNumberish, gasAmount: BigNumberish, seedAsset: string, seedAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ApplicationConfirmationRevoked(uint256,address)"(proposalId?: null, owner?: null): ApplicationConfirmationRevokedEventFilter;
        ApplicationConfirmationRevoked(proposalId?: null, owner?: null): ApplicationConfirmationRevokedEventFilter;
        "ApplicationConfirmed(uint256,address)"(proposalId?: null, owner?: null): ApplicationConfirmedEventFilter;
        ApplicationConfirmed(proposalId?: null, owner?: null): ApplicationConfirmedEventFilter;
        "ApplicationExecuted(uint256)"(proposalId?: null): ApplicationExecutedEventFilter;
        ApplicationExecuted(proposalId?: null): ApplicationExecutedEventFilter;
        "ApplicationProposed(uint256,address,string,uint256,bytes)"(proposalId?: null, proposer?: null, charityName?: null, expiry?: null, metadata?: null): ApplicationProposedEventFilter;
        ApplicationProposed(proposalId?: null, proposer?: null, charityName?: null, expiry?: null, metadata?: null): ApplicationProposedEventFilter;
        "ApprovalsRequiredChanged(address,uint256)"(msAddress?: null, approvalsRequired?: null): ApprovalsRequiredChangedEventFilter;
        ApprovalsRequiredChanged(msAddress?: null, approvalsRequired?: null): ApprovalsRequiredChangedEventFilter;
        "ExpiryChanged(address,uint256)"(msAddress?: null, transactionExpiry?: null): ExpiryChangedEventFilter;
        ExpiryChanged(msAddress?: null, transactionExpiry?: null): ExpiryChangedEventFilter;
        "GasSent(uint256,address,uint256)"(endowmentId?: null, member?: null, amount?: null): GasSentEventFilter;
        GasSent(endowmentId?: null, member?: null, amount?: null): GasSentEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "InitializedMultiSig(address,address[],uint256,bool,uint256)"(msAddress?: null, owners?: null, approvalsRequired?: null, requireExecution?: null, transactionExpiry?: null): InitializedMultiSigEventFilter;
        InitializedMultiSig(msAddress?: null, owners?: null, approvalsRequired?: null, requireExecution?: null, transactionExpiry?: null): InitializedMultiSigEventFilter;
        "OwnerReplaced(address,address,address)"(msAddress?: null, currOwner?: null, newOwner?: null): OwnerReplacedEventFilter;
        OwnerReplaced(msAddress?: null, currOwner?: null, newOwner?: null): OwnerReplacedEventFilter;
        "OwnersAdded(address,address[])"(msAddress?: null, owners?: null): OwnersAddedEventFilter;
        OwnersAdded(msAddress?: null, owners?: null): OwnersAddedEventFilter;
        "OwnersRemoved(address,address[])"(msAddress?: null, owners?: null): OwnersRemovedEventFilter;
        OwnersRemoved(msAddress?: null, owners?: null): OwnersRemovedEventFilter;
        "RequireExecutionChanged(address,bool)"(msAddress?: null, requireExecution?: null): RequireExecutionChangedEventFilter;
        RequireExecutionChanged(msAddress?: null, requireExecution?: null): RequireExecutionChangedEventFilter;
        "SeedAssetSent(uint256,address,uint256)"(endowmentId?: null, asset?: null, amount?: null): SeedAssetSentEventFilter;
        SeedAssetSent(endowmentId?: null, asset?: null, amount?: null): SeedAssetSentEventFilter;
        "TransactionConfirmationRevoked(address,address,uint256)"(msAddress?: null, sender?: null, transactionId?: null): TransactionConfirmationRevokedEventFilter;
        TransactionConfirmationRevoked(msAddress?: null, sender?: null, transactionId?: null): TransactionConfirmationRevokedEventFilter;
        "TransactionConfirmed(address,address,uint256)"(msAddress?: null, sender?: null, transactionId?: null): TransactionConfirmedEventFilter;
        TransactionConfirmed(msAddress?: null, sender?: null, transactionId?: null): TransactionConfirmedEventFilter;
        "TransactionExecuted(address,uint256)"(msAddress?: null, transactionId?: null): TransactionExecutedEventFilter;
        TransactionExecuted(msAddress?: null, transactionId?: null): TransactionExecutedEventFilter;
        "TransactionSubmitted(address,address,uint256,bytes)"(msAddress?: null, sender?: null, transactionId?: null, metadata?: null): TransactionSubmittedEventFilter;
        TransactionSubmitted(msAddress?: null, sender?: null, transactionId?: null, metadata?: null): TransactionSubmittedEventFilter;
    };
    estimateGas: {
        activeOwnersCount(overrides?: CallOverrides): Promise<BigNumber>;
        addOwners(owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        approvalsRequired(overrides?: CallOverrides): Promise<BigNumber>;
        changeApprovalsRequirement(_approvalsRequired: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        changeRequireExecution(_requireExecution: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        changeTransactionExpiry(_transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<BigNumber>;
        confirmProposal(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmTransaction(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        executeProposal(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeTransaction(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getConfirmationCount(transactionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getConfirmationStatus(transactionId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getOwnerStatus(ownerAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalConfirmationCount(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalConfirmationStatus(proposalId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<BigNumber>;
        initializeApplications(owners: string[], _approvalsRequired: BigNumberish, _requireExecution: boolean, _transactionExpiry: BigNumberish, _accountsContract: string, _gasAmount: BigNumberish, _seedSplitToLiquid: BigNumberish, _seedAsset: string, _seedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isConfirmed(transactionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isProposalConfirmed(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalConfirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposeApplication(_application: AccountMessages.CreateEndowmentRequestStruct, _metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        queryConfig(overrides?: CallOverrides): Promise<BigNumber>;
        removeOwners(owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        replaceOwner(currOwner: string, newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requireExecution(overrides?: CallOverrides): Promise<BigNumber>;
        revokeConfirmation(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeConfirmationOfFormerOwner(transactionId: BigNumberish, formerOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeProposalConfirmation(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        submitTransaction(destination: string, value: BigNumberish, data: BytesLike, metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transactionCount(overrides?: CallOverrides): Promise<BigNumber>;
        transactionExpiry(overrides?: CallOverrides): Promise<BigNumber>;
        transactions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        updateConfig(_transactionExpiry: BigNumberish, accountsContract: string, seedSplitToLiquid: BigNumberish, gasAmount: BigNumberish, seedAsset: string, seedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        activeOwnersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addOwners(owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        approvalsRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeApprovalsRequirement(_approvalsRequired: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        changeRequireExecution(_requireExecution: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        changeTransactionExpiry(_transactionExpiry: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confirmProposal(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmTransaction(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeProposal(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeTransaction(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getConfirmationCount(transactionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfirmationStatus(transactionId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwnerStatus(ownerAddr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalConfirmationCount(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalConfirmationStatus(proposalId: BigNumberish, ownerAddr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeApplications(owners: string[], _approvalsRequired: BigNumberish, _requireExecution: boolean, _transactionExpiry: BigNumberish, _accountsContract: string, _gasAmount: BigNumberish, _seedSplitToLiquid: BigNumberish, _seedAsset: string, _seedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isConfirmed(transactionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProposalConfirmed(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalConfirmations(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeApplication(_application: AccountMessages.CreateEndowmentRequestStruct, _metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        queryConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeOwners(owners: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        replaceOwner(currOwner: string, newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requireExecution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeConfirmation(transactionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeConfirmationOfFormerOwner(transactionId: BigNumberish, formerOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeProposalConfirmation(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        submitTransaction(destination: string, value: BigNumberish, data: BytesLike, metadata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transactionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transactionExpiry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transactions(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateConfig(_transactionExpiry: BigNumberish, accountsContract: string, seedSplitToLiquid: BigNumberish, gasAmount: BigNumberish, seedAsset: string, seedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
