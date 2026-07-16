import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineCreationFeedback } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedback.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
export class VkPipelineCreationFeedbackCreateInfoEXT extends VkPipelineCreationFeedbackCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINESTAGECREATIONFEEDBACKCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPIPELINECREATIONFEEDBACK: number;
    static PPIPELINESTAGECREATIONFEEDBACKS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineCreationFeedbackCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineCreationFeedbackCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPipelineCreationFeedbackCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineCreationFeedbackCreateInfoEXT;
    static create(): VkPipelineCreationFeedbackCreateInfo;
    static create(paramarg0: number): VkPipelineCreationFeedbackCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineCreationFeedbackCreateInfoEXT;
    static create(paramarg0: number): VkPipelineCreationFeedbackCreateInfoEXT;
    static createSafe(paramarg0: number): VkPipelineCreationFeedbackCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineCreationFeedbackCreateInfoEXT;
    static malloc(): VkPipelineCreationFeedbackCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineCreationFeedbackCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineCreationFeedbackCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineCreationFeedbackCreateInfoEXT;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPipelineCreationFeedback(paramarg0: number): VkPipelineCreationFeedback;
    static npPipelineCreationFeedback(paramarg0: number, paramarg1: VkPipelineCreationFeedback): void;
    static npPipelineStageCreationFeedbacks(paramarg0: number): (Object | null)[];
    static npPipelineStageCreationFeedbacks(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npipelineStageCreationFeedbackCount(paramarg0: number): number;
    static npipelineStageCreationFeedbackCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPipelineCreationFeedbackCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineCreationFeedbackCreateInfoEXT;
    pPipelineCreationFeedback(): VkPipelineCreationFeedback;
    pPipelineCreationFeedback(arg0: VkPipelineCreationFeedback): VkPipelineCreationFeedbackCreateInfoEXT;
    pPipelineStageCreationFeedbacks(): (Object | null)[];
    pPipelineStageCreationFeedbacks(arg0: (Object | null)[]): VkPipelineCreationFeedbackCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineCreationFeedbackCreateInfoEXT;
    sType$Default(): VkPipelineCreationFeedbackCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: VkPipelineCreationFeedback, arg3: (Object | null)[]): VkPipelineCreationFeedbackCreateInfoEXT;
    set(arg0: VkPipelineCreationFeedbackCreateInfo): VkPipelineCreationFeedbackCreateInfo;
    set(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkPipelineCreationFeedbackCreateInfoEXT;
}