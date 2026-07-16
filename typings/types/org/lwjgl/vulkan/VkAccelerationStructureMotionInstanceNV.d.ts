import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureMotionInstanceDataNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureMotionInstanceDataNV.d.ts'
export class VkAccelerationStructureMotionInstanceNV extends Struct<VkAccelerationStructureMotionInstanceNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): VkAccelerationStructureMotionInstanceNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureMotionInstanceNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureMotionInstanceNV;
    static create(paramarg0: number): VkAccelerationStructureMotionInstanceNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureMotionInstanceNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureMotionInstanceNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureMotionInstanceNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): VkAccelerationStructureMotionInstanceDataNV;
    static ndata(paramarg0: number, paramarg1: VkAccelerationStructureMotionInstanceDataNV): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureMotionInstanceNV;
    data(): VkAccelerationStructureMotionInstanceDataNV;
    data(arg0: (param0: VkAccelerationStructureMotionInstanceDataNV) => void): VkAccelerationStructureMotionInstanceNV;
    data(arg0: VkAccelerationStructureMotionInstanceDataNV): VkAccelerationStructureMotionInstanceNV;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureMotionInstanceNV;
    set(arg0: number, arg1: number, arg2: VkAccelerationStructureMotionInstanceDataNV): VkAccelerationStructureMotionInstanceNV;
    set(arg0: VkAccelerationStructureMotionInstanceNV): VkAccelerationStructureMotionInstanceNV;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkAccelerationStructureMotionInstanceNV;
}