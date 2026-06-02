import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../net/minecraft/data/CachedOutput.d.ts'
export interface DataProvider extends Object{
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}