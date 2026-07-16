import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkGeometryAABBNV extends Struct<VkGeometryAABBNV> implements NativeResource {
    static AABBDATA: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NUMAABBS: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static STYPE: number;
    static calloc(): VkGeometryAABBNV;
    static calloc(paramarg0: MemoryStack): VkGeometryAABBNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeometryAABBNV;
    static create(paramarg0: number): VkGeometryAABBNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeometryAABBNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeometryAABBNV;
    static malloc(paramarg0: MemoryStack): VkGeometryAABBNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naabbData(paramarg0: number): number;
    static naabbData(paramarg0: number, paramarg1: number): void;
    static nnumAABBs(paramarg0: number): number;
    static nnumAABBs(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aabbData(): number;
    aabbData(arg0: number): VkGeometryAABBNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeometryAABBNV;
    numAABBs(): number;
    numAABBs(arg0: number): VkGeometryAABBNV;
    offset(): number;
    offset(arg0: number): VkGeometryAABBNV;
    pNext(): number;
    pNext(arg0: number): VkGeometryAABBNV;
    sType(): number;
    sType(arg0: number): VkGeometryAABBNV;
    sType$Default(): VkGeometryAABBNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkGeometryAABBNV;
    set(arg0: VkGeometryAABBNV): VkGeometryAABBNV;
    sizeof(): number;
    stride(): number;
    stride(arg0: number): VkGeometryAABBNV;
}