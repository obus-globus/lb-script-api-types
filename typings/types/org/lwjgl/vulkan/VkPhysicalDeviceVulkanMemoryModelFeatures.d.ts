import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceVulkanMemoryModelFeatures extends Struct<VkPhysicalDeviceVulkanMemoryModelFeatures> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VULKANMEMORYMODEL: number;
    static VULKANMEMORYMODELAVAILABILITYVISIBILITYCHAINS: number;
    static VULKANMEMORYMODELDEVICESCOPE: number;
    static calloc(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static create(paramarg0: number): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvulkanMemoryModel(paramarg0: number): number;
    static nvulkanMemoryModel(paramarg0: number, paramarg1: number): void;
    static nvulkanMemoryModelAvailabilityVisibilityChains(paramarg0: number): number;
    static nvulkanMemoryModelAvailabilityVisibilityChains(paramarg0: number, paramarg1: number): void;
    static nvulkanMemoryModelDeviceScope(paramarg0: number): number;
    static nvulkanMemoryModelDeviceScope(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVulkanMemoryModelFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVulkanMemoryModelFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVulkanMemoryModelFeatures;
    sType$Default(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceVulkanMemoryModelFeatures;
    set(arg0: VkPhysicalDeviceVulkanMemoryModelFeatures): VkPhysicalDeviceVulkanMemoryModelFeatures;
    sizeof(): number;
    vulkanMemoryModel(): boolean;
    vulkanMemoryModel(arg0: boolean): VkPhysicalDeviceVulkanMemoryModelFeatures;
    vulkanMemoryModelAvailabilityVisibilityChains(): boolean;
    vulkanMemoryModelAvailabilityVisibilityChains(arg0: boolean): VkPhysicalDeviceVulkanMemoryModelFeatures;
    vulkanMemoryModelDeviceScope(): boolean;
    vulkanMemoryModelDeviceScope(arg0: boolean): VkPhysicalDeviceVulkanMemoryModelFeatures;
}