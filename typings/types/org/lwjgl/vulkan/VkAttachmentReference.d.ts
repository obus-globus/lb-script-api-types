import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAttachmentReference extends Struct<VkAttachmentReference> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYOUT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkAttachmentReference;
    static calloc(paramarg0: MemoryStack): VkAttachmentReference;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAttachmentReference;
    static create(paramarg0: number): VkAttachmentReference;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentReference;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAttachmentReference;
    static malloc(paramarg0: MemoryStack): VkAttachmentReference;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachment(paramarg0: number): number;
    static nattachment(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachment(): number;
    attachment(arg0: number): VkAttachmentReference;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAttachmentReference;
    layout(): number;
    layout(arg0: number): VkAttachmentReference;
    set(arg0: number, arg1: number): VkAttachmentReference;
    set(arg0: VkAttachmentReference): VkAttachmentReference;
    sizeof(): number;
}