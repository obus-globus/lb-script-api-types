import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { RegistrySetBuilder$EmptyTagLookup } from '../../../net/minecraft/core/RegistrySetBuilder$EmptyTagLookup.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export abstract class RegistrySetBuilder$EmptyTagRegistryLookup<T extends Object | number | string | boolean> extends RegistrySetBuilder$EmptyTagLookup<T> implements HolderLookup$RegistryLookup<T> {
    constructor(owner: HolderOwner<T>)
    filterElements(filter: (param0: T) => kotlin.Boolean): HolderLookup$RegistryLookup<T>;
    filterFeatures(enabledFeatures: FeatureFlagSet): HolderLookup$RegistryLookup<T>;
    listTags(): Stream<T[]>;
}