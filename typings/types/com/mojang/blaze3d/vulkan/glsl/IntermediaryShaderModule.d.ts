import type { VulkanBindGroupLayout$Entry } from '../../../../../com/mojang/blaze3d/vulkan/VulkanBindGroupLayout$Entry.d.ts'
import type { VulkanDevice } from '../../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { SpvSampler } from '../../../../../com/mojang/blaze3d/vulkan/glsl/SpvSampler.d.ts'
import type { SpvUniformBuffer } from '../../../../../com/mojang/blaze3d/vulkan/glsl/SpvUniformBuffer.d.ts'
import type { SpvVariable } from '../../../../../com/mojang/blaze3d/vulkan/glsl/SpvVariable.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntermediaryShaderModule extends Record implements AutoCloseable {
    static INVALID: IntermediaryShaderModule;
    static createFromSpirv(paramfilename: string, paramspirv: ByteBuffer): IntermediaryShaderModule;
    constructor(name: string, spirv: ByteBuffer, uniformBuffers: SpvUniformBuffer[], samplers: SpvSampler[], outputs: SpvVariable[], inputs: SpvVariable[])
    // private inputs: SpvVariable[];
    // private name: string;
    // private outputs: SpvVariable[];
    // private samplers: SpvSampler[];
    // private spirv: ByteBuffer;
    // private uniformBuffers: SpvUniformBuffer[];
    close(): void;
    createVulkanShaderModule(device: VulkanDevice): number;
    equals(o: Object | null): boolean;
    // private getInputVariable(name: string): SpvVariable;
    // private getSampler(name: string): SpvSampler;
    // private getUniformBuffer(name: string): SpvUniformBuffer;
    hashCode(): number;
    inputs(): SpvVariable[];
    name(): string;
    outputs(): SpvVariable[];
    rebind(inputVariables: string[], entries: VulkanBindGroupLayout$Entry[]): void;
    samplers(): SpvSampler[];
    spirv(): ByteBuffer;
    toString(): string;
    uniformBuffers(): SpvUniformBuffer[];
}