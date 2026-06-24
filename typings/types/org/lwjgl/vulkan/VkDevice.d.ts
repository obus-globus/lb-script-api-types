import type { DispatchableHandleDevice } from '../../../org/lwjgl/vulkan/DispatchableHandleDevice.d.ts'
import type { VKCapabilitiesInstance } from '../../../org/lwjgl/vulkan/VKCapabilitiesInstance.d.ts'
import type { VkDeviceCreateInfo } from '../../../org/lwjgl/vulkan/VkDeviceCreateInfo.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class VkDevice extends DispatchableHandleDevice {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: number, arg1: VkPhysicalDevice, arg2: VkDeviceCreateInfo)
    constructor(arg0: number, arg1: VkPhysicalDevice, arg2: VkDeviceCreateInfo, arg3: number)
    readonly physicalDevice: VkPhysicalDevice;
    getCapabilitiesInstance(): VKCapabilitiesInstance;
    getPhysicalDevice(): VkPhysicalDevice;
}