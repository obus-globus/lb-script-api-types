import type { AuthorityType } from '../../../../com/microsoft/aad/msal4j/AuthorityType.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Authority extends Object {
    constructor(arg0: URL, arg1: AuthorityType)
    // private authority: string;
    // private authorityType: AuthorityType;
    // private authorizationEndpoint: string;
    // private canonicalAuthorityUrl: URL;
    // private deviceCodeEndpoint: string;
    // private host: string;
    // private isTenantless: boolean;
    // private selfSignedJwtAudience: string;
    // private tenant: string;
    // private tokenEndpoint: string;
    authority(): string;
    authorityType(): AuthorityType;
    authorizationEndpoint(): string;
    canonicalAuthorityUrl(): URL;
    deviceCodeEndpoint(): string;
    getUserRealmEndpoint(arg0: string): string;
    host(): string;
    isTenantless(): boolean;
    selfSignedJwtAudience(): string;
    // private setCommonAuthorityProperties(): void;
    tenant(): string;
    tokenEndpoint(): string;
    tokenEndpointUrl(): URL;
}