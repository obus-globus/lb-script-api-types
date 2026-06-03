import type { CreakingModel } from '../../../../../net/minecraft/client/model/monster/creaking/CreakingModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { CreakingRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/CreakingRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Creaking } from '../../../../../net/minecraft/world/entity/monster/creaking/Creaking.d.ts'
export class CreakingRenderer<T extends Creaking> extends MobRenderer<T, CreakingRenderState, CreakingModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): CreakingRenderState;
    createRenderState(entity: T, partialTicks: number): CreakingRenderState;
    extractRenderState(entity: T, state: CreakingRenderState, partialTicks: number): void;
    getTextureLocation(state: CreakingRenderState): Identifier;
}