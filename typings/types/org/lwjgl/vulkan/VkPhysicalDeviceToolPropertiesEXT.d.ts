import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceToolProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceToolProperties.d.ts'
export class VkPhysicalDeviceToolPropertiesEXT extends VkPhysicalDeviceToolProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static LAYER: number;
    static NAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PURPOSES: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERSION: number;
    static calloc(): VkPhysicalDeviceToolProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceToolProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceToolPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceToolPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceToolProperties;
    static create(paramarg0: number): VkPhysicalDeviceToolProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceToolPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceToolPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceToolProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceToolPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceToolProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceToolProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceToolPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceToolPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static nlayer(paramarg0: number): ByteBuffer;
    static nlayerString(paramarg0: number): string;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npurposes(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nversion(paramarg0: number): ByteBuffer;
    static nversionString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceToolPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceToolPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceToolPropertiesEXT;
    sType$Default(): VkPhysicalDeviceToolPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceToolPropertiesEXT;
    set(arg0: VkPhysicalDeviceToolProperties): VkPhysicalDeviceToolProperties;
    set(arg0: VkPhysicalDeviceToolPropertiesEXT): VkPhysicalDeviceToolPropertiesEXT;
}