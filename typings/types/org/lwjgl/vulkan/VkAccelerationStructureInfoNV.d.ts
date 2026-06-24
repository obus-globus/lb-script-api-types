import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAccelerationStructureInfoNV extends Struct<VkAccelerationStructureInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static GEOMETRYCOUNT: number;
    static INSTANCECOUNT: number;
    static PGEOMETRIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkAccelerationStructureInfoNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureInfoNV;
    static create(paramarg0: number): VkAccelerationStructureInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureInfoNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngeometryCount(paramarg0: number): number;
    static ngeometryCount(paramarg0: number, paramarg1: number): void;
    static ninstanceCount(paramarg0: number): number;
    static ninstanceCount(paramarg0: number, paramarg1: number): void;
    static npGeometries(paramarg0: number): (Object | null)[];
    static npGeometries(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureInfoNV;
    flags(): number;
    flags(arg0: number): VkAccelerationStructureInfoNV;
    geometryCount(): number;
    instanceCount(): number;
    instanceCount(arg0: number): VkAccelerationStructureInfoNV;
    pGeometries(): (Object | null)[];
    pGeometries(arg0: (Object | null)[]): VkAccelerationStructureInfoNV;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureInfoNV;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureInfoNV;
    sType$Default(): VkAccelerationStructureInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkAccelerationStructureInfoNV;
    set(arg0: VkAccelerationStructureInfoNV): VkAccelerationStructureInfoNV;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkAccelerationStructureInfoNV;
}