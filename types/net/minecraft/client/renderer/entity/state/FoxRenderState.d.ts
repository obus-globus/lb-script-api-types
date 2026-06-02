import type { HoldingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HoldingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Fox$Variant } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox$Variant.d.ts'
export class FoxRenderState extends HoldingEntityRenderState {
    static NO_OUTLINE: number;
    static extractHoldingEntityRenderState(paramentity: LivingEntity, paramstate: HoldingEntityRenderState, paramitemModelResolver: ItemModelResolver): void;
    constructor()
    crouchAmount: number;
    headRollAngle: number;
    isCrouching: boolean;
    isFaceplanted: boolean;
    isPouncing: boolean;
    isSitting: boolean;
    isSleeping: boolean;
    variant: Fox$Variant;
}