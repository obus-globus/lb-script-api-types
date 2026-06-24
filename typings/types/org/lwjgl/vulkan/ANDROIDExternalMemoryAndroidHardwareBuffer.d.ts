import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAndroidHardwareBufferPropertiesANDROID } from '../../../org/lwjgl/vulkan/VkAndroidHardwareBufferPropertiesANDROID.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMemoryGetAndroidHardwareBufferInfoANDROID } from '../../../org/lwjgl/vulkan/VkMemoryGetAndroidHardwareBufferInfoANDROID.d.ts'
export class ANDROIDExternalMemoryAndroidHardwareBuffer extends Object {
    static VK_ANDROID_EXTERNAL_MEMORY_ANDROID_HARDWARE_BUFFER_EXTENSION_NAME: string;
    static VK_ANDROID_EXTERNAL_MEMORY_ANDROID_HARDWARE_BUFFER_SPEC_VERSION: number;
    static VK_EXTERNAL_MEMORY_HANDLE_TYPE_ANDROID_HARDWARE_BUFFER_BIT_ANDROID: number;
    static VK_STRUCTURE_TYPE_ANDROID_HARDWARE_BUFFER_FORMAT_PROPERTIES_2_ANDROID: number;
    static VK_STRUCTURE_TYPE_ANDROID_HARDWARE_BUFFER_FORMAT_PROPERTIES_ANDROID: number;
    static VK_STRUCTURE_TYPE_ANDROID_HARDWARE_BUFFER_PROPERTIES_ANDROID: number;
    static VK_STRUCTURE_TYPE_ANDROID_HARDWARE_BUFFER_USAGE_ANDROID: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_FORMAT_ANDROID: number;
    static VK_STRUCTURE_TYPE_IMPORT_ANDROID_HARDWARE_BUFFER_INFO_ANDROID: number;
    static VK_STRUCTURE_TYPE_MEMORY_GET_ANDROID_HARDWARE_BUFFER_INFO_ANDROID: number;
    static nvkGetAndroidHardwareBufferPropertiesANDROID(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetMemoryAndroidHardwareBufferANDROID(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetAndroidHardwareBufferPropertiesANDROID(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAndroidHardwareBufferPropertiesANDROID): number;
    static vkGetMemoryAndroidHardwareBufferANDROID(paramarg0: VkDevice, paramarg1: VkMemoryGetAndroidHardwareBufferInfoANDROID, paramarg2: PointerBuffer): number;
    constructor()
}