import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientTagsLoader$LoadedTag } from '../../../../../../net/fabricmc/fabric/impl/tag/client/ClientTagsLoader$LoadedTag.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
export class ClientTagsImpl extends Object {
    static getHolder(paramarg0: TagKey<Object>, paramarg1: Object | null): Optional<Object>;
    static getOrCreatePartiallySyncedTag(paramarg0: TagKey<Object>): ClientTagsLoader$LoadedTag;
    static getRegistry(paramarg0: TagKey<Object>): Optional<Object>;
    static isInWithLocalFallback(paramarg0: TagKey<Object>, paramarg1: Holder<Object>): boolean;
    constructor()
}