import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DiamondInitFacet, DiamondInitFacetInterface } from "../../../../polygon/accounts/facets/DiamondInitFacet";
export declare class DiamondInitFacet__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "registrar";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "networkName";
            readonly type: "string";
        }];
        readonly name: "init";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DiamondInitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondInitFacet;
}
