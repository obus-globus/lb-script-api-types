import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { WorldVersion } from '../../../net/minecraft/WorldVersion.d.ts'
import type { CachedOutput } from '../../../net/minecraft/data/CachedOutput.d.ts'
import type { HashCache$ProviderCache } from '../../../net/minecraft/data/HashCache$ProviderCache.d.ts'
import type { HashCache$UpdateFunction } from '../../../net/minecraft/data/HashCache$UpdateFunction.d.ts'
import type { HashCache$UpdateResult } from '../../../net/minecraft/data/HashCache$UpdateResult.d.ts'
export class HashCache extends Object {
    constructor(rootDir: Path[], providerIds: E[], version: WorldVersion)
    // private cacheDir: Path[];
    // private cachePaths: Path[][];
    // private caches: { [key: string]: HashCache$ProviderCache };
    // private cachesToWrite: string[];
    // private initialCount: number;
    // private rootDir: Path[];
    // private versionId: string;
    // private writes: number;
    applyUpdate(result: HashCache$UpdateResult): void;
    generateUpdate(providerId: string, function_: (param0: CachedOutput) => java.util.concurrent.CompletableFuture<unknown>): CompletableFuture<HashCache$UpdateResult>;
    // private getProviderCachePath(provider: string): Path[];
    purgeStaleAndWrite(): void;
    shouldRunInThisVersion(providerId: string): boolean;
}