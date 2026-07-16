import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDedicatedAllocationMemoryAllocateInfoNV } from '../../../../org/lwjgl/vulkan/VkDedicatedAllocationMemoryAllocateInfoNV.d.ts'
import type { VkExportMemoryAllocateInfo } from '../../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfo.d.ts'
import type { VkExportMemoryAllocateInfoKHR } from '../../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfoKHR.d.ts'
import type { VkExportMemoryAllocateInfoNV } from '../../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfoNV.d.ts'
import type { VkExportMemoryWin32HandleInfoKHR } from '../../../../org/lwjgl/vulkan/VkExportMemoryWin32HandleInfoKHR.d.ts'
import type { VkExportMemoryWin32HandleInfoNV } from '../../../../org/lwjgl/vulkan/VkExportMemoryWin32HandleInfoNV.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkImportAndroidHardwareBufferInfoANDROID } from '../../../../org/lwjgl/vulkan/VkImportAndroidHardwareBufferInfoANDROID.d.ts'
import type { VkImportMemoryFdInfoKHR } from '../../../../org/lwjgl/vulkan/VkImportMemoryFdInfoKHR.d.ts'
import type { VkImportMemoryHostPointerInfoEXT } from '../../../../org/lwjgl/vulkan/VkImportMemoryHostPointerInfoEXT.d.ts'
import type { VkImportMemoryMetalHandleInfoEXT } from '../../../../org/lwjgl/vulkan/VkImportMemoryMetalHandleInfoEXT.d.ts'
import type { VkImportMemoryWin32HandleInfoKHR } from '../../../../org/lwjgl/vulkan/VkImportMemoryWin32HandleInfoKHR.d.ts'
import type { VkImportMemoryWin32HandleInfoNV } from '../../../../org/lwjgl/vulkan/VkImportMemoryWin32HandleInfoNV.d.ts'
import type { VkImportMetalBufferInfoEXT } from '../../../../org/lwjgl/vulkan/VkImportMetalBufferInfoEXT.d.ts'
import type { VkMemoryAllocateFlagsInfo } from '../../../../org/lwjgl/vulkan/VkMemoryAllocateFlagsInfo.d.ts'
import type { VkMemoryAllocateFlagsInfoKHR } from '../../../../org/lwjgl/vulkan/VkMemoryAllocateFlagsInfoKHR.d.ts'
import type { VkMemoryDedicatedAllocateInfo } from '../../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfo.d.ts'
import type { VkMemoryDedicatedAllocateInfoKHR } from '../../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfoKHR.d.ts'
import type { VkMemoryDedicatedAllocateInfoTensorARM } from '../../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfoTensorARM.d.ts'
import type { VkMemoryOpaqueCaptureAddressAllocateInfo } from '../../../../org/lwjgl/vulkan/VkMemoryOpaqueCaptureAddressAllocateInfo.d.ts'
import type { VkMemoryOpaqueCaptureAddressAllocateInfoKHR } from '../../../../org/lwjgl/vulkan/VkMemoryOpaqueCaptureAddressAllocateInfoKHR.d.ts'
import type { VkMemoryPriorityAllocateInfoEXT } from '../../../../org/lwjgl/vulkan/VkMemoryPriorityAllocateInfoEXT.d.ts'
export class VmaPoolCreateInfo extends Struct<VmaPoolCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLOCKSIZE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MAXBLOCKCOUNT: number;
    static MEMORYTYPEINDEX: number;
    static MINALLOCATIONALIGNMENT: number;
    static MINBLOCKCOUNT: number;
    static PMEMORYALLOCATENEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIORITY: number;
    static SIZEOF: number;
    static calloc(): VmaPoolCreateInfo;
    static calloc(paramarg0: MemoryStack): VmaPoolCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaPoolCreateInfo;
    static create(paramarg0: number): VmaPoolCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaPoolCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaPoolCreateInfo;
    static malloc(paramarg0: MemoryStack): VmaPoolCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nblockSize(paramarg0: number): number;
    static nblockSize(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmaxBlockCount(paramarg0: number): number;
    static nmaxBlockCount(paramarg0: number, paramarg1: number): void;
    static nmemoryTypeIndex(paramarg0: number): number;
    static nmemoryTypeIndex(paramarg0: number, paramarg1: number): void;
    static nminAllocationAlignment(paramarg0: number): number;
    static nminAllocationAlignment(paramarg0: number, paramarg1: number): void;
    static nminBlockCount(paramarg0: number): number;
    static nminBlockCount(paramarg0: number, paramarg1: number): void;
    static npMemoryAllocateNext(paramarg0: number): number;
    static npMemoryAllocateNext(paramarg0: number, paramarg1: number): void;
    static npriority(paramarg0: number): number;
    static npriority(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    blockSize(): number;
    blockSize(arg0: number): VmaPoolCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaPoolCreateInfo;
    flags(): number;
    flags(arg0: number): VmaPoolCreateInfo;
    maxBlockCount(): number;
    maxBlockCount(arg0: number): VmaPoolCreateInfo;
    memoryTypeIndex(): number;
    memoryTypeIndex(arg0: number): VmaPoolCreateInfo;
    minAllocationAlignment(): number;
    minAllocationAlignment(arg0: number): VmaPoolCreateInfo;
    minBlockCount(): number;
    minBlockCount(arg0: number): VmaPoolCreateInfo;
    pMemoryAllocateNext(): number;
    pMemoryAllocateNext(arg0: number): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkDedicatedAllocationMemoryAllocateInfoNV): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkExportMemoryAllocateInfo): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkExportMemoryAllocateInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkExportMemoryAllocateInfoNV): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkExportMemoryWin32HandleInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkExportMemoryWin32HandleInfoNV): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkExportMetalObjectCreateInfoEXT): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportAndroidHardwareBufferInfoANDROID): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportMemoryFdInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportMemoryHostPointerInfoEXT): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportMemoryMetalHandleInfoEXT): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportMemoryWin32HandleInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportMemoryWin32HandleInfoNV): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkImportMetalBufferInfoEXT): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryAllocateFlagsInfo): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryAllocateFlagsInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryDedicatedAllocateInfo): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryDedicatedAllocateInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryDedicatedAllocateInfoTensorARM): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryOpaqueCaptureAddressAllocateInfo): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryOpaqueCaptureAddressAllocateInfoKHR): VmaPoolCreateInfo;
    pMemoryAllocateNext(arg0: VkMemoryPriorityAllocateInfoEXT): VmaPoolCreateInfo;
    priority(): number;
    priority(arg0: number): VmaPoolCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): VmaPoolCreateInfo;
    set(arg0: VmaPoolCreateInfo): VmaPoolCreateInfo;
    sizeof(): number;
}