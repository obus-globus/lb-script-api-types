import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureInstanceKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureInstanceKHR.d.ts'
import type { VkAccelerationStructureMatrixMotionInstanceNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureMatrixMotionInstanceNV.d.ts'
import type { VkAccelerationStructureSRTMotionInstanceNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureSRTMotionInstanceNV.d.ts'
export class VkAccelerationStructureMotionInstanceDataNV extends Struct<VkAccelerationStructureMotionInstanceDataNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MATRIXMOTIONINSTANCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRTMOTIONINSTANCE: number;
    static STATICINSTANCE: number;
    static calloc(): VkAccelerationStructureMotionInstanceDataNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureMotionInstanceDataNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureMotionInstanceDataNV;
    static create(paramarg0: number): VkAccelerationStructureMotionInstanceDataNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureMotionInstanceDataNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureMotionInstanceDataNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureMotionInstanceDataNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmatrixMotionInstance(paramarg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    static nmatrixMotionInstance(paramarg0: number, paramarg1: VkAccelerationStructureMatrixMotionInstanceNV): void;
    static nsrtMotionInstance(paramarg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    static nsrtMotionInstance(paramarg0: number, paramarg1: VkAccelerationStructureSRTMotionInstanceNV): void;
    static nstaticInstance(paramarg0: number): VkAccelerationStructureInstanceKHR;
    static nstaticInstance(paramarg0: number, paramarg1: VkAccelerationStructureInstanceKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureMotionInstanceDataNV;
    matrixMotionInstance(): VkAccelerationStructureMatrixMotionInstanceNV;
    matrixMotionInstance(arg0: (param0: VkAccelerationStructureMatrixMotionInstanceNV) => void): VkAccelerationStructureMotionInstanceDataNV;
    matrixMotionInstance(arg0: VkAccelerationStructureMatrixMotionInstanceNV): VkAccelerationStructureMotionInstanceDataNV;
    set(arg0: VkAccelerationStructureMotionInstanceDataNV): VkAccelerationStructureMotionInstanceDataNV;
    sizeof(): number;
    srtMotionInstance(): VkAccelerationStructureSRTMotionInstanceNV;
    srtMotionInstance(arg0: (param0: VkAccelerationStructureSRTMotionInstanceNV) => void): VkAccelerationStructureMotionInstanceDataNV;
    srtMotionInstance(arg0: VkAccelerationStructureSRTMotionInstanceNV): VkAccelerationStructureMotionInstanceDataNV;
    staticInstance(): VkAccelerationStructureInstanceKHR;
    staticInstance(arg0: (param0: VkAccelerationStructureInstanceKHR) => void): VkAccelerationStructureMotionInstanceDataNV;
    staticInstance(arg0: VkAccelerationStructureInstanceKHR): VkAccelerationStructureMotionInstanceDataNV;
}