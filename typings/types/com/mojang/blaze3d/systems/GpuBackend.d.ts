import type { GLFWErrorCapture$Error } from '../../../../com/mojang/blaze3d/GLFWErrorCapture$Error.d.ts'
import type { GpuDebugOptions } from '../../../../com/mojang/blaze3d/shaders/GpuDebugOptions.d.ts'
import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface GpuBackend extends Object {
    createDevice(window: number, defaultShaderSource: (param0: Identifier, param1: ShaderType) => string, debugOptions: GpuDebugOptions, criticalShaderLoader: () => void): GpuDevice;
    getName(): string;
    handleWindowCreationErrors(error: GLFWErrorCapture$Error): void;
    setWindowHints(): void;
}