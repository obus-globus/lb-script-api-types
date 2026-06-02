import type { ManagedIdentitySourceType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentitySourceType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Constants extends Object {
    static AZURE_POD_IDENTITY_AUTHORITY_HOST: string;
    static CLIENT_CAPABILITY_REQUEST_PARAM: string;
    static IDENTITY_ENDPOINT: string;
    static IDENTITY_HEADER: string;
    static IDENTITY_SERVER_THUMBPRINT: string;
    static IMDS_ENDPOINT: string;
    static MANAGED_IDENTITY_CLIENT_ID: string;
    static MANAGED_IDENTITY_DEFAULT_TENTANT: string;
    static MANAGED_IDENTITY_OBJECT_ID: string;
    static MANAGED_IDENTITY_RESOURCE_ID: string;
    static MANAGED_IDENTITY_RESOURCE_ID_IMDS: string;
    static MSI_ENDPOINT: string;
    static TOKEN_HASH_CLAIM: string;
    static TOKEN_REVOCATION_SUPPORTED_ENVIRONMENTS: ManagedIdentitySourceType[];
    constructor()
}