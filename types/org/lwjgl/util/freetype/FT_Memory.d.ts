import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Alloc_Func } from '../../../../org/lwjgl/util/freetype/FT_Alloc_Func.d.ts'
import type { FT_Alloc_FuncI } from '../../../../org/lwjgl/util/freetype/FT_Alloc_FuncI.d.ts'
import type { FT_Free_Func } from '../../../../org/lwjgl/util/freetype/FT_Free_Func.d.ts'
import type { FT_Free_FuncI } from '../../../../org/lwjgl/util/freetype/FT_Free_FuncI.d.ts'
import type { FT_Realloc_Func } from '../../../../org/lwjgl/util/freetype/FT_Realloc_Func.d.ts'
import type { FT_Realloc_FuncI } from '../../../../org/lwjgl/util/freetype/FT_Realloc_FuncI.d.ts'
export class FT_Memory extends Struct<FT_Memory> implements NativeResource {
    static ALIGNOF: number;
    static ALLOC: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FREE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REALLOC: number;
    static SIZEOF: number;
    static USER: number;
    static calloc(): FT_Memory;
    static calloc(paramarg0: MemoryStack): FT_Memory;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Memory;
    static create(paramarg0: number): FT_Memory;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Memory;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Memory;
    static malloc(paramarg0: MemoryStack): FT_Memory;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalloc(paramarg0: number): FT_Alloc_Func;
    static nalloc(paramarg0: number, paramarg1: (param0: number, param1: number) => kotlin.Long): void;
    static nfree$(paramarg0: number): FT_Free_Func;
    static nfree$(paramarg0: number, paramarg1: (param0: number, param1: number) => void): void;
    static nrealloc(paramarg0: number): FT_Realloc_Func;
    static nrealloc(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): void;
    static nuser(paramarg0: number): number;
    static nuser(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alloc(): FT_Alloc_Func;
    alloc(arg0: (param0: number, param1: number) => kotlin.Long): FT_Memory;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Memory;
    free$(): FT_Free_Func;
    free$(arg0: (param0: number, param1: number) => void): FT_Memory;
    realloc(): FT_Realloc_Func;
    realloc(arg0: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): FT_Memory;
    set(arg0: number, arg1: (param0: number, param1: number) => kotlin.Long, arg2: (param0: number, param1: number) => void, arg3: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): FT_Memory;
    set(arg0: FT_Memory): FT_Memory;
    sizeof(): number;
    user(): number;
    user(arg0: number): FT_Memory;
}