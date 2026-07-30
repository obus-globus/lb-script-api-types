import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vec3f } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { BatchCollector } from '../../../../net/ccbluex/liquidbounce/render/mesh/BatchCollector.d.ts'
import type { MeshBuildScope } from '../../../../net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
/**
 * Context representing the rendering environment.
 *
 * @param renderTarget The render target framebuffer.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:82}
 */
export class WorldRenderEnvironment extends Object {
    constructor(renderTarget: RenderTarget, poseStack: PoseStack, camera: Camera, batchCollector: BatchCollector)
    // private batchCollector: BatchCollector;
    readonly camera: Camera;
    readonly poseStack: PoseStack;
    readonly renderTarget: RenderTarget;
    /**
     * Converts a world-space position to the camera-relative coordinate system.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:91}
     */
    relativeToCamera(pos: Vec3f): Vec3;
    relativeToCamera(pos: Position): Vec3;
    relativeToCamera(pos: Vec3i): Vec3;
    relativeToCamera(pos: Vector3fc): Vec3;
    /**
     * Low-level draw entrypoint.
     *
     * The returned scope must be closed after writing vertices.
     *
     * Prefer {@link net.ccbluex.liquidbounce.render.drawCustomMesh} for regular use.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L131 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:131}
     */
    start(pipeline: RenderPipeline, textures: JavaMap<string, AbstractTexture>, uniforms: JavaMap<string, GpuBufferSlice>): MeshBuildScope;
}