import type { JavaMap } from '../../../JavaMap.d.ts'
import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HashCache$ProviderCache } from '../../../net/minecraft/data/HashCache$ProviderCache.d.ts'
export class HashCache$ProviderCacheBuilder extends Record {
    constructor(version: string)
    // private data: JavaMap<Path, HashCode>;
    // private version: string;
    build(): HashCache$ProviderCache;
    data(): JavaMap<Path, HashCode>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    put(path: Path, hash: HashCode): void;
    toString(): string;
    version(): string;
}