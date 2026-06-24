import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class NVExternalMemoryWin32 extends Object {
    static VK_NV_EXTERNAL_MEMORY_WIN32_EXTENSION_NAME: string;
    static VK_NV_EXTERNAL_MEMORY_WIN32_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_EXPORT_MEMORY_WIN32_HANDLE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_IMPORT_MEMORY_WIN32_HANDLE_INFO_NV: number;
    static nvkGetMemoryWin32HandleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetMemoryWin32HandleNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): number;
    constructor()
}