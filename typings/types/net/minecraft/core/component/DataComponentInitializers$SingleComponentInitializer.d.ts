import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentInitializers$Initializer } from '../../../../net/minecraft/core/component/DataComponentInitializers$Initializer.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface DataComponentInitializers$SingleComponentInitializer<C extends unknown> extends Object {
    asInitializer<T extends unknown>(type: DataComponentType<C>): (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void;
    create(context: HolderLookup$Provider): C;
}