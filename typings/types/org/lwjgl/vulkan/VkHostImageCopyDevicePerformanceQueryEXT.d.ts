import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkHostImageCopyDevicePerformanceQuery } from '../../../org/lwjgl/vulkan/VkHostImageCopyDevicePerformanceQuery.d.ts'
export class VkHostImageCopyDevicePerformanceQueryEXT extends VkHostImageCopyDevicePerformanceQuery {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IDENTICALMEMORYLAYOUT: number;
    static OPTIMALDEVICEACCESS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkHostImageCopyDevicePerformanceQuery;
    static calloc(paramarg0: MemoryStack): VkHostImageCopyDevicePerformanceQuery;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkHostImageCopyDevicePerformanceQueryEXT;
    static calloc(paramarg0: MemoryStack): VkHostImageCopyDevicePerformanceQueryEXT;
    static create(): VkHostImageCopyDevicePerformanceQuery;
    static create(paramarg0: number): VkHostImageCopyDevicePerformanceQuery;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkHostImageCopyDevicePerformanceQueryEXT;
    static create(paramarg0: number): VkHostImageCopyDevicePerformanceQueryEXT;
    static createSafe(paramarg0: number): VkHostImageCopyDevicePerformanceQuery;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkHostImageCopyDevicePerformanceQueryEXT;
    static malloc(): VkHostImageCopyDevicePerformanceQuery;
    static malloc(paramarg0: MemoryStack): VkHostImageCopyDevicePerformanceQuery;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkHostImageCopyDevicePerformanceQueryEXT;
    static malloc(paramarg0: MemoryStack): VkHostImageCopyDevicePerformanceQueryEXT;
    static nidenticalMemoryLayout(paramarg0: number): number;
    static noptimalDeviceAccess(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkHostImageCopyDevicePerformanceQueryEXT;
    pNext(): number;
    pNext(arg0: number): VkHostImageCopyDevicePerformanceQueryEXT;
    sType(): number;
    sType(arg0: number): VkHostImageCopyDevicePerformanceQueryEXT;
    sType$Default(): VkHostImageCopyDevicePerformanceQueryEXT;
    set(arg0: number, arg1: number): VkHostImageCopyDevicePerformanceQueryEXT;
    set(arg0: VkHostImageCopyDevicePerformanceQuery): VkHostImageCopyDevicePerformanceQuery;
    set(arg0: VkHostImageCopyDevicePerformanceQueryEXT): VkHostImageCopyDevicePerformanceQueryEXT;
}