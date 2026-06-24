import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkRenderingInfo } from '../../../org/lwjgl/vulkan/VkRenderingInfo.d.ts'
import type { VkTilePropertiesQCOM } from '../../../org/lwjgl/vulkan/VkTilePropertiesQCOM.d.ts'
export class QCOMTileProperties extends Object {
    static VK_QCOM_TILE_PROPERTIES_EXTENSION_NAME: string;
    static VK_QCOM_TILE_PROPERTIES_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TILE_PROPERTIES_FEATURES_QCOM: number;
    static VK_STRUCTURE_TYPE_TILE_PROPERTIES_QCOM: number;
    static nvkGetDynamicRenderingTilePropertiesQCOM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetFramebufferTilePropertiesQCOM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetDynamicRenderingTilePropertiesQCOM(paramarg0: VkDevice, paramarg1: VkRenderingInfo, paramarg2: VkTilePropertiesQCOM): number;
    static vkGetFramebufferTilePropertiesQCOM(paramarg0: VkDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetFramebufferTilePropertiesQCOM(paramarg0: VkDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    constructor()
}