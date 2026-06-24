import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { VkPhysicalDeviceFeatures2 } from '../../../../../org/lwjgl/vulkan/VkPhysicalDeviceFeatures2.d.ts'
import type { VkPhysicalDeviceProperties2 } from '../../../../../org/lwjgl/vulkan/VkPhysicalDeviceProperties2.d.ts'
export class VulkanPNextStruct extends Record {
    constructor(sType: number, structSize: number)
    // private sType: number;
    // private structSize: number;
    equals(o: Object | null): boolean;
    findOrCreateStructInPNextChain(pNextChain: number, stack: MemoryStack): number;
    findOrCreateStructInPNextChain(features2: VkPhysicalDeviceFeatures2, stack: MemoryStack): number;
    findOrCreateStructInPNextChain(properties2: VkPhysicalDeviceProperties2, stack: MemoryStack): number;
    findStructInPNextChain(pNextChain: number): number;
    hashCode(): number;
    sType(): number;
    structSize(): number;
    toString(): string;
}