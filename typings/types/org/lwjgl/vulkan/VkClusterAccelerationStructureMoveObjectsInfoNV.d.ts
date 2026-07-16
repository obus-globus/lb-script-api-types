import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkClusterAccelerationStructureMoveObjectsInfoNV extends Struct<VkClusterAccelerationStructureMoveObjectsInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCELERATIONSTRUCTURE: number;
    static calloc(): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static create(paramarg0: number): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureMoveObjectsInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nsrcAccelerationStructure(paramarg0: number): number;
    static nsrcAccelerationStructure(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureMoveObjectsInfoNV;
    set(arg0: VkClusterAccelerationStructureMoveObjectsInfoNV): VkClusterAccelerationStructureMoveObjectsInfoNV;
    sizeof(): number;
    srcAccelerationStructure(): number;
    srcAccelerationStructure(arg0: number): VkClusterAccelerationStructureMoveObjectsInfoNV;
}