import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV extends Struct<VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static create(paramarg0: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static ngeometryFlags(paramarg0: number): number;
    static ngeometryFlags(paramarg0: number, paramarg1: number): void;
    static ngeometryIndex(paramarg0: number): number;
    static ngeometryIndex(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    geometryFlags(): number;
    geometryFlags(arg0: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    geometryIndex(): number;
    geometryIndex(arg0: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    reserved(): number;
    reserved(arg0: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    set(arg0: number, arg1: number, arg2: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    set(arg0: VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    sizeof(): number;
}