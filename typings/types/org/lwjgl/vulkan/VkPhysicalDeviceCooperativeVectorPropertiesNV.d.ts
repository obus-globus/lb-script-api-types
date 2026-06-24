import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCooperativeVectorPropertiesNV extends Struct<VkPhysicalDeviceCooperativeVectorPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COOPERATIVEVECTORSUPPORTEDSTAGES: number;
    static COOPERATIVEVECTORTRAININGFLOAT16ACCUMULATION: number;
    static COOPERATIVEVECTORTRAININGFLOAT32ACCUMULATION: number;
    static MAXCOOPERATIVEVECTORCOMPONENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncooperativeVectorSupportedStages(paramarg0: number): number;
    static ncooperativeVectorTrainingFloat16Accumulation(paramarg0: number): number;
    static ncooperativeVectorTrainingFloat32Accumulation(paramarg0: number): number;
    static nmaxCooperativeVectorComponents(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cooperativeVectorSupportedStages(): number;
    cooperativeVectorTrainingFloat16Accumulation(): boolean;
    cooperativeVectorTrainingFloat32Accumulation(): boolean;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    maxCooperativeVectorComponents(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    sType$Default(): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    set(arg0: VkPhysicalDeviceCooperativeVectorPropertiesNV): VkPhysicalDeviceCooperativeVectorPropertiesNV;
    sizeof(): number;
}