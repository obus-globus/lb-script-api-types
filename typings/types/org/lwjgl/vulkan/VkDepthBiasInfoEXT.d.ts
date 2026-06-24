import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDepthBiasRepresentationInfoEXT } from '../../../org/lwjgl/vulkan/VkDepthBiasRepresentationInfoEXT.d.ts'
export class VkDepthBiasInfoEXT extends Struct<VkDepthBiasInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHBIASCLAMP: number;
    static DEPTHBIASCONSTANTFACTOR: number;
    static DEPTHBIASSLOPEFACTOR: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDepthBiasInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDepthBiasInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDepthBiasInfoEXT;
    static create(paramarg0: number): VkDepthBiasInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDepthBiasInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDepthBiasInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDepthBiasInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndepthBiasClamp(paramarg0: number): number;
    static ndepthBiasClamp(paramarg0: number, paramarg1: number): void;
    static ndepthBiasConstantFactor(paramarg0: number): number;
    static ndepthBiasConstantFactor(paramarg0: number, paramarg1: number): void;
    static ndepthBiasSlopeFactor(paramarg0: number): number;
    static ndepthBiasSlopeFactor(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDepthBiasInfoEXT;
    depthBiasClamp(): number;
    depthBiasClamp(arg0: number): VkDepthBiasInfoEXT;
    depthBiasConstantFactor(): number;
    depthBiasConstantFactor(arg0: number): VkDepthBiasInfoEXT;
    depthBiasSlopeFactor(): number;
    depthBiasSlopeFactor(arg0: number): VkDepthBiasInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDepthBiasInfoEXT;
    pNext(arg0: VkDepthBiasRepresentationInfoEXT): VkDepthBiasInfoEXT;
    sType(): number;
    sType(arg0: number): VkDepthBiasInfoEXT;
    sType$Default(): VkDepthBiasInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDepthBiasInfoEXT;
    set(arg0: VkDepthBiasInfoEXT): VkDepthBiasInfoEXT;
    sizeof(): number;
}