import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
import type { VkDeviceOrHostAddressKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressKHR.d.ts'
export class VkMicromapBuildInfoEXT extends Struct<VkMicromapBuildInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static DSTMICROMAP: number;
    static FLAGS: number;
    static MODE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPUSAGECOUNTS: number;
    static PUSAGECOUNTS: number;
    static SCRATCHDATA: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRIANGLEARRAY: number;
    static TRIANGLEARRAYSTRIDE: number;
    static TYPE: number;
    static USAGECOUNTSCOUNT: number;
    static calloc(): VkMicromapBuildInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMicromapBuildInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMicromapBuildInfoEXT;
    static create(paramarg0: number): VkMicromapBuildInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMicromapBuildInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMicromapBuildInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMicromapBuildInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ndata(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static ndstMicromap(paramarg0: number): number;
    static ndstMicromap(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npUsageCounts(paramarg0: number): (Object | null)[];
    static npUsageCounts(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nppUsageCounts(paramarg0: number): PointerBuffer;
    static nppUsageCounts(paramarg0: number, paramarg1: PointerBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscratchData(paramarg0: number): VkDeviceOrHostAddressKHR;
    static nscratchData(paramarg0: number, paramarg1: VkDeviceOrHostAddressKHR): void;
    static ntriangleArray(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ntriangleArray(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static ntriangleArrayStride(paramarg0: number): number;
    static ntriangleArrayStride(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nusageCountsCount(paramarg0: number): number;
    static nusageCountsCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMicromapBuildInfoEXT;
    data(): VkDeviceOrHostAddressConstKHR;
    data(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkMicromapBuildInfoEXT;
    data(arg0: VkDeviceOrHostAddressConstKHR): VkMicromapBuildInfoEXT;
    dstMicromap(): number;
    dstMicromap(arg0: number): VkMicromapBuildInfoEXT;
    flags(): number;
    flags(arg0: number): VkMicromapBuildInfoEXT;
    mode(): number;
    mode(arg0: number): VkMicromapBuildInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkMicromapBuildInfoEXT;
    pUsageCounts(): (Object | null)[];
    pUsageCounts(arg0: (Object | null)[]): VkMicromapBuildInfoEXT;
    ppUsageCounts(): PointerBuffer;
    ppUsageCounts(arg0: PointerBuffer): VkMicromapBuildInfoEXT;
    sType(): number;
    sType(arg0: number): VkMicromapBuildInfoEXT;
    sType$Default(): VkMicromapBuildInfoEXT;
    scratchData(): VkDeviceOrHostAddressKHR;
    scratchData(arg0: (param0: VkDeviceOrHostAddressKHR) => void): VkMicromapBuildInfoEXT;
    scratchData(arg0: VkDeviceOrHostAddressKHR): VkMicromapBuildInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: (Object | null)[], arg8: PointerBuffer, arg9: VkDeviceOrHostAddressConstKHR, arg10: VkDeviceOrHostAddressKHR, arg11: VkDeviceOrHostAddressConstKHR, arg12: number): VkMicromapBuildInfoEXT;
    set(arg0: VkMicromapBuildInfoEXT): VkMicromapBuildInfoEXT;
    sizeof(): number;
    triangleArray(): VkDeviceOrHostAddressConstKHR;
    triangleArray(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkMicromapBuildInfoEXT;
    triangleArray(arg0: VkDeviceOrHostAddressConstKHR): VkMicromapBuildInfoEXT;
    triangleArrayStride(): number;
    triangleArrayStride(arg0: number): VkMicromapBuildInfoEXT;
    type(): number;
    type(arg0: number): VkMicromapBuildInfoEXT;
    usageCountsCount(): number;
    usageCountsCount(arg0: number): VkMicromapBuildInfoEXT;
}