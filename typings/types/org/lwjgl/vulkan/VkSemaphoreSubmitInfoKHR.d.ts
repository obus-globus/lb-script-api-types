import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSemaphoreSubmitInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreSubmitInfo.d.ts'
export class VkSemaphoreSubmitInfoKHR extends VkSemaphoreSubmitInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STAGEMASK: number;
    static STYPE: number;
    static VALUE: number;
    static calloc(): VkSemaphoreSubmitInfo;
    static calloc(paramarg0: MemoryStack): VkSemaphoreSubmitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSemaphoreSubmitInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSemaphoreSubmitInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSemaphoreSubmitInfo;
    static create(paramarg0: number): VkSemaphoreSubmitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSemaphoreSubmitInfoKHR;
    static create(paramarg0: number): VkSemaphoreSubmitInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreSubmitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreSubmitInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSemaphoreSubmitInfo;
    static malloc(paramarg0: MemoryStack): VkSemaphoreSubmitInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSemaphoreSubmitInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSemaphoreSubmitInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceIndex(paramarg0: number): number;
    static ndeviceIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphore(paramarg0: number): number;
    static nsemaphore(paramarg0: number, paramarg1: number): void;
    static nstageMask(paramarg0: number): number;
    static nstageMask(paramarg0: number, paramarg1: number): void;
    static nvalue(paramarg0: number): number;
    static nvalue(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSemaphoreSubmitInfoKHR;
    deviceIndex(): number;
    deviceIndex(arg0: number): VkSemaphoreSubmitInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSemaphoreSubmitInfoKHR;
    sType(): number;
    sType(arg0: number): VkSemaphoreSubmitInfoKHR;
    sType$Default(): VkSemaphoreSubmitInfoKHR;
    semaphore(): number;
    semaphore(arg0: number): VkSemaphoreSubmitInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkSemaphoreSubmitInfoKHR;
    set(arg0: VkSemaphoreSubmitInfo): VkSemaphoreSubmitInfo;
    set(arg0: VkSemaphoreSubmitInfoKHR): VkSemaphoreSubmitInfoKHR;
    stageMask(): number;
    stageMask(arg0: number): VkSemaphoreSubmitInfoKHR;
    value(): number;
    value(arg0: number): VkSemaphoreSubmitInfoKHR;
}