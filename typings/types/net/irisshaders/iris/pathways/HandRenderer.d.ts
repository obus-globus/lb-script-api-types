import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { GameRenderer } from '../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { Projection } from '../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureRenderDispatcher } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { FeatureRenderDispatcher$PreparedFrame } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher$PreparedFrame.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class HandRenderer extends Object {
    static DEPTH: number;
    static INSTANCE: HandRenderer;
    constructor()
    // private ACTIVE: boolean;
    // private bufferSource: RenderBuffers;
    // private cachedProjectionMatrixBuffer: ProjectionMatrixBuffer;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private frame: FeatureRenderDispatcher$PreparedFrame;
    // private projection: Projection;
    readonly renderingSolid: boolean;
    // private submitNodeCollector: SubmitNodeStorage;
    // private canRender(arg0: Camera, arg1: GameRenderer): boolean;
    destroy(): void;
    endRender(): void;
    isActive(): boolean;
    isHandTranslucent(arg0: ItemStack): boolean;
    isRenderingSolid(): boolean;
    renderSolid(arg0: Matrix4fc, arg1: number, arg2: Camera, arg3: CameraRenderState, arg4: GameRenderer, arg5: WorldRenderingPipeline): void;
    renderTranslucent(arg0: Matrix4fc, arg1: number, arg2: Camera, arg3: CameraRenderState, arg4: GameRenderer, arg5: WorldRenderingPipeline): void;
    // private setupGlState(arg0: GameRenderer, arg1: CameraRenderState, arg2: Matrix4fc, arg3: number): PoseStack;
}