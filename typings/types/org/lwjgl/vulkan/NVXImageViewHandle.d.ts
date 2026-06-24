import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImageViewAddressPropertiesNVX } from '../../../org/lwjgl/vulkan/VkImageViewAddressPropertiesNVX.d.ts'
import type { VkImageViewHandleInfoNVX } from '../../../org/lwjgl/vulkan/VkImageViewHandleInfoNVX.d.ts'
export class NVXImageViewHandle extends Object {
    static VK_NVX_IMAGE_VIEW_HANDLE_EXTENSION_NAME: string;
    static VK_NVX_IMAGE_VIEW_HANDLE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_IMAGE_VIEW_ADDRESS_PROPERTIES_NVX: number;
    static VK_STRUCTURE_TYPE_IMAGE_VIEW_HANDLE_INFO_NVX: number;
    static nvkGetImageViewAddressNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetImageViewHandle64NVX(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetImageViewHandleNVX(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetDeviceCombinedImageSamplerIndexNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetImageViewAddressNVX(paramarg0: VkDevice, paramarg1: number, paramarg2: VkImageViewAddressPropertiesNVX): number;
    static vkGetImageViewHandle64NVX(paramarg0: VkDevice, paramarg1: VkImageViewHandleInfoNVX): number;
    static vkGetImageViewHandleNVX(paramarg0: VkDevice, paramarg1: VkImageViewHandleInfoNVX): number;
    constructor()
}