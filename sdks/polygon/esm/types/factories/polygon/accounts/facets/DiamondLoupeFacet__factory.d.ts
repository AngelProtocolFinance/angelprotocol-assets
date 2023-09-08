import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DiamondLoupeFacet, DiamondLoupeFacetInterface } from "../../../../polygon/accounts/facets/DiamondLoupeFacet";
export declare class DiamondLoupeFacet__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "functionSelector";
            readonly type: "bytes4";
        }];
        readonly name: "facetAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "facetAddress_";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "facetAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "facetAddresses_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "facet";
            readonly type: "address";
        }];
        readonly name: "facetFunctionSelectors";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "facetfunctionselectors";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "facets";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct IDiamondLoupe.Facet[]";
            readonly name: "facets_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DiamondLoupeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondLoupeFacet;
}
