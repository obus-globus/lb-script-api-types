import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMemoryBudgetPropertiesEXT extends Struct<VkPhysicalDeviceMemoryBudgetPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAPBUDGET: number;
    static HEAPUSAGE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheapBudget(paramarg0: number): LongBuffer;
    static nheapBudget(paramarg0: number, paramarg1: number): number;
    static nheapUsage(paramarg0: number): LongBuffer;
    static nheapUsage(paramarg0: number, paramarg1: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    heapBudget(): LongBuffer;
    heapBudget(arg0: number): number;
    heapUsage(): LongBuffer;
    heapUsage(arg0: number): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    sType$Default(): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    set(arg0: VkPhysicalDeviceMemoryBudgetPropertiesEXT): VkPhysicalDeviceMemoryBudgetPropertiesEXT;
    sizeof(): number;
}