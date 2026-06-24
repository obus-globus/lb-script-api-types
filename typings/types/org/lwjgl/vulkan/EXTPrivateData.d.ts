import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPrivateDataSlotCreateInfo } from '../../../org/lwjgl/vulkan/VkPrivateDataSlotCreateInfo.d.ts'
export class EXTPrivateData extends Object {
    static VK_EXT_PRIVATE_DATA_EXTENSION_NAME: string;
    static VK_EXT_PRIVATE_DATA_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_PRIVATE_DATA_SLOT_EXT: number;
    static VK_STRUCTURE_TYPE_DEVICE_PRIVATE_DATA_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PRIVATE_DATA_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PRIVATE_DATA_SLOT_CREATE_INFO_EXT: number;
    static nvkCreatePrivateDataSlotEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyPrivateDataSlotEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPrivateDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCreatePrivateDataSlotEXT(paramarg0: VkDevice, paramarg1: VkPrivateDataSlotCreateInfo, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreatePrivateDataSlotEXT(paramarg0: VkDevice, paramarg1: VkPrivateDataSlotCreateInfo, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyPrivateDataSlotEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetPrivateDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: LongBuffer): void;
    static vkGetPrivateDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static vkSetPrivateDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}