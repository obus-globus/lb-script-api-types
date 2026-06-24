import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { ShaderType } from '../../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { VulkanDevice } from '../../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { GlslCompiler$CompiledModules } from '../../../../../com/mojang/blaze3d/vulkan/glsl/GlslCompiler$CompiledModules.d.ts'
import type { IntermediaryShaderModule } from '../../../../../com/mojang/blaze3d/vulkan/glsl/IntermediaryShaderModule.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderDefines } from '../../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
export class GlslCompiler extends Object implements AutoCloseable {
    constructor()
    // private globalDefines: ShaderDefines;
    // private shaderCompiler: number;
    // private shaderOptions: number;
    close(): void;
    compile(device: VulkanDevice, pipeline: RenderPipeline, vertex: IntermediaryShaderModule, fragment: IntermediaryShaderModule): GlslCompiler$CompiledModules;
    createIntermediary(filename: string, source: string, type: ShaderType): IntermediaryShaderModule;
}