import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceVulkan11Properties extends Struct<VkPhysicalDeviceVulkan11Properties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICELUID: number;
    static DEVICELUIDVALID: number;
    static DEVICENODEMASK: number;
    static DEVICEUUID: number;
    static DRIVERUUID: number;
    static MAXMEMORYALLOCATIONSIZE: number;
    static MAXMULTIVIEWINSTANCEINDEX: number;
    static MAXMULTIVIEWVIEWCOUNT: number;
    static MAXPERSETDESCRIPTORS: number;
    static PNEXT: number;
    static POINTCLIPPINGBEHAVIOR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PROTECTEDNOFAULT: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBGROUPQUADOPERATIONSINALLSTAGES: number;
    static SUBGROUPSIZE: number;
    static SUBGROUPSUPPORTEDOPERATIONS: number;
    static SUBGROUPSUPPORTEDSTAGES: number;
    static calloc(): VkPhysicalDeviceVulkan11Properties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkan11Properties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVulkan11Properties;
    static create(paramarg0: number): VkPhysicalDeviceVulkan11Properties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVulkan11Properties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVulkan11Properties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkan11Properties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceLUID(paramarg0: number, paramarg1: number): number;
    static ndeviceLUID(paramarg0: number): ByteBuffer;
    static ndeviceLUIDValid(paramarg0: number): number;
    static ndeviceNodeMask(paramarg0: number): number;
    static ndeviceUUID(paramarg0: number, paramarg1: number): number;
    static ndeviceUUID(paramarg0: number): ByteBuffer;
    static ndriverUUID(paramarg0: number, paramarg1: number): number;
    static ndriverUUID(paramarg0: number): ByteBuffer;
    static nmaxMemoryAllocationSize(paramarg0: number): number;
    static nmaxMultiviewInstanceIndex(paramarg0: number): number;
    static nmaxMultiviewViewCount(paramarg0: number): number;
    static nmaxPerSetDescriptors(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npointClippingBehavior(paramarg0: number): number;
    static nprotectedNoFault(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubgroupQuadOperationsInAllStages(paramarg0: number): number;
    static nsubgroupSize(paramarg0: number): number;
    static nsubgroupSupportedOperations(paramarg0: number): number;
    static nsubgroupSupportedStages(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVulkan11Properties;
    deviceLUID(): ByteBuffer;
    deviceLUID(arg0: number): number;
    deviceLUIDValid(): boolean;
    deviceNodeMask(): number;
    deviceUUID(): ByteBuffer;
    deviceUUID(arg0: number): number;
    driverUUID(): ByteBuffer;
    driverUUID(arg0: number): number;
    maxMemoryAllocationSize(): number;
    maxMultiviewInstanceIndex(): number;
    maxMultiviewViewCount(): number;
    maxPerSetDescriptors(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVulkan11Properties;
    pointClippingBehavior(): number;
    protectedNoFault(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVulkan11Properties;
    sType$Default(): VkPhysicalDeviceVulkan11Properties;
    set(arg0: number, arg1: number): VkPhysicalDeviceVulkan11Properties;
    set(arg0: VkPhysicalDeviceVulkan11Properties): VkPhysicalDeviceVulkan11Properties;
    sizeof(): number;
    subgroupQuadOperationsInAllStages(): boolean;
    subgroupSize(): number;
    subgroupSupportedOperations(): number;
    subgroupSupportedStages(): number;
}