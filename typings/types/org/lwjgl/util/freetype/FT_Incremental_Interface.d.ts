import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Incremental_Funcs } from '../../../../org/lwjgl/util/freetype/FT_Incremental_Funcs.d.ts'
export class FT_Incremental_Interface extends Struct<FT_Incremental_Interface> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FUNCS: number;
    static OBJECT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Incremental_Interface;
    static calloc(paramarg0: MemoryStack): FT_Incremental_Interface;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Incremental_Interface;
    static create(paramarg0: number): FT_Incremental_Interface;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Incremental_Interface;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Incremental_Interface;
    static malloc(paramarg0: MemoryStack): FT_Incremental_Interface;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfuncs(paramarg0: number): FT_Incremental_Funcs;
    static nfuncs(paramarg0: number, paramarg1: FT_Incremental_Funcs): void;
    static nobject(paramarg0: number): number;
    static nobject(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Incremental_Interface;
    funcs(): FT_Incremental_Funcs;
    funcs(arg0: FT_Incremental_Funcs): FT_Incremental_Interface;
    object(): number;
    object(arg0: number): FT_Incremental_Interface;
    set(arg0: FT_Incremental_Funcs, arg1: number): FT_Incremental_Interface;
    set(arg0: FT_Incremental_Interface): FT_Incremental_Interface;
    sizeof(): number;
}