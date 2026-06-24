import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAntiLagDataAMD } from '../../../org/lwjgl/vulkan/VkAntiLagDataAMD.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class AMDAntiLag extends Object {
    static VK_AMD_ANTI_LAG_EXTENSION_NAME: string;
    static VK_AMD_ANTI_LAG_SPEC_VERSION: number;
    static VK_ANTI_LAG_MODE_DRIVER_CONTROL_AMD: number;
    static VK_ANTI_LAG_MODE_OFF_AMD: number;
    static VK_ANTI_LAG_MODE_ON_AMD: number;
    static VK_ANTI_LAG_STAGE_INPUT_AMD: number;
    static VK_ANTI_LAG_STAGE_PRESENT_AMD: number;
    static VK_STRUCTURE_TYPE_ANTI_LAG_DATA_AMD: number;
    static VK_STRUCTURE_TYPE_ANTI_LAG_PRESENTATION_INFO_AMD: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_ANTI_LAG_FEATURES_AMD: number;
    static nvkAntiLagUpdateAMD(paramarg0: VkDevice, paramarg1: number): void;
    static vkAntiLagUpdateAMD(paramarg0: VkDevice, paramarg1: VkAntiLagDataAMD): void;
    constructor()
}