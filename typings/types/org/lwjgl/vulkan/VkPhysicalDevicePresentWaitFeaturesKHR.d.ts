import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePresentWaitFeaturesKHR extends Struct<VkPhysicalDevicePresentWaitFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTWAIT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePresentWaitFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePresentWaitFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePresentWaitFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDevicePresentWaitFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePresentWaitFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePresentWaitFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePresentWaitFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentWait(paramarg0: number): number;
    static npresentWait(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePresentWaitFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePresentWaitFeaturesKHR;
    presentWait(): boolean;
    presentWait(arg0: boolean): VkPhysicalDevicePresentWaitFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePresentWaitFeaturesKHR;
    sType$Default(): VkPhysicalDevicePresentWaitFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDevicePresentWaitFeaturesKHR;
    set(arg0: VkPhysicalDevicePresentWaitFeaturesKHR): VkPhysicalDevicePresentWaitFeaturesKHR;
    sizeof(): number;
}