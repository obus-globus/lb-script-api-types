import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkExportSemaphoreCreateInfo } from '../../../org/lwjgl/vulkan/VkExportSemaphoreCreateInfo.d.ts'
import type { VkExportSemaphoreCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkExportSemaphoreCreateInfoKHR.d.ts'
import type { VkExportSemaphoreWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkExportSemaphoreWin32HandleInfoKHR.d.ts'
import type { VkImportMetalSharedEventInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMetalSharedEventInfoEXT.d.ts'
import type { VkQueryLowLatencySupportNV } from '../../../org/lwjgl/vulkan/VkQueryLowLatencySupportNV.d.ts'
import type { VkSemaphoreTypeCreateInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfo.d.ts'
import type { VkSemaphoreTypeCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSemaphoreTypeCreateInfoKHR.d.ts'
export class VkSemaphoreCreateInfo extends Struct<VkSemaphoreCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSemaphoreCreateInfo;
    static calloc(paramarg0: MemoryStack): VkSemaphoreCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSemaphoreCreateInfo;
    static create(paramarg0: number): VkSemaphoreCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSemaphoreCreateInfo;
    static malloc(paramarg0: MemoryStack): VkSemaphoreCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSemaphoreCreateInfo;
    flags(): number;
    flags(arg0: number): VkSemaphoreCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkSemaphoreCreateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkSemaphoreCreateInfo;
    pNext(arg0: VkExportSemaphoreCreateInfo): VkSemaphoreCreateInfo;
    pNext(arg0: VkExportSemaphoreCreateInfoKHR): VkSemaphoreCreateInfo;
    pNext(arg0: VkExportSemaphoreWin32HandleInfoKHR): VkSemaphoreCreateInfo;
    pNext(arg0: VkImportMetalSharedEventInfoEXT): VkSemaphoreCreateInfo;
    pNext(arg0: VkQueryLowLatencySupportNV): VkSemaphoreCreateInfo;
    pNext(arg0: VkSemaphoreTypeCreateInfo): VkSemaphoreCreateInfo;
    pNext(arg0: VkSemaphoreTypeCreateInfoKHR): VkSemaphoreCreateInfo;
    sType(): number;
    sType(arg0: number): VkSemaphoreCreateInfo;
    sType$Default(): VkSemaphoreCreateInfo;
    set(arg0: number, arg1: number, arg2: number): VkSemaphoreCreateInfo;
    set(arg0: VkSemaphoreCreateInfo): VkSemaphoreCreateInfo;
    sizeof(): number;
}