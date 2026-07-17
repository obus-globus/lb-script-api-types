import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { RegistrySetBuilder$UniversalOwner } from '../../../net/minecraft/core/RegistrySetBuilder$UniversalOwner.d.ts'
import type { RegistrySetBuilder$ValueAndHolder } from '../../../net/minecraft/core/RegistrySetBuilder$ValueAndHolder.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistrySetBuilder$RegistryContents<T extends unknown> extends Record {
    private constructor(key: ResourceKey<T[]>, lifecycle: Lifecycle, values: JavaMap<ResourceKey<T>, RegistrySetBuilder$ValueAndHolder<T>>)
    // private key: ResourceKey<T[]>;
    // private lifecycle: Lifecycle;
    // private values: JavaMap<ResourceKey<T>, RegistrySetBuilder$ValueAndHolder<T>>;
    buildAsLookup(owner: RegistrySetBuilder$UniversalOwner): HolderLookup$RegistryLookup<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): ResourceKey<T[]>;
    lifecycle(): Lifecycle;
    toString(): string;
    values(): JavaMap<ResourceKey<T>, RegistrySetBuilder$ValueAndHolder<T>>;
}