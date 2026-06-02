import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemTranslator extends Object {
    static mcToVia(paramarg0: ItemStack, paramarg1: ProtocolVersion): Item;
    static viaToMc(paramarg0: Item, paramarg1: ProtocolVersion): ItemStack;
    constructor()
}