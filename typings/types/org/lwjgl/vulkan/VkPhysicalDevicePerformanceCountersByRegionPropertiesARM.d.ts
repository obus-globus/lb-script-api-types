import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkPhysicalDevicePerformanceCountersByRegionPropertiesARM extends Struct<VkPhysicalDevicePerformanceCountersByRegionPropertiesARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IDENTITYTRANSFORMORDER: number;
    static MAXPERREGIONPERFORMANCECOUNTERS: number;
    static PERFORMANCECOUNTERREGIONSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REGIONALIGNMENT: number;
    static ROWSTRIDEALIGNMENT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static create(paramarg0: number): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nidentityTransformOrder(paramarg0: number): number;
    static nmaxPerRegionPerformanceCounters(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nperformanceCounterRegionSize(paramarg0: number): VkExtent2D;
    static nregionAlignment(paramarg0: number): number;
    static nrowStrideAlignment(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    identityTransformOrder(): boolean;
    maxPerRegionPerformanceCounters(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    performanceCounterRegionSize(): VkExtent2D;
    regionAlignment(): number;
    rowStrideAlignment(): number;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    sType$Default(): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    set(arg0: number, arg1: number): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    set(arg0: VkPhysicalDevicePerformanceCountersByRegionPropertiesARM): VkPhysicalDevicePerformanceCountersByRegionPropertiesARM;
    sizeof(): number;
}