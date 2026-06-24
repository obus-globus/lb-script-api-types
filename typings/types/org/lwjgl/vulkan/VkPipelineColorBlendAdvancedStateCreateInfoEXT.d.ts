import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineColorBlendAdvancedStateCreateInfoEXT extends Struct<VkPipelineColorBlendAdvancedStateCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLENDOVERLAP: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTPREMULTIPLIED: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCPREMULTIPLIED: number;
    static STYPE: number;
    static calloc(): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static create(paramarg0: number): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nblendOverlap(paramarg0: number): number;
    static nblendOverlap(paramarg0: number, paramarg1: number): void;
    static ndstPremultiplied(paramarg0: number): number;
    static ndstPremultiplied(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcPremultiplied(paramarg0: number): number;
    static nsrcPremultiplied(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    blendOverlap(): number;
    blendOverlap(arg0: number): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    dstPremultiplied(): boolean;
    dstPremultiplied(arg0: boolean): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    sType$Default(): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: number): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    set(arg0: VkPipelineColorBlendAdvancedStateCreateInfoEXT): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
    sizeof(): number;
    srcPremultiplied(): boolean;
    srcPremultiplied(arg0: boolean): VkPipelineColorBlendAdvancedStateCreateInfoEXT;
}