import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR.d.ts'
export class VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT extends VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTMODEFIFOLATESTREADY: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static create(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static malloc(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentModeFifoLatestReady(paramarg0: number): number;
    static npresentModeFifoLatestReady(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    presentModeFifoLatestReady(): boolean;
    presentModeFifoLatestReady(arg0: boolean): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    sType$Default(): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    set(arg0: VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesEXT;
    set(arg0: VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR): VkPhysicalDevicePresentModeFifoLatestReadyFeaturesKHR;
}