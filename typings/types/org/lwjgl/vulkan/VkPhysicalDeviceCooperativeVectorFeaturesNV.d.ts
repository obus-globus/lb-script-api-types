import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCooperativeVectorFeaturesNV extends Struct<VkPhysicalDeviceCooperativeVectorFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COOPERATIVEVECTOR: number;
    static COOPERATIVEVECTORTRAINING: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncooperativeVector(paramarg0: number): number;
    static ncooperativeVector(paramarg0: number, paramarg1: number): void;
    static ncooperativeVectorTraining(paramarg0: number): number;
    static ncooperativeVectorTraining(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cooperativeVector(): boolean;
    cooperativeVector(arg0: boolean): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    cooperativeVectorTraining(): boolean;
    cooperativeVectorTraining(arg0: boolean): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    sType$Default(): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    set(arg0: VkPhysicalDeviceCooperativeVectorFeaturesNV): VkPhysicalDeviceCooperativeVectorFeaturesNV;
    sizeof(): number;
}