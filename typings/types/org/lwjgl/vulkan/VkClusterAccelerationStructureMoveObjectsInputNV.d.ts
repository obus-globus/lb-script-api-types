import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkClusterAccelerationStructureMoveObjectsInputNV extends Struct<VkClusterAccelerationStructureMoveObjectsInputNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXMOVEDBYTES: number;
    static NOMOVEOVERLAP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkClusterAccelerationStructureMoveObjectsInputNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureMoveObjectsInputNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureMoveObjectsInputNV;
    static create(paramarg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureMoveObjectsInputNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureMoveObjectsInputNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxMovedBytes(paramarg0: number): number;
    static nmaxMovedBytes(paramarg0: number, paramarg1: number): void;
    static nnoMoveOverlap(paramarg0: number): number;
    static nnoMoveOverlap(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureMoveObjectsInputNV;
    maxMovedBytes(): number;
    maxMovedBytes(arg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    noMoveOverlap(): boolean;
    noMoveOverlap(arg0: boolean): VkClusterAccelerationStructureMoveObjectsInputNV;
    pNext(): number;
    pNext(arg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    sType(): number;
    sType(arg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    sType$Default(): VkClusterAccelerationStructureMoveObjectsInputNV;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    set(arg0: VkClusterAccelerationStructureMoveObjectsInputNV): VkClusterAccelerationStructureMoveObjectsInputNV;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
}