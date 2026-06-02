import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { PaintingRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PaintingRenderState.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { TextureAtlas } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Painting } from '../../../../../net/minecraft/world/entity/decoration/painting/Painting.d.ts'
export class PaintingRenderer extends EntityRenderer<Painting, PaintingRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private paintingsAtlas: TextureAtlas;
    createRenderState(): PaintingRenderState;
    extractRenderState(entity: Painting, state: PaintingRenderState, partialTicks: number): void;
    // private renderPainting(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, renderType: RenderType, lightCoordsMap: number[], width: number, height: number, front: TextureAtlasSprite, back: TextureAtlasSprite): void;
    submit(state: PaintingRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}