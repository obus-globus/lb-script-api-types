import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ShulkerRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    attachFace: Direction;
    color: DyeColor;
    peekAmount: number;
    renderOffset: Vec3;
    yBodyRot: number;
    yHeadRot: number;
}