import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineBinaryKeysAndDataKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryKeysAndDataKHR.d.ts'
import type { VkPipelineCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineCreateInfoKHR.d.ts'
export class VkPipelineBinaryCreateInfoKHR extends Struct<VkPipelineBinaryCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINE: number;
    static PKEYSANDDATAINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPIPELINECREATEINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineBinaryCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineBinaryCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineBinaryCreateInfoKHR;
    static create(paramarg0: number): VkPipelineBinaryCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineBinaryCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineBinaryCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineBinaryCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npKeysAndDataInfo(paramarg0: number): VkPipelineBinaryKeysAndDataKHR;
    static npKeysAndDataInfo(paramarg0: number, paramarg1: VkPipelineBinaryKeysAndDataKHR): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPipelineCreateInfo(paramarg0: number): VkPipelineCreateInfoKHR;
    static npPipelineCreateInfo(paramarg0: number, paramarg1: VkPipelineCreateInfoKHR): void;
    static npipeline(paramarg0: number): number;
    static npipeline(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineBinaryCreateInfoKHR;
    pKeysAndDataInfo(): VkPipelineBinaryKeysAndDataKHR;
    pKeysAndDataInfo(arg0: VkPipelineBinaryKeysAndDataKHR): VkPipelineBinaryCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineBinaryCreateInfoKHR;
    pPipelineCreateInfo(): VkPipelineCreateInfoKHR;
    pPipelineCreateInfo(arg0: VkPipelineCreateInfoKHR): VkPipelineBinaryCreateInfoKHR;
    pipeline(): number;
    pipeline(arg0: number): VkPipelineBinaryCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineBinaryCreateInfoKHR;
    sType$Default(): VkPipelineBinaryCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: VkPipelineBinaryKeysAndDataKHR, arg3: number, arg4: VkPipelineCreateInfoKHR): VkPipelineBinaryCreateInfoKHR;
    set(arg0: VkPipelineBinaryCreateInfoKHR): VkPipelineBinaryCreateInfoKHR;
    sizeof(): number;
}