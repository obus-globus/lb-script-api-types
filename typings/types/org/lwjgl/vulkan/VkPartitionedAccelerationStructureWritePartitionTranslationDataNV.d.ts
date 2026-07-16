import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPartitionedAccelerationStructureWritePartitionTranslationDataNV extends Struct<VkPartitionedAccelerationStructureWritePartitionTranslationDataNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PARTITIONINDEX: number;
    static PARTITIONTRANSLATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static calloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static create(paramarg0: number): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static malloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npartitionIndex(paramarg0: number): number;
    static npartitionIndex(paramarg0: number, paramarg1: number): void;
    static npartitionTranslation(paramarg0: number, paramarg1: number): number;
    static npartitionTranslation(paramarg0: number): FloatBuffer;
    static npartitionTranslation(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static npartitionTranslation(paramarg0: number, paramarg1: FloatBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    partitionIndex(): number;
    partitionIndex(arg0: number): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    partitionTranslation(): FloatBuffer;
    partitionTranslation(arg0: FloatBuffer): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    partitionTranslation(arg0: number): number;
    partitionTranslation(arg0: number, arg1: number): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    set(arg0: number, arg1: FloatBuffer): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    set(arg0: VkPartitionedAccelerationStructureWritePartitionTranslationDataNV): VkPartitionedAccelerationStructureWritePartitionTranslationDataNV;
    sizeof(): number;
}