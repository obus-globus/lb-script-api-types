import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentInitializers$Initializer } from '../../../../net/minecraft/core/component/DataComponentInitializers$Initializer.d.ts'
import type { DataComponentInitializers$InitializerEntry } from '../../../../net/minecraft/core/component/DataComponentInitializers$InitializerEntry.d.ts'
import type { DataComponentInitializers$PendingComponents } from '../../../../net/minecraft/core/component/DataComponentInitializers$PendingComponents.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DataComponentInitializers extends Object {
    constructor()
    // private initializers: DataComponentInitializers$InitializerEntry<Object>[];
    add<T extends unknown>(key: ResourceKey<T>, initializer: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void): void;
    build(context: HolderLookup$Provider): DataComponentInitializers$PendingComponents<Object>[];
    // private runInitializers(context: HolderLookup$Provider): JavaMap<ResourceKey<Object>, DataComponentMap$Builder>;
}