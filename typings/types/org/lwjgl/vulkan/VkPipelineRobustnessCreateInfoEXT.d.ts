import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineRobustnessCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfo.d.ts'
export class VkPipelineRobustnessCreateInfoEXT extends VkPipelineRobustnessCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STORAGEBUFFERS: number;
    static STYPE: number;
    static UNIFORMBUFFERS: number;
    static VERTEXINPUTS: number;
    static calloc(): VkPipelineRobustnessCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineRobustnessCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPipelineRobustnessCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineRobustnessCreateInfoEXT;
    static create(): VkPipelineRobustnessCreateInfo;
    static create(paramarg0: number): VkPipelineRobustnessCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineRobustnessCreateInfoEXT;
    static create(paramarg0: number): VkPipelineRobustnessCreateInfoEXT;
    static createSafe(paramarg0: number): VkPipelineRobustnessCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRobustnessCreateInfoEXT;
    static malloc(): VkPipelineRobustnessCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineRobustnessCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineRobustnessCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineRobustnessCreateInfoEXT;
    static nimages(paramarg0: number): number;
    static nimages(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstorageBuffers(paramarg0: number): number;
    static nstorageBuffers(paramarg0: number, paramarg1: number): void;
    static nuniformBuffers(paramarg0: number): number;
    static nuniformBuffers(paramarg0: number, paramarg1: number): void;
    static nvertexInputs(paramarg0: number): number;
    static nvertexInputs(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPipelineRobustnessCreateInfoEXT;
    images(): number;
    images(arg0: number): VkPipelineRobustnessCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineRobustnessCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineRobustnessCreateInfoEXT;
    sType$Default(): VkPipelineRobustnessCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkPipelineRobustnessCreateInfoEXT;
    set(arg0: VkPipelineRobustnessCreateInfo): VkPipelineRobustnessCreateInfo;
    set(arg0: VkPipelineRobustnessCreateInfoEXT): VkPipelineRobustnessCreateInfoEXT;
    storageBuffers(): number;
    storageBuffers(arg0: number): VkPipelineRobustnessCreateInfoEXT;
    uniformBuffers(): number;
    uniformBuffers(arg0: number): VkPipelineRobustnessCreateInfoEXT;
    vertexInputs(): number;
    vertexInputs(arg0: number): VkPipelineRobustnessCreateInfoEXT;
}