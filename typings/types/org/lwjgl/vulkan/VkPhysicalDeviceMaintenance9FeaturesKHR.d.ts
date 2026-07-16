import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMaintenance9FeaturesKHR extends Struct<VkPhysicalDeviceMaintenance9FeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAINTENANCE9: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance9FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaintenance9(paramarg0: number): number;
    static nmaintenance9(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance9FeaturesKHR;
    maintenance9(): boolean;
    maintenance9(arg0: boolean): VkPhysicalDeviceMaintenance9FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance9FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance9FeaturesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance9FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceMaintenance9FeaturesKHR;
    set(arg0: VkPhysicalDeviceMaintenance9FeaturesKHR): VkPhysicalDeviceMaintenance9FeaturesKHR;
    sizeof(): number;
}