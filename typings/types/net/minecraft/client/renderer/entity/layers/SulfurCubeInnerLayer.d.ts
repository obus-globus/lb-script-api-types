import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SulfurCubeModel } from '../../../../../../net/minecraft/client/model/monster/slime/SulfurCubeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { SulfurCubeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SulfurCubeRenderState.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SulfurCubeInnerLayer extends RenderLayer<SulfurCubeRenderState, SulfurCubeModel> {
    constructor(renderer: RenderLayerParent<SulfurCubeRenderState, SulfurCubeModel>, modelSet: EntityModelSet)
    // private normalModel: SulfurCubeModel;
    // private smallModel: SulfurCubeModel;
    // private iris$setupId(arg0: BlockState): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: SulfurCubeRenderState, yRot: number, xRot: number): void;
}