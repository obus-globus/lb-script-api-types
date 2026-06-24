import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSurfacePresentModeKHR } from '../../../org/lwjgl/vulkan/VkSurfacePresentModeKHR.d.ts'
export class VkSurfacePresentModeEXT extends VkSurfacePresentModeKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSurfacePresentModeEXT;
    static calloc(paramarg0: MemoryStack): VkSurfacePresentModeEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSurfacePresentModeKHR;
    static calloc(paramarg0: MemoryStack): VkSurfacePresentModeKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfacePresentModeEXT;
    static create(paramarg0: number): VkSurfacePresentModeEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSurfacePresentModeKHR;
    static create(paramarg0: number): VkSurfacePresentModeKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfacePresentModeEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfacePresentModeKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfacePresentModeEXT;
    static malloc(paramarg0: MemoryStack): VkSurfacePresentModeEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSurfacePresentModeKHR;
    static malloc(paramarg0: MemoryStack): VkSurfacePresentModeKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentMode(paramarg0: number): number;
    static npresentMode(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSurfacePresentModeEXT;
    pNext(): number;
    pNext(arg0: number): VkSurfacePresentModeEXT;
    presentMode(): number;
    presentMode(arg0: number): VkSurfacePresentModeEXT;
    sType(): number;
    sType(arg0: number): VkSurfacePresentModeEXT;
    sType$Default(): VkSurfacePresentModeEXT;
    set(arg0: number, arg1: number, arg2: number): VkSurfacePresentModeEXT;
    set(arg0: VkSurfacePresentModeEXT): VkSurfacePresentModeEXT;
    set(arg0: VkSurfacePresentModeKHR): VkSurfacePresentModeKHR;
}