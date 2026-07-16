import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderingAttachmentLocationInfo } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentLocationInfo.d.ts'
export class VkRenderingAttachmentLocationInfoKHR extends VkRenderingAttachmentLocationInfo {
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
    static calloc(): VkRenderingAttachmentLocationInfoKHR;
    static calloc(paramarg0: MemoryStack): VkRenderingAttachmentLocationInfoKHR;
    static create(): VkRenderingAttachmentLocationInfo;
    static create(paramarg0: number): VkRenderingAttachmentLocationInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkRenderingAttachmentLocationInfoKHR;
    static create(paramarg0: number): VkRenderingAttachmentLocationInfoKHR;
    static createSafe(paramarg0: number): VkRenderingAttachmentLocationInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderingAttachmentLocationInfoKHR;
    static malloc(): VkRenderingAttachmentLocationInfo;
    static malloc(paramarg0: MemoryStack): VkRenderingAttachmentLocationInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkRenderingAttachmentLocationInfoKHR;
    static malloc(paramarg0: MemoryStack): VkRenderingAttachmentLocationInfoKHR;
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
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkRenderingAttachmentLocationInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkRenderingAttachmentLocationInfoKHR;
    pColorAttachmentLocations(): IntBuffer;
    pColorAttachmentLocations(arg0: IntBuffer): VkRenderingAttachmentLocationInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkRenderingAttachmentLocationInfoKHR;
    sType(): number;
    sType(arg0: number): VkRenderingAttachmentLocationInfoKHR;
    sType$Default(): VkRenderingAttachmentLocationInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkRenderingAttachmentLocationInfoKHR;
    set(arg0: VkRenderingAttachmentLocationInfo): VkRenderingAttachmentLocationInfo;
    set(arg0: VkRenderingAttachmentLocationInfoKHR): VkRenderingAttachmentLocationInfoKHR;
}