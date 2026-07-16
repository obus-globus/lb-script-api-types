import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_BBox extends Struct<FT_BBox> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static XMAX: number;
    static XMIN: number;
    static YMAX: number;
    static YMIN: number;
    static calloc(): FT_BBox;
    static calloc(paramarg0: MemoryStack): FT_BBox;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_BBox;
    static create(paramarg0: number): FT_BBox;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_BBox;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_BBox;
    static malloc(paramarg0: MemoryStack): FT_BBox;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nxMax(paramarg0: number): number;
    static nxMax(paramarg0: number, paramarg1: number): void;
    static nxMin(paramarg0: number): number;
    static nxMin(paramarg0: number, paramarg1: number): void;
    static nyMax(paramarg0: number): number;
    static nyMax(paramarg0: number, paramarg1: number): void;
    static nyMin(paramarg0: number): number;
    static nyMin(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_BBox;
    set(arg0: number, arg1: number, arg2: number, arg3: number): FT_BBox;
    set(arg0: FT_BBox): FT_BBox;
    sizeof(): number;
    xMax(): number;
    xMax(arg0: number): FT_BBox;
    xMin(): number;
    xMin(arg0: number): FT_BBox;
    yMax(): number;
    yMax(arg0: number): FT_BBox;
    yMin(): number;
    yMin(arg0: number): FT_BBox;
}