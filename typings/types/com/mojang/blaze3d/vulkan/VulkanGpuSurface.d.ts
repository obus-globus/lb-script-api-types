import type { CommandEncoderBackend } from '../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { GpuSurface$Configuration } from '../../../../com/mojang/blaze3d/systems/GpuSurface$Configuration.d.ts'
import type { GpuSurface$PresentMode } from '../../../../com/mojang/blaze3d/systems/GpuSurface$PresentMode.d.ts'
import type { GpuSurfaceBackend } from '../../../../com/mojang/blaze3d/systems/GpuSurfaceBackend.d.ts'
import type { SurfaceException } from '../../../../com/mojang/blaze3d/systems/SurfaceException.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkQueue } from '../../../../org/lwjgl/vulkan/VkQueue.d.ts'
import type { VkSurfaceFormatKHR } from '../../../../org/lwjgl/vulkan/VkSurfaceFormatKHR.d.ts'
export class VulkanGpuSurface extends Object implements GpuSurfaceBackend {
    static throwIfFailure(paramresult: number, parammessage: string): void;
    constructor(device: VulkanDevice, windowHandle: number)
    // private acquireSemaphores: number[];
    // private currentAcquireSemaphore: number;
    // private currentImageIndex: number;
    // private device: VulkanDevice;
    // private eatenException: SurfaceException;
    // private presentQueue: VkQueue;
    // private presentSemaphores: number[];
    // private supportedPresentModes: GpuSurface$PresentMode[];
    // private surface: number;
    // private swapchain: number;
    // private swapchainHeight: number;
    // private swapchainImageFormat: number;
    // private swapchainImages: (Object | null)[];
    // private swapchainOutOfDate: boolean;
    // private swapchainSuboptimal: boolean;
    // private swapchainWidth: number;
    acquireNextTexture(): void;
    blitFromTexture(commandEncoder: CommandEncoderBackend, textureView: GpuTextureView): void;
    close(): void;
    configure(config: GpuSurface$Configuration): void;
    // private convertPresentModes(presentModes: IntBuffer): GpuSurface$PresentMode[];
    // private destroySwapchain(): void;
    isSuboptimal(): boolean;
    pickSwapchainSurfaceFormat(formats: (Object | null)[]): VkSurfaceFormatKHR;
    present(): void;
    supportedPresentModes(): GpuSurface$PresentMode[];
}