import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorSetBindingReferenceVALVE extends Struct<VkDescriptorSetBindingReferenceVALVE> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORSETLAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetBindingReferenceVALVE;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetBindingReferenceVALVE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorSetBindingReferenceVALVE;
    static create(paramarg0: number): VkDescriptorSetBindingReferenceVALVE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetBindingReferenceVALVE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorSetBindingReferenceVALVE;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetBindingReferenceVALVE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static ndescriptorSetLayout(paramarg0: number): number;
    static ndescriptorSetLayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): VkDescriptorSetBindingReferenceVALVE;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetBindingReferenceVALVE;
    descriptorSetLayout(): number;
    descriptorSetLayout(arg0: number): VkDescriptorSetBindingReferenceVALVE;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetBindingReferenceVALVE;
    sType(): number;
    sType(arg0: number): VkDescriptorSetBindingReferenceVALVE;
    sType$Default(): VkDescriptorSetBindingReferenceVALVE;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkDescriptorSetBindingReferenceVALVE;
    set(arg0: VkDescriptorSetBindingReferenceVALVE): VkDescriptorSetBindingReferenceVALVE;
    sizeof(): number;
}