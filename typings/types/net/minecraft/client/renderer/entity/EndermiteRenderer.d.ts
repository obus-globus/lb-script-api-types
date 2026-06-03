import type { EndermiteModel } from '../../../../../net/minecraft/client/model/monster/endermite/EndermiteModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Endermite } from '../../../../../net/minecraft/world/entity/monster/Endermite.d.ts'
export class EndermiteRenderer extends MobRenderer<Endermite, LivingEntityRenderState, EndermiteModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): LivingEntityRenderState;
    createRenderState(entity: Endermite, partialTicks: number): LivingEntityRenderState;
    getFlipDegrees(): number;
    getTextureLocation(state: LivingEntityRenderState): Identifier;
}