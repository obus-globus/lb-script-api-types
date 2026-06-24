import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassCreationFeedbackInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassCreationFeedbackInfoEXT.d.ts'
export class VkRenderPassCreationFeedbackCreateInfoEXT extends Struct<VkRenderPassCreationFeedbackCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRENDERPASSFEEDBACK: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassCreationFeedbackCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkRenderPassCreationFeedbackCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassCreationFeedbackCreateInfoEXT;
    static create(paramarg0: number): VkRenderPassCreationFeedbackCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassCreationFeedbackCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassCreationFeedbackCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkRenderPassCreationFeedbackCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRenderPassFeedback(paramarg0: number): VkRenderPassCreationFeedbackInfoEXT;
    static npRenderPassFeedback(paramarg0: number, paramarg1: VkRenderPassCreationFeedbackInfoEXT): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassCreationFeedbackCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkRenderPassCreationFeedbackCreateInfoEXT;
    pRenderPassFeedback(): VkRenderPassCreationFeedbackInfoEXT;
    pRenderPassFeedback(arg0: VkRenderPassCreationFeedbackInfoEXT): VkRenderPassCreationFeedbackCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkRenderPassCreationFeedbackCreateInfoEXT;
    sType$Default(): VkRenderPassCreationFeedbackCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: VkRenderPassCreationFeedbackInfoEXT): VkRenderPassCreationFeedbackCreateInfoEXT;
    set(arg0: VkRenderPassCreationFeedbackCreateInfoEXT): VkRenderPassCreationFeedbackCreateInfoEXT;
    sizeof(): number;
}