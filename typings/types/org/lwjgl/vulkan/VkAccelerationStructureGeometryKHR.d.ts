import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX } from '../../../org/lwjgl/vulkan/VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX.d.ts'
import type { VkAccelerationStructureGeometryDataKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometryDataKHR.d.ts'
import type { VkAccelerationStructureGeometryLinearSweptSpheresDataNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometryLinearSweptSpheresDataNV.d.ts'
import type { VkAccelerationStructureGeometrySpheresDataNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometrySpheresDataNV.d.ts'
export class VkAccelerationStructureGeometryKHR extends Struct<VkAccelerationStructureGeometryKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static GEOMETRY: number;
    static GEOMETRYTYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAccelerationStructureGeometryKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureGeometryKHR;
    static create(paramarg0: number): VkAccelerationStructureGeometryKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureGeometryKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureGeometryKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngeometry(paramarg0: number): VkAccelerationStructureGeometryDataKHR;
    static ngeometry(paramarg0: number, paramarg1: VkAccelerationStructureGeometryDataKHR): void;
    static ngeometryType(paramarg0: number): number;
    static ngeometryType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureGeometryKHR;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureGeometryKHR;
    geometry(): VkAccelerationStructureGeometryDataKHR;
    geometry(arg0: (param0: VkAccelerationStructureGeometryDataKHR) => void): VkAccelerationStructureGeometryKHR;
    geometry(arg0: VkAccelerationStructureGeometryDataKHR): VkAccelerationStructureGeometryKHR;
    geometryType(): number;
    geometryType(arg0: number): VkAccelerationStructureGeometryKHR;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureGeometryKHR;
    pNext(arg0: VkAccelerationStructureDenseGeometryFormatTrianglesDataAMDX): VkAccelerationStructureGeometryKHR;
    pNext(arg0: VkAccelerationStructureGeometryLinearSweptSpheresDataNV): VkAccelerationStructureGeometryKHR;
    pNext(arg0: VkAccelerationStructureGeometrySpheresDataNV): VkAccelerationStructureGeometryKHR;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureGeometryKHR;
    sType$Default(): VkAccelerationStructureGeometryKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: VkAccelerationStructureGeometryDataKHR, arg4: number): VkAccelerationStructureGeometryKHR;
    set(arg0: VkAccelerationStructureGeometryKHR): VkAccelerationStructureGeometryKHR;
    sizeof(): number;
}