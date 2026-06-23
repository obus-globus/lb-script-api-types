import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$IndexType } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiRendererExtensions } from '../../../../../net/fabricmc/fabric/impl/client/rendering/GuiRendererExtensions.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { GuiItemAtlas } from '../../../../../net/minecraft/client/gui/render/GuiItemAtlas.d.ts'
import type { GuiItemAtlas$SlotView } from '../../../../../net/minecraft/client/gui/render/GuiItemAtlas$SlotView.d.ts'
import type { GuiRenderer$Draw } from '../../../../../net/minecraft/client/gui/render/GuiRenderer$Draw.d.ts'
import type { GuiRenderer$MeshToDraw } from '../../../../../net/minecraft/client/gui/render/GuiRenderer$MeshToDraw.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { OversizedItemRenderer } from '../../../../../net/minecraft/client/gui/render/pip/OversizedItemRenderer.d.ts'
import type { PictureInPictureRenderer } from '../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { CubeMap } from '../../../../../net/minecraft/client/renderer/CubeMap.d.ts'
import type { MappableRingBuffer } from '../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { Projection } from '../../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureRenderDispatcher } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { GuiElementRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { GuiItemRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiItemRenderState.d.ts'
import type { GuiRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { GuiRenderState$TraverseRange } from '../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState$TraverseRange.d.ts'
import type { PictureInPictureRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
export class GuiRenderer extends Object implements AutoCloseable, GuiRendererExtensions {
    static CLEAR_COLOR: number;
    static DEFAULT_ITEM_SIZE: number;
    static GUI_3D_Z_FAR: number;
    static GUI_3D_Z_NEAR: number;
    static MIN_GUI_Z: number;
    constructor(renderState: GuiRenderState, bufferSource: MultiBufferSource$BufferSource, submitNodeCollector: SubmitNodeCollector, featureRenderDispatcher: FeatureRenderDispatcher, pictureInPictureRenderers: PictureInPictureRenderer<any>[])
    // private bufferBuilder: BufferBuilder;
    // private bufferSource: MultiBufferSource$BufferSource;
    // private byteBufferBuilder: ByteBufferBuilder;
    // private cachedGuiScale: number;
    // private cubeMap: CubeMap;
    // private draws: GuiRenderer$Draw[];
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private firstDrawIndexAfterBlur: number;
    // private guiProjection: Projection;
    // private guiProjectionMatrixBuffer: ProjectionMatrixBuffer;
    // private hasFabricInitialized: boolean;
    // private itemAtlas: GuiItemAtlas;
    // private meshesToDraw: GuiRenderer$MeshToDraw[];
    // private oversizedItemRenderers: Map<Object, OversizedItemRenderer>;
    // private pictureInPictureRenderers: Map<Class<PictureInPictureRenderState>, PictureInPictureRenderer<any>>;
    // private pipRendererPools: Map<Object | null, Object | null>;
    // private previousPipeline: RenderPipeline;
    // private previousScissorArea: ScreenRectangle;
    // private previousTextureSetup: TextureSetup;
    // private renderState: GuiRenderState;
    // private submitNodeCollector: SubmitNodeCollector;
    // private submitNodeStorage: SubmitNodeCollector;
    // private vertexBuffers: Map<VertexFormat, MappableRingBuffer>;
    // private addElementToMesh(elementState: GuiElementRenderState): void;
    // private addElementsToMeshes(range: GuiRenderState$TraverseRange): void;
    // private calculatedRequiredVertexBufferSizes(): { [key: string]: any };
    // private clearUnusedOversizedItemRenderers(): void;
    close(): void;
    // private draw(fogBuffer: GpuBufferSlice): void;
    // private enableScissor(rectangle: ScreenRectangle, renderPass: RenderPass): void;
    endFrame(): void;
    // private ensureVertexBufferSizes(): void;
    // private executeDraw(draw: GuiRenderer$Draw, renderPass: RenderPass, indexBuffer: GpuBuffer, indexType: VertexFormat$IndexType): void;
    // private executeDrawRange(label: () => string, mainRenderTarget: RenderTarget, fogBuffer: GpuBufferSlice, dynamicTransforms: GpuBufferSlice, indexBuffer: GpuBuffer, indexType: VertexFormat$IndexType, startIndex: number, endIndex: number): void;
    fabric_onReady(arg0: SubmitNodeStorage): void;
    // private getBufferBuilder(pipeline: RenderPipeline): BufferBuilder;
    // private getGuiScaleInvalidatingItemAtlasIfChanged(): number;
    // private invalidateItemAtlas(): void;
    // private prepare(): void;
    // private prepareItemAtlas(itemsInFrame: Object[], slotTextureSize: number): GuiItemAtlas;
    // private prepareItemElements(): void;
    // private preparePictureInPicture(): void;
    // private preparePictureInPictureState<T extends PictureInPictureRenderState>(picturesInPictureState: T, guiScale: number): void;
    // private prepareText(): void;
    // private recordDraws(): void;
    // private recordMesh(bufferBuilder: BufferBuilder, pipeline: RenderPipeline, textureSetup: TextureSetup, scissorArea: ScreenRectangle): void;
    registerPanoramaTextures(textureManager: TextureManager): void;
    render(fogBuffer: GpuBufferSlice): void;
    // private scissorChanged(newScissor: ScreenRectangle, oldScissor: ScreenRectangle): boolean;
    // private submitBlitFromItemAtlas(itemState: GuiItemRenderState, slotView: GuiItemAtlas$SlotView): void;
}