import type { HoldingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HoldingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Panda$Gene } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda$Gene.d.ts'
export class PandaRenderState extends HoldingEntityRenderState {
    static NO_OUTLINE: number;
    static extractHoldingEntityRenderState(paramentity: LivingEntity, paramstate: HoldingEntityRenderState, paramitemModelResolver: ItemModelResolver): void;
    constructor()
    isEating: boolean;
    isScared: boolean;
    isSitting: boolean;
    isSneezing: boolean;
    isUnhappy: boolean;
    lieOnBackAmount: number;
    rollAmount: number;
    rollTime: number;
    sitAmount: number;
    sneezeTime: number;
    variant: Panda$Gene;
}