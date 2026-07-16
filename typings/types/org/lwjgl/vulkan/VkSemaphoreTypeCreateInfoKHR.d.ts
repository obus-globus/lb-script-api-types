import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSemaphoreTypeCreateInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfo.d.ts'
export class VkSemaphoreTypeCreateInfoKHR extends VkSemaphoreTypeCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INITIALVALUE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORETYPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSemaphoreTypeCreateInfo;
    static calloc(paramarg0: MemoryStack): VkSemaphoreTypeCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSemaphoreTypeCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSemaphoreTypeCreateInfoKHR;
    static create(): VkSemaphoreTypeCreateInfo;
    static create(paramarg0: number): VkSemaphoreTypeCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSemaphoreTypeCreateInfoKHR;
    static create(paramarg0: number): VkSemaphoreTypeCreateInfoKHR;
    static createSafe(paramarg0: number): VkSemaphoreTypeCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreTypeCreateInfoKHR;
    static malloc(): VkSemaphoreTypeCreateInfo;
    static malloc(paramarg0: MemoryStack): VkSemaphoreTypeCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSemaphoreTypeCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSemaphoreTypeCreateInfoKHR;
    static ninitialValue(paramarg0: number): number;
    static ninitialValue(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphoreType(paramarg0: number): number;
    static nsemaphoreType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSemaphoreTypeCreateInfoKHR;
    initialValue(): number;
    initialValue(arg0: number): VkSemaphoreTypeCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSemaphoreTypeCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkSemaphoreTypeCreateInfoKHR;
    sType$Default(): VkSemaphoreTypeCreateInfoKHR;
    semaphoreType(): number;
    semaphoreType(arg0: number): VkSemaphoreTypeCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkSemaphoreTypeCreateInfoKHR;
    set(arg0: VkSemaphoreTypeCreateInfo): VkSemaphoreTypeCreateInfo;
    set(arg0: VkSemaphoreTypeCreateInfoKHR): VkSemaphoreTypeCreateInfoKHR;
}