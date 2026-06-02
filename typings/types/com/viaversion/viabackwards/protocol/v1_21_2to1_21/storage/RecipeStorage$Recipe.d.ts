import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RecipeStorage$Recipe extends Object {
    constructor()
    // private category: number;
    // private group: number;
    // private highlight: boolean;
    // private index: number;
    category(): number;
    write(arg0: PacketWrapper): void;
    writeCategory(arg0: PacketWrapper): void;
    writeGroup(arg0: PacketWrapper): void;
    writeIngredient(arg0: PacketWrapper, arg1: Item[]): void;
    writeIngredients(arg0: PacketWrapper, arg1: Item[][]): void;
    writeResult(arg0: PacketWrapper, arg1: Item): void;
}