import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT.d.ts'
export class VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM extends VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT {
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
    static calloc(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static create(paramarg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    rasterizationOrderColorAttachmentAccess(): boolean;
    rasterizationOrderColorAttachmentAccess(arg0: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    rasterizationOrderDepthAttachmentAccess(): boolean;
    rasterizationOrderDepthAttachmentAccess(arg0: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    rasterizationOrderStencilAttachmentAccess(): boolean;
    rasterizationOrderStencilAttachmentAccess(arg0: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    sType$Default(): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    set(arg0: VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM;
    set(arg0: VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT): VkPhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;
}