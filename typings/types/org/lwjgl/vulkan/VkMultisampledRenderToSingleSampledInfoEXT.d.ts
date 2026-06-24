import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMultisampledRenderToSingleSampledInfoEXT extends Struct<VkMultisampledRenderToSingleSampledInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MULTISAMPLEDRENDERTOSINGLESAMPLEDENABLE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RASTERIZATIONSAMPLES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMultisampledRenderToSingleSampledInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMultisampledRenderToSingleSampledInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMultisampledRenderToSingleSampledInfoEXT;
    static create(paramarg0: number): VkMultisampledRenderToSingleSampledInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMultisampledRenderToSingleSampledInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMultisampledRenderToSingleSampledInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMultisampledRenderToSingleSampledInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmultisampledRenderToSingleSampledEnable(paramarg0: number): number;
    static nmultisampledRenderToSingleSampledEnable(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrasterizationSamples(paramarg0: number): number;
    static nrasterizationSamples(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMultisampledRenderToSingleSampledInfoEXT;
    multisampledRenderToSingleSampledEnable(): boolean;
    multisampledRenderToSingleSampledEnable(arg0: boolean): VkMultisampledRenderToSingleSampledInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkMultisampledRenderToSingleSampledInfoEXT;
    rasterizationSamples(): number;
    rasterizationSamples(arg0: number): VkMultisampledRenderToSingleSampledInfoEXT;
    sType(): number;
    sType(arg0: number): VkMultisampledRenderToSingleSampledInfoEXT;
    sType$Default(): VkMultisampledRenderToSingleSampledInfoEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number): VkMultisampledRenderToSingleSampledInfoEXT;
    set(arg0: VkMultisampledRenderToSingleSampledInfoEXT): VkMultisampledRenderToSingleSampledInfoEXT;
    sizeof(): number;
}