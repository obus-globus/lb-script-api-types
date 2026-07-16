import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkAccelerationStructureTrianglesDisplacementMicromapNV extends Struct<VkAccelerationStructureTrianglesDisplacementMicromapNV> implements NativeResource {
    static ALIGNOF: number;
    static BASETRIANGLE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLACEDMICROMAPPRIMITIVEFLAGS: number;
    static DISPLACEDMICROMAPPRIMITIVEFLAGSSTRIDE: number;
    static DISPLACEMENTBIASANDSCALEBUFFER: number;
    static DISPLACEMENTBIASANDSCALEFORMAT: number;
    static DISPLACEMENTBIASANDSCALESTRIDE: number;
    static DISPLACEMENTVECTORBUFFER: number;
    static DISPLACEMENTVECTORFORMAT: number;
    static DISPLACEMENTVECTORSTRIDE: number;
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
    static calloc(): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static create(paramarg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbaseTriangle(paramarg0: number): number;
    static nbaseTriangle(paramarg0: number, paramarg1: number): void;
    static ndisplacedMicromapPrimitiveFlags(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ndisplacedMicromapPrimitiveFlags(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static ndisplacedMicromapPrimitiveFlagsStride(paramarg0: number): number;
    static ndisplacedMicromapPrimitiveFlagsStride(paramarg0: number, paramarg1: number): void;
    static ndisplacementBiasAndScaleBuffer(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ndisplacementBiasAndScaleBuffer(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static ndisplacementBiasAndScaleFormat(paramarg0: number): number;
    static ndisplacementBiasAndScaleFormat(paramarg0: number, paramarg1: number): void;
    static ndisplacementBiasAndScaleStride(paramarg0: number): number;
    static ndisplacementBiasAndScaleStride(paramarg0: number, paramarg1: number): void;
    static ndisplacementVectorBuffer(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ndisplacementVectorBuffer(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static ndisplacementVectorFormat(paramarg0: number): number;
    static ndisplacementVectorFormat(paramarg0: number, paramarg1: number): void;
    static ndisplacementVectorStride(paramarg0: number): number;
    static ndisplacementVectorStride(paramarg0: number, paramarg1: number): void;
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
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    baseTriangle(): number;
    baseTriangle(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacedMicromapPrimitiveFlags(): VkDeviceOrHostAddressConstKHR;
    displacedMicromapPrimitiveFlags(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacedMicromapPrimitiveFlags(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacedMicromapPrimitiveFlagsStride(): number;
    displacedMicromapPrimitiveFlagsStride(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementBiasAndScaleBuffer(): VkDeviceOrHostAddressConstKHR;
    displacementBiasAndScaleBuffer(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementBiasAndScaleBuffer(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementBiasAndScaleFormat(): number;
    displacementBiasAndScaleFormat(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementBiasAndScaleStride(): number;
    displacementBiasAndScaleStride(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementVectorBuffer(): VkDeviceOrHostAddressConstKHR;
    displacementVectorBuffer(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementVectorBuffer(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementVectorFormat(): number;
    displacementVectorFormat(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    displacementVectorStride(): number;
    displacementVectorStride(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    indexBuffer(): VkDeviceOrHostAddressConstKHR;
    indexBuffer(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    indexBuffer(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    indexStride(): number;
    indexStride(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    indexType(): number;
    indexType(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    micromap(): number;
    micromap(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    pUsageCounts(): (Object | null)[];
    pUsageCounts(arg0: (Object | null)[]): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    ppUsageCounts(): PointerBuffer;
    ppUsageCounts(arg0: PointerBuffer): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    sType$Default(): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkDeviceOrHostAddressConstKHR, arg5: number, arg6: VkDeviceOrHostAddressConstKHR, arg7: number, arg8: VkDeviceOrHostAddressConstKHR, arg9: number, arg10: number, arg11: VkDeviceOrHostAddressConstKHR, arg12: number, arg13: number, arg14: number, arg15: (Object | null)[], arg16: PointerBuffer, arg17: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    set(arg0: VkAccelerationStructureTrianglesDisplacementMicromapNV): VkAccelerationStructureTrianglesDisplacementMicromapNV;
    sizeof(): number;
    usageCountsCount(): number;
    usageCountsCount(arg0: number): VkAccelerationStructureTrianglesDisplacementMicromapNV;
}