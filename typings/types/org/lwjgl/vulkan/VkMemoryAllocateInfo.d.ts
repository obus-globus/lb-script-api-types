import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDedicatedAllocationMemoryAllocateInfoNV } from '../../../org/lwjgl/vulkan/VkDedicatedAllocationMemoryAllocateInfoNV.d.ts'
import type { VkExportMemoryAllocateInfo } from '../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfo.d.ts'
import type { VkExportMemoryAllocateInfoKHR } from '../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfoKHR.d.ts'
import type { VkExportMemoryAllocateInfoNV } from '../../../org/lwjgl/vulkan/VkExportMemoryAllocateInfoNV.d.ts'
import type { VkExportMemoryWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkExportMemoryWin32HandleInfoKHR.d.ts'
import type { VkExportMemoryWin32HandleInfoNV } from '../../../org/lwjgl/vulkan/VkExportMemoryWin32HandleInfoNV.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkImportAndroidHardwareBufferInfoANDROID } from '../../../org/lwjgl/vulkan/VkImportAndroidHardwareBufferInfoANDROID.d.ts'
import type { VkImportMemoryFdInfoKHR } from '../../../org/lwjgl/vulkan/VkImportMemoryFdInfoKHR.d.ts'
import type { VkImportMemoryHostPointerInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMemoryHostPointerInfoEXT.d.ts'
import type { VkImportMemoryMetalHandleInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMemoryMetalHandleInfoEXT.d.ts'
import type { VkImportMemoryWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkImportMemoryWin32HandleInfoKHR.d.ts'
import type { VkImportMemoryWin32HandleInfoNV } from '../../../org/lwjgl/vulkan/VkImportMemoryWin32HandleInfoNV.d.ts'
import type { VkImportMetalBufferInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMetalBufferInfoEXT.d.ts'
import type { VkMemoryAllocateFlagsInfo } from '../../../org/lwjgl/vulkan/VkMemoryAllocateFlagsInfo.d.ts'
import type { VkMemoryAllocateFlagsInfoKHR } from '../../../org/lwjgl/vulkan/VkMemoryAllocateFlagsInfoKHR.d.ts'
import type { VkMemoryDedicatedAllocateInfo } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfo.d.ts'
import type { VkMemoryDedicatedAllocateInfoKHR } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfoKHR.d.ts'
import type { VkMemoryDedicatedAllocateInfoTensorARM } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedAllocateInfoTensorARM.d.ts'
import type { VkMemoryOpaqueCaptureAddressAllocateInfo } from '../../../org/lwjgl/vulkan/VkMemoryOpaqueCaptureAddressAllocateInfo.d.ts'
import type { VkMemoryOpaqueCaptureAddressAllocateInfoKHR } from '../../../org/lwjgl/vulkan/VkMemoryOpaqueCaptureAddressAllocateInfoKHR.d.ts'
import type { VkMemoryPriorityAllocateInfoEXT } from '../../../org/lwjgl/vulkan/VkMemoryPriorityAllocateInfoEXT.d.ts'
export class VkMemoryAllocateInfo extends Struct<VkMemoryAllocateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ALLOCATIONSIZE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYTYPEINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkMemoryAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryAllocateInfo;
    static create(paramarg0: number): VkMemoryAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkMemoryAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallocationSize(paramarg0: number): number;
    static nallocationSize(paramarg0: number, paramarg1: number): void;
    static nmemoryTypeIndex(paramarg0: number): number;
    static nmemoryTypeIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allocationSize(): number;
    allocationSize(arg0: number): VkMemoryAllocateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMemoryAllocateInfo;
    memoryTypeIndex(): number;
    memoryTypeIndex(arg0: number): VkMemoryAllocateInfo;
    pNext(): number;
    pNext(arg0: number): VkMemoryAllocateInfo;
    pNext(arg0: VkDedicatedAllocationMemoryAllocateInfoNV): VkMemoryAllocateInfo;
    pNext(arg0: VkExportMemoryAllocateInfo): VkMemoryAllocateInfo;
    pNext(arg0: VkExportMemoryAllocateInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkExportMemoryAllocateInfoNV): VkMemoryAllocateInfo;
    pNext(arg0: VkExportMemoryWin32HandleInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkExportMemoryWin32HandleInfoNV): VkMemoryAllocateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkMemoryAllocateInfo;
    pNext(arg0: VkImportAndroidHardwareBufferInfoANDROID): VkMemoryAllocateInfo;
    pNext(arg0: VkImportMemoryFdInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkImportMemoryHostPointerInfoEXT): VkMemoryAllocateInfo;
    pNext(arg0: VkImportMemoryMetalHandleInfoEXT): VkMemoryAllocateInfo;
    pNext(arg0: VkImportMemoryWin32HandleInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkImportMemoryWin32HandleInfoNV): VkMemoryAllocateInfo;
    pNext(arg0: VkImportMetalBufferInfoEXT): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryAllocateFlagsInfo): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryAllocateFlagsInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryDedicatedAllocateInfo): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryDedicatedAllocateInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryDedicatedAllocateInfoTensorARM): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryOpaqueCaptureAddressAllocateInfo): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryOpaqueCaptureAddressAllocateInfoKHR): VkMemoryAllocateInfo;
    pNext(arg0: VkMemoryPriorityAllocateInfoEXT): VkMemoryAllocateInfo;
    sType(): number;
    sType(arg0: number): VkMemoryAllocateInfo;
    sType$Default(): VkMemoryAllocateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkMemoryAllocateInfo;
    set(arg0: VkMemoryAllocateInfo): VkMemoryAllocateInfo;
    sizeof(): number;
}