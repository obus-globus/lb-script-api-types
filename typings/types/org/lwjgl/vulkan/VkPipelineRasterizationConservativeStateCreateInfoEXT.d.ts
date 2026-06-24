import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineRasterizationConservativeStateCreateInfoEXT extends Struct<VkPipelineRasterizationConservativeStateCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSERVATIVERASTERIZATIONMODE: number;
    static EXTRAPRIMITIVEOVERESTIMATIONSIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static create(paramarg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconservativeRasterizationMode(paramarg0: number): number;
    static nconservativeRasterizationMode(paramarg0: number, paramarg1: number): void;
    static nextraPrimitiveOverestimationSize(paramarg0: number): number;
    static nextraPrimitiveOverestimationSize(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    conservativeRasterizationMode(): number;
    conservativeRasterizationMode(arg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    create(arg0: number, arg1: ByteBuffer): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    extraPrimitiveOverestimationSize(): number;
    extraPrimitiveOverestimationSize(arg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    sType$Default(): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    set(arg0: VkPipelineRasterizationConservativeStateCreateInfoEXT): VkPipelineRasterizationConservativeStateCreateInfoEXT;
    sizeof(): number;
}