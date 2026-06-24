import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class AMDShaderInfo extends Object {
    static VK_AMD_SHADER_INFO_EXTENSION_NAME: string;
    static VK_AMD_SHADER_INFO_SPEC_VERSION: number;
    static VK_SHADER_INFO_TYPE_BINARY_AMD: number;
    static VK_SHADER_INFO_TYPE_DISASSEMBLY_AMD: number;
    static VK_SHADER_INFO_TYPE_STATISTICS_AMD: number;
    static nvkGetShaderInfoAMD(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static vkGetShaderInfoAMD(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: PointerBuffer, paramarg5: ByteBuffer): number;
    constructor()
}