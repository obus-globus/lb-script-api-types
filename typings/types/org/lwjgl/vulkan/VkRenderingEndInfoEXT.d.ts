import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassFragmentDensityMapOffsetEndInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassFragmentDensityMapOffsetEndInfoEXT.d.ts'
import type { VkRenderingEndInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingEndInfoKHR.d.ts'
import type { VkSubpassFragmentDensityMapOffsetEndInfoQCOM } from '../../../org/lwjgl/vulkan/VkSubpassFragmentDensityMapOffsetEndInfoQCOM.d.ts'
export class VkRenderingEndInfoEXT extends VkRenderingEndInfoKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderingEndInfoEXT;
    static calloc(paramarg0: MemoryStack): VkRenderingEndInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkRenderingEndInfoKHR;
    static calloc(paramarg0: MemoryStack): VkRenderingEndInfoKHR;
    static create(): VkRenderingEndInfoEXT;
    static create(paramarg0: number): VkRenderingEndInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkRenderingEndInfoKHR;
    static create(paramarg0: number): VkRenderingEndInfoKHR;
    static createSafe(paramarg0: number): VkRenderingEndInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingEndInfoKHR;
    static malloc(): VkRenderingEndInfoEXT;
    static malloc(paramarg0: MemoryStack): VkRenderingEndInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkRenderingEndInfoKHR;
    static malloc(paramarg0: MemoryStack): VkRenderingEndInfoKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkRenderingEndInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkRenderingEndInfoEXT;
    pNext(arg0: VkRenderPassFragmentDensityMapOffsetEndInfoEXT): VkRenderingEndInfoKHR;
    pNext(arg0: VkSubpassFragmentDensityMapOffsetEndInfoQCOM): VkRenderingEndInfoKHR;
    sType(): number;
    sType(arg0: number): VkRenderingEndInfoEXT;
    sType$Default(): VkRenderingEndInfoEXT;
    set(arg0: number, arg1: number): VkRenderingEndInfoEXT;
    set(arg0: VkRenderingEndInfoEXT): VkRenderingEndInfoEXT;
    set(arg0: VkRenderingEndInfoKHR): VkRenderingEndInfoKHR;
}