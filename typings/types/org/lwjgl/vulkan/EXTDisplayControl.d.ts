import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceEventInfoEXT } from '../../../org/lwjgl/vulkan/VkDeviceEventInfoEXT.d.ts'
import type { VkDisplayEventInfoEXT } from '../../../org/lwjgl/vulkan/VkDisplayEventInfoEXT.d.ts'
import type { VkDisplayPowerInfoEXT } from '../../../org/lwjgl/vulkan/VkDisplayPowerInfoEXT.d.ts'
export class EXTDisplayControl extends Object {
    static VK_DEVICE_EVENT_TYPE_DISPLAY_HOTPLUG_EXT: number;
    static VK_DISPLAY_EVENT_TYPE_FIRST_PIXEL_OUT_EXT: number;
    static VK_DISPLAY_POWER_STATE_OFF_EXT: number;
    static VK_DISPLAY_POWER_STATE_ON_EXT: number;
    static VK_DISPLAY_POWER_STATE_SUSPEND_EXT: number;
    static VK_EXT_DISPLAY_CONTROL_EXTENSION_NAME: string;
    static VK_EXT_DISPLAY_CONTROL_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DEVICE_EVENT_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DISPLAY_EVENT_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DISPLAY_POWER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_COUNTER_CREATE_INFO_EXT: number;
    static nvkDisplayPowerControlEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetSwapchainCounterEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkRegisterDeviceEventEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkRegisterDisplayEventEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static vkDisplayPowerControlEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkDisplayPowerInfoEXT): number;
    static vkGetSwapchainCounterEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): number;
    static vkGetSwapchainCounterEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static vkRegisterDeviceEventEXT(paramarg0: VkDevice, paramarg1: VkDeviceEventInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkRegisterDeviceEventEXT(paramarg0: VkDevice, paramarg1: VkDeviceEventInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkRegisterDisplayEventEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkDisplayEventInfoEXT, paramarg3: VkAllocationCallbacks, paramarg4: LongBuffer): number;
    static vkRegisterDisplayEventEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkDisplayEventInfoEXT, paramarg3: VkAllocationCallbacks, paramarg4: number[]): number;
    constructor()
}