import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceInlineUniformBlockProperties extends Struct<VkPhysicalDeviceInlineUniformBlockProperties> implements NativeResource {
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
    static create(): VkPhysicalDeviceInlineUniformBlockProperties;
    static create(paramarg0: number): VkPhysicalDeviceInlineUniformBlockProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceInlineUniformBlockProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceInlineUniformBlockProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceInlineUniformBlockProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceInlineUniformBlockProperties;
    maxDescriptorSetInlineUniformBlocks(): number;
    maxDescriptorSetUpdateAfterBindInlineUniformBlocks(): number;
    maxInlineUniformBlockSize(): number;
    maxPerStageDescriptorInlineUniformBlocks(): number;
    maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceInlineUniformBlockProperties;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceInlineUniformBlockProperties;
    sType$Default(): VkPhysicalDeviceInlineUniformBlockProperties;
    set(arg0: number, arg1: number): VkPhysicalDeviceInlineUniformBlockProperties;
    set(arg0: VkPhysicalDeviceInlineUniformBlockProperties): VkPhysicalDeviceInlineUniformBlockProperties;
    sizeof(): number;
}