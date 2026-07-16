import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkGeometryDataNV } from '../../../org/lwjgl/vulkan/VkGeometryDataNV.d.ts'
export class VkGeometryNV extends Struct<VkGeometryNV> implements NativeResource {
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
    static calloc(): VkGeometryNV;
    static calloc(paramarg0: MemoryStack): VkGeometryNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeometryNV;
    static create(paramarg0: number): VkGeometryNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeometryNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeometryNV;
    static malloc(paramarg0: MemoryStack): VkGeometryNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngeometry(paramarg0: number): VkGeometryDataNV;
    static ngeometry(paramarg0: number, paramarg1: VkGeometryDataNV): void;
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
    create(arg0: number, arg1: ByteBuffer): VkGeometryNV;
    flags(): number;
    flags(arg0: number): VkGeometryNV;
    geometry(): VkGeometryDataNV;
    geometry(arg0: (param0: VkGeometryDataNV) => void): VkGeometryNV;
    geometry(arg0: VkGeometryDataNV): VkGeometryNV;
    geometryType(): number;
    geometryType(arg0: number): VkGeometryNV;
    pNext(): number;
    pNext(arg0: number): VkGeometryNV;
    sType(): number;
    sType(arg0: number): VkGeometryNV;
    sType$Default(): VkGeometryNV;
    set(arg0: number, arg1: number, arg2: number, arg3: VkGeometryDataNV, arg4: number): VkGeometryNV;
    set(arg0: VkGeometryNV): VkGeometryNV;
    sizeof(): number;
}