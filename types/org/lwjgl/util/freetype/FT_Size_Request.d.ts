import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Size_Request extends Struct<FT_Size_Request> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEIGHT: number;
    static HORIRESOLUTION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static VERTRESOLUTION: number;
    static WIDTH: number;
    static calloc(): FT_Size_Request;
    static calloc(paramarg0: MemoryStack): FT_Size_Request;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Size_Request;
    static create(paramarg0: number): FT_Size_Request;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Size_Request;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Size_Request;
    static malloc(paramarg0: MemoryStack): FT_Size_Request;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nhoriResolution(paramarg0: number): number;
    static nhoriResolution(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nvertResolution(paramarg0: number): number;
    static nvertResolution(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Size_Request;
    height(): number;
    height(arg0: number): FT_Size_Request;
    horiResolution(): number;
    horiResolution(arg0: number): FT_Size_Request;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): FT_Size_Request;
    set(arg0: FT_Size_Request): FT_Size_Request;
    sizeof(): number;
    type(): number;
    type(arg0: number): FT_Size_Request;
    vertResolution(): number;
    vertResolution(arg0: number): FT_Size_Request;
    width(): number;
    width(arg0: number): FT_Size_Request;
}