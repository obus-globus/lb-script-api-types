import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAabbPositionsKHR extends Struct<VkAabbPositionsKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXX: number;
    static MAXY: number;
    static MAXZ: number;
    static MINX: number;
    static MINY: number;
    static MINZ: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkAabbPositionsKHR;
    static calloc(paramarg0: MemoryStack): VkAabbPositionsKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAabbPositionsKHR;
    static create(paramarg0: number): VkAabbPositionsKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAabbPositionsKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAabbPositionsKHR;
    static malloc(paramarg0: MemoryStack): VkAabbPositionsKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxX(paramarg0: number): number;
    static nmaxX(paramarg0: number, paramarg1: number): void;
    static nmaxY(paramarg0: number): number;
    static nmaxY(paramarg0: number, paramarg1: number): void;
    static nmaxZ(paramarg0: number): number;
    static nmaxZ(paramarg0: number, paramarg1: number): void;
    static nminX(paramarg0: number): number;
    static nminX(paramarg0: number, paramarg1: number): void;
    static nminY(paramarg0: number): number;
    static nminY(paramarg0: number, paramarg1: number): void;
    static nminZ(paramarg0: number): number;
    static nminZ(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAabbPositionsKHR;
    maxX(): number;
    maxX(arg0: number): VkAabbPositionsKHR;
    maxY(): number;
    maxY(arg0: number): VkAabbPositionsKHR;
    maxZ(): number;
    maxZ(arg0: number): VkAabbPositionsKHR;
    minX(): number;
    minX(arg0: number): VkAabbPositionsKHR;
    minY(): number;
    minY(arg0: number): VkAabbPositionsKHR;
    minZ(): number;
    minZ(arg0: number): VkAabbPositionsKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkAabbPositionsKHR;
    set(arg0: VkAabbPositionsKHR): VkAabbPositionsKHR;
    sizeof(): number;
}