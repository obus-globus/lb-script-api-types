import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeshView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { FabricSubmitNodeCollection$ExtendedItemSubmit } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/FabricSubmitNodeCollection$ExtendedItemSubmit.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/mesh/MutableQuadViewImpl.d.ts'
import type { MultiBufferSource } from '../../../../../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { BakedQuad } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
export class AltItemRenderer extends Object {
    constructor()
    // private bufferSource: MultiBufferSource;
    // private emitter: MutableQuadViewImpl;
    // private foilDecalPose: PoseStack$Pose;
    // private outlineBufferSource: OutlineBufferSource;
    // private submit: FabricSubmitNodeCollection$ExtendedItemSubmit;
    // private translucent: boolean;
    // private bufferQuad(arg0: MutableQuadViewImpl): void;
    // private bufferQuads(arg0: BakedQuad[], arg1: MeshView): void;
    clear(): void;
    prepare(arg0: MultiBufferSource$BufferSource, arg1: OutlineBufferSource, arg2: boolean): void;
    renderItem(arg0: FabricSubmitNodeCollection$ExtendedItemSubmit): void;
    // private shadeQuad(arg0: MutableQuadViewImpl, arg1: boolean): void;
    // private tintQuad(arg0: MutableQuadViewImpl): void;
}