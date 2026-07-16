import type { BackendCreationException$Reason } from '../../../../com/mojang/blaze3d/systems/BackendCreationException$Reason.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanUtils$DeviceUUID } from '../../../../com/mojang/blaze3d/vulkan/VulkanUtils$DeviceUUID.d.ts'
import type { CheckpointExtension$QueueCheckpoints } from '../../../../com/mojang/blaze3d/vulkan/checkpoints/CheckpointExtension$QueueCheckpoints.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
import type { VkClearColorValue } from '../../../../org/lwjgl/vulkan/VkClearColorValue.d.ts'
export class VulkanUtils extends Object {
    static KNOWN_PROBLEMATIC_DEVICES: VulkanUtils$DeviceUUID[];
    static crashIfFailure(paramdevice: VulkanDevice, paramresult: number, parammessage: string): void;
    static formatCheckpoints(paramqueueCheckpoints: CheckpointExtension$QueueCheckpoints[]): string;
    static hasAllBits(parambitfield: number, parambitmask: number): boolean;
    static hasAnyBit(parambitfield: number, parambitmask: number): boolean;
    static hasNoBit(parambitfield: number, parambitmask: number): boolean;
    static pipelineStageToString(parampipelineStage: number): string;
    static putArgb(paramvkClearColor: VkClearColorValue, paramargb: Vector4fc): VkClearColorValue;
    static resultToString(paramerror: number): string;
    static throwIfFailure(paramresult: number, parammessage: string, paramreason: BackendCreationException$Reason): void;
    constructor()
}