import { providers, Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSignerOrProvider: Signer | providers.Provider): any;
export type PolygonSdk = ReturnType<typeof getPolygonSdk>;
export declare function getPolygonSdk(defaultSignerOrProvider: Signer | providers.Provider): {
    accounts: {
        diamond: types.polygon.accounts.Diamond;
        facets: {
            accountsDepositWithdrawEndowments: types.polygon.accounts.facets.AccountsDepositWithdrawEndowments;
            accountsAllowance: types.polygon.accounts.facets.AccountsAllowance;
            accountsQueryEndowments: types.polygon.accounts.facets.AccountsQueryEndowments;
            accountsSwapRouter: types.polygon.accounts.facets.AccountsSwapRouter;
            accountsUpdate: types.polygon.accounts.facets.AccountsUpdate;
            accountsUpdateEndowments: types.polygon.accounts.facets.AccountsUpdateEndowments;
            accountsUpdateEndowmentSettingsController: types.polygon.accounts.facets.AccountsUpdateEndowmentSettingsController;
            accountsUpdateStatusEndowments: types.polygon.accounts.facets.AccountsUpdateStatusEndowments;
            accountsStrategy: types.polygon.accounts.facets.AccountsStrategy;
            diamondCutFacet: types.polygon.accounts.facets.DiamondCutFacet;
            diamondInitFacet: types.polygon.accounts.facets.DiamondInitFacet;
            diamondLoupeFacet: types.polygon.accounts.facets.DiamondLoupeFacet;
            ownershipFacet: types.polygon.accounts.facets.OwnershipFacet;
        };
    };
    indexFund: types.polygon.IndexFund;
    multiSig: {
        apTeam: types.polygon.multiSig.ApTeam;
        charityApplications: types.polygon.multiSig.CharityApplications;
        endowment: {
            emitter: types.polygon.multiSig.endowment.Emitter;
            factory: types.polygon.multiSig.endowment.Factory;
            implementation: types.polygon.multiSig.endowment.Implementation;
        };
    };
    registrar: types.polygon.Registrar;
    router: types.polygon.Router;
};
