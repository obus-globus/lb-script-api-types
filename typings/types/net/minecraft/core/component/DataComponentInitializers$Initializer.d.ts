import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface DataComponentInitializers$Initializer<T extends unknown> extends Object {
    add<C extends unknown>(type: DataComponentType<C>, value: C): (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void;
    andThen(other: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void): (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void;
    run(components: DataComponentMap$Builder, context: HolderLookup$Provider, key: ResourceKey<T>): void;
}