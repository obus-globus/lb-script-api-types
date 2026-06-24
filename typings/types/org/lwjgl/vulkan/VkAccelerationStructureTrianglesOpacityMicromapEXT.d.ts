import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkAccelerationStructureTrianglesOpacityMicromapEXT extends Struct<VkAccelerationStructureTrianglesOpacityMicromapEXT> implements NativeResource {
    static ALIGNOF: number;
    static BASETRIANGLE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEXBUFFER: number;
    static INDEXSTRIDE: number;
    static INDEXTYPE: number;
    static MICROMAP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPUSAGECOUNTS: number;
    static PUSAGECOUNTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGECOUNTSCOUNT: number;
    static calloc(): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static create(paramarg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbaseTriangle(paramarg0: number): number;
    static nbaseTriangle(paramarg0: number, paramarg1: number): void;
    static nindexBuffer(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nindexBuffer(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nindexStride(paramarg0: number): number;
    static nindexStride(paramarg0: number, paramarg1: number): void;
    static nindexType(paramarg0: number): number;
    static nindexType(paramarg0: number, paramarg1: number): void;
    static nmicromap(paramarg0: number): number;
    static nmicromap(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npUsageCounts(paramarg0: number): (Object | null)[];
    static npUsageCounts(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nppUsageCounts(paramarg0: number): PointerBuffer;
    static nppUsageCounts(paramarg0: number, paramarg1: PointerBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nusageCountsCount(paramarg0: number): number;
    static nusageCountsCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    baseTriangle(): number;
    baseTriangle(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    indexBuffer(): VkDeviceOrHostAddressConstKHR;
    indexBuffer(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    indexBuffer(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    indexStride(): number;
    indexStride(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    indexType(): number;
    indexType(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    micromap(): number;
    micromap(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    pUsageCounts(): (Object | null)[];
    pUsageCounts(arg0: (Object | null)[]): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    ppUsageCounts(): PointerBuffer;
    ppUsageCounts(arg0: PointerBuffer): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    sType$Default(): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceOrHostAddressConstKHR, arg4: number, arg5: number, arg6: number, arg7: (Object | null)[], arg8: PointerBuffer, arg9: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    set(arg0: VkAccelerationStructureTrianglesOpacityMicromapEXT): VkAccelerationStructureTrianglesOpacityMicromapEXT;
    sizeof(): number;
    usageCountsCount(): number;
    usageCountsCount(arg0: number): VkAccelerationStructureTrianglesOpacityMicromapEXT;
}