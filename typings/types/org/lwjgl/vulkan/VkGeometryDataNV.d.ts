import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkGeometryAABBNV } from '../../../org/lwjgl/vulkan/VkGeometryAABBNV.d.ts'
import type { VkGeometryTrianglesNV } from '../../../org/lwjgl/vulkan/VkGeometryTrianglesNV.d.ts'
export class VkGeometryDataNV extends Struct<VkGeometryDataNV> implements NativeResource {
    static AABBS: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TRIANGLES: number;
    static calloc(): VkGeometryDataNV;
    static calloc(paramarg0: MemoryStack): VkGeometryDataNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeometryDataNV;
    static create(paramarg0: number): VkGeometryDataNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeometryDataNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeometryDataNV;
    static malloc(paramarg0: MemoryStack): VkGeometryDataNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naabbs(paramarg0: number): VkGeometryAABBNV;
    static naabbs(paramarg0: number, paramarg1: VkGeometryAABBNV): void;
    static ntriangles(paramarg0: number): VkGeometryTrianglesNV;
    static ntriangles(paramarg0: number, paramarg1: VkGeometryTrianglesNV): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aabbs(): VkGeometryAABBNV;
    aabbs(arg0: (param0: VkGeometryAABBNV) => void): VkGeometryDataNV;
    aabbs(arg0: VkGeometryAABBNV): VkGeometryDataNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeometryDataNV;
    set(arg0: VkGeometryDataNV): VkGeometryDataNV;
    set(arg0: VkGeometryTrianglesNV, arg1: VkGeometryAABBNV): VkGeometryDataNV;
    sizeof(): number;
    triangles(): VkGeometryTrianglesNV;
    triangles(arg0: (param0: VkGeometryTrianglesNV) => void): VkGeometryDataNV;
    triangles(arg0: VkGeometryTrianglesNV): VkGeometryDataNV;
}