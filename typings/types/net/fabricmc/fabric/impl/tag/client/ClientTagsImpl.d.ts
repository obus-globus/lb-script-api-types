import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientTagsLoader$LoadedTag } from '../../../../../../net/fabricmc/fabric/impl/tag/client/ClientTagsLoader$LoadedTag.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
export class ClientTagsImpl extends Object {
    static getHolder<T extends unknown>(paramarg0: TagKey<T>, paramarg1: T): Optional<Holder<T>>;
    static getOrCreatePartiallySyncedTag(paramarg0: TagKey<Object>): ClientTagsLoader$LoadedTag;
    static getRegistry<T extends unknown>(paramarg0: TagKey<T>): Optional<T[]>;
    static isInWithLocalFallback<T extends unknown>(paramarg0: TagKey<T>, paramarg1: Holder<T>): boolean;
    constructor()
}