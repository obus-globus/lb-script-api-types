import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkExportMetalObjectsInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectsInfoEXT.d.ts'
export class EXTMetalObjects extends Object {
    static VK_EXPORT_METAL_OBJECT_TYPE_METAL_BUFFER_BIT_EXT: number;
    static VK_EXPORT_METAL_OBJECT_TYPE_METAL_COMMAND_QUEUE_BIT_EXT: number;
    static VK_EXPORT_METAL_OBJECT_TYPE_METAL_DEVICE_BIT_EXT: number;
    static VK_EXPORT_METAL_OBJECT_TYPE_METAL_IOSURFACE_BIT_EXT: number;
    static VK_EXPORT_METAL_OBJECT_TYPE_METAL_SHARED_EVENT_BIT_EXT: number;
    static VK_EXPORT_METAL_OBJECT_TYPE_METAL_TEXTURE_BIT_EXT: number;
    static VK_EXT_METAL_OBJECTS_EXTENSION_NAME: string;
    static VK_EXT_METAL_OBJECTS_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_BUFFER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_COMMAND_QUEUE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_DEVICE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_IO_SURFACE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_OBJECTS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_OBJECT_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_SHARED_EVENT_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_EXPORT_METAL_TEXTURE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMPORT_METAL_BUFFER_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMPORT_METAL_IO_SURFACE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMPORT_METAL_SHARED_EVENT_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMPORT_METAL_TEXTURE_INFO_EXT: number;
    static nvkExportMetalObjectsEXT(paramarg0: VkDevice, paramarg1: number): void;
    static vkExportMetalObjectsEXT(paramarg0: VkDevice, paramarg1: VkExportMetalObjectsInfoEXT): void;
    constructor()
}