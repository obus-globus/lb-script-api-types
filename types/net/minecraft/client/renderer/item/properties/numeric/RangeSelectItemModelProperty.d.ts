import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface RangeSelectItemModelProperty extends Object{
    get(itemStack: ItemStack, level: ClientLevel, owner: ItemOwner, seed: number): number;
    type(): MapCodec<RangeSelectItemModelProperty>;
}