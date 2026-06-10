import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Outline_ConicToFunc } from '../../../../org/lwjgl/util/freetype/FT_Outline_ConicToFunc.d.ts'
import type { FT_Outline_ConicToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_ConicToFuncI.d.ts'
import type { FT_Outline_CubicToFunc } from '../../../../org/lwjgl/util/freetype/FT_Outline_CubicToFunc.d.ts'
import type { FT_Outline_CubicToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_CubicToFuncI.d.ts'
import type { FT_Outline_LineToFunc } from '../../../../org/lwjgl/util/freetype/FT_Outline_LineToFunc.d.ts'
import type { FT_Outline_LineToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_LineToFuncI.d.ts'
import type { FT_Outline_MoveToFunc } from '../../../../org/lwjgl/util/freetype/FT_Outline_MoveToFunc.d.ts'
import type { FT_Outline_MoveToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_MoveToFuncI.d.ts'
export class FT_Outline_Funcs extends Struct<FT_Outline_Funcs> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONIC_TO: number;
    static CUBIC_TO: number;
    static DELTA: number;
    static LINE_TO: number;
    static MOVE_TO: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHIFT: number;
    static SIZEOF: number;
    static calloc(): FT_Outline_Funcs;
    static calloc(paramarg0: MemoryStack): FT_Outline_Funcs;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Outline_Funcs;
    static create(paramarg0: number): FT_Outline_Funcs;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Outline_Funcs;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Outline_Funcs;
    static malloc(paramarg0: MemoryStack): FT_Outline_Funcs;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconic_to(paramarg0: number): FT_Outline_ConicToFunc;
    static nconic_to(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number) => number): void;
    static ncubic_to(paramarg0: number): FT_Outline_CubicToFunc;
    static ncubic_to(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static ndelta(paramarg0: number): number;
    static ndelta(paramarg0: number, paramarg1: number): void;
    static nline_to(paramarg0: number): FT_Outline_LineToFunc;
    static nline_to(paramarg0: number, paramarg1: (param0: number, param1: number) => number): void;
    static nmove_to(paramarg0: number): FT_Outline_MoveToFunc;
    static nmove_to(paramarg0: number, paramarg1: (param0: number, param1: number) => number): void;
    static nshift(paramarg0: number): number;
    static nshift(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    conic_to(): FT_Outline_ConicToFunc;
    conic_to(arg0: (param0: number, param1: number, param2: number) => number): FT_Outline_Funcs;
    create(arg0: number, arg1: ByteBuffer): FT_Outline_Funcs;
    cubic_to(): FT_Outline_CubicToFunc;
    cubic_to(arg0: (param0: number, param1: number, param2: number, param3: number) => number): FT_Outline_Funcs;
    delta(): number;
    delta(arg0: number): FT_Outline_Funcs;
    line_to(): FT_Outline_LineToFunc;
    line_to(arg0: (param0: number, param1: number) => number): FT_Outline_Funcs;
    move_to(): FT_Outline_MoveToFunc;
    move_to(arg0: (param0: number, param1: number) => number): FT_Outline_Funcs;
    set(arg0: FT_Outline_Funcs): FT_Outline_Funcs;
    set(arg0: (param0: number, param1: number) => number, arg1: (param0: number, param1: number) => number, arg2: (param0: number, param1: number, param2: number) => number, arg3: (param0: number, param1: number, param2: number, param3: number) => number, arg4: number, arg5: number): FT_Outline_Funcs;
    shift(): number;
    shift(arg0: number): FT_Outline_Funcs;
    sizeof(): number;
}