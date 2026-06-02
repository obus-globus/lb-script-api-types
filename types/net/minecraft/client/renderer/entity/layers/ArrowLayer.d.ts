import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlayerModel } from '../../../../../../net/minecraft/client/model/player/PlayerModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderer } from '../../../../../../net/minecraft/client/renderer/entity/LivingEntityRenderer.d.ts'
import type { StuckInBodyLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/StuckInBodyLayer.d.ts'
import type { ArrowRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArrowRenderState.d.ts'
import type { AvatarRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
export class ArrowLayer<M extends PlayerModel> extends StuckInBodyLayer<M, ArrowRenderState> {
    constructor(renderer: LivingEntityRenderer<Object, AvatarRenderState, M>, context: EntityRendererProvider$Context)
    numStuck(state: AvatarRenderState): number;
}