import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class AMDBufferMarker extends Object {
    static VK_AMD_BUFFER_MARKER_EXTENSION_NAME: string;
    static VK_AMD_BUFFER_MARKER_SPEC_VERSION: number;
    static vkCmdWriteBufferMarker2AMD(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdWriteBufferMarkerAMD(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}