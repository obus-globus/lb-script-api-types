import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMaintenance10FeaturesKHR extends Struct<VkPhysicalDeviceMaintenance10FeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAINTENANCE10: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance10FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaintenance10(paramarg0: number): number;
    static nmaintenance10(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance10FeaturesKHR;
    maintenance10(): boolean;
    maintenance10(arg0: boolean): VkPhysicalDeviceMaintenance10FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance10FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance10FeaturesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance10FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceMaintenance10FeaturesKHR;
    set(arg0: VkPhysicalDeviceMaintenance10FeaturesKHR): VkPhysicalDeviceMaintenance10FeaturesKHR;
    sizeof(): number;
}