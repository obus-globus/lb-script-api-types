import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
export class VkSetDescriptorBufferOffsetsInfoEXT extends Struct<VkSetDescriptorBufferOffsetsInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTSET: number;
    static LAYOUT: number;
    static PBUFFERINDICES: number;
    static PNEXT: number;
    static POFFSETS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SETCOUNT: number;
    static SIZEOF: number;
    static STAGEFLAGS: number;
    static STYPE: number;
    static calloc(): VkSetDescriptorBufferOffsetsInfoEXT;
    static calloc(paramarg0: MemoryStack): VkSetDescriptorBufferOffsetsInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSetDescriptorBufferOffsetsInfoEXT;
    static create(paramarg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSetDescriptorBufferOffsetsInfoEXT;
    static malloc(paramarg0: MemoryStack): VkSetDescriptorBufferOffsetsInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstSet(paramarg0: number): number;
    static nfirstSet(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npBufferIndices(paramarg0: number): IntBuffer;
    static npBufferIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npOffsets(paramarg0: number): LongBuffer;
    static npOffsets(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsetCount(paramarg0: number): number;
    static nsetCount(paramarg0: number, paramarg1: number): void;
    static nstageFlags(paramarg0: number): number;
    static nstageFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSetDescriptorBufferOffsetsInfoEXT;
    firstSet(): number;
    firstSet(arg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    layout(): number;
    layout(arg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    pBufferIndices(): IntBuffer;
    pBufferIndices(arg0: IntBuffer): VkSetDescriptorBufferOffsetsInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkSetDescriptorBufferOffsetsInfoEXT;
    pOffsets(): LongBuffer;
    pOffsets(arg0: LongBuffer): VkSetDescriptorBufferOffsetsInfoEXT;
    sType(): number;
    sType(arg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    sType$Default(): VkSetDescriptorBufferOffsetsInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: IntBuffer, arg7: LongBuffer): VkSetDescriptorBufferOffsetsInfoEXT;
    set(arg0: VkSetDescriptorBufferOffsetsInfoEXT): VkSetDescriptorBufferOffsetsInfoEXT;
    setCount(): number;
    setCount(arg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
    sizeof(): number;
    stageFlags(): number;
    stageFlags(arg0: number): VkSetDescriptorBufferOffsetsInfoEXT;
}