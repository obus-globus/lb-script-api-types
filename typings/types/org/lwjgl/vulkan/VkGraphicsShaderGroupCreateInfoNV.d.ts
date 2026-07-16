import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineTessellationStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineTessellationStateCreateInfo.d.ts'
import type { VkPipelineVertexInputStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineVertexInputStateCreateInfo.d.ts'
export class VkGraphicsShaderGroupCreateInfoNV extends Struct<VkGraphicsShaderGroupCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTAGES: number;
    static PTESSELLATIONSTATE: number;
    static PVERTEXINPUTSTATE: number;
    static SIZEOF: number;
    static STAGECOUNT: number;
    static STYPE: number;
    static calloc(): VkGraphicsShaderGroupCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkGraphicsShaderGroupCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGraphicsShaderGroupCreateInfoNV;
    static create(paramarg0: number): VkGraphicsShaderGroupCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGraphicsShaderGroupCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGraphicsShaderGroupCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkGraphicsShaderGroupCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStages(paramarg0: number): (Object | null)[];
    static npStages(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npTessellationState(paramarg0: number): VkPipelineTessellationStateCreateInfo;
    static npTessellationState(paramarg0: number, paramarg1: VkPipelineTessellationStateCreateInfo): void;
    static npVertexInputState(paramarg0: number): VkPipelineVertexInputStateCreateInfo;
    static npVertexInputState(paramarg0: number, paramarg1: VkPipelineVertexInputStateCreateInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstageCount(paramarg0: number): number;
    static nstageCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGraphicsShaderGroupCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkGraphicsShaderGroupCreateInfoNV;
    pStages(): (Object | null)[];
    pStages(arg0: (Object | null)[]): VkGraphicsShaderGroupCreateInfoNV;
    pTessellationState(): VkPipelineTessellationStateCreateInfo;
    pTessellationState(arg0: VkPipelineTessellationStateCreateInfo): VkGraphicsShaderGroupCreateInfoNV;
    pVertexInputState(): VkPipelineVertexInputStateCreateInfo;
    pVertexInputState(arg0: VkPipelineVertexInputStateCreateInfo): VkGraphicsShaderGroupCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkGraphicsShaderGroupCreateInfoNV;
    sType$Default(): VkGraphicsShaderGroupCreateInfoNV;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: VkPipelineVertexInputStateCreateInfo, arg4: VkPipelineTessellationStateCreateInfo): VkGraphicsShaderGroupCreateInfoNV;
    set(arg0: VkGraphicsShaderGroupCreateInfoNV): VkGraphicsShaderGroupCreateInfoNV;
    sizeof(): number;
    stageCount(): number;
}