import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Diamond, DiamondInterface } from "../../../polygon/accounts/Diamond";
export declare class Diamond__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractowner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "diamondcutfacet";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initializationcontractaddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "InitializationFunctionReverted";
        readonly type: "error";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): DiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Diamond;
}
