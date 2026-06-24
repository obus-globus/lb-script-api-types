import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorMappingSourceDataEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceDataEXT.d.ts'
import type { VkPushConstantBankInfoNV } from '../../../org/lwjgl/vulkan/VkPushConstantBankInfoNV.d.ts'
export class VkDescriptorSetAndBindingMappingEXT extends Struct<VkDescriptorSetAndBindingMappingEXT> implements NativeResource {
    static ALIGNOF: number;
    static BINDINGCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORSET: number;
    static FIRSTBINDING: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOURCEMASK: number;
    static SIZEOF: number;
    static SOURCE: number;
    static SOURCEDATA: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetAndBindingMappingEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetAndBindingMappingEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorSetAndBindingMappingEXT;
    static create(paramarg0: number): VkDescriptorSetAndBindingMappingEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetAndBindingMappingEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorSetAndBindingMappingEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetAndBindingMappingEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbindingCount(paramarg0: number): number;
    static nbindingCount(paramarg0: number, paramarg1: number): void;
    static ndescriptorSet(paramarg0: number): number;
    static ndescriptorSet(paramarg0: number, paramarg1: number): void;
    static nfirstBinding(paramarg0: number): number;
    static nfirstBinding(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nresourceMask(paramarg0: number): number;
    static nresourceMask(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsource(paramarg0: number): number;
    static nsource(paramarg0: number, paramarg1: number): void;
    static nsourceData(paramarg0: number): VkDescriptorMappingSourceDataEXT;
    static nsourceData(paramarg0: number, paramarg1: VkDescriptorMappingSourceDataEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bindingCount(): number;
    bindingCount(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetAndBindingMappingEXT;
    descriptorSet(): number;
    descriptorSet(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    firstBinding(): number;
    firstBinding(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    pNext(arg0: VkPushConstantBankInfoNV): VkDescriptorSetAndBindingMappingEXT;
    resourceMask(): number;
    resourceMask(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    sType$Default(): VkDescriptorSetAndBindingMappingEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: VkDescriptorMappingSourceDataEXT): VkDescriptorSetAndBindingMappingEXT;
    set(arg0: VkDescriptorSetAndBindingMappingEXT): VkDescriptorSetAndBindingMappingEXT;
    sizeof(): number;
    source(): number;
    source(arg0: number): VkDescriptorSetAndBindingMappingEXT;
    sourceData(): VkDescriptorMappingSourceDataEXT;
    sourceData(arg0: (param0: VkDescriptorMappingSourceDataEXT) => void): VkDescriptorSetAndBindingMappingEXT;
    sourceData(arg0: VkDescriptorMappingSourceDataEXT): VkDescriptorSetAndBindingMappingEXT;
}