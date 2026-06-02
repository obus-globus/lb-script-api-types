import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentMap$Builder } from '../../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
export interface DefaultItemComponentEvents$ModifyConsumer extends Object{
    modify(arg0: DataComponentMap$Builder, arg1: HolderLookup$Provider, arg2: Item): void;
}