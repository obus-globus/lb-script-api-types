import type { VulkanDebug } from '../../../../com/mojang/blaze3d/vulkan/VulkanDebug.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkInstance } from '../../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkInstanceCreateInfo } from '../../../../org/lwjgl/vulkan/VkInstanceCreateInfo.d.ts'
export class VulkanDebug$Enabled extends Object implements VulkanDebug {
    static MESSAGE_TYPE_BITMASK: number;
    static create(paramverbosity: number, paramwantsDebugLabels: boolean, paramavailableExtensions: string[], paramenabledExtensions: string[]): VulkanDebug;
    constructor(verbosity: number, wantsDebugLabels: boolean)
    // private messenger: number;
    // private severityBitmask: number;
    // private wantsDebugLabels: boolean;
    beginDebugGroup(buffer: VkCommandBuffer, label: () => string): void;
    chainCreateInfo(instanceCreateInfo: VkInstanceCreateInfo, stack: MemoryStack): void;
    destroy(instance: VkInstance): void;
    enabled(): boolean;
    endDebugGroup(buffer: VkCommandBuffer): void;
    // private onDebugMessage(messageSeverity: number, messageTypes: number, pCallbackData: number, pUserData: number): number;
    setObjectName(device: VkDevice, objectType: number, objectHandle: number, label: () => string): void;
    setObjectName(device: VkDevice, objectType: number, objectHandle: number, label: string): void;
    setup(vkInstance: VkInstance): void;
}