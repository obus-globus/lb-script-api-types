import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
export class VkBindDescriptorSetsInfo extends Struct<VkBindDescriptorSetsInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORSETCOUNT: number;
    static DYNAMICOFFSETCOUNT: number;
    static FIRSTSET: number;
    static LAYOUT: number;
    static PDESCRIPTORSETS: number;
    static PDYNAMICOFFSETS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STAGEFLAGS: number;
    static STYPE: number;
    static calloc(): VkBindDescriptorSetsInfo;
    static calloc(paramarg0: MemoryStack): VkBindDescriptorSetsInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindDescriptorSetsInfo;
    static create(paramarg0: number): VkBindDescriptorSetsInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindDescriptorSetsInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindDescriptorSetsInfo;
    static malloc(paramarg0: MemoryStack): VkBindDescriptorSetsInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorSetCount(paramarg0: number): number;
    static ndescriptorSetCount(paramarg0: number, paramarg1: number): void;
    static ndynamicOffsetCount(paramarg0: number): number;
    static ndynamicOffsetCount(paramarg0: number, paramarg1: number): void;
    static nfirstSet(paramarg0: number): number;
    static nfirstSet(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npDescriptorSets(paramarg0: number): LongBuffer;
    static npDescriptorSets(paramarg0: number, paramarg1: LongBuffer): void;
    static npDynamicOffsets(paramarg0: number): IntBuffer;
    static npDynamicOffsets(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstageFlags(paramarg0: number): number;
    static nstageFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindDescriptorSetsInfo;
    descriptorSetCount(): number;
    dynamicOffsetCount(): number;
    dynamicOffsetCount(arg0: number): VkBindDescriptorSetsInfo;
    firstSet(): number;
    firstSet(arg0: number): VkBindDescriptorSetsInfo;
    layout(): number;
    layout(arg0: number): VkBindDescriptorSetsInfo;
    pDescriptorSets(): LongBuffer;
    pDescriptorSets(arg0: LongBuffer): VkBindDescriptorSetsInfo;
    pDynamicOffsets(): IntBuffer;
    pDynamicOffsets(arg0: IntBuffer): VkBindDescriptorSetsInfo;
    pNext(): number;
    pNext(arg0: number): VkBindDescriptorSetsInfo;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkBindDescriptorSetsInfo;
    sType(): number;
    sType(arg0: number): VkBindDescriptorSetsInfo;
    sType$Default(): VkBindDescriptorSetsInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: LongBuffer, arg6: number, arg7: IntBuffer): VkBindDescriptorSetsInfo;
    set(arg0: VkBindDescriptorSetsInfo): VkBindDescriptorSetsInfo;
    sizeof(): number;
    stageFlags(): number;
    stageFlags(arg0: number): VkBindDescriptorSetsInfo;
}