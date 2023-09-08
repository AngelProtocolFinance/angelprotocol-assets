import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace AccountMessages {
    type ConfigResponseStruct = {
        owner: string;
        version: string;
        networkName: string;
        registrarContract: string;
        nextAccountId: BigNumberish;
    };
    type ConfigResponseStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber
    ] & {
        owner: string;
        version: string;
        networkName: string;
        registrarContract: string;
        nextAccountId: BigNumber;
    };
    type EndowmentResponseStruct = {
        owner: string;
        name: string;
        sdgs: BigNumberish[];
        tier: BigNumberish;
        endowType: BigNumberish;
        logo: string;
        image: string;
        maturityTime: BigNumberish;
        proposalLink: BigNumberish;
        multisig: string;
        dao: string;
        donationMatch: string;
        donationMatchActive: boolean;
        allowlistedBeneficiaries: string[];
        allowlistedContributors: string[];
        maturityAllowlist: string[];
        earlyLockedWithdrawFee: LibAccounts.FeeSettingStruct;
        withdrawFee: LibAccounts.FeeSettingStruct;
        depositFee: LibAccounts.FeeSettingStruct;
        balanceFee: LibAccounts.FeeSettingStruct;
        settingsController: LibAccounts.SettingsControllerStruct;
        parent: BigNumberish;
        ignoreUserSplits: boolean;
        splitToLiquid: LibAccounts.SplitDetailsStruct;
        referralId: BigNumberish;
        gasFwd: string;
    };
    type EndowmentResponseStructOutput = [
        string,
        string,
        BigNumber[],
        number,
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        boolean,
        string[],
        string[],
        string[],
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.FeeSettingStructOutput,
        LibAccounts.SettingsControllerStructOutput,
        number,
        boolean,
        LibAccounts.SplitDetailsStructOutput,
        BigNumber,
        string
    ] & {
        owner: string;
        name: string;
        sdgs: BigNumber[];
        tier: number;
        endowType: number;
        logo: string;
        image: string;
        maturityTime: BigNumber;
        proposalLink: BigNumber;
        multisig: string;
        dao: string;
        donationMatch: string;
        donationMatchActive: boolean;
        allowlistedBeneficiaries: string[];
        allowlistedContributors: string[];
        maturityAllowlist: string[];
        earlyLockedWithdrawFee: LibAccounts.FeeSettingStructOutput;
        withdrawFee: LibAccounts.FeeSettingStructOutput;
        depositFee: LibAccounts.FeeSettingStructOutput;
        balanceFee: LibAccounts.FeeSettingStructOutput;
        settingsController: LibAccounts.SettingsControllerStructOutput;
        parent: number;
        ignoreUserSplits: boolean;
        splitToLiquid: LibAccounts.SplitDetailsStructOutput;
        referralId: BigNumber;
        gasFwd: string;
    };
    type StateResponseStruct = {
        closingEndowment: boolean;
        closingBeneficiary: LibAccounts.BeneficiaryStruct;
    };
    type StateResponseStructOutput = [
        boolean,
        LibAccounts.BeneficiaryStructOutput
    ] & {
        closingEndowment: boolean;
        closingBeneficiary: LibAccounts.BeneficiaryStructOutput;
    };
}
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
    type BeneficiaryDataStruct = {
        endowId: BigNumberish;
        addr: string;
    };
    type BeneficiaryDataStructOutput = [number, string] & {
        endowId: number;
        addr: string;
    };
    type BeneficiaryStruct = {
        data: LibAccounts.BeneficiaryDataStruct;
        enumData: BigNumberish;
    };
    type BeneficiaryStructOutput = [
        LibAccounts.BeneficiaryDataStructOutput,
        number
    ] & {
        data: LibAccounts.BeneficiaryDataStructOutput;
        enumData: number;
    };
}
export interface AccountsQueryEndowmentsInterface extends utils.Interface {
    functions: {
        "getEndowmentBeneficiaries(uint32)": FunctionFragment;
        "getWalletBeneficiaries(address)": FunctionFragment;
        "isDafApprovedEndowment(uint32)": FunctionFragment;
        "queryConfig()": FunctionFragment;
        "queryEndowmentDetails(uint32)": FunctionFragment;
        "queryState(uint32)": FunctionFragment;
        "queryTokenAmount(uint32,uint8,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getEndowmentBeneficiaries" | "getWalletBeneficiaries" | "isDafApprovedEndowment" | "queryConfig" | "queryEndowmentDetails" | "queryState" | "queryTokenAmount"): FunctionFragment;
    encodeFunctionData(functionFragment: "getEndowmentBeneficiaries", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getWalletBeneficiaries", values: [string]): string;
    encodeFunctionData(functionFragment: "isDafApprovedEndowment", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "queryConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "queryEndowmentDetails", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "queryState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "queryTokenAmount", values: [BigNumberish, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "getEndowmentBeneficiaries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWalletBeneficiaries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDafApprovedEndowment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryEndowmentDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryTokenAmount", data: BytesLike): Result;
    events: {};
}
export interface AccountsQueryEndowments extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountsQueryEndowmentsInterface;
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
        getEndowmentBeneficiaries(id: BigNumberish, overrides?: CallOverrides): Promise<[number[]]>;
        getWalletBeneficiaries(addr: string, overrides?: CallOverrides): Promise<[number[]]>;
        isDafApprovedEndowment(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        queryConfig(overrides?: CallOverrides): Promise<[
            AccountMessages.ConfigResponseStructOutput
        ] & {
            config: AccountMessages.ConfigResponseStructOutput;
        }>;
        queryEndowmentDetails(id: BigNumberish, overrides?: CallOverrides): Promise<[AccountMessages.EndowmentResponseStructOutput]>;
        queryState(id: BigNumberish, overrides?: CallOverrides): Promise<[
            AccountMessages.StateResponseStructOutput
        ] & {
            stateResponse: AccountMessages.StateResponseStructOutput;
        }>;
        queryTokenAmount(id: BigNumberish, accountType: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            tokenAmount: BigNumber;
        }>;
    };
    getEndowmentBeneficiaries(id: BigNumberish, overrides?: CallOverrides): Promise<number[]>;
    getWalletBeneficiaries(addr: string, overrides?: CallOverrides): Promise<number[]>;
    isDafApprovedEndowment(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    queryConfig(overrides?: CallOverrides): Promise<AccountMessages.ConfigResponseStructOutput>;
    queryEndowmentDetails(id: BigNumberish, overrides?: CallOverrides): Promise<AccountMessages.EndowmentResponseStructOutput>;
    queryState(id: BigNumberish, overrides?: CallOverrides): Promise<AccountMessages.StateResponseStructOutput>;
    queryTokenAmount(id: BigNumberish, accountType: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getEndowmentBeneficiaries(id: BigNumberish, overrides?: CallOverrides): Promise<number[]>;
        getWalletBeneficiaries(addr: string, overrides?: CallOverrides): Promise<number[]>;
        isDafApprovedEndowment(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        queryConfig(overrides?: CallOverrides): Promise<AccountMessages.ConfigResponseStructOutput>;
        queryEndowmentDetails(id: BigNumberish, overrides?: CallOverrides): Promise<AccountMessages.EndowmentResponseStructOutput>;
        queryState(id: BigNumberish, overrides?: CallOverrides): Promise<AccountMessages.StateResponseStructOutput>;
        queryTokenAmount(id: BigNumberish, accountType: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getEndowmentBeneficiaries(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getWalletBeneficiaries(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        isDafApprovedEndowment(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryConfig(overrides?: CallOverrides): Promise<BigNumber>;
        queryEndowmentDetails(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryState(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryTokenAmount(id: BigNumberish, accountType: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getEndowmentBeneficiaries(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWalletBeneficiaries(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDafApprovedEndowment(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryEndowmentDetails(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryState(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryTokenAmount(id: BigNumberish, accountType: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
