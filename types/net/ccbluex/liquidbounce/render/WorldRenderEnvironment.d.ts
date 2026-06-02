import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { MeshData } from '../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { BatchCollector } from '../../../../net/ccbluex/liquidbounce/render/BatchCollector.d.ts'
import type { DrawMode } from '../../../../net/ccbluex/liquidbounce/render/DrawMode.d.ts'
import type { RenderBufferKey } from '../../../../net/ccbluex/liquidbounce/render/RenderBufferKey.d.ts'
import type { WorldRenderEnvironment$Companion } from '../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment$Companion.d.ts'
import type { Vec3f } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Context representing the rendering environment.
 *
 * @param renderTarget The render target framebuffer.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L194 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:194}
 */
export class WorldRenderEnvironment extends Object {
    static Companion: WorldRenderEnvironment$Companion;
    /**
     * Starts world-frame scoped rendering context.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L344 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:344}
     */
    static beginWorldFrame(paramarg0: RenderTarget, paramarg1: PoseStack, paramarg2: Camera): void;
    static create(paramarg0: RenderTarget, paramarg1: PoseStack, paramarg2: Camera): WorldRenderEnvironment;
    /**
     * Flushes and clears world-frame scoped rendering context.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L361 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:361}
     */
    static endWorldFrame(): void;
    constructor(renderTarget: RenderTarget, poseStack: PoseStack, camera: Camera, batchCollector: BatchCollector, frameBoundCollector: boolean)
    // private batchCollector: BatchCollector;
    readonly camera: Camera;
    drawMode: DrawMode;
    // private frameBoundCollector: boolean;
    // private pendingImmediateDraws: Map<BufferBuilder, RenderBufferKey> | null;
    readonly poseStack: PoseStack;
    readonly renderTarget: RenderTarget;
    /**
     * Temporarily switches the environment to batch mode.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L226 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:226}
     */
    batch(block: Function1<WorldRenderEnvironment, void>): void;
    // private drawImmediate(key: RenderBufferKey, meshData: MeshData): void;
    /**
     * Low-level completion for a {@link VertexConsumer} obtained from {@link start}.
     *
     * Prefer {@link net.ccbluex.liquidbounce.render.drawCustomMesh} for regular use.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L261 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:261}
     */
    finish(consumer: VertexConsumer, submit: boolean): void;
    flushBatchIfLocalEnvironment(): void;
    /**
     * Temporarily switches the environment to immediate mode.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L231 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:231}
     */
    immediate(block: Function1<WorldRenderEnvironment, void>): void;
    /**
     * Converts a world-space position to the camera-relative coordinate system.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L211 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:211}
     */
    relativeToCamera(pos: Vec3f): Vec3;
    relativeToCamera(pos: Position): Vec3;
    relativeToCamera(pos: Vec3i): Vec3;
    /**
     * Low-level draw entrypoint.
     *
     * Prefer {@link net.ccbluex.liquidbounce.render.drawCustomMesh} for regular use.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L236 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:236}
     */
    start(pipeline: RenderPipeline, textures: { [key: string]: AbstractTexture }, uniforms: { [key: string]: GpuBufferSlice }): VertexConsumer;
    withMode(mode: DrawMode, block: Function1<WorldRenderEnvironment, void>): void;
}