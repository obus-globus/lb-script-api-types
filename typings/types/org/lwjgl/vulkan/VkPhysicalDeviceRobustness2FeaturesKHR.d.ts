import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRobustness2FeaturesKHR extends Struct<VkPhysicalDeviceRobustness2FeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NULLDESCRIPTOR: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROBUSTBUFFERACCESS2: number;
    static ROBUSTIMAGEACCESS2: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRobustness2FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRobustness2FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceRobustness2FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRobustness2FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRobustness2FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRobustness2FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nnullDescriptor(paramarg0: number): number;
    static nnullDescriptor(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrobustBufferAccess2(paramarg0: number): number;
    static nrobustBufferAccess2(paramarg0: number, paramarg1: number): void;
    static nrobustImageAccess2(paramarg0: number): number;
    static nrobustImageAccess2(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRobustness2FeaturesKHR;
    nullDescriptor(): boolean;
    nullDescriptor(arg0: boolean): VkPhysicalDeviceRobustness2FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRobustness2FeaturesKHR;
    robustBufferAccess2(): boolean;
    robustBufferAccess2(arg0: boolean): VkPhysicalDeviceRobustness2FeaturesKHR;
    robustImageAccess2(): boolean;
    robustImageAccess2(arg0: boolean): VkPhysicalDeviceRobustness2FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRobustness2FeaturesKHR;
    sType$Default(): VkPhysicalDeviceRobustness2FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceRobustness2FeaturesKHR;
    set(arg0: VkPhysicalDeviceRobustness2FeaturesKHR): VkPhysicalDeviceRobustness2FeaturesKHR;
    sizeof(): number;
}