import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelRendererAccessor } from '../../../../net/irisshaders/iris/mixin/LevelRendererAccessor.d.ts'
import type { IrisRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { ProgramSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { PackShadowDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives.d.ts'
import type { PackShadowDirectives$DepthSamplingSettings } from '../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives$DepthSamplingSettings.d.ts'
import type { PackShadowDirectives$SamplingSettings } from '../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives$SamplingSettings.d.ts'
import type { ShadowCullState } from '../../../../net/irisshaders/iris/shaderpack/properties/ShadowCullState.d.ts'
import type { ShadowCompositeRenderer } from '../../../../net/irisshaders/iris/shadows/ShadowCompositeRenderer.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { ShadowRenderer$MipmapPass } from '../../../../net/irisshaders/iris/shadows/ShadowRenderer$MipmapPass.d.ts'
import type { FrustumHolder } from '../../../../net/irisshaders/iris/shadows/frustum/FrustumHolder.d.ts'
import type { CustomUniforms } from '../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { DebugScreenDisplayer } from '../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { FeatureRenderDispatcher } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { LevelRenderState } from '../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
export class ShadowRenderer extends Object {
    static ACTIVE: boolean;
    static FRUSTUM: Frustum;
    static MODELVIEW: Matrix4f;
    static PROJECTION: Matrix4f;
    static RESOLUTION: number;
    static renderDistance: number;
    static visibleBlockEntities: BlockEntity[];
    static createShadowModelView(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): PoseStack;
    static getSunAngle(paramarg0: boolean): number;
    constructor(arg0: IrisRenderingPipeline, arg1: ProgramSource, arg2: PackDirectives, arg3: ShadowRenderTargets, arg4: ShadowCompositeRenderer, arg5: CustomUniforms, arg6: boolean)
    // private buffers: RenderBuffers;
    // private compositeRenderer: ShadowCompositeRenderer;
    // private debugStringOverall: string;
    // private debugStringTerrain: string;
    // private entityFrustumHolder: FrustumHolder;
    // private entityShadowDistanceMultiplier: number;
    // private farPlane: number;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private fov: number;
    // private halfPlaneLength: number;
    // private intervalSize: number;
    // private levelRenderState: LevelRenderState;
    // private mipmapPasses: ShadowRenderer$MipmapPass[];
    // private nearPlane: number;
    // private outlineBuffers: OutlineBufferSource;
    // private packCullingState: ShadowCullState;
    // private packHasVoxelization: boolean;
    // private pipeline: IrisRenderingPipeline;
    // private renderDistanceMultiplier: number;
    // private renderedShadowBlockEntities: number;
    // private renderedShadowEntities: number;
    // private resolution: number;
    // private separateHardwareSamplers: boolean;
    // private shouldRenderBlockEntities: boolean;
    // private shouldRenderDH: boolean;
    // private shouldRenderEntities: boolean;
    // private shouldRenderLightBlockEntities: boolean;
    // private shouldRenderPlayer: boolean;
    // private shouldRenderTerrain: boolean;
    // private shouldRenderTranslucent: boolean;
    // private submitNodeStorage: SubmitNodeStorage;
    // private sunPathRotation: number;
    // private targets: ShadowRenderTargets;
    // private terrainFrustumHolder: FrustumHolder;
    // private voxelDistance: number;
    addDebugText(arg0: DebugScreenDisplayer): void;
    // private configureDepthSampler(arg0: number, arg1: PackShadowDirectives$DepthSamplingSettings): void;
    // private configureSampler(arg0: number, arg1: PackShadowDirectives$SamplingSettings): void;
    // private configureSamplingSettings(arg0: PackShadowDirectives): void;
    // private copyPreTranslucentDepth(arg0: LevelRendererAccessor): void;
    // private createShadowFrustum(arg0: number, arg1: FrustumHolder): FrustumHolder;
    destroy(): void;
    // private extractVisibleBlockEntities(arg0: LevelRendererAccessor, arg1: MultiBufferSource$BufferSource, arg2: PoseStack, arg3: number, arg4: Camera, arg5: LevelRenderState, arg6: boolean): void;
    // private extractVisibleEntities(arg0: Camera, arg1: Frustum, arg2: DeltaTracker, arg3: LevelRenderState): void;
    // private generateMipmaps(): void;
    // private getBlockEntitiesDebugString(): string;
    // private getEntitiesDebugString(): string;
    // private getProjectionInfo(): string;
    // private renderBlockEntities(arg0: LevelRendererAccessor, arg1: PoseStack, arg2: SubmitNodeStorage, arg3: LevelRenderState, arg4: Camera): number;
    // private renderEntities(arg0: LevelRendererAccessor, arg1: EntityRenderDispatcher, arg2: MultiBufferSource$BufferSource, arg3: PoseStack, arg4: number, arg5: Frustum, arg6: number, arg7: number, arg8: number): number;
    // private renderPlayerEntity(arg0: LevelRendererAccessor, arg1: EntityRenderDispatcher, arg2: MultiBufferSource$BufferSource, arg3: PoseStack, arg4: number, arg5: Frustum, arg6: number, arg7: number, arg8: number): number;
    renderShadows(arg0: LevelRendererAccessor, arg1: Camera, arg2: CameraRenderState): void;
    setUsesImages(arg0: boolean): void;
    // private setupMipmappingForTexture(arg0: number, arg1: number): void;
    setupShadowViewport(): void;
}