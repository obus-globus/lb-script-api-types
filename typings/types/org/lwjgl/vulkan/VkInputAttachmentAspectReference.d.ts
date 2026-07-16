import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkInputAttachmentAspectReference extends Struct<VkInputAttachmentAspectReference> implements NativeResource {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INPUTATTACHMENTINDEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUBPASS: number;
    static calloc(): VkInputAttachmentAspectReference;
    static calloc(paramarg0: MemoryStack): VkInputAttachmentAspectReference;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkInputAttachmentAspectReference;
    static create(paramarg0: number): VkInputAttachmentAspectReference;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkInputAttachmentAspectReference;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkInputAttachmentAspectReference;
    static malloc(paramarg0: MemoryStack): VkInputAttachmentAspectReference;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static ninputAttachmentIndex(paramarg0: number): number;
    static ninputAttachmentIndex(paramarg0: number, paramarg1: number): void;
    static nsubpass(paramarg0: number): number;
    static nsubpass(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    aspectMask(arg0: number): VkInputAttachmentAspectReference;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkInputAttachmentAspectReference;
    inputAttachmentIndex(): number;
    inputAttachmentIndex(arg0: number): VkInputAttachmentAspectReference;
    set(arg0: number, arg1: number, arg2: number): VkInputAttachmentAspectReference;
    set(arg0: VkInputAttachmentAspectReference): VkInputAttachmentAspectReference;
    sizeof(): number;
    subpass(): number;
    subpass(arg0: number): VkInputAttachmentAspectReference;
}