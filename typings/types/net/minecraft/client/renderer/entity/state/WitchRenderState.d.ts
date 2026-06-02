import type { HoldingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HoldingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class WitchRenderState extends HoldingEntityRenderState {
    static NO_OUTLINE: number;
    static extractHoldingEntityRenderState(paramentity: LivingEntity, paramstate: HoldingEntityRenderState, paramitemModelResolver: ItemModelResolver): void;
    constructor()
    entityId: number;
    isHoldingItem: boolean;
    isHoldingPotion: boolean;
}