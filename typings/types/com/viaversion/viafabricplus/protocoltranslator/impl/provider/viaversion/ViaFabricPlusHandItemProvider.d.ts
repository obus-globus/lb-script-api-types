import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { HandItemProvider } from '../../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/provider/HandItemProvider.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ViaFabricPlusHandItemProvider extends HandItemProvider {
    static lastUsedItem: ItemStack;
    constructor()
    getHandItem(arg0: UserConnection): Item;
}