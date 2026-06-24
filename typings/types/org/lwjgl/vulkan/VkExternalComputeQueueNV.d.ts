import type { DispatchableHandleDevice } from '../../../org/lwjgl/vulkan/DispatchableHandleDevice.d.ts'
import type { VKCapabilitiesInstance } from '../../../org/lwjgl/vulkan/VKCapabilitiesInstance.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class VkExternalComputeQueueNV extends DispatchableHandleDevice {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: number, arg1: VkDevice)
    readonly device: VkDevice;
    getCapabilitiesInstance(): VKCapabilitiesInstance;
    getDevice(): VkDevice;
}