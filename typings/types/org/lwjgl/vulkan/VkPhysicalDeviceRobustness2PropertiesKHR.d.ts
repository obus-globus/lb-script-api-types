import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRobustness2PropertiesKHR extends Struct<VkPhysicalDeviceRobustness2PropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROBUSTSTORAGEBUFFERACCESSSIZEALIGNMENT: number;
    static ROBUSTUNIFORMBUFFERACCESSSIZEALIGNMENT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRobustness2PropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2PropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRobustness2PropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRobustness2PropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2PropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrobustStorageBufferAccessSizeAlignment(paramarg0: number): number;
    static nrobustUniformBufferAccessSizeAlignment(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRobustness2PropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    robustStorageBufferAccessSizeAlignment(): number;
    robustUniformBufferAccessSizeAlignment(): number;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    sType$Default(): VkPhysicalDeviceRobustness2PropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceRobustness2PropertiesKHR;
    set(arg0: VkPhysicalDeviceRobustness2PropertiesKHR): VkPhysicalDeviceRobustness2PropertiesKHR;
    sizeof(): number;
}