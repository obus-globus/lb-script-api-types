import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HashCache$ProviderCache } from '../../../net/minecraft/data/HashCache$ProviderCache.d.ts'
export class HashCache$ProviderCacheBuilder extends Record {
    constructor(version: string)
    private constructor(version: string, data: Map<Path[], HashCode>)
    // private data: Map<Path[], HashCode>;
    // private version: string;
    build(): HashCache$ProviderCache;
    data(): Map<Path[], HashCode>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    put(path: Path[], hash: HashCode): void;
    toString(): string;
    version(): string;
}