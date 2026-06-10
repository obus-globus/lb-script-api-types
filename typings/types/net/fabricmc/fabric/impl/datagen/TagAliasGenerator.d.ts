import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
export class TagAliasGenerator extends Object {
    static getDirectory(paramarg0: ResourceKey<Object[]>): string;
    static writeTagAlias(paramarg0: CachedOutput, paramarg1: PackOutput$PathProvider, paramarg2: ResourceKey<(Object | null)[]>, paramarg3: Identifier, paramarg4: TagKey<Object>[]): CompletableFuture<Object>;
    constructor()
}