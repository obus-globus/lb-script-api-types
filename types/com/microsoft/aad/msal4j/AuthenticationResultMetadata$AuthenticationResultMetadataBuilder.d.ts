import type { AuthenticationResultMetadata } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultMetadata.d.ts'
import type { CacheRefreshReason } from '../../../../com/microsoft/aad/msal4j/CacheRefreshReason.d.ts'
import type { TokenSource } from '../../../../com/microsoft/aad/msal4j/TokenSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthenticationResultMetadata$AuthenticationResultMetadataBuilder extends Object {
    constructor()
    // private cacheRefreshReason: CacheRefreshReason;
    // private refreshOn: number;
    // private tokenSource: TokenSource;
    build(): AuthenticationResultMetadata;
    cacheRefreshReason(arg0: CacheRefreshReason): AuthenticationResultMetadata$AuthenticationResultMetadataBuilder;
    refreshOn(arg0: number): AuthenticationResultMetadata$AuthenticationResultMetadataBuilder;
    toString(): string;
    tokenSource(arg0: TokenSource): AuthenticationResultMetadata$AuthenticationResultMetadataBuilder;
}