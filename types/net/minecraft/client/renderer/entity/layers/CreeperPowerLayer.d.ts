import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { CreeperModel } from '../../../../../../net/minecraft/client/model/monster/creeper/CreeperModel.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EnergySwirlLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EnergySwirlLayer.d.ts'
import type { CreeperRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CreeperRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class CreeperPowerLayer extends EnergySwirlLayer<CreeperRenderState, CreeperModel> {
    constructor(renderer: RenderLayerParent<CreeperRenderState, CreeperModel>, modelSet: EntityModelSet)
    // private model: CreeperModel;
    getTextureLocation(): Identifier;
    isPowered(state: CreeperRenderState): boolean;
    model(): CreeperModel;
    xOffset(t: number): number;
}