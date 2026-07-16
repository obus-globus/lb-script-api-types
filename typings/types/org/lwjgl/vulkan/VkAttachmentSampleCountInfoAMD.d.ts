import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAttachmentSampleCountInfoAMD extends Struct<VkAttachmentSampleCountInfoAMD> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static DEPTHSTENCILATTACHMENTSAMPLES: number;
    static PCOLORATTACHMENTSAMPLES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAttachmentSampleCountInfoAMD;
    static calloc(paramarg0: MemoryStack): VkAttachmentSampleCountInfoAMD;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAttachmentSampleCountInfoAMD;
    static create(paramarg0: number): VkAttachmentSampleCountInfoAMD;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentSampleCountInfoAMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAttachmentSampleCountInfoAMD;
    static malloc(paramarg0: MemoryStack): VkAttachmentSampleCountInfoAMD;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static ndepthStencilAttachmentSamples(paramarg0: number): number;
    static ndepthStencilAttachmentSamples(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentSamples(paramarg0: number): IntBuffer;
    static npColorAttachmentSamples(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkAttachmentSampleCountInfoAMD;
    create(arg0: number, arg1: ByteBuffer): VkAttachmentSampleCountInfoAMD;
    depthStencilAttachmentSamples(): number;
    depthStencilAttachmentSamples(arg0: number): VkAttachmentSampleCountInfoAMD;
    pColorAttachmentSamples(): IntBuffer;
    pColorAttachmentSamples(arg0: IntBuffer): VkAttachmentSampleCountInfoAMD;
    pNext(): number;
    pNext(arg0: number): VkAttachmentSampleCountInfoAMD;
    sType(): number;
    sType(arg0: number): VkAttachmentSampleCountInfoAMD;
    sType$Default(): VkAttachmentSampleCountInfoAMD;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer, arg4: number): VkAttachmentSampleCountInfoAMD;
    set(arg0: VkAttachmentSampleCountInfoAMD): VkAttachmentSampleCountInfoAMD;
    sizeof(): number;
}