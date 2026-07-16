import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAccelerationStructureBuildRangeInfoKHR extends Struct<VkAccelerationStructureBuildRangeInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRSTVERTEX: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMITIVECOUNT: number;
    static PRIMITIVEOFFSET: number;
    static SIZEOF: number;
    static TRANSFORMOFFSET: number;
    static calloc(): VkAccelerationStructureBuildRangeInfoKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureBuildRangeInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureBuildRangeInfoKHR;
    static create(paramarg0: number): VkAccelerationStructureBuildRangeInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureBuildRangeInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureBuildRangeInfoKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureBuildRangeInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfirstVertex(paramarg0: number): number;
    static nfirstVertex(paramarg0: number, paramarg1: number): void;
    static nprimitiveCount(paramarg0: number): number;
    static nprimitiveCount(paramarg0: number, paramarg1: number): void;
    static nprimitiveOffset(paramarg0: number): number;
    static nprimitiveOffset(paramarg0: number, paramarg1: number): void;
    static ntransformOffset(paramarg0: number): number;
    static ntransformOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureBuildRangeInfoKHR;
    firstVertex(): number;
    firstVertex(arg0: number): VkAccelerationStructureBuildRangeInfoKHR;
    primitiveCount(): number;
    primitiveCount(arg0: number): VkAccelerationStructureBuildRangeInfoKHR;
    primitiveOffset(): number;
    primitiveOffset(arg0: number): VkAccelerationStructureBuildRangeInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkAccelerationStructureBuildRangeInfoKHR;
    set(arg0: VkAccelerationStructureBuildRangeInfoKHR): VkAccelerationStructureBuildRangeInfoKHR;
    sizeof(): number;
    transformOffset(): number;
    transformOffset(arg0: number): VkAccelerationStructureBuildRangeInfoKHR;
}