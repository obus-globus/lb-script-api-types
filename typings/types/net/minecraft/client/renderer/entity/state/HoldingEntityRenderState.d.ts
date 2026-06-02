import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class HoldingEntityRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    static extractHoldingEntityRenderState(paramentity: LivingEntity, paramstate: HoldingEntityRenderState, paramitemModelResolver: ItemModelResolver): void;
    constructor()
    heldItem: ItemStackRenderState;
}