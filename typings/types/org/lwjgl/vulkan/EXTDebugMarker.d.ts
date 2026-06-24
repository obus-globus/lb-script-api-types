import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDebugMarkerMarkerInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugMarkerMarkerInfoEXT.d.ts'
import type { VkDebugMarkerObjectNameInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugMarkerObjectNameInfoEXT.d.ts'
import type { VkDebugMarkerObjectTagInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugMarkerObjectTagInfoEXT.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class EXTDebugMarker extends Object {
    static VK_EXT_DEBUG_MARKER_EXTENSION_NAME: string;
    static VK_EXT_DEBUG_MARKER_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DEBUG_MARKER_MARKER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_MARKER_OBJECT_NAME_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_MARKER_OBJECT_TAG_INFO_EXT: number;
    static nvkCmdDebugMarkerBeginEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdDebugMarkerInsertEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkDebugMarkerSetObjectNameEXT(paramarg0: VkDevice, paramarg1: number): number;
    static nvkDebugMarkerSetObjectTagEXT(paramarg0: VkDevice, paramarg1: number): number;
    static vkCmdDebugMarkerBeginEXT(paramarg0: VkCommandBuffer, paramarg1: VkDebugMarkerMarkerInfoEXT): void;
    static vkCmdDebugMarkerEndEXT(paramarg0: VkCommandBuffer): void;
    static vkCmdDebugMarkerInsertEXT(paramarg0: VkCommandBuffer, paramarg1: VkDebugMarkerMarkerInfoEXT): void;
    static vkDebugMarkerSetObjectNameEXT(paramarg0: VkDevice, paramarg1: VkDebugMarkerObjectNameInfoEXT): number;
    static vkDebugMarkerSetObjectTagEXT(paramarg0: VkDevice, paramarg1: VkDebugMarkerObjectTagInfoEXT): number;
    constructor()
}