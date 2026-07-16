import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClearColorValue } from '../../../org/lwjgl/vulkan/VkClearColorValue.d.ts'
export class VkSamplerCustomBorderColorCreateInfoEXT extends Struct<VkSamplerCustomBorderColorCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CUSTOMBORDERCOLOR: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSamplerCustomBorderColorCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSamplerCustomBorderColorCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSamplerCustomBorderColorCreateInfoEXT;
    static create(paramarg0: number): VkSamplerCustomBorderColorCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSamplerCustomBorderColorCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSamplerCustomBorderColorCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSamplerCustomBorderColorCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncustomBorderColor(paramarg0: number): VkClearColorValue;
    static ncustomBorderColor(paramarg0: number, paramarg1: VkClearColorValue): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSamplerCustomBorderColorCreateInfoEXT;
    customBorderColor(): VkClearColorValue;
    customBorderColor(arg0: (param0: VkClearColorValue) => void): VkSamplerCustomBorderColorCreateInfoEXT;
    customBorderColor(arg0: VkClearColorValue): VkSamplerCustomBorderColorCreateInfoEXT;
    format(): number;
    format(arg0: number): VkSamplerCustomBorderColorCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSamplerCustomBorderColorCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkSamplerCustomBorderColorCreateInfoEXT;
    sType$Default(): VkSamplerCustomBorderColorCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: VkClearColorValue, arg3: number): VkSamplerCustomBorderColorCreateInfoEXT;
    set(arg0: VkSamplerCustomBorderColorCreateInfoEXT): VkSamplerCustomBorderColorCreateInfoEXT;
    sizeof(): number;
}