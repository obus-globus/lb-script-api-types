import type { VulkanDebug } from '../../../../com/mojang/blaze3d/vulkan/VulkanDebug.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkInstance } from '../../../../org/lwjgl/vulkan/VkInstance.d.ts'
export class VulkanInstance extends Object implements AutoCloseable {
    constructor(debugVerbosity: number, wantsDebugLabels: boolean, validation: boolean)
    // private debug: VulkanDebug;
    readonly enabledExtensions: string[];
    // private vkInstance: VkInstance;
    close(): void;
    debug(): VulkanDebug;
    getEnabledExtensions(): string[];
    // private getSupportedInstanceExtensions(): string[];
    // private getSupportedValidationLayers(): string[];
    vkInstance(): VkInstance;
}