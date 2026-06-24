import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceDataGraphOperationSupportARM } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDataGraphOperationSupportARM.d.ts'
import type { VkPhysicalDeviceDataGraphProcessingEngineARM } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceDataGraphProcessingEngineARM.d.ts'
export class VkQueueFamilyDataGraphPropertiesARM extends Struct<VkQueueFamilyDataGraphPropertiesARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENGINE: number;
    static OPERATION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueueFamilyDataGraphPropertiesARM;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyDataGraphPropertiesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueueFamilyDataGraphPropertiesARM;
    static create(paramarg0: number): VkQueueFamilyDataGraphPropertiesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyDataGraphPropertiesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueueFamilyDataGraphPropertiesARM;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyDataGraphPropertiesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nengine(paramarg0: number): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static noperation(paramarg0: number): VkPhysicalDeviceDataGraphOperationSupportARM;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkQueueFamilyDataGraphPropertiesARM;
    engine(): VkPhysicalDeviceDataGraphProcessingEngineARM;
    operation(): VkPhysicalDeviceDataGraphOperationSupportARM;
    pNext(): number;
    pNext(arg0: number): VkQueueFamilyDataGraphPropertiesARM;
    sType(): number;
    sType(arg0: number): VkQueueFamilyDataGraphPropertiesARM;
    sType$Default(): VkQueueFamilyDataGraphPropertiesARM;
    set(arg0: number, arg1: number): VkQueueFamilyDataGraphPropertiesARM;
    set(arg0: VkQueueFamilyDataGraphPropertiesARM): VkQueueFamilyDataGraphPropertiesARM;
    sizeof(): number;
}