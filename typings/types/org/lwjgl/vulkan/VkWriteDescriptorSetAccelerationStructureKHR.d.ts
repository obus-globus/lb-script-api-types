import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWriteDescriptorSetAccelerationStructureKHR extends Struct<VkWriteDescriptorSetAccelerationStructureKHR> implements NativeResource {
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
    static calloc(): VkWriteDescriptorSetAccelerationStructureKHR;
    static calloc(paramarg0: MemoryStack): VkWriteDescriptorSetAccelerationStructureKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWriteDescriptorSetAccelerationStructureKHR;
    static create(paramarg0: number): VkWriteDescriptorSetAccelerationStructureKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteDescriptorSetAccelerationStructureKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWriteDescriptorSetAccelerationStructureKHR;
    static malloc(paramarg0: MemoryStack): VkWriteDescriptorSetAccelerationStructureKHR;
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
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructureCount(): number;
    accelerationStructureCount(arg0: number): VkWriteDescriptorSetAccelerationStructureKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWriteDescriptorSetAccelerationStructureKHR;
    pAccelerationStructures(): LongBuffer;
    pAccelerationStructures(arg0: LongBuffer): VkWriteDescriptorSetAccelerationStructureKHR;
    pNext(): number;
    pNext(arg0: number): VkWriteDescriptorSetAccelerationStructureKHR;
    sType(): number;
    sType(arg0: number): VkWriteDescriptorSetAccelerationStructureKHR;
    sType$Default(): VkWriteDescriptorSetAccelerationStructureKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): VkWriteDescriptorSetAccelerationStructureKHR;
    set(arg0: VkWriteDescriptorSetAccelerationStructureKHR): VkWriteDescriptorSetAccelerationStructureKHR;
    sizeof(): number;
}