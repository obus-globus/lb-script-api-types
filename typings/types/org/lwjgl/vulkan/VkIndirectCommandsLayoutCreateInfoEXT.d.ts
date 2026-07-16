import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
export class VkIndirectCommandsLayoutCreateInfoEXT extends Struct<VkIndirectCommandsLayoutCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static INDIRECTSTRIDE: number;
    static PIPELINELAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTOKENS: number;
    static SHADERSTAGES: number;
    static SIZEOF: number;
    static STYPE: number;
    static TOKENCOUNT: number;
    static calloc(): VkIndirectCommandsLayoutCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsLayoutCreateInfoEXT;
    static create(paramarg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsLayoutCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nindirectStride(paramarg0: number): number;
    static nindirectStride(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTokens(paramarg0: number): (Object | null)[];
    static npTokens(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npipelineLayout(paramarg0: number): number;
    static npipelineLayout(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderStages(paramarg0: number): number;
    static nshaderStages(paramarg0: number, paramarg1: number): void;
    static ntokenCount(paramarg0: number): number;
    static ntokenCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsLayoutCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    indirectStride(): number;
    indirectStride(arg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkIndirectCommandsLayoutCreateInfoEXT;
    pTokens(): (Object | null)[];
    pTokens(arg0: (Object | null)[]): VkIndirectCommandsLayoutCreateInfoEXT;
    pipelineLayout(): number;
    pipelineLayout(arg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    sType$Default(): VkIndirectCommandsLayoutCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: (Object | null)[]): VkIndirectCommandsLayoutCreateInfoEXT;
    set(arg0: VkIndirectCommandsLayoutCreateInfoEXT): VkIndirectCommandsLayoutCreateInfoEXT;
    shaderStages(): number;
    shaderStages(arg0: number): VkIndirectCommandsLayoutCreateInfoEXT;
    sizeof(): number;
    tokenCount(): number;
}