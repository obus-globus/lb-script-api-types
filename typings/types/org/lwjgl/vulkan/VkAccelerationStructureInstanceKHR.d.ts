import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTransformMatrixKHR } from '../../../org/lwjgl/vulkan/VkTransformMatrixKHR.d.ts'
export class VkAccelerationStructureInstanceKHR extends Struct<VkAccelerationStructureInstanceKHR> implements NativeResource {
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
    static TRANSFORM: number;
    static calloc(): VkAccelerationStructureInstanceKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureInstanceKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureInstanceKHR;
    static create(paramarg0: number): VkAccelerationStructureInstanceKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureInstanceKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureInstanceKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureInstanceKHR;
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
    static ntransform(paramarg0: number): VkTransformMatrixKHR;
    static ntransform(paramarg0: number, paramarg1: VkTransformMatrixKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructureReference(): number;
    accelerationStructureReference(arg0: number): VkAccelerationStructureInstanceKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureInstanceKHR;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureInstanceKHR;
    instanceCustomIndex(): number;
    instanceCustomIndex(arg0: number): VkAccelerationStructureInstanceKHR;
    instanceShaderBindingTableRecordOffset(): number;
    instanceShaderBindingTableRecordOffset(arg0: number): VkAccelerationStructureInstanceKHR;
    mask(): number;
    mask(arg0: number): VkAccelerationStructureInstanceKHR;
    set(arg0: VkAccelerationStructureInstanceKHR): VkAccelerationStructureInstanceKHR;
    set(arg0: VkTransformMatrixKHR, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkAccelerationStructureInstanceKHR;
    sizeof(): number;
    transform(): VkTransformMatrixKHR;
    transform(arg0: (param0: VkTransformMatrixKHR) => void): VkAccelerationStructureInstanceKHR;
    transform(arg0: VkTransformMatrixKHR): VkAccelerationStructureInstanceKHR;
}