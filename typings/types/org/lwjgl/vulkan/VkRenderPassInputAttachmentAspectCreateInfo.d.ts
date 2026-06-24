import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderPassInputAttachmentAspectCreateInfo extends Struct<VkRenderPassInputAttachmentAspectCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ASPECTREFERENCECOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PASPECTREFERENCES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassInputAttachmentAspectCreateInfo;
    static calloc(paramarg0: MemoryStack): VkRenderPassInputAttachmentAspectCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassInputAttachmentAspectCreateInfo;
    static create(paramarg0: number): VkRenderPassInputAttachmentAspectCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassInputAttachmentAspectCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassInputAttachmentAspectCreateInfo;
    static malloc(paramarg0: MemoryStack): VkRenderPassInputAttachmentAspectCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectReferenceCount(paramarg0: number): number;
    static naspectReferenceCount(paramarg0: number, paramarg1: number): void;
    static npAspectReferences(paramarg0: number): (Object | null)[];
    static npAspectReferences(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectReferenceCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassInputAttachmentAspectCreateInfo;
    pAspectReferences(): (Object | null)[];
    pAspectReferences(arg0: (Object | null)[]): VkRenderPassInputAttachmentAspectCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderPassInputAttachmentAspectCreateInfo;
    sType(): number;
    sType(arg0: number): VkRenderPassInputAttachmentAspectCreateInfo;
    sType$Default(): VkRenderPassInputAttachmentAspectCreateInfo;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkRenderPassInputAttachmentAspectCreateInfo;
    set(arg0: VkRenderPassInputAttachmentAspectCreateInfo): VkRenderPassInputAttachmentAspectCreateInfo;
    sizeof(): number;
}