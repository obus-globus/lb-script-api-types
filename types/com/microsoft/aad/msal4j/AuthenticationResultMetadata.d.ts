import type { AuthenticationResultMetadata$AuthenticationResultMetadataBuilder } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultMetadata$AuthenticationResultMetadataBuilder.d.ts'
import type { CacheRefreshReason } from '../../../../com/microsoft/aad/msal4j/CacheRefreshReason.d.ts'
import type { TokenSource } from '../../../../com/microsoft/aad/msal4j/TokenSource.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthenticationResultMetadata extends Object implements Serializable {
    static builder(): AuthenticationResultMetadata$AuthenticationResultMetadataBuilder;
    constructor(arg0: TokenSource, arg1: number, arg2: CacheRefreshReason)
    // private cacheRefreshReason: CacheRefreshReason;
    // private refreshOn: number;
    // private tokenSource: TokenSource;
    cacheRefreshReason(): CacheRefreshReason;
    cacheRefreshReason(arg0: CacheRefreshReason): void;
    refreshOn(): number;
    refreshOn(arg0: number): void;
    tokenSource(): TokenSource;
    tokenSource(arg0: TokenSource): void;
}