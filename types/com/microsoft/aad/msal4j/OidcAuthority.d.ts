import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { OidcDiscoveryResponse } from '../../../../com/microsoft/aad/msal4j/OidcDiscoveryResponse.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
export class OidcAuthority extends Authority {
    constructor(arg0: URL)
    // private issuerFromOidcDiscovery: string;
    // private isIssuerValid(): boolean;
    setAuthorityProperties(arg0: OidcDiscoveryResponse): void;
    // private validateIssuer(): void;
}