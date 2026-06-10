import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
export class PlaceholderLookupProvider$UniversalLookup extends Object implements HolderGetter<Object>, HolderOwner<Object> {
    private constructor(null_: PlaceholderLookupProvider$UniversalLookup)
    canSerializeIn(context: HolderOwner<Object>): boolean;
    castAsLookup<T extends Object | number | string | boolean>(): HolderGetter<T>;
    castAsOwner<T extends Object | number | string | boolean>(): HolderOwner<T>;
    get(id: ResourceKey<Object>): Optional<Holder$Reference<Object>>;
    get(id: TagKey<Object>): Optional<Object[]>;
    // private getOrCreate(id: ResourceKey<Object>): Holder$Reference<Object>;
    // private getOrCreate(id: TagKey<Object>): Object[];
    getOrThrow(id: ResourceKey<Object>): Holder$Reference<Object>;
    getOrThrow(id: TagKey<Object>): Object[];
    getRandomElementOf(tag: TagKey<Object>, random: RandomSource): Optional<Holder<Object>>;
}