import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCooperativeMatrixFeaturesKHR extends Struct<VkPhysicalDeviceCooperativeMatrixFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COOPERATIVEMATRIX: number;
    static COOPERATIVEMATRIXROBUSTBUFFERACCESS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncooperativeMatrix(paramarg0: number): number;
    static ncooperativeMatrix(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixRobustBufferAccess(paramarg0: number): number;
    static ncooperativeMatrixRobustBufferAccess(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cooperativeMatrix(): boolean;
    cooperativeMatrix(arg0: boolean): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    cooperativeMatrixRobustBufferAccess(): boolean;
    cooperativeMatrixRobustBufferAccess(arg0: boolean): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    sType$Default(): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    set(arg0: VkPhysicalDeviceCooperativeMatrixFeaturesKHR): VkPhysicalDeviceCooperativeMatrixFeaturesKHR;
    sizeof(): number;
}