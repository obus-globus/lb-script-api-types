import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { VertexFormat$Builder } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Builder.d.ts'
import type { VertexFormatElement } from '../../../../com/mojang/blaze3d/vertex/VertexFormatElement.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VertexFormatExtensions } from '../../../../net/caffeinemc/mods/sodium/api/vertex/format/VertexFormatExtensions.d.ts'
import type { VertexFormatExtension } from '../../../../net/irisshaders/iris/pipeline/programs/VertexFormatExtension.d.ts'
export class VertexFormat extends Object implements VertexFormatExtensions, VertexFormatExtension {
    static UNKNOWN_ELEMENT: number;
    static builder(): VertexFormat$Builder;
    private constructor(elements: VertexFormatElement[], names: string[], offsets: (Object | null)[], vertexSize: number)
    readonly elements: VertexFormatElement[];
    readonly elementsMask: number;
    // private immediateDrawIndexBuffer: GpuBuffer;
    // private immediateDrawVertexBuffer: GpuBuffer;
    // private names: string[];
    readonly offsetsByElement: number[];
    // private sodium$globalId: number;
    readonly vertexSize: number;
    bindAttributesIris(arg0: boolean, arg1: number): void;
    contains(element: VertexFormatElement): boolean;
    equals(o: Object | null): boolean;
    getElementAttributeNames(): string[];
    getElementName(element: VertexFormatElement): string;
    getElements(): VertexFormatElement[];
    getElementsMask(): number;
    getOffset(element: VertexFormatElement): number;
    getOffsetsByElement(): number[];
    getVertexSize(): number;
    hashCode(): number;
    sodium$getGlobalId(): number;
    toString(): string;
    uploadImmediateIndexBuffer(buffer: ByteBuffer): GpuBuffer;
    uploadImmediateVertexBuffer(buffer: ByteBuffer): GpuBuffer;
}