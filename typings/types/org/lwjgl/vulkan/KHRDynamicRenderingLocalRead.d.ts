import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkRenderingAttachmentLocationInfo } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentLocationInfo.d.ts'
import type { VkRenderingInputAttachmentIndexInfo } from '../../../org/lwjgl/vulkan/VkRenderingInputAttachmentIndexInfo.d.ts'
export class KHRDynamicRenderingLocalRead extends Object {
    static VK_IMAGE_LAYOUT_RENDERING_LOCAL_READ_KHR: number;
    static VK_KHR_DYNAMIC_RENDERING_LOCAL_READ_EXTENSION_NAME: string;
    static VK_KHR_DYNAMIC_RENDERING_LOCAL_READ_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DYNAMIC_RENDERING_LOCAL_READ_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_ATTACHMENT_LOCATION_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_INPUT_ATTACHMENT_INDEX_INFO_KHR: number;
    static nvkCmdSetRenderingAttachmentLocationsKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdSetRenderingInputAttachmentIndicesKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetRenderingAttachmentLocationsKHR(paramarg0: VkCommandBuffer, paramarg1: VkRenderingAttachmentLocationInfo): void;
    static vkCmdSetRenderingInputAttachmentIndicesKHR(paramarg0: VkCommandBuffer, paramarg1: VkRenderingInputAttachmentIndexInfo): void;
    constructor()
}