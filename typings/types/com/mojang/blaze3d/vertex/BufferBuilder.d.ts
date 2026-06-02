import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { MeshData } from '../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { VertexFormatElement } from '../../../../com/mojang/blaze3d/vertex/VertexFormatElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VertexBufferWriter } from '../../../../net/caffeinemc/mods/sodium/api/vertex/buffer/VertexBufferWriter.d.ts'
import type { BufferBuilderExtension } from '../../../../net/caffeinemc/mods/sodium/client/render/vertex/buffer/BufferBuilderExtension.d.ts'
import type { BlockSensitiveBufferBuilder } from '../../../../net/irisshaders/iris/vertices/BlockSensitiveBufferBuilder.d.ts'
import type { BufferBuilderPolygonView } from '../../../../net/irisshaders/iris/vertices/BufferBuilderPolygonView.d.ts'
import type { BakedQuad } from '../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Matrix3x2fc } from '../../../../org/joml/Matrix3x2fc.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
export class BufferBuilder extends Object implements VertexConsumer, VertexBufferWriter, BufferBuilderExtension, BlockSensitiveBufferBuilder {
    static copyInto(paramarg0: VertexBufferWriter, paramarg1: MemoryStack, paramarg2: number, paramarg3: number, paramarg4: VertexFormat): void;
    static of(paramarg0: VertexConsumer): VertexBufferWriter;
    static tryOf(paramarg0: VertexConsumer): VertexBufferWriter;
    constructor(buffer: ByteBufferBuilder, mode: VertexFormat$Mode, format: VertexFormat)
    buffer: ByteBufferBuilder;
    // private building: boolean;
    // private currentBlock: number;
    // private currentLocalPosX: number;
    // private currentLocalPosY: number;
    // private currentLocalPosZ: number;
    // private currentRenderType: number;
    // private elementsToFill: number;
    // private extending: boolean;
    // private fastFormat: boolean;
    // private format: VertexFormat;
    // private fullFormat: boolean;
    // private initialElementsToFill: number;
    // private injectNormalAndUV1: boolean;
    // private iris$vertexCount: number;
    // private mode: VertexFormat$Mode;
    // private normal: Vector3f;
    // private offsetsByElement: number[];
    // private polygon: BufferBuilderPolygonView;
    // private skipEndVertexOnce: boolean;
    // private vertexOffsets: number[];
    // private vertexPointer: number;
    // private vertexSize: number;
    // private vertices: number;
    addVertex(x: number, y: number, z: number): VertexConsumer;
    addVertex(x: number, y: number, z: number, color: number, u: number, v: number, overlayCoords: number, lightCoords: number, nx: number, ny: number, nz: number): void;
    addVertex(pose: PoseStack$Pose, x: number, y: number, z: number): VertexConsumer;
    addVertex(pose: PoseStack$Pose, position: Vector3fc): VertexConsumer;
    addVertex(x: number, y: number, z: number, color: number, u: number, v: number, overlayCoords: number, lightCoords: number, nx: number, ny: number, nz: number): void;
    addVertex(arg0: Matrix4fc, arg1: number, arg2: number, arg3: number): VertexConsumer;
    addVertex(position: Vector3fc): VertexConsumer;
    addVertexWith2DPose(pose: Matrix3x2fc, x: number, y: number): VertexConsumer;
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    // private beginElement(element: VertexFormatElement): number;
    // private beginVertex(): number;
    build(): MeshData;
    buildOrThrow(): MeshData;
    canUseIntrinsics(): boolean;
    // private copySlow(arg0: number, arg1: number, arg2: number, arg3: VertexFormat): void;
    endBlock(): void;
    // private endLastVertex(): void;
    // private ensureBuilding(): void;
    // private fillExtendedData(arg0: number): void;
    push(arg0: MemoryStack, arg1: number, arg2: number, arg3: VertexFormat): void;
    putBakedQuad(arg0: PoseStack$Pose, arg1: BakedQuad, arg2: QuadInstance): void;
    putBakedQuad(pose: PoseStack$Pose, quad: BakedQuad, instance: QuadInstance): void;
    putBlockBakedQuad(x: number, y: number, z: number, quad: BakedQuad, instance: QuadInstance): void;
    setColor(color: number): VertexConsumer;
    setColor(r: number, g: number, b: number, a: number): VertexConsumer;
    setColor(r: number, g: number, b: number, a: number): VertexConsumer;
    setLight(packedLightCoords: number): VertexConsumer;
    setLight(packedLightCoords: number): VertexConsumer;
    setLineWidth(width: number): VertexConsumer;
    setNormal(x: number, y: number, z: number): VertexConsumer;
    setNormal(arg0: PoseStack$Pose, arg1: number, arg2: number, arg3: number): VertexConsumer;
    setNormal(pose: PoseStack$Pose, normal: Vector3fc): VertexConsumer;
    setOverlay(packedOverlayCoords: number): VertexConsumer;
    setOverlay(packedOverlayCoords: number): VertexConsumer;
    setUv(u: number, v: number): VertexConsumer;
    setUv1(u: number, v: number): VertexConsumer;
    setUv2(u: number, v: number): VertexConsumer;
    sodium$duplicateVertex(): void;
    // private storeMesh(): MeshData;
    // private uvShort(u: number, v: number, element: VertexFormatElement): VertexConsumer;
}