import type { SilverfishModel } from '../../../../../net/minecraft/client/model/monster/silverfish/SilverfishModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Silverfish } from '../../../../../net/minecraft/world/entity/monster/Silverfish.d.ts'
export class SilverfishRenderer extends MobRenderer<Silverfish, LivingEntityRenderState, SilverfishModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): LivingEntityRenderState;
    createRenderState(entity: Silverfish, partialTicks: number): LivingEntityRenderState;
    getFlipDegrees(): number;
    getTextureLocation(state: LivingEntityRenderState): Identifier;
}