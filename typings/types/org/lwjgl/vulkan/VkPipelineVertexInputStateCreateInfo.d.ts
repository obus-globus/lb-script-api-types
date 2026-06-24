import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineVertexInputDivisorStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineVertexInputDivisorStateCreateInfo.d.ts'
import type { VkPipelineVertexInputDivisorStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineVertexInputDivisorStateCreateInfoEXT.d.ts'
import type { VkPipelineVertexInputDivisorStateCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineVertexInputDivisorStateCreateInfoKHR.d.ts'
export class VkPipelineVertexInputStateCreateInfo extends Struct<VkPipelineVertexInputStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVERTEXATTRIBUTEDESCRIPTIONS: number;
    static PVERTEXBINDINGDESCRIPTIONS: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERTEXATTRIBUTEDESCRIPTIONCOUNT: number;
    static VERTEXBINDINGDESCRIPTIONCOUNT: number;
    static calloc(): VkPipelineVertexInputStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineVertexInputStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineVertexInputStateCreateInfo;
    static create(paramarg0: number): VkPipelineVertexInputStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineVertexInputStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineVertexInputStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineVertexInputStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npVertexAttributeDescriptions(paramarg0: number): (Object | null)[];
    static npVertexAttributeDescriptions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npVertexBindingDescriptions(paramarg0: number): (Object | null)[];
    static npVertexBindingDescriptions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvertexAttributeDescriptionCount(paramarg0: number): number;
    static nvertexAttributeDescriptionCount(paramarg0: number, paramarg1: number): void;
    static nvertexBindingDescriptionCount(paramarg0: number): number;
    static nvertexBindingDescriptionCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineVertexInputStateCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineVertexInputStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineVertexInputStateCreateInfo;
    pNext(arg0: VkPipelineVertexInputDivisorStateCreateInfo): VkPipelineVertexInputStateCreateInfo;
    pNext(arg0: VkPipelineVertexInputDivisorStateCreateInfoEXT): VkPipelineVertexInputStateCreateInfo;
    pNext(arg0: VkPipelineVertexInputDivisorStateCreateInfoKHR): VkPipelineVertexInputStateCreateInfo;
    pVertexAttributeDescriptions(): (Object | null)[];
    pVertexAttributeDescriptions(arg0: (Object | null)[]): VkPipelineVertexInputStateCreateInfo;
    pVertexBindingDescriptions(): (Object | null)[];
    pVertexBindingDescriptions(arg0: (Object | null)[]): VkPipelineVertexInputStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineVertexInputStateCreateInfo;
    sType$Default(): VkPipelineVertexInputStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[]): VkPipelineVertexInputStateCreateInfo;
    set(arg0: VkPipelineVertexInputStateCreateInfo): VkPipelineVertexInputStateCreateInfo;
    sizeof(): number;
    vertexAttributeDescriptionCount(): number;
    vertexBindingDescriptionCount(): number;
}