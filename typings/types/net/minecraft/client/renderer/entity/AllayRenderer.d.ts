import type { AllayModel } from '../../../../../net/minecraft/client/model/animal/allay/AllayModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { AllayRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/AllayRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Allay } from '../../../../../net/minecraft/world/entity/animal/allay/Allay.d.ts'
export class AllayRenderer extends MobRenderer<Allay, AllayRenderState, AllayModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): AllayRenderState;
    createRenderState(entity: Allay, partialTicks: number): AllayRenderState;
    extractRenderState(entity: Allay, state: AllayRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: Allay, blockPos: BlockPos): number;
    getTextureLocation(state: AllayRenderState): Identifier;
}