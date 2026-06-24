import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class EXTHostQueryReset extends Object {
    static VK_EXT_HOST_QUERY_RESET_EXTENSION_NAME: string;
    static VK_EXT_HOST_QUERY_RESET_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_HOST_QUERY_RESET_FEATURES_EXT: number;
    static vkResetQueryPoolEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}