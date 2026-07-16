import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT extends Struct<VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTFEEDBACKLOOPLAYOUT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentFeedbackLoopLayout(paramarg0: number): number;
    static nattachmentFeedbackLoopLayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentFeedbackLoopLayout(): boolean;
    attachmentFeedbackLoopLayout(arg0: boolean): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    sType$Default(): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    set(arg0: VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT): VkPhysicalDeviceAttachmentFeedbackLoopLayoutFeaturesEXT;
    sizeof(): number;
}