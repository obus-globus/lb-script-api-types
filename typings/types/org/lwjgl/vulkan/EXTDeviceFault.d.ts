import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceFaultCountsEXT } from '../../../org/lwjgl/vulkan/VkDeviceFaultCountsEXT.d.ts'
import type { VkDeviceFaultInfoEXT } from '../../../org/lwjgl/vulkan/VkDeviceFaultInfoEXT.d.ts'
export class EXTDeviceFault extends Object {
    static VK_DEVICE_FAULT_ADDRESS_TYPE_EXECUTE_INVALID_EXT: number;
    static VK_DEVICE_FAULT_ADDRESS_TYPE_INSTRUCTION_POINTER_FAULT_EXT: number;
    static VK_DEVICE_FAULT_ADDRESS_TYPE_INSTRUCTION_POINTER_INVALID_EXT: number;
    static VK_DEVICE_FAULT_ADDRESS_TYPE_INSTRUCTION_POINTER_UNKNOWN_EXT: number;
    static VK_DEVICE_FAULT_ADDRESS_TYPE_NONE_EXT: number;
    static VK_DEVICE_FAULT_ADDRESS_TYPE_READ_INVALID_EXT: number;
    static VK_DEVICE_FAULT_ADDRESS_TYPE_WRITE_INVALID_EXT: number;
    static VK_DEVICE_FAULT_VENDOR_BINARY_HEADER_VERSION_ONE_EXT: number;
    static VK_EXT_DEVICE_FAULT_EXTENSION_NAME: string;
    static VK_EXT_DEVICE_FAULT_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DEVICE_FAULT_COUNTS_EXT: number;
    static VK_STRUCTURE_TYPE_DEVICE_FAULT_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FAULT_FEATURES_EXT: number;
    static nvkGetDeviceFaultInfoEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetDeviceFaultInfoEXT(paramarg0: VkDevice, paramarg1: VkDeviceFaultCountsEXT, paramarg2: VkDeviceFaultInfoEXT): number;
    constructor()
}