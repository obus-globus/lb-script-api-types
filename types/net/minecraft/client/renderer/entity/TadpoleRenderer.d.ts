import type { TadpoleModel } from '../../../../../net/minecraft/client/model/animal/frog/TadpoleModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Tadpole } from '../../../../../net/minecraft/world/entity/animal/frog/Tadpole.d.ts'
export class TadpoleRenderer extends MobRenderer<Tadpole, LivingEntityRenderState, TadpoleModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): LivingEntityRenderState;
    getTextureLocation(state: LivingEntityRenderState): Identifier;
}