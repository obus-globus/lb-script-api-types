import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItem$Properties } from '../../../../../net/minecraft/client/renderer/item/ClientItem$Properties.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export interface ItemModelOutput extends Object{
    accept(item: Item, generator: ItemModel$Unbaked): void;
    accept(item: Item, generator: ItemModel$Unbaked, properties: ClientItem$Properties): void;
    copy(donor: Item, acceptor: Item): void;
}