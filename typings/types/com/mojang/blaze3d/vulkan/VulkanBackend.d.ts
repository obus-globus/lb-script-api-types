import type { GLFWErrorCapture$Error } from '../../../../com/mojang/blaze3d/GLFWErrorCapture$Error.d.ts'
import type { GpuDebugOptions } from '../../../../com/mojang/blaze3d/shaders/GpuDebugOptions.d.ts'
import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { BackendCreationException } from '../../../../com/mojang/blaze3d/systems/BackendCreationException.d.ts'
import type { GpuBackend } from '../../../../com/mojang/blaze3d/systems/GpuBackend.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { VulkanFeature } from '../../../../com/mojang/blaze3d/vulkan/init/VulkanFeature.d.ts'
import type { VulkanPNextStruct } from '../../../../com/mojang/blaze3d/vulkan/init/VulkanPNextStruct.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class VulkanBackend extends Object implements GpuBackend {
    static DYNAMIC_RENDERING_FEATURES_STRUCT: VulkanPNextStruct;
    static MULTI_DRAW_FEATURES_STRUCT: VulkanPNextStruct;
    static REQUIRED_DEVICE_EXTENSIONS: string[];
    static REQUIRED_DEVICE_FEATURES: VulkanFeature[];
    static SYNC2_FEATURES_STRUCT: VulkanPNextStruct;
    static VERTEX_ATTRIB_DIVISOR_FEATURES_STRUCT: VulkanPNextStruct;
    static VK10_FEATURES_STRUCT: VulkanPNextStruct;
    static VK11_FEATURES_STRUCT: VulkanPNextStruct;
    static VK12_FEATURES_STRUCT: VulkanPNextStruct;
    static checkBackendAvailable(): BackendCreationException;
    constructor()
    createDevice(window: number, defaultShaderSource: (param0: Identifier, param1: ShaderType) => string, debugOptions: GpuDebugOptions, criticalShaderLoader: () => void): GpuDevice;
    getName(): string;
    handleWindowCreationErrors(error: GLFWErrorCapture$Error): void;
    setWindowHints(): void;
}