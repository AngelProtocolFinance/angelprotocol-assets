import { Contract } from 'ethers';
import polygon_accounts_diamond_abi from '../../../../eth-sdk/abis/polygon/accounts/diamond.json';
import polygon_accounts_facets_accountsDepositWithdrawEndowments_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsDepositWithdrawEndowments.json';
import polygon_accounts_facets_accountsAllowance_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsAllowance.json';
import polygon_accounts_facets_accountsQueryEndowments_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsQueryEndowments.json';
import polygon_accounts_facets_accountsSwapRouter_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsSwapRouter.json';
import polygon_accounts_facets_accountsUpdate_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdate.json';
import polygon_accounts_facets_accountsUpdateEndowments_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdateEndowments.json';
import polygon_accounts_facets_accountsUpdateEndowmentSettingsController_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdateEndowmentSettingsController.json';
import polygon_accounts_facets_accountsUpdateStatusEndowments_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsUpdateStatusEndowments.json';
import polygon_accounts_facets_accountsStrategy_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/accountsStrategy.json';
import polygon_accounts_facets_diamondCutFacet_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/diamondCutFacet.json';
import polygon_accounts_facets_diamondInitFacet_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/diamondInitFacet.json';
import polygon_accounts_facets_diamondLoupeFacet_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/diamondLoupeFacet.json';
import polygon_accounts_facets_ownershipFacet_abi from '../../../../eth-sdk/abis/polygon/accounts/facets/ownershipFacet.json';
import polygon_indexFund_abi from '../../../../eth-sdk/abis/polygon/indexFund.json';
import polygon_multiSig_apTeam_abi from '../../../../eth-sdk/abis/polygon/multiSig/apTeam.json';
import polygon_multiSig_charityApplications_abi from '../../../../eth-sdk/abis/polygon/multiSig/charityApplications.json';
import polygon_multiSig_endowment_emitter_abi from '../../../../eth-sdk/abis/polygon/multiSig/endowment/emitter.json';
import polygon_multiSig_endowment_factory_abi from '../../../../eth-sdk/abis/polygon/multiSig/endowment/factory.json';
import polygon_multiSig_endowment_implementation_abi from '../../../../eth-sdk/abis/polygon/multiSig/endowment/implementation.json';
import polygon_registrar_abi from '../../../../eth-sdk/abis/polygon/registrar.json';
import polygon_router_abi from '../../../../eth-sdk/abis/polygon/router.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getPolygonSdk(defaultSignerOrProvider) {
    return {
        "accounts": {
            "diamond": getContract('0xf3f48A60EbA732aC2993e11eC93eAD782Ab237e4', polygon_accounts_diamond_abi, defaultSignerOrProvider),
            "facets": {
                "accountsDepositWithdrawEndowments": getContract('0xa4341A6Dc7267D6226FAEf9C35Af3cfAd46b624E', polygon_accounts_facets_accountsDepositWithdrawEndowments_abi, defaultSignerOrProvider),
                "accountsAllowance": getContract('0x96ca668AEecf5A515d402fE1Ca0C5B664Dfc92d2', polygon_accounts_facets_accountsAllowance_abi, defaultSignerOrProvider),
                "accountsQueryEndowments": getContract('0xBEeED6a8eC2EB9De143d6A9907aa2f153BE7E470', polygon_accounts_facets_accountsQueryEndowments_abi, defaultSignerOrProvider),
                "accountsSwapRouter": getContract('0x660Af60D9fc671eA77F49f3Eb82f5639afeb9C26', polygon_accounts_facets_accountsSwapRouter_abi, defaultSignerOrProvider),
                "accountsUpdate": getContract('0xfb988Ee5Cf9c4391a3E1993cC0472910805Ca2AC', polygon_accounts_facets_accountsUpdate_abi, defaultSignerOrProvider),
                "accountsUpdateEndowments": getContract('0x214665939fb75B0A38511a35D09fF3c566fEeC26', polygon_accounts_facets_accountsUpdateEndowments_abi, defaultSignerOrProvider),
                "accountsUpdateEndowmentSettingsController": getContract('0xe22e0DCa96ef125891C6bbe9f40A74EFF5fd6994', polygon_accounts_facets_accountsUpdateEndowmentSettingsController_abi, defaultSignerOrProvider),
                "accountsUpdateStatusEndowments": getContract('0xe0061c9850Bb89Ed46DA27C752697A3A800A0c7C', polygon_accounts_facets_accountsUpdateStatusEndowments_abi, defaultSignerOrProvider),
                "accountsStrategy": getContract('0x3eF2b7D43A746E26e8985DD2057BA77C7ba7471a', polygon_accounts_facets_accountsStrategy_abi, defaultSignerOrProvider),
                "diamondCutFacet": getContract('0xdF7e6f2144f8D933dE22d9c8ba21936e8dD30011', polygon_accounts_facets_diamondCutFacet_abi, defaultSignerOrProvider),
                "diamondInitFacet": getContract('0xc0bAe01FEeeDCD828880f2E6373b7fC02f677780', polygon_accounts_facets_diamondInitFacet_abi, defaultSignerOrProvider),
                "diamondLoupeFacet": getContract('0x309F249c3aBE5B794199844b31CcBF946e514E14', polygon_accounts_facets_diamondLoupeFacet_abi, defaultSignerOrProvider),
                "ownershipFacet": getContract('0xfF92B82eB6a43b3ab5a52eB11050f2Fdab0ba362', polygon_accounts_facets_ownershipFacet_abi, defaultSignerOrProvider),
            },
        },
        "indexFund": getContract('0x61220f6977595ce33DccbcFdE68B8641Aca08F81', polygon_indexFund_abi, defaultSignerOrProvider),
        "multiSig": {
            "apTeam": getContract('0x52E2657Ab33B5A540D277737374d72CfB75c8D98', polygon_multiSig_apTeam_abi, defaultSignerOrProvider),
            "charityApplications": getContract('0x723ca90Ab7A2778F8D8bAc07c789cA989909367e', polygon_multiSig_charityApplications_abi, defaultSignerOrProvider),
            "endowment": {
                "emitter": getContract('0x1411A8Be58c84d1351f679581d388A34790ce6AD', polygon_multiSig_endowment_emitter_abi, defaultSignerOrProvider),
                "factory": getContract('0x5A050E9349F5b179c8303529fAD9B8b215389454', polygon_multiSig_endowment_factory_abi, defaultSignerOrProvider),
                "implementation": getContract('0x3260DDAd913eb4f6C5c59806344A4de0199e0cb1', polygon_multiSig_endowment_implementation_abi, defaultSignerOrProvider),
            },
        },
        "registrar": getContract('0xE43146c332603072F11ca0c191910F613B1D096F', polygon_registrar_abi, defaultSignerOrProvider),
        "router": getContract('0xAEBEAB403Fc056701C6B07a14CE08f06D5DD5a72', polygon_router_abi, defaultSignerOrProvider),
    };
}
