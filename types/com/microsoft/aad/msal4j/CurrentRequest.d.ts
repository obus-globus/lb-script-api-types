import type { CacheRefreshReason } from '../../../../com/microsoft/aad/msal4j/CacheRefreshReason.d.ts'
import type { PublicApi } from '../../../../com/microsoft/aad/msal4j/PublicApi.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CurrentRequest extends Object {
    constructor(arg0: PublicApi)
    // private cacheInfo: CacheRefreshReason;
    // private publicApi: PublicApi;
    // private regionOutcome: number;
    // private regionSource: number;
    // private regionUsed: string;
    cacheInfo(): CacheRefreshReason;
    cacheInfo(arg0: CacheRefreshReason): void;
    publicApi(): PublicApi;
    regionOutcome(): number;
    regionOutcome(arg0: number): void;
    regionSource(): number;
    regionSource(arg0: number): void;
    regionUsed(): string;
    regionUsed(arg0: string): void;
}