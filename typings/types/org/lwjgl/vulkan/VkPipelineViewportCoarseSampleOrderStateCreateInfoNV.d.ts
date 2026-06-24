import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineViewportCoarseSampleOrderStateCreateInfoNV extends Struct<VkPipelineViewportCoarseSampleOrderStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CUSTOMSAMPLEORDERCOUNT: number;
    static PCUSTOMSAMPLEORDERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLEORDERTYPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncustomSampleOrderCount(paramarg0: number): number;
    static ncustomSampleOrderCount(paramarg0: number, paramarg1: number): void;
    static npCustomSampleOrders(paramarg0: number): (Object | null)[];
    static npCustomSampleOrders(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsampleOrderType(paramarg0: number): number;
    static nsampleOrderType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    customSampleOrderCount(): number;
    pCustomSampleOrders(): (Object | null)[];
    pCustomSampleOrders(arg0: (Object | null)[]): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    sType$Default(): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    sampleOrderType(): number;
    sampleOrderType(arg0: number): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    set(arg0: VkPipelineViewportCoarseSampleOrderStateCreateInfoNV): VkPipelineViewportCoarseSampleOrderStateCreateInfoNV;
    sizeof(): number;
}