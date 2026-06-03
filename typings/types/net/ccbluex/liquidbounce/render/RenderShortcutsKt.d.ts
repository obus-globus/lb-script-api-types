import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DrawMode } from '../../../../net/ccbluex/liquidbounce/render/DrawMode.d.ts'
import type { StaticMeshStorage } from '../../../../net/ccbluex/liquidbounce/render/StaticMeshStorage.d.ts'
import type { WorldRenderEnvironment } from '../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3f } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { DistanceFadeUniformValueGroup } from '../../../../net/ccbluex/liquidbounce/render/utils/DistanceFadeUniformValueGroup.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class RenderShortcutsKt extends Object {
    static EMPTY_BOX: AABB;
    static FULL_BOX: AABB;
    /**
     * This variable should be used when rendering long lines, meaning longer than ~2 in 3d.
     * {@link WorldRenderEnvironment.longLines} is available for this.
     *
     * Context:
     * For some reason, newer drivers for AMD Vega iGPUs (about end 2023 until now) fail to correctly smooth lines.
     *
     * This has to be removed or limited to old driver versions when AMD actually fixes the bug in their drivers.
     * But as of now, 01.02.2025, they haven't.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:48}
     */
    static HAS_AMD_VEGA_APU: boolean;
    /**
     * Function to draw a colored {@link box}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L318 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:318}
     */
    static drawBox(worldRenderEnvironment: WorldRenderEnvironment, box: AABB, faceColor: Color4b, outlineColor: Color4b, faceVertices: number, outlineVertices: number): void;
    /**
     * Function to draw a colored {@link box} with specified {@link side}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L379 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:379}
     */
    static drawBoxSide(worldRenderEnvironment: WorldRenderEnvironment, box: AABB, side: Direction, faceColor: Color4b, outlineColor: Color4b): void;
    /**
     * Function to draw a colored {@link box} with specified {@link sides}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L395 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:395}
     */
    static drawBoxSides(worldRenderEnvironment: WorldRenderEnvironment, box: AABB, sides: (Object | null)[], faceColor: Color4b, outlineColor: Color4b): void;
    static drawCircle(worldRenderEnvironment: WorldRenderEnvironment, radius: number, color: Color4b): void;
    /**
     * Function to draw the outline of a circle of the size {@link radius}
     *
     * @param radius The radius
     * @param color The color
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L564 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:564}
     */
    static drawCircleOutline(paramarg0: WorldRenderEnvironment, paramarg1: number, paramarg2: Color4b): void;
    static drawCircleOutline(worldRenderEnvironment: WorldRenderEnvironment, radius: number, color: Color4b, noDepthTest: boolean): void;
    /**
     * Preferred mesh draw helper for world rendering code.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L169 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:169}
     */
    static drawCustomMesh(worldRenderEnvironment: WorldRenderEnvironment, pipeline: RenderPipeline, textures: { [key: string]: Object | null }, uniforms: { [key: string]: GpuBufferSlice }, drawer: (param0: Object | null, param1: Object | null) => void): void;
    /**
     * Variant of {@link drawCustomMesh} that binds {@link sampler0} as `Sampler0`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L154 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:154}
     */
    static drawCustomMeshTextured(worldRenderEnvironment: WorldRenderEnvironment, sampler0: AbstractTexture, pipeline: RenderPipeline, uniforms: { [key: string]: GpuBufferSlice }, drawer: (param0: Object | null, param1: Object | null) => void): void;
    static drawGenericBlockESP(renderTarget: RenderTarget, renderState: StaticMeshStorage, pipeline: RenderPipeline, distanceFade: DistanceFadeUniformValueGroup, dynamicTransforms: () => GpuBufferSlice): boolean;
    /**
     * Function to draw a circle of the size {@link outerRadius} with a cutout of size {@link innerRadius}
     *
     * @param outerRadius The radius of the circle
     * @param innerRadius The radius inside the circle (the cutout)
     * @param outerColor The color of the outer edges
     * @param innerColor The color of the inner edges
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L448 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:448}
     */
    static drawGradientCircle(worldRenderEnvironment: WorldRenderEnvironment, outerRadius: number, innerRadius: number, outerColor: Color4b, innerColor: Color4b, innerOffset: Vector3fc, noDepthTest: boolean): void;
    static drawGradientSides(worldRenderEnvironment: WorldRenderEnvironment, height: number, baseColor: Color4b, topColor: Color4b, box: AABB): void;
    /**
     * Draws a line with endpoint {@link p1} and {@link p2} and color {@link argb}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L191 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:191}
     */
    static drawLine(worldRenderEnvironment: WorldRenderEnvironment, p1: Vec3f, p2: Vec3f, argb: number): void;
    /**
     * Function to draw a line strip using the specified {@link positions} vectors.
     *
     * @param positions The vectors representing the line strip.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L241 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:241}
     */
    static drawLineStrip(worldRenderEnvironment: WorldRenderEnvironment, argb: number, positions: (Object | null)[]): void;
    /**
     * Function to draw a 'line strip' using the specified {@link positions} vectors,
     * actual pipeline is {@link ClientRenderPipelines.Lines}.
     *
     * @param positions The vectors representing the line strip, the size should be even.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L256 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:256}
     */
    static drawLineStripAsLines(worldRenderEnvironment: WorldRenderEnvironment, argb: number, positions: E[]): void;
    /**
     * Function to draw lines using the specified {@link positions} vectors.
     *
     * @param positions The vectors representing the lines.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L225 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:225}
     */
    static drawLines(worldRenderEnvironment: WorldRenderEnvironment, argb: number, positions: (Object | null)[]): void;
    /**
     * Draws lines with {@link width}.
     * Modern GL doesn't support `glLineWidth` well, so draw with shader simulation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L200 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:200}
     */
    static drawLinesWithWidth(worldRenderEnvironment: WorldRenderEnvironment, argb: number, width: number, positions: (Object | null)[]): void;
    /**
     * Function to draw a flat plane on the XZ axis with an optional outline.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L411 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:411}
     */
    static drawPlane(worldRenderEnvironment: WorldRenderEnvironment, sizeX: number, sizeZ: number, fillColor: Color4b, outlineColor: Color4b): void;
    static drawShape(worldRenderEnvironment: WorldRenderEnvironment, shape: VoxelShape, faceColor: Color4b, outlineColor: Color4b): void;
    static drawShapeSide(worldRenderEnvironment: WorldRenderEnvironment, shape: VoxelShape, side: Direction, hitPos: Vec3, faceColor: Color4b, outlineColor: Color4b): void;
    static drawSquareTexture(worldRenderEnvironment: WorldRenderEnvironment, sampler0: AbstractTexture, size: number, argb: number): void;
    static drawTexQuad(worldRenderEnvironment: WorldRenderEnvironment, sampler0: AbstractTexture, argb: number): void;
    static drawTriangle(worldRenderEnvironment: WorldRenderEnvironment, p1: Vec3f, p2: Vec3f, p3: Vec3f, argb: number): void;
    /**
     * Helper function to render an environment with the specified {@link poseStack} and {@link draw} block.
     *
     * @param poseStack The matrix stack for rendering.
     * @param mode The default draw mode for {@link draw}.
     * @param draw The block of code to be executed in the rendering environment.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:77}
     */
    static renderEnvironmentForWorld(poseStack: PoseStack, renderTarget: RenderTarget, mode: DrawMode, camera: Camera, draw: (param0: Object | null) => void): void;
    /**
     * Shorthand for `withPosition(relativeToCamera(pos))`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:109}
     */
    static withPositionRelativeToCamera(worldRenderEnvironment: WorldRenderEnvironment, draw: (param0: Object | null) => void): void;
    static withPositionRelativeToCamera(paramarg0: WorldRenderEnvironment, paramarg1: Vec3i, paramarg2: (param0: Object | null) => void): void;
    static withPositionRelativeToCamera(paramarg0: WorldRenderEnvironment, paramarg1: Vec3, paramarg2: (param0: Object | null) => void): void;
}