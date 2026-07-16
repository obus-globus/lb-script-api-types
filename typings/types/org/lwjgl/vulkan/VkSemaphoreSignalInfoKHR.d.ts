import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSemaphoreSignalInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreSignalInfo.d.ts'
export class VkSemaphoreSignalInfoKHR extends VkSemaphoreSignalInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VALUE: number;
    static calloc(): VkSemaphoreSignalInfo;
    static calloc(paramarg0: MemoryStack): VkSemaphoreSignalInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSemaphoreSignalInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSemaphoreSignalInfoKHR;
    static create(): VkSemaphoreSignalInfo;
    static create(paramarg0: number): VkSemaphoreSignalInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSemaphoreSignalInfoKHR;
    static create(paramarg0: number): VkSemaphoreSignalInfoKHR;
    static createSafe(paramarg0: number): VkSemaphoreSignalInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreSignalInfoKHR;
    static malloc(): VkSemaphoreSignalInfo;
    static malloc(paramarg0: MemoryStack): VkSemaphoreSignalInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSemaphoreSignalInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSemaphoreSignalInfoKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphore(paramarg0: number): number;
    static nsemaphore(paramarg0: number, paramarg1: number): void;
    static nvalue(paramarg0: number): number;
    static nvalue(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSemaphoreSignalInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSemaphoreSignalInfoKHR;
    sType(): number;
    sType(arg0: number): VkSemaphoreSignalInfoKHR;
    sType$Default(): VkSemaphoreSignalInfoKHR;
    semaphore(): number;
    semaphore(arg0: number): VkSemaphoreSignalInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkSemaphoreSignalInfoKHR;
    set(arg0: VkSemaphoreSignalInfo): VkSemaphoreSignalInfo;
    set(arg0: VkSemaphoreSignalInfoKHR): VkSemaphoreSignalInfoKHR;
    value(): number;
    value(arg0: number): VkSemaphoreSignalInfoKHR;
}