import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HashCache$ProviderCache } from '../../../net/minecraft/data/HashCache$ProviderCache.d.ts'
export class HashCache$UpdateResult extends Record {
    constructor(providerId: string, cache: HashCache$ProviderCache, writes: number)
    // private cache: HashCache$ProviderCache;
    // private providerId: string;
    // private writes: number;
    cache(): HashCache$ProviderCache;
    equals(o: Object | null): boolean;
    hashCode(): number;
    providerId(): string;
    toString(): string;
    writes(): number;
}