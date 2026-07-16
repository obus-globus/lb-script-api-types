import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceVariablePointersFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceVariablePointersFeatures.d.ts'
export class VkPhysicalDeviceVariablePointerFeaturesKHR extends VkPhysicalDeviceVariablePointersFeatures {
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
    static VARIABLEPOINTERS: number;
    static VARIABLEPOINTERSSTORAGEBUFFER: number;
    static calloc(): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceVariablePointersFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVariablePointersFeatures;
    static create(): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceVariablePointersFeatures;
    static create(paramarg0: number): VkPhysicalDeviceVariablePointersFeatures;
    static createSafe(paramarg0: number): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVariablePointersFeatures;
    static malloc(): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVariablePointerFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceVariablePointersFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVariablePointersFeatures;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvariablePointers(paramarg0: number): number;
    static nvariablePointers(paramarg0: number, paramarg1: number): void;
    static nvariablePointersStorageBuffer(paramarg0: number): number;
    static nvariablePointersStorageBuffer(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVariablePointerFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVariablePointerFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVariablePointerFeaturesKHR;
    sType$Default(): VkPhysicalDeviceVariablePointerFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceVariablePointerFeaturesKHR;
    set(arg0: VkPhysicalDeviceVariablePointerFeaturesKHR): VkPhysicalDeviceVariablePointerFeaturesKHR;
    set(arg0: VkPhysicalDeviceVariablePointersFeatures): VkPhysicalDeviceVariablePointersFeatures;
    variablePointers(): boolean;
    variablePointers(arg0: boolean): VkPhysicalDeviceVariablePointerFeaturesKHR;
    variablePointersStorageBuffer(): boolean;
    variablePointersStorageBuffer(arg0: boolean): VkPhysicalDeviceVariablePointerFeaturesKHR;
}