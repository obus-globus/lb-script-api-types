import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSwapchainPresentModesCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentModesCreateInfoKHR.d.ts'
export class VkSwapchainPresentModesCreateInfoEXT extends VkSwapchainPresentModesCreateInfoKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTMODES: number;
    static PRESENTMODECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSwapchainPresentModesCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentModesCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSwapchainPresentModesCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentModesCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainPresentModesCreateInfoEXT;
    static create(paramarg0: number): VkSwapchainPresentModesCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSwapchainPresentModesCreateInfoKHR;
    static create(paramarg0: number): VkSwapchainPresentModesCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentModesCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentModesCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSwapchainPresentModesCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentModesCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSwapchainPresentModesCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentModesCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentModes(paramarg0: number): IntBuffer;
    static npPresentModes(paramarg0: number, paramarg1: IntBuffer): void;
    static npresentModeCount(paramarg0: number): number;
    static npresentModeCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSwapchainPresentModesCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSwapchainPresentModesCreateInfoEXT;
    pPresentModes(): IntBuffer;
    pPresentModes(arg0: IntBuffer): VkSwapchainPresentModesCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkSwapchainPresentModesCreateInfoEXT;
    sType$Default(): VkSwapchainPresentModesCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkSwapchainPresentModesCreateInfoEXT;
    set(arg0: VkSwapchainPresentModesCreateInfoEXT): VkSwapchainPresentModesCreateInfoEXT;
    set(arg0: VkSwapchainPresentModesCreateInfoKHR): VkSwapchainPresentModesCreateInfoKHR;
}