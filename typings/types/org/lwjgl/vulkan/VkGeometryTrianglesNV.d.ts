import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkGeometryTrianglesNV extends Struct<VkGeometryTrianglesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEXCOUNT: number;
    static INDEXDATA: number;
    static INDEXOFFSET: number;
    static INDEXTYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRANSFORMDATA: number;
    static TRANSFORMOFFSET: number;
    static VERTEXCOUNT: number;
    static VERTEXDATA: number;
    static VERTEXFORMAT: number;
    static VERTEXOFFSET: number;
    static VERTEXSTRIDE: number;
    static calloc(): VkGeometryTrianglesNV;
    static calloc(paramarg0: MemoryStack): VkGeometryTrianglesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeometryTrianglesNV;
    static create(paramarg0: number): VkGeometryTrianglesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeometryTrianglesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeometryTrianglesNV;
    static malloc(paramarg0: MemoryStack): VkGeometryTrianglesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindexCount(paramarg0: number): number;
    static nindexCount(paramarg0: number, paramarg1: number): void;
    static nindexData(paramarg0: number): number;
    static nindexData(paramarg0: number, paramarg1: number): void;
    static nindexOffset(paramarg0: number): number;
    static nindexOffset(paramarg0: number, paramarg1: number): void;
    static nindexType(paramarg0: number): number;
    static nindexType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntransformData(paramarg0: number): number;
    static ntransformData(paramarg0: number, paramarg1: number): void;
    static ntransformOffset(paramarg0: number): number;
    static ntransformOffset(paramarg0: number, paramarg1: number): void;
    static nvertexCount(paramarg0: number): number;
    static nvertexCount(paramarg0: number, paramarg1: number): void;
    static nvertexData(paramarg0: number): number;
    static nvertexData(paramarg0: number, paramarg1: number): void;
    static nvertexFormat(paramarg0: number): number;
    static nvertexFormat(paramarg0: number, paramarg1: number): void;
    static nvertexOffset(paramarg0: number): number;
    static nvertexOffset(paramarg0: number, paramarg1: number): void;
    static nvertexStride(paramarg0: number): number;
    static nvertexStride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeometryTrianglesNV;
    indexCount(): number;
    indexCount(arg0: number): VkGeometryTrianglesNV;
    indexData(): number;
    indexData(arg0: number): VkGeometryTrianglesNV;
    indexOffset(): number;
    indexOffset(arg0: number): VkGeometryTrianglesNV;
    indexType(): number;
    indexType(arg0: number): VkGeometryTrianglesNV;
    pNext(): number;
    pNext(arg0: number): VkGeometryTrianglesNV;
    sType(): number;
    sType(arg0: number): VkGeometryTrianglesNV;
    sType$Default(): VkGeometryTrianglesNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): VkGeometryTrianglesNV;
    set(arg0: VkGeometryTrianglesNV): VkGeometryTrianglesNV;
    sizeof(): number;
    transformData(): number;
    transformData(arg0: number): VkGeometryTrianglesNV;
    transformOffset(): number;
    transformOffset(arg0: number): VkGeometryTrianglesNV;
    vertexCount(): number;
    vertexCount(arg0: number): VkGeometryTrianglesNV;
    vertexData(): number;
    vertexData(arg0: number): VkGeometryTrianglesNV;
    vertexFormat(): number;
    vertexFormat(arg0: number): VkGeometryTrianglesNV;
    vertexOffset(): number;
    vertexOffset(arg0: number): VkGeometryTrianglesNV;
    vertexStride(): number;
    vertexStride(arg0: number): VkGeometryTrianglesNV;
}