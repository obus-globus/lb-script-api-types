import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureTrianglesOpacityMicromapEXT } from '../../../org/lwjgl/vulkan/VkAccelerationStructureTrianglesOpacityMicromapEXT.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX extends Struct<VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPRESSEDDATA: number;
    static DATASIZE: number;
    static FORMAT: number;
    static MAXGEOMETRYINDEX: number;
    static MAXPRIMITIVEINDEX: number;
    static NUMTRIANGLES: number;
    static NUMVERTICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static create(paramarg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompressedData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ncompressedData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static ndataSize(paramarg0: number): number;
    static ndataSize(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nmaxGeometryIndex(paramarg0: number): number;
    static nmaxGeometryIndex(paramarg0: number, paramarg1: number): void;
    static nmaxPrimitiveIndex(paramarg0: number): number;
    static nmaxPrimitiveIndex(paramarg0: number, paramarg1: number): void;
    static nnumTriangles(paramarg0: number): number;
    static nnumTriangles(paramarg0: number, paramarg1: number): void;
    static nnumVertices(paramarg0: number): number;
    static nnumVertices(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compressedData(): VkDeviceOrHostAddressConstKHR;
    compressedData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    compressedData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    dataSize(): number;
    dataSize(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    format(): number;
    format(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    maxGeometryIndex(): number;
    maxGeometryIndex(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    maxPrimitiveIndex(): number;
    maxPrimitiveIndex(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    numTriangles(): number;
    numTriangles(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    numVertices(): number;
    numVertices(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    pNext(arg0: VkAccelerationStructureTrianglesOpacityMicromapEXT): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    sType$Default(): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    set(arg0: number, arg1: number, arg2: VkDeviceOrHostAddressConstKHR, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    set(arg0: VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX): VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX;
    sizeof(): number;
}