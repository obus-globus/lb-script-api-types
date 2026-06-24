import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class EXTHdrMetadata extends Object {
    static VK_EXT_HDR_METADATA_EXTENSION_NAME: string;
    static VK_EXT_HDR_METADATA_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_HDR_METADATA_EXT: number;
    static nvkSetHdrMetadataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkSetHdrMetadataEXT(paramarg0: VkDevice, paramarg1: LongBuffer, paramarg2: (Object | null)[]): void;
    static vkSetHdrMetadataEXT(paramarg0: VkDevice, paramarg1: number[], paramarg2: (Object | null)[]): void;
    constructor()
}