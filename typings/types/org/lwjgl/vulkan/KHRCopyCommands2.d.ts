import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBlitImageInfo2 } from '../../../org/lwjgl/vulkan/VkBlitImageInfo2.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCopyBufferInfo2 } from '../../../org/lwjgl/vulkan/VkCopyBufferInfo2.d.ts'
import type { VkCopyBufferToImageInfo2 } from '../../../org/lwjgl/vulkan/VkCopyBufferToImageInfo2.d.ts'
import type { VkCopyImageInfo2 } from '../../../org/lwjgl/vulkan/VkCopyImageInfo2.d.ts'
import type { VkCopyImageToBufferInfo2 } from '../../../org/lwjgl/vulkan/VkCopyImageToBufferInfo2.d.ts'
import type { VkResolveImageInfo2 } from '../../../org/lwjgl/vulkan/VkResolveImageInfo2.d.ts'
export class KHRCopyCommands2 extends Object {
    static VK_KHR_COPY_COMMANDS_2_EXTENSION_NAME: string;
    static VK_KHR_COPY_COMMANDS_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_BLIT_IMAGE_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_BUFFER_COPY_2_KHR: number;
    static VK_STRUCTURE_TYPE_BUFFER_IMAGE_COPY_2_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_BUFFER_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_BUFFER_TO_IMAGE_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_IMAGE_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_IMAGE_TO_BUFFER_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_BLIT_2_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_COPY_2_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_RESOLVE_2_KHR: number;
    static VK_STRUCTURE_TYPE_RESOLVE_IMAGE_INFO_2_KHR: number;
    static nvkCmdBlitImage2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyBuffer2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyBufferToImage2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyImage2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyImageToBuffer2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdResolveImage2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBlitImage2KHR(paramarg0: VkCommandBuffer, paramarg1: VkBlitImageInfo2): void;
    static vkCmdCopyBuffer2KHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyBufferInfo2): void;
    static vkCmdCopyBufferToImage2KHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyBufferToImageInfo2): void;
    static vkCmdCopyImage2KHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyImageInfo2): void;
    static vkCmdCopyImageToBuffer2KHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyImageToBufferInfo2): void;
    static vkCmdResolveImage2KHR(paramarg0: VkCommandBuffer, paramarg1: VkResolveImageInfo2): void;
    constructor()
}