import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
export class VkBindDescriptorBufferEmbeddedSamplersInfoEXT extends Struct<VkBindDescriptorBufferEmbeddedSamplersInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SET: number;
    static SIZEOF: number;
    static STAGEFLAGS: number;
    static STYPE: number;
    static calloc(): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static calloc(paramarg0: MemoryStack): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static create(paramarg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static malloc(paramarg0: MemoryStack): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nset(paramarg0: number): number;
    static nset(paramarg0: number, paramarg1: number): void;
    static nstageFlags(paramarg0: number): number;
    static nstageFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    layout(): number;
    layout(arg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    sType(): number;
    sType(arg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    sType$Default(): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    set(): number;
    set(arg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    set(arg0: VkBindDescriptorBufferEmbeddedSamplersInfoEXT): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
    sizeof(): number;
    stageFlags(): number;
    stageFlags(arg0: number): VkBindDescriptorBufferEmbeddedSamplersInfoEXT;
}