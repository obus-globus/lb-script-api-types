import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class GLFWVulkan extends Object {
    static glfwCreateWindowSurface(paramarg0: VkInstance, paramarg1: number, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static glfwCreateWindowSurface(paramarg0: VkInstance, paramarg1: number, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static glfwGetInstanceProcAddress(paramarg0: VkInstance, paramarg1: CharSequence): number;
    static glfwGetInstanceProcAddress(paramarg0: VkInstance, paramarg1: ByteBuffer): number;
    static glfwGetPhysicalDevicePresentationSupport(paramarg0: VkInstance, paramarg1: VkPhysicalDevice, paramarg2: number): boolean;
    static glfwGetRequiredInstanceExtensions(): PointerBuffer;
    static glfwInitVulkanLoader(paramarg0: number): void;
    static glfwVulkanSupported(): boolean;
    static nglfwCreateWindowSurface(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nglfwGetInstanceProcAddress(paramarg0: number, paramarg1: number): number;
    static nglfwGetRequiredInstanceExtensions(paramarg0: number): number;
    static setPath(paramarg0: string): void;
    static setPath(paramarg0: (param0: ByteBuffer) => number): void;
    constructor()
}