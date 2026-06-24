import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IrisExtendedBufferBuilder extends Object{
    iris$currentBlock(): number;
    iris$currentLocalPosX(): number;
    iris$currentLocalPosY(): number;
    iris$currentLocalPosZ(): number;
    iris$currentRenderType(): number;
    iris$extending(): boolean;
    iris$format(): VertexFormat;
    iris$incrementVertexCount(): void;
    iris$injectNormalAndUV1(): boolean;
    iris$isTerrain(): boolean;
    iris$mode(): PrimitiveTopology;
    iris$resetVertexCount(): void;
    iris$vertexCount(): number;
}