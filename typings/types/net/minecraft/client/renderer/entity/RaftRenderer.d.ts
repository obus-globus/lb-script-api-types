import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { AbstractBoatRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractBoatRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { BoatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BoatRenderState.d.ts'
export class RaftRenderer extends AbstractBoatRenderer {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context, modelId: ModelLayerLocation)
    // private model: EntityModel<BoatRenderState>;
    model(): EntityModel<BoatRenderState>;
}