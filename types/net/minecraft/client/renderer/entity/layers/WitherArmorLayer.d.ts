import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { WitherBossModel } from '../../../../../../net/minecraft/client/model/monster/wither/WitherBossModel.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EnergySwirlLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EnergySwirlLayer.d.ts'
import type { WitherRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WitherRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class WitherArmorLayer extends EnergySwirlLayer<WitherRenderState, WitherBossModel> {
    constructor(renderer: RenderLayerParent<WitherRenderState, WitherBossModel>, modelSet: EntityModelSet)
    // private model: WitherBossModel;
    getTextureLocation(): Identifier;
    isPowered(state: WitherRenderState): boolean;
    model(): WitherBossModel;
    xOffset(t: number): number;
}