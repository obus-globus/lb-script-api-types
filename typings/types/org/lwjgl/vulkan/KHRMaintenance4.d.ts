import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceBufferMemoryRequirements } from '../../../org/lwjgl/vulkan/VkDeviceBufferMemoryRequirements.d.ts'
import type { VkDeviceImageMemoryRequirements } from '../../../org/lwjgl/vulkan/VkDeviceImageMemoryRequirements.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
export class KHRMaintenance4 extends Object {
    static VK_IMAGE_ASPECT_NONE_KHR: number;
    static VK_KHR_MAINTENANCE_4_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE_4_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DEVICE_BUFFER_MEMORY_REQUIREMENTS_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_IMAGE_MEMORY_REQUIREMENTS_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_4_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_4_PROPERTIES_KHR: number;
    static nvkGetDeviceBufferMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDeviceImageMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDeviceImageSparseMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkGetDeviceBufferMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: VkDeviceBufferMemoryRequirements, paramarg2: VkMemoryRequirements2): void;
    static vkGetDeviceImageMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: VkDeviceImageMemoryRequirements, paramarg2: VkMemoryRequirements2): void;
    static vkGetDeviceImageSparseMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: VkDeviceImageMemoryRequirements, paramarg2: number[], paramarg3: (Object | null)[]): void;
    static vkGetDeviceImageSparseMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: VkDeviceImageMemoryRequirements, paramarg2: IntBuffer, paramarg3: (Object | null)[]): void;
    constructor()
}