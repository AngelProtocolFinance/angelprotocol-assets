import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IDiamondCut {
    type FacetCutStruct = {
        facetAddress: string;
        action: BigNumberish;
        functionSelectors: BytesLike[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export interface DiamondCutFacetInterface extends utils.Interface {
    functions: {
        "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "diamondCut"): FunctionFragment;
    encodeFunctionData(functionFragment: "diamondCut", values: [IDiamondCut.FacetCutStruct[], string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
    events: {
        "DiamondCut((address,uint8,bytes4[])[],address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
}
export interface DiamondCutEventObject {
    diamondcut: IDiamondCut.FacetCutStructOutput[];
    init: string;
    data: string;
}
export type DiamondCutEvent = TypedEvent<[
    IDiamondCut.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface DiamondCutFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiamondCutFacetInterface;
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
        diamondCut(diamondcut: IDiamondCut.FacetCutStruct[], init: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    diamondCut(diamondcut: IDiamondCut.FacetCutStruct[], init: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        diamondCut(diamondcut: IDiamondCut.FacetCutStruct[], init: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DiamondCut((address,uint8,bytes4[])[],address,bytes)"(diamondcut?: null, init?: null, data?: null): DiamondCutEventFilter;
        DiamondCut(diamondcut?: null, init?: null, data?: null): DiamondCutEventFilter;
    };
    estimateGas: {
        diamondCut(diamondcut: IDiamondCut.FacetCutStruct[], init: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        diamondCut(diamondcut: IDiamondCut.FacetCutStruct[], init: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
