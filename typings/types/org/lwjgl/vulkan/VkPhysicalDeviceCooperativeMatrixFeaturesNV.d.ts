import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCooperativeMatrixFeaturesNV extends Struct<VkPhysicalDeviceCooperativeMatrixFeaturesNV> implements NativeResource {
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
    static calloc(): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cooperativeMatrix(): boolean;
    cooperativeMatrix(arg0: boolean): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    cooperativeMatrixRobustBufferAccess(): boolean;
    cooperativeMatrixRobustBufferAccess(arg0: boolean): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    sType$Default(): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    set(arg0: VkPhysicalDeviceCooperativeMatrixFeaturesNV): VkPhysicalDeviceCooperativeMatrixFeaturesNV;
    sizeof(): number;
}