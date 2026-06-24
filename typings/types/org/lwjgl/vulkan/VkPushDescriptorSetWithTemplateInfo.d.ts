import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
export class VkPushDescriptorSetWithTemplateInfo extends Struct<VkPushDescriptorSetWithTemplateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORUPDATETEMPLATE: number;
    static LAYOUT: number;
    static PDATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SET: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPushDescriptorSetWithTemplateInfo;
    static calloc(paramarg0: MemoryStack): VkPushDescriptorSetWithTemplateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPushDescriptorSetWithTemplateInfo;
    static create(paramarg0: number): VkPushDescriptorSetWithTemplateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPushDescriptorSetWithTemplateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPushDescriptorSetWithTemplateInfo;
    static malloc(paramarg0: MemoryStack): VkPushDescriptorSetWithTemplateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorUpdateTemplate(paramarg0: number): number;
    static ndescriptorUpdateTemplate(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npData(paramarg0: number): number;
    static npData(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nset(paramarg0: number): number;
    static nset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPushDescriptorSetWithTemplateInfo;
    descriptorUpdateTemplate(): number;
    descriptorUpdateTemplate(arg0: number): VkPushDescriptorSetWithTemplateInfo;
    layout(): number;
    layout(arg0: number): VkPushDescriptorSetWithTemplateInfo;
    pData(): number;
    pData(arg0: number): VkPushDescriptorSetWithTemplateInfo;
    pNext(): number;
    pNext(arg0: number): VkPushDescriptorSetWithTemplateInfo;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkPushDescriptorSetWithTemplateInfo;
    sType(): number;
    sType(arg0: number): VkPushDescriptorSetWithTemplateInfo;
    sType$Default(): VkPushDescriptorSetWithTemplateInfo;
    set(): number;
    set(arg0: number): VkPushDescriptorSetWithTemplateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkPushDescriptorSetWithTemplateInfo;
    set(arg0: VkPushDescriptorSetWithTemplateInfo): VkPushDescriptorSetWithTemplateInfo;
    sizeof(): number;
}