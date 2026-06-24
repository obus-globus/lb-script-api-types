import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSampleLocationsInfoEXT } from '../../../org/lwjgl/vulkan/VkSampleLocationsInfoEXT.d.ts'
export class VkAttachmentSampleLocationsEXT extends Struct<VkAttachmentSampleLocationsEXT> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTINDEX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLELOCATIONSINFO: number;
    static SIZEOF: number;
    static calloc(): VkAttachmentSampleLocationsEXT;
    static calloc(paramarg0: MemoryStack): VkAttachmentSampleLocationsEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAttachmentSampleLocationsEXT;
    static create(paramarg0: number): VkAttachmentSampleLocationsEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentSampleLocationsEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAttachmentSampleLocationsEXT;
    static malloc(paramarg0: MemoryStack): VkAttachmentSampleLocationsEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentIndex(paramarg0: number): number;
    static nattachmentIndex(paramarg0: number, paramarg1: number): void;
    static nsampleLocationsInfo(paramarg0: number): VkSampleLocationsInfoEXT;
    static nsampleLocationsInfo(paramarg0: number, paramarg1: VkSampleLocationsInfoEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentIndex(): number;
    attachmentIndex(arg0: number): VkAttachmentSampleLocationsEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAttachmentSampleLocationsEXT;
    sampleLocationsInfo(): VkSampleLocationsInfoEXT;
    sampleLocationsInfo(arg0: (param0: VkSampleLocationsInfoEXT) => void): VkAttachmentSampleLocationsEXT;
    sampleLocationsInfo(arg0: VkSampleLocationsInfoEXT): VkAttachmentSampleLocationsEXT;
    set(arg0: number, arg1: VkSampleLocationsInfoEXT): VkAttachmentSampleLocationsEXT;
    set(arg0: VkAttachmentSampleLocationsEXT): VkAttachmentSampleLocationsEXT;
    sizeof(): number;
}