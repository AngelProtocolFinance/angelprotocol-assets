import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DiamondCutFacet, DiamondCutFacetInterface } from "../../../../polygon/accounts/facets/DiamondCutFacet";
export declare class DiamondCutFacet__factory {
    static readonly abi: readonly [{
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "enum IDiamondCut.FacetCutAction";
                readonly name: "action";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct IDiamondCut.FacetCut[]";
            readonly name: "diamondcut";
            readonly type: "tuple[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "init";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "DiamondCut";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "enum IDiamondCut.FacetCutAction";
                readonly name: "action";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct IDiamondCut.FacetCut[]";
            readonly name: "diamondcut";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "init";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "diamondCut";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DiamondCutFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondCutFacet;
}
