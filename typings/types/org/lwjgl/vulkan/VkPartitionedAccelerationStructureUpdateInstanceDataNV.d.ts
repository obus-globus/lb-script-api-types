import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPartitionedAccelerationStructureUpdateInstanceDataNV extends Struct<VkPartitionedAccelerationStructureUpdateInstanceDataNV> implements NativeResource {
    static ACCELERATIONSTRUCTURE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INSTANCECONTRIBUTIONTOHITGROUPINDEX: number;
    static INSTANCEINDEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static calloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static create(paramarg0: number): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static malloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructure(paramarg0: number): number;
    static naccelerationStructure(paramarg0: number, paramarg1: number): void;
    static ninstanceContributionToHitGroupIndex(paramarg0: number): number;
    static ninstanceContributionToHitGroupIndex(paramarg0: number, paramarg1: number): void;
    static ninstanceIndex(paramarg0: number): number;
    static ninstanceIndex(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructure(): number;
    accelerationStructure(arg0: number): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    instanceContributionToHitGroupIndex(): number;
    instanceContributionToHitGroupIndex(arg0: number): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    instanceIndex(): number;
    instanceIndex(arg0: number): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    set(arg0: number, arg1: number, arg2: number): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    set(arg0: VkPartitionedAccelerationStructureUpdateInstanceDataNV): VkPartitionedAccelerationStructureUpdateInstanceDataNV;
    sizeof(): number;
}