import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTransformMatrixKHR } from '../../../org/lwjgl/vulkan/VkTransformMatrixKHR.d.ts'
export class VkAccelerationStructureMatrixMotionInstanceNV extends Struct<VkAccelerationStructureMatrixMotionInstanceNV> implements NativeResource {
    static ACCELERATIONSTRUCTUREREFERENCE: number;
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITFIELD1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TRANSFORMT0: number;
    static TRANSFORMT1: number;
    static calloc(): VkAccelerationStructureMatrixMotionInstanceNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureMatrixMotionInstanceNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureMatrixMotionInstanceNV;
    static create(paramarg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureMatrixMotionInstanceNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureMatrixMotionInstanceNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructureReference(paramarg0: number): number;
    static naccelerationStructureReference(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ninstanceCustomIndex(paramarg0: number): number;
    static ninstanceCustomIndex(paramarg0: number, paramarg1: number): void;
    static ninstanceShaderBindingTableRecordOffset(paramarg0: number): number;
    static ninstanceShaderBindingTableRecordOffset(paramarg0: number, paramarg1: number): void;
    static nmask(paramarg0: number): number;
    static nmask(paramarg0: number, paramarg1: number): void;
    static ntransformT0(paramarg0: number): VkTransformMatrixKHR;
    static ntransformT0(paramarg0: number, paramarg1: VkTransformMatrixKHR): void;
    static ntransformT1(paramarg0: number): VkTransformMatrixKHR;
    static ntransformT1(paramarg0: number, paramarg1: VkTransformMatrixKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructureReference(): number;
    accelerationStructureReference(arg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureMatrixMotionInstanceNV;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    instanceCustomIndex(): number;
    instanceCustomIndex(arg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    instanceShaderBindingTableRecordOffset(): number;
    instanceShaderBindingTableRecordOffset(arg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    mask(): number;
    mask(arg0: number): VkAccelerationStructureMatrixMotionInstanceNV;
    set(arg0: VkAccelerationStructureMatrixMotionInstanceNV): VkAccelerationStructureMatrixMotionInstanceNV;
    set(arg0: VkTransformMatrixKHR, arg1: VkTransformMatrixKHR, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkAccelerationStructureMatrixMotionInstanceNV;
    sizeof(): number;
    transformT0(): VkTransformMatrixKHR;
    transformT0(arg0: (param0: VkTransformMatrixKHR) => void): VkAccelerationStructureMatrixMotionInstanceNV;
    transformT0(arg0: VkTransformMatrixKHR): VkAccelerationStructureMatrixMotionInstanceNV;
    transformT1(): VkTransformMatrixKHR;
    transformT1(arg0: (param0: VkTransformMatrixKHR) => void): VkAccelerationStructureMatrixMotionInstanceNV;
    transformT1(arg0: VkTransformMatrixKHR): VkAccelerationStructureMatrixMotionInstanceNV;
}