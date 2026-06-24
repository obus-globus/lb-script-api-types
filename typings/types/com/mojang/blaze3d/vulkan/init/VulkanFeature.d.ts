import type { VulkanPNextStruct } from '../../../../../com/mojang/blaze3d/vulkan/init/VulkanPNextStruct.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { VkPhysicalDeviceFeatures2 } from '../../../../../org/lwjgl/vulkan/VkPhysicalDeviceFeatures2.d.ts'
export class VulkanFeature extends Record {
    constructor(struct: VulkanPNextStruct, name: string, offset: number)
    // private name: string;
    // private offset: number;
    // private struct: VulkanPNextStruct;
    equals(o: Object | null): boolean;
    get(pNextChain: number): boolean;
    get(features2: VkPhysicalDeviceFeatures2): boolean;
    hashCode(): number;
    name(): string;
    offset(): number;
    // private set(pNextChain: number, value: boolean): boolean;
    set(pNextChain: number, value: boolean, stack: MemoryStack): void;
    set(features2: VkPhysicalDeviceFeatures2, value: boolean): boolean;
    set(features2: VkPhysicalDeviceFeatures2, value: boolean, stack: MemoryStack): void;
    struct(): VulkanPNextStruct;
    toString(): string;
}