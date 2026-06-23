import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
export interface HolderLookup<T extends unknown> extends Object, HolderGetter<T>{
    getOrThrow(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow(id: TagKey<T>): T[];
    getRandomElementOf(tag: TagKey<T>, random: RandomSource): Optional<Holder<T>>;
    listElementIds(): Stream<ResourceKey<T>>;
    listElements(): Stream<Holder$Reference<T>>;
    listTagIds(): Stream<TagKey<T>>;
    listTags(): Stream<T[]>;
}