import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
export class FlameFeatureRenderer extends Object {
    constructor()
    // private renderFlame(pose: PoseStack$Pose, bufferSource: MultiBufferSource, state: EntityRenderState, rotation: Quaternionf, atlasManager: AtlasManager): void;
    renderSolid(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, atlasManager: AtlasManager): void;
}