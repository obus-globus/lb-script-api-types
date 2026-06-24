import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class AMDDisplayNativeHdr extends Object {
    static VK_AMD_DISPLAY_NATIVE_HDR_EXTENSION_NAME: string;
    static VK_AMD_DISPLAY_NATIVE_HDR_SPEC_VERSION: number;
    static VK_COLOR_SPACE_DISPLAY_NATIVE_AMD: number;
    static VK_STRUCTURE_TYPE_DISPLAY_NATIVE_HDR_SURFACE_CAPABILITIES_AMD: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_DISPLAY_NATIVE_HDR_CREATE_INFO_AMD: number;
    static vkSetLocalDimmingAMD(paramarg0: VkDevice, paramarg1: number, paramarg2: boolean): void;
    constructor()
}