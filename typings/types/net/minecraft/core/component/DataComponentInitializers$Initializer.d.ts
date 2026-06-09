import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface DataComponentInitializers$Initializer<T extends Object | number | string | boolean> extends Object {
    add<C extends Object | number | string | boolean>(type: DataComponentType<C>, value: C): (param0: T, param1: DataComponentMap$Builder, param2: HolderLookup$Provider) => void;
    andThen(other: (param0: T, param1: DataComponentMap$Builder, param2: HolderLookup$Provider) => void): (param0: T, param1: DataComponentMap$Builder, param2: HolderLookup$Provider) => void;
    run(components: DataComponentMap$Builder, context: HolderLookup$Provider, key: ResourceKey<T>): void;
}