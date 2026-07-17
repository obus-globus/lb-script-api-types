import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricDynamicRegistryProvider$ConditionalEntry } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricDynamicRegistryProvider$ConditionalEntry.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderOwner } from '../../../../../../../net/minecraft/core/HolderOwner.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class FabricDynamicRegistryProvider$RegistryEntries<T extends unknown> extends Object {
    constructor(arg0: HolderOwner<T>, arg1: ResourceKey<T[]>, arg2: Codec<T>)
    // private elementCodec: Codec<T>;
    // private lookup: HolderOwner<T>;
    // private registry: ResourceKey<T[]>;
    // private resources: JavaMap<ResourceKey<T>, FabricDynamicRegistryProvider$ConditionalEntry<T>>;
    add(arg0: ResourceKey<T>, arg1: T, arg2: ResourceCondition[]): Holder<T>;
}