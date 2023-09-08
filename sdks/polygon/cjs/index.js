"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolygonSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const diamond_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/diamond.json"));
const accountsDepositWithdrawEndowments_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsDepositWithdrawEndowments.json"));
const accountsAllowance_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsAllowance.json"));
const accountsQueryEndowments_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsQueryEndowments.json"));
const accountsSwapRouter_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsSwapRouter.json"));
const accountsUpdate_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdate.json"));
const accountsUpdateEndowments_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdateEndowments.json"));
const accountsUpdateEndowmentSettingsController_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdateEndowmentSettingsController.json"));
const accountsUpdateStatusEndowments_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdateStatusEndowments.json"));
const accountsStrategy_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/accountsStrategy.json"));
const diamondCutFacet_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/diamondCutFacet.json"));
const diamondInitFacet_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/diamondInitFacet.json"));
const diamondLoupeFacet_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/diamondLoupeFacet.json"));
const ownershipFacet_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/accounts/facets/ownershipFacet.json"));
const indexFund_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/indexFund.json"));
const apTeam_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/multiSig/apTeam.json"));
const charityApplications_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/multiSig/charityApplications.json"));
const emitter_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/multiSig/endowment/emitter.json"));
const factory_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/multiSig/endowment/factory.json"));
const implementation_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/multiSig/endowment/implementation.json"));
const registrar_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/registrar.json"));
const router_json_1 = __importDefault(require("../../../../eth-sdk/abis/polygon/router.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getPolygonSdk(defaultSignerOrProvider) {
    return {
        "accounts": {
            "diamond": getContract('0xf3f48A60EbA732aC2993e11eC93eAD782Ab237e4', diamond_json_1.default, defaultSignerOrProvider),
            "facets": {
                "accountsDepositWithdrawEndowments": getContract('0xa4341A6Dc7267D6226FAEf9C35Af3cfAd46b624E', accountsDepositWithdrawEndowments_json_1.default, defaultSignerOrProvider),
                "accountsAllowance": getContract('0x96ca668AEecf5A515d402fE1Ca0C5B664Dfc92d2', accountsAllowance_json_1.default, defaultSignerOrProvider),
                "accountsQueryEndowments": getContract('0xBEeED6a8eC2EB9De143d6A9907aa2f153BE7E470', accountsQueryEndowments_json_1.default, defaultSignerOrProvider),
                "accountsSwapRouter": getContract('0x660Af60D9fc671eA77F49f3Eb82f5639afeb9C26', accountsSwapRouter_json_1.default, defaultSignerOrProvider),
                "accountsUpdate": getContract('0xfb988Ee5Cf9c4391a3E1993cC0472910805Ca2AC', accountsUpdate_json_1.default, defaultSignerOrProvider),
                "accountsUpdateEndowments": getContract('0x214665939fb75B0A38511a35D09fF3c566fEeC26', accountsUpdateEndowments_json_1.default, defaultSignerOrProvider),
                "accountsUpdateEndowmentSettingsController": getContract('0xe22e0DCa96ef125891C6bbe9f40A74EFF5fd6994', accountsUpdateEndowmentSettingsController_json_1.default, defaultSignerOrProvider),
                "accountsUpdateStatusEndowments": getContract('0xe0061c9850Bb89Ed46DA27C752697A3A800A0c7C', accountsUpdateStatusEndowments_json_1.default, defaultSignerOrProvider),
                "accountsStrategy": getContract('0x3eF2b7D43A746E26e8985DD2057BA77C7ba7471a', accountsStrategy_json_1.default, defaultSignerOrProvider),
                "diamondCutFacet": getContract('0xdF7e6f2144f8D933dE22d9c8ba21936e8dD30011', diamondCutFacet_json_1.default, defaultSignerOrProvider),
                "diamondInitFacet": getContract('0xc0bAe01FEeeDCD828880f2E6373b7fC02f677780', diamondInitFacet_json_1.default, defaultSignerOrProvider),
                "diamondLoupeFacet": getContract('0x309F249c3aBE5B794199844b31CcBF946e514E14', diamondLoupeFacet_json_1.default, defaultSignerOrProvider),
                "ownershipFacet": getContract('0xfF92B82eB6a43b3ab5a52eB11050f2Fdab0ba362', ownershipFacet_json_1.default, defaultSignerOrProvider),
            },
        },
        "indexFund": getContract('0x61220f6977595ce33DccbcFdE68B8641Aca08F81', indexFund_json_1.default, defaultSignerOrProvider),
        "multiSig": {
            "apTeam": getContract('0x52E2657Ab33B5A540D277737374d72CfB75c8D98', apTeam_json_1.default, defaultSignerOrProvider),
            "charityApplications": getContract('0x723ca90Ab7A2778F8D8bAc07c789cA989909367e', charityApplications_json_1.default, defaultSignerOrProvider),
            "endowment": {
                "emitter": getContract('0x1411A8Be58c84d1351f679581d388A34790ce6AD', emitter_json_1.default, defaultSignerOrProvider),
                "factory": getContract('0x5A050E9349F5b179c8303529fAD9B8b215389454', factory_json_1.default, defaultSignerOrProvider),
                "implementation": getContract('0x3260DDAd913eb4f6C5c59806344A4de0199e0cb1', implementation_json_1.default, defaultSignerOrProvider),
            },
        },
        "registrar": getContract('0xE43146c332603072F11ca0c191910F613B1D096F', registrar_json_1.default, defaultSignerOrProvider),
        "router": getContract('0xAEBEAB403Fc056701C6B07a14CE08f06D5DD5a72', router_json_1.default, defaultSignerOrProvider),
    };
}
exports.getPolygonSdk = getPolygonSdk;
