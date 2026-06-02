import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class WolfRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    bodyArmorItem: ItemStack;
    collarColor: DyeColor;
    headRollAngle: number;
    isAngry: boolean;
    isSitting: boolean;
    shakeAnim: number;
    tailAngle: number;
    texture: Identifier;
    wetShade: number;
    getBodyRollAngle(offset: number): number;
}