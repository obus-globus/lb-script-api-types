import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export class ClientTags extends Object {
    static getOrCreateLocalTag(paramarg0: TagKey<Object>): Identifier[];
    static isInLocal<T extends unknown>(paramarg0: TagKey<T>, paramarg1: ResourceKey<T>): boolean;
    static isInWithLocalFallback<T extends unknown>(paramarg0: TagKey<T>, paramarg1: T): boolean;
    static isInWithLocalFallback<T extends unknown>(paramarg0: TagKey<T>, paramarg1: Holder<T>): boolean;
    private constructor()
}