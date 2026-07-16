import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceInlineUniformBlockProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceInlineUniformBlockProperties.d.ts'
export class VkPhysicalDeviceInlineUniformBlockPropertiesEXT extends VkPhysicalDeviceInlineUniformBlockProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDESCRIPTORSETINLINEUNIFORMBLOCKS: number;
    static MAXDESCRIPTORSETUPDATEAFTERBINDINLINEUNIFORMBLOCKS: number;
    static MAXINLINEUNIFORMBLOCKSIZE: number;
    static MAXPERSTAGEDESCRIPTORINLINEUNIFORMBLOCKS: number;
    static MAXPERSTAGEDESCRIPTORUPDATEAFTERBINDINLINEUNIFORMBLOCKS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceInlineUniformBlockProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceInlineUniformBlockProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static create(): VkPhysicalDeviceInlineUniformBlockProperties;
    static create(paramarg0: number): VkPhysicalDeviceInlineUniformBlockProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static createSafe(paramarg0: number): VkPhysicalDeviceInlineUniformBlockProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static malloc(): VkPhysicalDeviceInlineUniformBlockProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceInlineUniformBlockProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    static nmaxDescriptorSetInlineUniformBlocks(paramarg0: number): number;
    static nmaxDescriptorSetUpdateAfterBindInlineUniformBlocks(paramarg0: number): number;
    static nmaxInlineUniformBlockSize(paramarg0: number): number;
    static nmaxPerStageDescriptorInlineUniformBlocks(paramarg0: number): number;
    static nmaxPerStageDescriptorUpdateAfterBindInlineUniformBlocks(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    sType$Default(): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
    set(arg0: VkPhysicalDeviceInlineUniformBlockProperties): VkPhysicalDeviceInlineUniformBlockProperties;
    set(arg0: VkPhysicalDeviceInlineUniformBlockPropertiesEXT): VkPhysicalDeviceInlineUniformBlockPropertiesEXT;
}