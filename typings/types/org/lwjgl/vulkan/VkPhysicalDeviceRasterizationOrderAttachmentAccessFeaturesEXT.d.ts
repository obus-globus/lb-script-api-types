import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT extends Struct<VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RASTERIZATIONORDERCOLORATTACHMENTACCESS: number;
    static RASTERIZATIONORDERDEPTHATTACHMENTACCESS: number;
    static RASTERIZATIONORDERSTENCILATTACHMENTACCESS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrasterizationOrderColorAttachmentAccess(paramarg0: number): number;
    static nrasterizationOrderColorAttachmentAccess(paramarg0: number, paramarg1: number): void;
    static nrasterizationOrderDepthAttachmentAccess(paramarg0: number): number;
    static nrasterizationOrderDepthAttachmentAccess(paramarg0: number, paramarg1: number): void;
    static nrasterizationOrderStencilAttachmentAccess(paramarg0: number): number;
    static nrasterizationOrderStencilAttachmentAccess(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    rasterizationOrderColorAttachmentAccess(): boolean;
    rasterizationOrderColorAttachmentAccess(arg0: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    rasterizationOrderDepthAttachmentAccess(): boolean;
    rasterizationOrderDepthAttachmentAccess(arg0: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    rasterizationOrderStencilAttachmentAccess(): boolean;
    rasterizationOrderStencilAttachmentAccess(arg0: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    sType$Default(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    set(arg0: VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    sizeof(): number;
}