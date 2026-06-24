import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorSetLayoutBinding extends Struct<VkDescriptorSetLayoutBinding> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORCOUNT: number;
    static DESCRIPTORTYPE: number;
    static PIMMUTABLESAMPLERS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STAGEFLAGS: number;
    static calloc(): VkDescriptorSetLayoutBinding;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetLayoutBinding;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorSetLayoutBinding;
    static create(paramarg0: number): VkDescriptorSetLayoutBinding;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetLayoutBinding;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorSetLayoutBinding;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetLayoutBinding;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static ndescriptorCount(paramarg0: number): number;
    static ndescriptorCount(paramarg0: number, paramarg1: number): void;
    static ndescriptorType(paramarg0: number): number;
    static ndescriptorType(paramarg0: number, paramarg1: number): void;
    static npImmutableSamplers(paramarg0: number): LongBuffer;
    static npImmutableSamplers(paramarg0: number, paramarg1: LongBuffer): void;
    static nstageFlags(paramarg0: number): number;
    static nstageFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): VkDescriptorSetLayoutBinding;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetLayoutBinding;
    descriptorCount(): number;
    descriptorCount(arg0: number): VkDescriptorSetLayoutBinding;
    descriptorType(): number;
    descriptorType(arg0: number): VkDescriptorSetLayoutBinding;
    pImmutableSamplers(): LongBuffer;
    pImmutableSamplers(arg0: LongBuffer): VkDescriptorSetLayoutBinding;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: LongBuffer): VkDescriptorSetLayoutBinding;
    set(arg0: VkDescriptorSetLayoutBinding): VkDescriptorSetLayoutBinding;
    sizeof(): number;
    stageFlags(): number;
    stageFlags(arg0: number): VkDescriptorSetLayoutBinding;
}