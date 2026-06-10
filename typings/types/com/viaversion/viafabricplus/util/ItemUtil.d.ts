import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemUtil extends Object {
    static getTagOrNull(paramarg0: ItemStack): CompoundTag;
    static vvNbtName(paramarg0: Class<Protocol<Object, Object, Object, Object>>): string;
    static vvNbtName(paramarg0: Class<Protocol<Object, Object, Object, Object>>, paramarg1: string): string;
    constructor()
}