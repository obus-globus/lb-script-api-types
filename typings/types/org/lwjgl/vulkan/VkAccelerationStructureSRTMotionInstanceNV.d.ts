import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSRTDataNV } from '../../../org/lwjgl/vulkan/VkSRTDataNV.d.ts'
export class VkAccelerationStructureSRTMotionInstanceNV extends Struct<VkAccelerationStructureSRTMotionInstanceNV> implements NativeResource {
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
    static calloc(): VkAccelerationStructureSRTMotionInstanceNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureSRTMotionInstanceNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureSRTMotionInstanceNV;
    static create(paramarg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureSRTMotionInstanceNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureSRTMotionInstanceNV;
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
    static ntransformT0(paramarg0: number): VkSRTDataNV;
    static ntransformT0(paramarg0: number, paramarg1: VkSRTDataNV): void;
    static ntransformT1(paramarg0: number): VkSRTDataNV;
    static ntransformT1(paramarg0: number, paramarg1: VkSRTDataNV): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructureReference(): number;
    accelerationStructureReference(arg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureSRTMotionInstanceNV;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    instanceCustomIndex(): number;
    instanceCustomIndex(arg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    instanceShaderBindingTableRecordOffset(): number;
    instanceShaderBindingTableRecordOffset(arg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    mask(): number;
    mask(arg0: number): VkAccelerationStructureSRTMotionInstanceNV;
    set(arg0: VkAccelerationStructureSRTMotionInstanceNV): VkAccelerationStructureSRTMotionInstanceNV;
    set(arg0: VkSRTDataNV, arg1: VkSRTDataNV, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkAccelerationStructureSRTMotionInstanceNV;
    sizeof(): number;
    transformT0(): VkSRTDataNV;
    transformT0(arg0: (param0: VkSRTDataNV) => void): VkAccelerationStructureSRTMotionInstanceNV;
    transformT0(arg0: VkSRTDataNV): VkAccelerationStructureSRTMotionInstanceNV;
    transformT1(): VkSRTDataNV;
    transformT1(arg0: (param0: VkSRTDataNV) => void): VkAccelerationStructureSRTMotionInstanceNV;
    transformT1(arg0: VkSRTDataNV): VkAccelerationStructureSRTMotionInstanceNV;
}