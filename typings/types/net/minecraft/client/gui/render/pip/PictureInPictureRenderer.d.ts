import type { GpuTexture } from '../../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { Projection } from '../../../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { GuiRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
export abstract class PictureInPictureRenderer<T extends PictureInPictureRenderState> extends Object implements AutoCloseable {
    constructor(bufferSource: MultiBufferSource$BufferSource)
    // private bufferSource: MultiBufferSource$BufferSource;
    // private depthTexture: GpuTexture;
    // private depthTextureView: GpuTextureView;
    // private projection: Projection;
    // private projectionMatrixBuffer: ProjectionMatrixBuffer;
    // private texture: GpuTexture;
    // private textureView: GpuTextureView;
    blitTexture(renderState: T, guiRenderState: GuiRenderState): void;
    close(): void;
    getRenderStateClass(): Class<T>;
    getTextureLabel(): string;
    getTranslateY(height: number, guiScale: number): number;
    prepare(renderState: T, guiRenderState: GuiRenderState, guiScale: number): void;
    // private prepareTexturesAndProjection(needsAResize: boolean, width: number, height: number): void;
    renderToTexture(renderState: T, poseStack: PoseStack): void;
    textureIsReadyToBlit(renderState: T): boolean;
}