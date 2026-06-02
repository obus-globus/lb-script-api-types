import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
export interface IrisItemLightProvider extends Object{
    getLightColor(arg0: Player, arg1: ItemStack): Vector3f;
    getLightEmission(arg0: Player, arg1: ItemStack): number;
}