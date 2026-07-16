import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMaintenance7PropertiesKHR extends Struct<VkPhysicalDeviceMaintenance7PropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDESCRIPTORSETTOTALBUFFERSDYNAMIC: number;
    static MAXDESCRIPTORSETTOTALSTORAGEBUFFERSDYNAMIC: number;
    static MAXDESCRIPTORSETTOTALUNIFORMBUFFERSDYNAMIC: number;
    static MAXDESCRIPTORSETUPDATEAFTERBINDTOTALBUFFERSDYNAMIC: number;
    static MAXDESCRIPTORSETUPDATEAFTERBINDTOTALSTORAGEBUFFERSDYNAMIC: number;
    static MAXDESCRIPTORSETUPDATEAFTERBINDTOTALUNIFORMBUFFERSDYNAMIC: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROBUSTFRAGMENTSHADINGRATEATTACHMENTACCESS: number;
    static SEPARATEDEPTHSTENCILATTACHMENTACCESS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance7PropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDescriptorSetTotalBuffersDynamic(paramarg0: number): number;
    static nmaxDescriptorSetTotalStorageBuffersDynamic(paramarg0: number): number;
    static nmaxDescriptorSetTotalUniformBuffersDynamic(paramarg0: number): number;
    static nmaxDescriptorSetUpdateAfterBindTotalBuffersDynamic(paramarg0: number): number;
    static nmaxDescriptorSetUpdateAfterBindTotalStorageBuffersDynamic(paramarg0: number): number;
    static nmaxDescriptorSetUpdateAfterBindTotalUniformBuffersDynamic(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrobustFragmentShadingRateAttachmentAccess(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nseparateDepthStencilAttachmentAccess(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance7PropertiesKHR;
    maxDescriptorSetTotalBuffersDynamic(): number;
    maxDescriptorSetTotalStorageBuffersDynamic(): number;
    maxDescriptorSetTotalUniformBuffersDynamic(): number;
    maxDescriptorSetUpdateAfterBindTotalBuffersDynamic(): number;
    maxDescriptorSetUpdateAfterBindTotalStorageBuffersDynamic(): number;
    maxDescriptorSetUpdateAfterBindTotalUniformBuffersDynamic(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance7PropertiesKHR;
    robustFragmentShadingRateAttachmentAccess(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance7PropertiesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance7PropertiesKHR;
    separateDepthStencilAttachmentAccess(): boolean;
    set(arg0: number, arg1: number): VkPhysicalDeviceMaintenance7PropertiesKHR;
    set(arg0: VkPhysicalDeviceMaintenance7PropertiesKHR): VkPhysicalDeviceMaintenance7PropertiesKHR;
    sizeof(): number;
}