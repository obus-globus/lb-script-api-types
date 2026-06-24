import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorUpdateTemplateCreateInfo extends Struct<VkDescriptorUpdateTemplateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORSETLAYOUT: number;
    static DESCRIPTORUPDATEENTRYCOUNT: number;
    static FLAGS: number;
    static PDESCRIPTORUPDATEENTRIES: number;
    static PIPELINEBINDPOINT: number;
    static PIPELINELAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SET: number;
    static SIZEOF: number;
    static STYPE: number;
    static TEMPLATETYPE: number;
    static calloc(): VkDescriptorUpdateTemplateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorUpdateTemplateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorUpdateTemplateCreateInfo;
    static create(paramarg0: number): VkDescriptorUpdateTemplateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorUpdateTemplateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorUpdateTemplateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorUpdateTemplateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorSetLayout(paramarg0: number): number;
    static ndescriptorSetLayout(paramarg0: number, paramarg1: number): void;
    static ndescriptorUpdateEntryCount(paramarg0: number): number;
    static ndescriptorUpdateEntryCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npDescriptorUpdateEntries(paramarg0: number): (Object | null)[];
    static npDescriptorUpdateEntries(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineBindPoint(paramarg0: number): number;
    static npipelineBindPoint(paramarg0: number, paramarg1: number): void;
    static npipelineLayout(paramarg0: number): number;
    static npipelineLayout(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nset(paramarg0: number): number;
    static nset(paramarg0: number, paramarg1: number): void;
    static ntemplateType(paramarg0: number): number;
    static ntemplateType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorUpdateTemplateCreateInfo;
    descriptorSetLayout(): number;
    descriptorSetLayout(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    descriptorUpdateEntryCount(): number;
    flags(): number;
    flags(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    pDescriptorUpdateEntries(): (Object | null)[];
    pDescriptorUpdateEntries(arg0: (Object | null)[]): VkDescriptorUpdateTemplateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    pipelineBindPoint(): number;
    pipelineBindPoint(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    pipelineLayout(): number;
    pipelineLayout(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    sType(): number;
    sType(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    sType$Default(): VkDescriptorUpdateTemplateCreateInfo;
    set(): number;
    set(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkDescriptorUpdateTemplateCreateInfo;
    set(arg0: VkDescriptorUpdateTemplateCreateInfo): VkDescriptorUpdateTemplateCreateInfo;
    sizeof(): number;
    templateType(): number;
    templateType(arg0: number): VkDescriptorUpdateTemplateCreateInfo;
}