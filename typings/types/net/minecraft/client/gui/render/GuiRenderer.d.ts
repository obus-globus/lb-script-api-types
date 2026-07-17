import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiRendererExtensions } from '../../../../../net/fabricmc/fabric/impl/client/rendering/GuiRendererExtensions.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { GuiItemAtlas } from '../../../../../net/minecraft/client/gui/render/GuiItemAtlas.d.ts'
import type { GuiItemAtlas$SlotView } from '../../../../../net/minecraft/client/gui/render/GuiItemAtlas$SlotView.d.ts'
import type { GuiRenderer$Draw } from '../../../../../net/minecraft/client/gui/render/GuiRenderer$Draw.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { OversizedItemRenderer } from '../../../../../net/minecraft/client/gui/render/pip/OversizedItemRenderer.d.ts'
import type { PictureInPictureRenderer } from '../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { CubeMap } from '../../../../../net/minecraft/client/renderer/CubeMap.d.ts'
import type { Projection } from '../../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { StagedVertexBuffer } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer.d.ts'
import type { StagedVertexBuffer$Draw } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer$Draw.d.ts'
import type { FeatureRenderDispatcher } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { GuiElementRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { GuiItemRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiItemRenderState.d.ts'
import type { GuiRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState.d.ts'
import type { GuiRenderState$TraverseRange } from '../../../../../net/minecraft/client/renderer/state/gui/GuiRenderState$TraverseRange.d.ts'
import type { PictureInPictureRenderState } from '../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Vector4fc } from '../../../../../org/joml/Vector4fc.d.ts'
export class GuiRenderer extends Object implements AutoCloseable, GuiRendererExtensions {
    static CLEAR_COLOR: Vector4fc;
    static DEFAULT_ITEM_SIZE: number;
    static GUI_3D_Z_FAR: number;
    static GUI_3D_Z_NEAR: number;
    static MIN_GUI_Z: number;
    constructor(renderState: GuiRenderState, featureRenderDispatcher: FeatureRenderDispatcher, pictureInPictureRenderers: PictureInPictureRenderer<any>[])
    // private cachedGuiScale: number;
    // private cubeMap: CubeMap;
    // private draws: GuiRenderer$Draw[];
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private firstDrawIndexAfterBlur: number;
    // private guiProjection: Projection;
    // private guiProjectionMatrixBuffer: ProjectionMatrixBuffer;
    // private hasFabricInitialized: boolean;
    // private itemAtlas: GuiItemAtlas;
    // private oversizedItemRenderers: JavaMap<Object, OversizedItemRenderer>;
    // private pictureInPictureRenderers: JavaMap<Class<PictureInPictureRenderState>, PictureInPictureRenderer<any>>;
    // private pipRendererPools: JavaMap<Object | null, Object | null>;
    // private previousDraw: StagedVertexBuffer$Draw;
    // private previousPipeline: RenderPipeline;
    // private previousScissorArea: ScreenRectangle;
    // private previousTextureSetup: TextureSetup;
    // private renderState: GuiRenderState;
    // private vertexBuffer: StagedVertexBuffer;
    // private addElementToMesh(elementState: GuiElementRenderState): void;
    // private addElementsToMeshes(range: GuiRenderState$TraverseRange): void;
    // private clearUnusedOversizedItemRenderers(): void;
    close(): void;
    // private draw(): void;
    // private enableScissor(rectangle: ScreenRectangle, renderPass: RenderPass): void;
    endFrame(): void;
    // private executeDraw(draw: GuiRenderer$Draw, renderPass: RenderPass): void;
    // private executeDrawRange(label: () => string, mainRenderTarget: RenderTarget, dynamicTransforms: GpuBufferSlice, startIndex: number, endIndex: number): void;
    fabric_onReady(): void;
    // private getGuiScaleInvalidatingItemAtlasIfChanged(): number;
    // private invalidateItemAtlas(): void;
    // private prepare(): void;
    // private prepareItemAtlas(itemsInFrame: Object[], slotTextureSize: number): GuiItemAtlas;
    // private prepareItemElements(): void;
    // private preparePictureInPicture(): void;
    // private preparePictureInPictureState<T extends PictureInPictureRenderState>(picturesInPictureState: T, guiScale: number): void;
    // private prepareText(): void;
    registerPanoramaTextures(textureManager: TextureManager): void;
    render(): void;
    // private scissorChanged(newScissor: ScreenRectangle, oldScissor: ScreenRectangle): boolean;
    // private submitBlitFromItemAtlas(itemState: GuiItemRenderState, slotView: GuiItemAtlas$SlotView): void;
}