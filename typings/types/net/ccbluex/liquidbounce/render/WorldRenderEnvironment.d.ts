import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BatchCollector } from '../../../../net/ccbluex/liquidbounce/render/mesh/BatchCollector.d.ts'
import type { MeshBuildScope } from '../../../../net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
/**
 * Context representing the rendering environment.
 *
 * @param renderTarget The render target framebuffer.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:83}
 */
export class WorldRenderEnvironment extends Object {
    constructor(renderTarget: RenderTarget, poseStack: PoseStack, camera: Camera, batchCollector: BatchCollector)
    // private batchCollector: BatchCollector;
    readonly camera: Camera;
    readonly poseStack: PoseStack;
    readonly renderTarget: RenderTarget;
    /**
     * Low-level draw entrypoint.
     *
     * The returned scope must be closed after writing vertices.
     *
     * Prefer {@link net.ccbluex.liquidbounce.render.drawCustomMesh} for regular use.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:96}
     */
    start(pipeline: RenderPipeline, textures: JavaMap<string, AbstractTexture>, uniforms: JavaMap<string, GpuBufferSlice>): MeshBuildScope;
}