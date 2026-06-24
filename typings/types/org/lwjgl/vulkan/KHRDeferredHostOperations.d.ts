import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRDeferredHostOperations extends Object {
    static VK_KHR_DEFERRED_HOST_OPERATIONS_EXTENSION_NAME: string;
    static VK_KHR_DEFERRED_HOST_OPERATIONS_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_DEFERRED_OPERATION_KHR: number;
    static VK_OPERATION_DEFERRED_KHR: number;
    static VK_OPERATION_NOT_DEFERRED_KHR: number;
    static VK_THREAD_DONE_KHR: number;
    static VK_THREAD_IDLE_KHR: number;
    static nvkCreateDeferredOperationKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkDestroyDeferredOperationKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCreateDeferredOperationKHR(paramarg0: VkDevice, paramarg1: VkAllocationCallbacks, paramarg2: LongBuffer): number;
    static vkCreateDeferredOperationKHR(paramarg0: VkDevice, paramarg1: VkAllocationCallbacks, paramarg2: number[]): number;
    static vkDeferredOperationJoinKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkDestroyDeferredOperationKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetDeferredOperationMaxConcurrencyKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetDeferredOperationResultKHR(paramarg0: VkDevice, paramarg1: number): number;
    constructor()
}