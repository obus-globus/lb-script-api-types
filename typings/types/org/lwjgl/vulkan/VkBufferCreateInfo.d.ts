import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferDeviceAddressCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkBufferDeviceAddressCreateInfoEXT.d.ts'
import type { VkBufferOpaqueCaptureAddressCreateInfo } from '../../../org/lwjgl/vulkan/VkBufferOpaqueCaptureAddressCreateInfo.d.ts'
import type { VkBufferOpaqueCaptureAddressCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkBufferOpaqueCaptureAddressCreateInfoKHR.d.ts'
import type { VkBufferUsageFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfo.d.ts'
import type { VkBufferUsageFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfoKHR.d.ts'
import type { VkDedicatedAllocationBufferCreateInfoNV } from '../../../org/lwjgl/vulkan/VkDedicatedAllocationBufferCreateInfoNV.d.ts'
import type { VkExternalMemoryBufferCreateInfo } from '../../../org/lwjgl/vulkan/VkExternalMemoryBufferCreateInfo.d.ts'
import type { VkExternalMemoryBufferCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkExternalMemoryBufferCreateInfoKHR.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
import type { VkVideoProfileListInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileListInfoKHR.d.ts'
export class VkBufferCreateInfo extends Struct<VkBufferCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PQUEUEFAMILYINDICES: number;
    static QUEUEFAMILYINDEXCOUNT: number;
    static SHARINGMODE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USAGE: number;
    static calloc(): VkBufferCreateInfo;
    static calloc(paramarg0: MemoryStack): VkBufferCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBufferCreateInfo;
    static create(paramarg0: number): VkBufferCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBufferCreateInfo;
    static malloc(paramarg0: MemoryStack): VkBufferCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npQueueFamilyIndices(paramarg0: number): IntBuffer;
    static npQueueFamilyIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nqueueFamilyIndexCount(paramarg0: number): number;
    static nqueueFamilyIndexCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsharingMode(paramarg0: number): number;
    static nsharingMode(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nusage(paramarg0: number): number;
    static nusage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBufferCreateInfo;
    flags(): number;
    flags(arg0: number): VkBufferCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkBufferCreateInfo;
    pNext(arg0: VkBufferDeviceAddressCreateInfoEXT): VkBufferCreateInfo;
    pNext(arg0: VkBufferOpaqueCaptureAddressCreateInfo): VkBufferCreateInfo;
    pNext(arg0: VkBufferOpaqueCaptureAddressCreateInfoKHR): VkBufferCreateInfo;
    pNext(arg0: VkBufferUsageFlags2CreateInfo): VkBufferCreateInfo;
    pNext(arg0: VkBufferUsageFlags2CreateInfoKHR): VkBufferCreateInfo;
    pNext(arg0: VkDedicatedAllocationBufferCreateInfoNV): VkBufferCreateInfo;
    pNext(arg0: VkExternalMemoryBufferCreateInfo): VkBufferCreateInfo;
    pNext(arg0: VkExternalMemoryBufferCreateInfoKHR): VkBufferCreateInfo;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkBufferCreateInfo;
    pNext(arg0: VkVideoProfileListInfoKHR): VkBufferCreateInfo;
    pQueueFamilyIndices(): IntBuffer;
    pQueueFamilyIndices(arg0: IntBuffer): VkBufferCreateInfo;
    queueFamilyIndexCount(): number;
    queueFamilyIndexCount(arg0: number): VkBufferCreateInfo;
    sType(): number;
    sType(arg0: number): VkBufferCreateInfo;
    sType$Default(): VkBufferCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: IntBuffer): VkBufferCreateInfo;
    set(arg0: VkBufferCreateInfo): VkBufferCreateInfo;
    sharingMode(): number;
    sharingMode(arg0: number): VkBufferCreateInfo;
    size(): number;
    size(arg0: number): VkBufferCreateInfo;
    sizeof(): number;
    usage(): number;
    usage(arg0: number): VkBufferCreateInfo;
}