import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
export abstract class RegistrySetBuilder$EmptyTagLookup<T extends Object | number | string | boolean> extends Object implements HolderGetter<T> {
    constructor(owner: HolderOwner<T>)
    // private owner: HolderOwner<T>;
    get(id: TagKey<T>): Optional<T[]>;
    getOrThrow(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow(id: TagKey<T>): T[];
    getRandomElementOf(tag: TagKey<T>, random: RandomSource): Optional<Holder<T>>;
}