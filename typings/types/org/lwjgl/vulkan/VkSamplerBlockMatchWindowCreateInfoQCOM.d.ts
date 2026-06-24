import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkSamplerBlockMatchWindowCreateInfoQCOM extends Struct<VkSamplerBlockMatchWindowCreateInfoQCOM> implements NativeResource {
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
    static WINDOWCOMPAREMODE: number;
    static WINDOWEXTENT: number;
    static calloc(): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static create(paramarg0: number): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkSamplerBlockMatchWindowCreateInfoQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nwindowCompareMode(paramarg0: number): number;
    static nwindowCompareMode(paramarg0: number, paramarg1: number): void;
    static nwindowExtent(paramarg0: number): VkExtent2D;
    static nwindowExtent(paramarg0: number, paramarg1: VkExtent2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSamplerBlockMatchWindowCreateInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkSamplerBlockMatchWindowCreateInfoQCOM;
    sType(): number;
    sType(arg0: number): VkSamplerBlockMatchWindowCreateInfoQCOM;
    sType$Default(): VkSamplerBlockMatchWindowCreateInfoQCOM;
    set(arg0: number, arg1: number, arg2: VkExtent2D, arg3: number): VkSamplerBlockMatchWindowCreateInfoQCOM;
    set(arg0: VkSamplerBlockMatchWindowCreateInfoQCOM): VkSamplerBlockMatchWindowCreateInfoQCOM;
    sizeof(): number;
    windowCompareMode(): number;
    windowCompareMode(arg0: number): VkSamplerBlockMatchWindowCreateInfoQCOM;
    windowExtent(): VkExtent2D;
    windowExtent(arg0: (param0: VkExtent2D) => void): VkSamplerBlockMatchWindowCreateInfoQCOM;
    windowExtent(arg0: VkExtent2D): VkSamplerBlockMatchWindowCreateInfoQCOM;
}