import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../net/minecraft/data/CachedOutput.d.ts'
import type { HashCache$ProviderCache } from '../../../net/minecraft/data/HashCache$ProviderCache.d.ts'
import type { HashCache$ProviderCacheBuilder } from '../../../net/minecraft/data/HashCache$ProviderCacheBuilder.d.ts'
import type { HashCache$UpdateResult } from '../../../net/minecraft/data/HashCache$UpdateResult.d.ts'
export class HashCache$CacheUpdater extends Object implements CachedOutput {
    static NO_CACHE: CachedOutput;
    private constructor(provider: string, newVersionId: string, oldCache: HashCache$ProviderCache)
    // private closed: boolean;
    // private newCache: HashCache$ProviderCacheBuilder;
    // private oldCache: HashCache$ProviderCache;
    // private provider: string;
    // private writes: AtomicInteger;
    close(): HashCache$UpdateResult;
    // private shouldWrite(path: Path, hash: HashCode): boolean;
    writeIfNeeded(path: Path, input: number[], hash: HashCode): void;
}