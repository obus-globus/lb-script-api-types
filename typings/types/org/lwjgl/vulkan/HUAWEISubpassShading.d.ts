import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class HUAWEISubpassShading extends Object {
    static VK_HUAWEI_SUBPASS_SHADING_EXTENSION_NAME: string;
    static VK_HUAWEI_SUBPASS_SHADING_SPEC_VERSION: number;
    static VK_PIPELINE_BIND_POINT_SUBPASS_SHADING_HUAWEI: number;
    static VK_PIPELINE_STAGE_2_SUBPASS_SHADER_BIT_HUAWEI: number;
    static VK_PIPELINE_STAGE_2_SUBPASS_SHADING_BIT_HUAWEI: number;
    static VK_SHADER_STAGE_SUBPASS_SHADING_BIT_HUAWEI: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SUBPASS_SHADING_FEATURES_HUAWEI: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SUBPASS_SHADING_PROPERTIES_HUAWEI: number;
    static VK_STRUCTURE_TYPE_SUBPASS_SHADING_PIPELINE_CREATE_INFO_HUAWEI: number;
    static nvkGetDeviceSubpassShadingMaxWorkgroupSizeHUAWEI(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkCmdSubpassShadingHUAWEI(paramarg0: VkCommandBuffer): void;
    static vkGetDeviceSubpassShadingMaxWorkgroupSizeHUAWEI(paramarg0: VkDevice, paramarg1: number, paramarg2: VkExtent2D): number;
    constructor()
}