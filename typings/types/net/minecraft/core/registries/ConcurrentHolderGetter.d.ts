import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class ConcurrentHolderGetter<T extends unknown> extends Object implements HolderGetter<T> {
    constructor(lock: Object, original: HolderGetter<T>)
    // private elementCache: Map<ResourceKey<T>, Optional<Holder$Reference<T>>>;
    // private lock: Object;
    // private original: HolderGetter<T>;
    // private tagCache: Map<TagKey<T>, Optional<T[]>>;
    get(elementId: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get(tagId: TagKey<T>): Optional<T[]>;
    getOrThrow(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow(id: TagKey<T>): T[];
    getRandomElementOf(tag: TagKey<T>, random: RandomSource): Optional<Holder<T>>;
}