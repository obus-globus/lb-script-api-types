import type { DispatchableHandleInstance } from '../../../org/lwjgl/vulkan/DispatchableHandleInstance.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
export class VkPhysicalDevice extends DispatchableHandleInstance {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: number, arg1: VkInstance)
    readonly instance: VkInstance;
    getInstance(): VkInstance;
}