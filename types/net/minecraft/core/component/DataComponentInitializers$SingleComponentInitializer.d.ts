import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentInitializers$Initializer } from '../../../../net/minecraft/core/component/DataComponentInitializers$Initializer.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
export interface DataComponentInitializers$SingleComponentInitializer<C extends Object | number | string | boolean> extends Object{
    asInitializer(type: DataComponentType<C>): (param0: T, param1: DataComponentMap$Builder, param2: HolderLookup$Provider) => void;
    create(context: HolderLookup$Provider): C;
}