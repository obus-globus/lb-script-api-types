import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderingInputAttachmentIndexInfo extends Struct<VkRenderingInputAttachmentIndexInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static PCOLORATTACHMENTINPUTINDICES: number;
    static PDEPTHINPUTATTACHMENTINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTENCILINPUTATTACHMENTINDEX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderingInputAttachmentIndexInfo;
    static calloc(paramarg0: MemoryStack): VkRenderingInputAttachmentIndexInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderingInputAttachmentIndexInfo;
    static create(paramarg0: number): VkRenderingInputAttachmentIndexInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingInputAttachmentIndexInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderingInputAttachmentIndexInfo;
    static malloc(paramarg0: MemoryStack): VkRenderingInputAttachmentIndexInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentInputIndices(paramarg0: number): IntBuffer;
    static npColorAttachmentInputIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npDepthInputAttachmentIndex(paramarg0: number, paramarg1: number): IntBuffer;
    static npDepthInputAttachmentIndex(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStencilInputAttachmentIndex(paramarg0: number, paramarg1: number): IntBuffer;
    static npStencilInputAttachmentIndex(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkRenderingInputAttachmentIndexInfo;
    create(arg0: number, arg1: ByteBuffer): VkRenderingInputAttachmentIndexInfo;
    pColorAttachmentInputIndices(): IntBuffer;
    pColorAttachmentInputIndices(arg0: IntBuffer): VkRenderingInputAttachmentIndexInfo;
    pDepthInputAttachmentIndex(arg0: IntBuffer): VkRenderingInputAttachmentIndexInfo;
    pDepthInputAttachmentIndex(arg0: number): IntBuffer;
    pNext(): number;
    pNext(arg0: number): VkRenderingInputAttachmentIndexInfo;
    pStencilInputAttachmentIndex(arg0: IntBuffer): VkRenderingInputAttachmentIndexInfo;
    pStencilInputAttachmentIndex(arg0: number): IntBuffer;
    sType(): number;
    sType(arg0: number): VkRenderingInputAttachmentIndexInfo;
    sType$Default(): VkRenderingInputAttachmentIndexInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer, arg4: IntBuffer, arg5: IntBuffer): VkRenderingInputAttachmentIndexInfo;
    set(arg0: VkRenderingInputAttachmentIndexInfo): VkRenderingInputAttachmentIndexInfo;
    sizeof(): number;
}