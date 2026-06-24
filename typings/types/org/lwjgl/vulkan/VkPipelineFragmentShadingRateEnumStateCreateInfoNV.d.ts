import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineFragmentShadingRateEnumStateCreateInfoNV extends Struct<VkPipelineFragmentShadingRateEnumStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMBINEROPS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADINGRATE: number;
    static SHADINGRATETYPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncombinerOps(paramarg0: number, paramarg1: number): number;
    static ncombinerOps(paramarg0: number): IntBuffer;
    static ncombinerOps(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncombinerOps(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshadingRate(paramarg0: number): number;
    static nshadingRate(paramarg0: number, paramarg1: number): void;
    static nshadingRateType(paramarg0: number): number;
    static nshadingRateType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    combinerOps(): IntBuffer;
    combinerOps(arg0: IntBuffer): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    combinerOps(arg0: number): number;
    combinerOps(arg0: number, arg1: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    sType$Default(): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: IntBuffer): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    set(arg0: VkPipelineFragmentShadingRateEnumStateCreateInfoNV): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    shadingRate(): number;
    shadingRate(arg0: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    shadingRateType(): number;
    shadingRateType(arg0: number): VkPipelineFragmentShadingRateEnumStateCreateInfoNV;
    sizeof(): number;
}