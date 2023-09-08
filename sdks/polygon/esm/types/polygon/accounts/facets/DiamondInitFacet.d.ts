import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface DiamondInitFacetInterface extends utils.Interface {
    functions: {
        "init(address,address,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "init"): FunctionFragment;
    encodeFunctionData(functionFragment: "init", values: [string, string, string]): string;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    events: {};
}
export interface DiamondInitFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiamondInitFacetInterface;
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
        init(owner: string, registrar: string, networkName: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    init(owner: string, registrar: string, networkName: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        init(owner: string, registrar: string, networkName: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        init(owner: string, registrar: string, networkName: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        init(owner: string, registrar: string, networkName: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
