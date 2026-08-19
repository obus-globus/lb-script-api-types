import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldRenderEvent } from '../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { AnchorPoint } from '../../../../net/ccbluex/liquidbounce/render/AnchorPoint.d.ts'
import type { CachedMeshStorage } from '../../../../net/ccbluex/liquidbounce/render/CachedMeshStorage.d.ts'
import type { WorldRenderEnvironment } from '../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3f } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { DistanceFadeUniformValueGroup } from '../../../../net/ccbluex/liquidbounce/render/utils/DistanceFadeUniformValueGroup.d.ts'
import type { VertexList } from '../../../../net/ccbluex/liquidbounce/render/utils/VertexList.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:59}
     */
    static HAS_AMD_VEGA_APU: boolean;
    /**
     * Function to draw a colored {@link box}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L407 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:407}
     */
    static drawBox(self: WorldRenderEnvironment, box: AABB, faceColor: Color4b | null, outlineColor: Color4b | null, faceVertices: number, outlineVertices: number, noDepthTest: boolean): void;
    /**
     * Function to draw a colored {@link box} with specified {@link side}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L469 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:469}
     */
    static drawBoxSide(self: WorldRenderEnvironment, box: AABB, side: Direction, faceColor: Color4b | null, outlineColor: Color4b | null): void;
    /**
     * Function to draw a colored {@link box} with specified {@link sides}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L485 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:485}
     */
    static drawBoxSides(self: WorldRenderEnvironment, box: AABB, sides: Direction[], faceColor: Color4b | null, outlineColor: Color4b | null): void;
    static drawCircle(self: WorldRenderEnvironment, radius: number, color: Color4b): void;
    /**
     * Function to draw the outline of a circle of the size {@link radius}
     *
     * @param radius The radius
     * @param color The color
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L658 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:658}
     */
    static drawCircleOutline(paramarg0: WorldRenderEnvironment, paramarg1: number, paramarg2: Color4b): void;
    static drawCircleOutline(self: WorldRenderEnvironment, radius: number, color: Color4b, noDepthTest: boolean): void;
    /**
     * Preferred mesh draw helper for world rendering code.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:152}
     */
    static drawCustomMesh(self: WorldRenderEnvironment, pipeline: RenderPipeline, textures: JavaMap<string, AbstractTexture>, uniforms: JavaMap<string, GpuBufferSlice>, drawer: (param0: VertexConsumer, param1: PoseStack$Pose) => void): void;
    /**
     * Variant of {@link drawCustomMesh} that binds {@link sampler0} as `Sampler0`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:137}
     */
    static drawCustomMeshTextured(self: WorldRenderEnvironment, sampler0: AbstractTexture, pipeline: RenderPipeline, uniforms: JavaMap<string, GpuBufferSlice>, drawer: (param0: VertexConsumer, param1: PoseStack$Pose) => void): void;
    static drawGenericBlockESP(self: RenderTarget, renderState: CachedMeshStorage, pipeline: RenderPipeline, distanceFade: DistanceFadeUniformValueGroup, dynamicTransforms: () => GpuBufferSlice): boolean;
    /**
     * Function to draw a circle of the size {@link outerRadius} with a cutout of size {@link innerRadius}
     *
     * @param outerRadius The radius of the circle
     * @param innerRadius The radius inside the circle (the cutout)
     * @param outerColor The color of the outer edges
     * @param innerColor The color of the inner edges
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L544 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:544}
     */
    static drawGradientCircle(self: WorldRenderEnvironment, outerRadius: number, innerRadius: number, outerColor: Color4b, innerColor: Color4b, innerOffset: Vector3fc, noDepthTest: boolean): void;
    static drawGradientSides(self: WorldRenderEnvironment, height: number, baseColor: Color4b, topColor: Color4b, box: AABB): void;
    /**
     * Draws a line with endpoint {@link p1} and {@link p2} and color {@link argb}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L170 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:170}
     */
    static drawLine(self: WorldRenderEnvironment, p1: Vec3f, p2: Vec3f, argb: number): void;
    static drawLine(self: WorldRenderEnvironment, p1: Vec3, p2: Vec3, argb: number): void;
    /**
     * Function to draw a line strip using the specified {@link positions} vectors.
     *
     * @param positions The vectors representing the line strip.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L267 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:267}
     */
    static drawLineStrip(self: WorldRenderEnvironment, argb: number, ...positions: Vec3f[]): void;
    static drawLineStrip(self: WorldRenderEnvironment, argb: number, positions: VertexList): void;
    /**
     * Function to draw lines using the specified {@link positions} vectors.
     *
     * @param positions The vectors representing the lines.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L240 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:240}
     */
    static drawLines(self: WorldRenderEnvironment, argb: number, ...positions: Vec3f[]): void;
    static drawLines(self: WorldRenderEnvironment, argb: number, positions: VertexList): void;
    /**
     * Draws lines with {@link width}.
     * Modern GL doesn't support `glLineWidth` well, so draw with shader simulation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:189}
     */
    static drawLinesWithWidth(self: WorldRenderEnvironment, argb: number, width: number, ...positions: Vec3f[]): void;
    static drawLinesWithWidth(self: WorldRenderEnvironment, argb: number, width: number, positions: VertexList): void;
    /**
     * Function to draw a flat plane on the XZ axis with an optional outline.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L501 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:501}
     */
    static drawPlane(self: WorldRenderEnvironment, sizeX: number, sizeZ: number, fillColor: Color4b | null, outlineColor: Color4b | null, noDepthTest: boolean): void;
    static drawShape(self: WorldRenderEnvironment, shape: VoxelShape, faceColor: Color4b | null, outlineColor: Color4b | null): void;
    static drawShapeSide(self: WorldRenderEnvironment, shape: VoxelShape, side: Direction, hitPos: Vec3, faceColor: Color4b | null, outlineColor: Color4b | null): void;
    static drawSquareTexture(self: WorldRenderEnvironment, sampler0: AbstractTexture, size: number, argb: number, anchor: AnchorPoint): void;
    static drawSquareTextureGradient(self: WorldRenderEnvironment, sampler0: AbstractTexture, outerRadius: number, innerRadius: number, outerColor: Color4b, innerColor: Color4b, anchor: AnchorPoint, subdivisions: number, startOffset: number, noDepthTest: boolean): void;
    static drawTexQuad(self: WorldRenderEnvironment, sampler0: AbstractTexture, argb: number): void;
    static drawTriangle(paramarg0: WorldRenderEnvironment, paramarg1: Vec3f, paramarg2: Vec3f, paramarg3: Vec3f, paramarg4: number): void;
    static drawTriangle(self: WorldRenderEnvironment, p1: Vec3f, p2: Vec3f, p3: Vec3f, argb: number, noDepthTest: boolean): void;
    static renderEnvironment(self: WorldRenderEvent, draw: (param0: WorldRenderEnvironment) => void): void;
    /**
     * Positions the render origin at the camera-relative coordinates of {@link pos} before drawing.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderShortcuts.kt:102}
     */
    static withPositionRelativeToCamera(self: WorldRenderEnvironment, x: number, y: number, z: number, draw: (param0: WorldRenderEnvironment) => void): void;
    static withPositionRelativeToCamera(self: WorldRenderEnvironment, draw: (param0: WorldRenderEnvironment) => void): void;
    static withPositionRelativeToCamera(self: WorldRenderEnvironment, pos: Vec3i, draw: (param0: WorldRenderEnvironment) => void): void;
    static withPositionRelativeToCamera(self: WorldRenderEnvironment, pos: Vec3, draw: (param0: WorldRenderEnvironment) => void): void;
}