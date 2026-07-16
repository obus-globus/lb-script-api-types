import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSamplerReductionModeCreateInfo } from '../../../org/lwjgl/vulkan/VkSamplerReductionModeCreateInfo.d.ts'
export class VkSamplerReductionModeCreateInfoEXT extends VkSamplerReductionModeCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REDUCTIONMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSamplerReductionModeCreateInfo;
    static calloc(paramarg0: MemoryStack): VkSamplerReductionModeCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSamplerReductionModeCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSamplerReductionModeCreateInfoEXT;
    static create(): VkSamplerReductionModeCreateInfo;
    static create(paramarg0: number): VkSamplerReductionModeCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSamplerReductionModeCreateInfoEXT;
    static create(paramarg0: number): VkSamplerReductionModeCreateInfoEXT;
    static createSafe(paramarg0: number): VkSamplerReductionModeCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSamplerReductionModeCreateInfoEXT;
    static malloc(): VkSamplerReductionModeCreateInfo;
    static malloc(paramarg0: MemoryStack): VkSamplerReductionModeCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSamplerReductionModeCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSamplerReductionModeCreateInfoEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nreductionMode(paramarg0: number): number;
    static nreductionMode(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSamplerReductionModeCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSamplerReductionModeCreateInfoEXT;
    reductionMode(): number;
    reductionMode(arg0: number): VkSamplerReductionModeCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkSamplerReductionModeCreateInfoEXT;
    sType$Default(): VkSamplerReductionModeCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkSamplerReductionModeCreateInfoEXT;
    set(arg0: VkSamplerReductionModeCreateInfo): VkSamplerReductionModeCreateInfo;
    set(arg0: VkSamplerReductionModeCreateInfoEXT): VkSamplerReductionModeCreateInfoEXT;
}