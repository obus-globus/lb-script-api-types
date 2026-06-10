import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DefaultItemComponentEvents$ModifyConsumer } from '../../../../../net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents$ModifyConsumer.d.ts'
import type { DefaultItemComponentEvents$ModifyContext } from '../../../../../net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents$ModifyContext.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentMap$Builder } from '../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class DefaultItemComponentImpl$ModifyContextImpl extends Object implements DefaultItemComponentEvents$ModifyContext {
    private constructor(arg0: HolderLookup$Provider)
    // private registryLookup: HolderLookup$Provider;
    modify(arg0: (param0: Item) => boolean, arg1: (param0: DataComponentMap$Builder, param1: Item) => void): void;
    modify(arg0: Item[], arg1: (param0: DataComponentMap$Builder, param1: Item) => void): void;
    modify(arg0: Item[], arg1: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: Item) => void): void;
    modify(arg0: Item, arg1: (param0: DataComponentMap$Builder) => void): void;
    modify(arg0: Item, arg1: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: Item) => void): void;
    modify(arg0: (param0: Item) => boolean, arg1: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: Item) => void): void;
}