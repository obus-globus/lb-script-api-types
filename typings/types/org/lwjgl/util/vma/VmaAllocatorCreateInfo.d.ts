import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VmaDeviceMemoryCallbacks } from '../../../../org/lwjgl/util/vma/VmaDeviceMemoryCallbacks.d.ts'
import type { VmaVulkanFunctions } from '../../../../org/lwjgl/util/vma/VmaVulkanFunctions.d.ts'
import type { VkAllocationCallbacks } from '../../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkInstance } from '../../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class VmaAllocatorCreateInfo extends Struct<VmaAllocatorCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICE: number;
    static FLAGS: number;
    static INSTANCE: number;
    static PALLOCATIONCALLBACKS: number;
    static PDEVICEMEMORYCALLBACKS: number;
    static PHEAPSIZELIMIT: number;
    static PHYSICALDEVICE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERREDLARGEHEAPBLOCKSIZE: number;
    static PTYPEEXTERNALMEMORYHANDLETYPES: number;
    static PVULKANFUNCTIONS: number;
    static SIZEOF: number;
    static VULKANAPIVERSION: number;
    static calloc(): VmaAllocatorCreateInfo;
    static calloc(paramarg0: MemoryStack): VmaAllocatorCreateInfo;
    static create(): VmaAllocatorCreateInfo;
    static create(paramarg0: number): VmaAllocatorCreateInfo;
    static createSafe(paramarg0: number): VmaAllocatorCreateInfo;
    static malloc(): VmaAllocatorCreateInfo;
    static malloc(paramarg0: MemoryStack): VmaAllocatorCreateInfo;
    static ndevice(paramarg0: number): number;
    static ndevice(paramarg0: number, paramarg1: VkDevice): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ninstance(paramarg0: number): number;
    static ninstance(paramarg0: number, paramarg1: VkInstance): void;
    static npAllocationCallbacks(paramarg0: number): VkAllocationCallbacks;
    static npAllocationCallbacks(paramarg0: number, paramarg1: VkAllocationCallbacks): void;
    static npDeviceMemoryCallbacks(paramarg0: number): VmaDeviceMemoryCallbacks;
    static npDeviceMemoryCallbacks(paramarg0: number, paramarg1: VmaDeviceMemoryCallbacks): void;
    static npHeapSizeLimit(paramarg0: number, paramarg1: number): LongBuffer;
    static npHeapSizeLimit(paramarg0: number, paramarg1: LongBuffer): void;
    static npTypeExternalMemoryHandleTypes(paramarg0: number, paramarg1: number): IntBuffer;
    static npTypeExternalMemoryHandleTypes(paramarg0: number, paramarg1: IntBuffer): void;
    static npVulkanFunctions(paramarg0: number): VmaVulkanFunctions;
    static npVulkanFunctions(paramarg0: number, paramarg1: VmaVulkanFunctions): void;
    static nphysicalDevice(paramarg0: number): number;
    static nphysicalDevice(paramarg0: number, paramarg1: VkPhysicalDevice): void;
    static npreferredLargeHeapBlockSize(paramarg0: number): number;
    static npreferredLargeHeapBlockSize(paramarg0: number, paramarg1: number): void;
    static nvulkanApiVersion(paramarg0: number): number;
    static nvulkanApiVersion(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaAllocatorCreateInfo;
    device(): number;
    device(arg0: VkDevice): VmaAllocatorCreateInfo;
    flags(): number;
    flags(arg0: number): VmaAllocatorCreateInfo;
    instance(): number;
    instance(arg0: VkInstance): VmaAllocatorCreateInfo;
    pAllocationCallbacks(): VkAllocationCallbacks;
    pAllocationCallbacks(arg0: VkAllocationCallbacks): VmaAllocatorCreateInfo;
    pDeviceMemoryCallbacks(): VmaDeviceMemoryCallbacks;
    pDeviceMemoryCallbacks(arg0: VmaDeviceMemoryCallbacks): VmaAllocatorCreateInfo;
    pHeapSizeLimit(arg0: LongBuffer): VmaAllocatorCreateInfo;
    pHeapSizeLimit(arg0: number): LongBuffer;
    pTypeExternalMemoryHandleTypes(arg0: IntBuffer): VmaAllocatorCreateInfo;
    pTypeExternalMemoryHandleTypes(arg0: number): IntBuffer;
    pVulkanFunctions(): VmaVulkanFunctions;
    pVulkanFunctions(arg0: VmaVulkanFunctions): VmaAllocatorCreateInfo;
    physicalDevice(): number;
    physicalDevice(arg0: VkPhysicalDevice): VmaAllocatorCreateInfo;
    preferredLargeHeapBlockSize(): number;
    preferredLargeHeapBlockSize(arg0: number): VmaAllocatorCreateInfo;
    set(arg0: number, arg1: VkPhysicalDevice, arg2: VkDevice, arg3: number, arg4: VkAllocationCallbacks, arg5: VmaDeviceMemoryCallbacks, arg6: LongBuffer, arg7: VmaVulkanFunctions, arg8: VkInstance, arg9: number, arg10: IntBuffer): VmaAllocatorCreateInfo;
    set(arg0: VmaAllocatorCreateInfo): VmaAllocatorCreateInfo;
    sizeof(): number;
    vulkanApiVersion(): number;
    vulkanApiVersion(arg0: number): VmaAllocatorCreateInfo;
}