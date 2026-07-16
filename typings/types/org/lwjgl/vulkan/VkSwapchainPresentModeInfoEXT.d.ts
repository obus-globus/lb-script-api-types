import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSwapchainPresentModeInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainPresentModeInfoKHR.d.ts'
export class VkSwapchainPresentModeInfoEXT extends VkSwapchainPresentModeInfoKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTMODES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAINCOUNT: number;
    static calloc(): VkSwapchainPresentModeInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentModeInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSwapchainPresentModeInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentModeInfoKHR;
    static create(): VkSwapchainPresentModeInfoEXT;
    static create(paramarg0: number): VkSwapchainPresentModeInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSwapchainPresentModeInfoKHR;
    static create(paramarg0: number): VkSwapchainPresentModeInfoKHR;
    static createSafe(paramarg0: number): VkSwapchainPresentModeInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentModeInfoKHR;
    static malloc(): VkSwapchainPresentModeInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentModeInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSwapchainPresentModeInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentModeInfoKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentModes(paramarg0: number): IntBuffer;
    static npPresentModes(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchainCount(paramarg0: number): number;
    static nswapchainCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSwapchainPresentModeInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSwapchainPresentModeInfoEXT;
    pPresentModes(): IntBuffer;
    pPresentModes(arg0: IntBuffer): VkSwapchainPresentModeInfoEXT;
    sType(): number;
    sType(arg0: number): VkSwapchainPresentModeInfoEXT;
    sType$Default(): VkSwapchainPresentModeInfoEXT;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkSwapchainPresentModeInfoEXT;
    set(arg0: VkSwapchainPresentModeInfoEXT): VkSwapchainPresentModeInfoEXT;
    set(arg0: VkSwapchainPresentModeInfoKHR): VkSwapchainPresentModeInfoKHR;
}