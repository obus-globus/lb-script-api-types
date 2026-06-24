import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWriteDescriptorSetPartitionedAccelerationStructureNV extends Struct<VkWriteDescriptorSetPartitionedAccelerationStructureNV> implements NativeResource {
    static ACCELERATIONSTRUCTURECOUNT: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PACCELERATIONSTRUCTURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static calloc(paramarg0: MemoryStack): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static create(paramarg0: number): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static malloc(paramarg0: MemoryStack): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructureCount(paramarg0: number): number;
    static naccelerationStructureCount(paramarg0: number, paramarg1: number): void;
    static npAccelerationStructures(paramarg0: number): LongBuffer;
    static npAccelerationStructures(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructureCount(): number;
    accelerationStructureCount(arg0: number): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    pAccelerationStructures(): LongBuffer;
    pAccelerationStructures(arg0: LongBuffer): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    pNext(): number;
    pNext(arg0: number): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    sType(): number;
    sType(arg0: number): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    sType$Default(): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    set(arg0: VkWriteDescriptorSetPartitionedAccelerationStructureNV): VkWriteDescriptorSetPartitionedAccelerationStructureNV;
    sizeof(): number;
}