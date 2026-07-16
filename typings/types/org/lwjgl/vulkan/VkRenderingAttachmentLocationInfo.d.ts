import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRenderingAttachmentLocationInfo extends Struct<VkRenderingAttachmentLocationInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static PCOLORATTACHMENTLOCATIONS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderingAttachmentLocationInfo;
    static calloc(paramarg0: MemoryStack): VkRenderingAttachmentLocationInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderingAttachmentLocationInfo;
    static create(paramarg0: number): VkRenderingAttachmentLocationInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingAttachmentLocationInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderingAttachmentLocationInfo;
    static malloc(paramarg0: MemoryStack): VkRenderingAttachmentLocationInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentLocations(paramarg0: number): IntBuffer;
    static npColorAttachmentLocations(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkRenderingAttachmentLocationInfo;
    create(arg0: number, arg1: ByteBuffer): VkRenderingAttachmentLocationInfo;
    pColorAttachmentLocations(): IntBuffer;
    pColorAttachmentLocations(arg0: IntBuffer): VkRenderingAttachmentLocationInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderingAttachmentLocationInfo;
    sType(): number;
    sType(arg0: number): VkRenderingAttachmentLocationInfo;
    sType$Default(): VkRenderingAttachmentLocationInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkRenderingAttachmentLocationInfo;
    set(arg0: VkRenderingAttachmentLocationInfo): VkRenderingAttachmentLocationInfo;
    sizeof(): number;
}