import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDataGraphProcessingEngineCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphProcessingEngineCreateInfoARM.d.ts'
import type { VkDescriptorPoolInlineUniformBlockCreateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorPoolInlineUniformBlockCreateInfo.d.ts'
import type { VkDescriptorPoolInlineUniformBlockCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDescriptorPoolInlineUniformBlockCreateInfoEXT.d.ts'
import type { VkMutableDescriptorTypeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkMutableDescriptorTypeCreateInfoEXT.d.ts'
import type { VkMutableDescriptorTypeCreateInfoVALVE } from '../../../org/lwjgl/vulkan/VkMutableDescriptorTypeCreateInfoVALVE.d.ts'
export class VkDescriptorPoolCreateInfo extends Struct<VkDescriptorPoolCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MAXSETS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POOLSIZECOUNT: number;
    static PPOOLSIZES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorPoolCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorPoolCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorPoolCreateInfo;
    static create(paramarg0: number): VkDescriptorPoolCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorPoolCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorPoolCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorPoolCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmaxSets(paramarg0: number): number;
    static nmaxSets(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPoolSizes(paramarg0: number): (Object | null)[];
    static npPoolSizes(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npoolSizeCount(paramarg0: number): number;
    static npoolSizeCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorPoolCreateInfo;
    flags(): number;
    flags(arg0: number): VkDescriptorPoolCreateInfo;
    maxSets(): number;
    maxSets(arg0: number): VkDescriptorPoolCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkDescriptorPoolCreateInfo;
    pNext(arg0: VkDataGraphProcessingEngineCreateInfoARM): VkDescriptorPoolCreateInfo;
    pNext(arg0: VkDescriptorPoolInlineUniformBlockCreateInfo): VkDescriptorPoolCreateInfo;
    pNext(arg0: VkDescriptorPoolInlineUniformBlockCreateInfoEXT): VkDescriptorPoolCreateInfo;
    pNext(arg0: VkMutableDescriptorTypeCreateInfoEXT): VkDescriptorPoolCreateInfo;
    pNext(arg0: VkMutableDescriptorTypeCreateInfoVALVE): VkDescriptorPoolCreateInfo;
    pPoolSizes(): (Object | null)[];
    pPoolSizes(arg0: (Object | null)[]): VkDescriptorPoolCreateInfo;
    poolSizeCount(): number;
    sType(): number;
    sType(arg0: number): VkDescriptorPoolCreateInfo;
    sType$Default(): VkDescriptorPoolCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[]): VkDescriptorPoolCreateInfo;
    set(arg0: VkDescriptorPoolCreateInfo): VkDescriptorPoolCreateInfo;
    sizeof(): number;
}