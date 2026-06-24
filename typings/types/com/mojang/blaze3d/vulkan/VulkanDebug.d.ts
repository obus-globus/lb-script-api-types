import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkInstance } from '../../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkInstanceCreateInfo } from '../../../../org/lwjgl/vulkan/VkInstanceCreateInfo.d.ts'
export interface VulkanDebug extends Object {
    beginDebugGroup(buffer: VkCommandBuffer, label: () => string): void;
    chainCreateInfo(instanceCreateInfo: VkInstanceCreateInfo, stack: MemoryStack): void;
    destroy(instance: VkInstance): void;
    enabled(): boolean;
    endDebugGroup(buffer: VkCommandBuffer): void;
    setObjectName(device: VkDevice, objectType: number, objectHandle: number, label: () => string): void;
    setObjectName(device: VkDevice, objectType: number, objectHandle: number, label: string): void;
    setup(vkInstance: VkInstance): void;
}