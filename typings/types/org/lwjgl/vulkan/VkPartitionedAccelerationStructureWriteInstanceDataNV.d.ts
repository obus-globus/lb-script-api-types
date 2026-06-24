import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTransformMatrixKHR } from '../../../org/lwjgl/vulkan/VkTransformMatrixKHR.d.ts'
export class VkPartitionedAccelerationStructureWriteInstanceDataNV extends Struct<VkPartitionedAccelerationStructureWriteInstanceDataNV> implements NativeResource {
    static ACCELERATIONSTRUCTURE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXPLICITAABB: number;
    static INSTANCECONTRIBUTIONTOHITGROUPINDEX: number;
    static INSTANCEFLAGS: number;
    static INSTANCEID: number;
    static INSTANCEINDEX: number;
    static INSTANCEMASK: number;
    static PARTITIONINDEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TRANSFORM: number;
    static calloc(): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static calloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static create(paramarg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static malloc(paramarg0: MemoryStack): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructure(paramarg0: number): number;
    static naccelerationStructure(paramarg0: number, paramarg1: number): void;
    static nexplicitAABB(paramarg0: number, paramarg1: number): number;
    static nexplicitAABB(paramarg0: number): FloatBuffer;
    static nexplicitAABB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nexplicitAABB(paramarg0: number, paramarg1: FloatBuffer): void;
    static ninstanceContributionToHitGroupIndex(paramarg0: number): number;
    static ninstanceContributionToHitGroupIndex(paramarg0: number, paramarg1: number): void;
    static ninstanceFlags(paramarg0: number): number;
    static ninstanceFlags(paramarg0: number, paramarg1: number): void;
    static ninstanceID(paramarg0: number): number;
    static ninstanceID(paramarg0: number, paramarg1: number): void;
    static ninstanceIndex(paramarg0: number): number;
    static ninstanceIndex(paramarg0: number, paramarg1: number): void;
    static ninstanceMask(paramarg0: number): number;
    static ninstanceMask(paramarg0: number, paramarg1: number): void;
    static npartitionIndex(paramarg0: number): number;
    static npartitionIndex(paramarg0: number, paramarg1: number): void;
    static ntransform(paramarg0: number): VkTransformMatrixKHR;
    static ntransform(paramarg0: number, paramarg1: VkTransformMatrixKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructure(): number;
    accelerationStructure(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    explicitAABB(): FloatBuffer;
    explicitAABB(arg0: FloatBuffer): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    explicitAABB(arg0: number): number;
    explicitAABB(arg0: number, arg1: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    instanceContributionToHitGroupIndex(): number;
    instanceContributionToHitGroupIndex(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    instanceFlags(): number;
    instanceFlags(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    instanceID(): number;
    instanceID(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    instanceIndex(): number;
    instanceIndex(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    instanceMask(): number;
    instanceMask(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    partitionIndex(): number;
    partitionIndex(arg0: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    set(arg0: VkPartitionedAccelerationStructureWriteInstanceDataNV): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    set(arg0: VkTransformMatrixKHR, arg1: FloatBuffer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    sizeof(): number;
    transform(): VkTransformMatrixKHR;
    transform(arg0: (param0: VkTransformMatrixKHR) => void): VkPartitionedAccelerationStructureWriteInstanceDataNV;
    transform(arg0: VkTransformMatrixKHR): VkPartitionedAccelerationStructureWriteInstanceDataNV;
}