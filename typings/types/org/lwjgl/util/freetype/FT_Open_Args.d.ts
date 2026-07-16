import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Stream } from '../../../../org/lwjgl/util/freetype/FT_Stream.d.ts'
export class FT_Open_Args extends Struct<FT_Open_Args> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DRIVER: number;
    static FLAGS: number;
    static MEMORY_BASE: number;
    static MEMORY_SIZE: number;
    static NUM_PARAMS: number;
    static PARAMS: number;
    static PATHNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STREAM: number;
    static calloc(): FT_Open_Args;
    static calloc(paramarg0: MemoryStack): FT_Open_Args;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Open_Args;
    static create(paramarg0: number): FT_Open_Args;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Open_Args;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Open_Args;
    static malloc(paramarg0: MemoryStack): FT_Open_Args;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndriver(paramarg0: number): number;
    static ndriver(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmemory_base(paramarg0: number): ByteBuffer;
    static nmemory_base(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmemory_size(paramarg0: number): number;
    static nmemory_size(paramarg0: number, paramarg1: number): void;
    static nnum_params(paramarg0: number): number;
    static nnum_params(paramarg0: number, paramarg1: number): void;
    static nparams(paramarg0: number): (Object | null)[];
    static nparams(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npathname(paramarg0: number): ByteBuffer;
    static npathname(paramarg0: number, paramarg1: ByteBuffer): void;
    static npathnameString(paramarg0: number): string;
    static nstream$(paramarg0: number): FT_Stream;
    static nstream$(paramarg0: number, paramarg1: FT_Stream): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Open_Args;
    driver(): number;
    driver(arg0: number): FT_Open_Args;
    flags(): number;
    flags(arg0: number): FT_Open_Args;
    memory_base(): ByteBuffer;
    memory_base(arg0: ByteBuffer): FT_Open_Args;
    memory_size(): number;
    memory_size(arg0: number): FT_Open_Args;
    num_params(): number;
    num_params(arg0: number): FT_Open_Args;
    params(): (Object | null)[];
    params(arg0: (Object | null)[]): FT_Open_Args;
    pathname(): ByteBuffer;
    pathname(arg0: ByteBuffer): FT_Open_Args;
    pathnameString(): string;
    set(arg0: number, arg1: ByteBuffer, arg2: number, arg3: ByteBuffer, arg4: FT_Stream, arg5: number, arg6: number, arg7: (Object | null)[]): FT_Open_Args;
    set(arg0: FT_Open_Args): FT_Open_Args;
    sizeof(): number;
    stream$(): FT_Stream;
    stream$(arg0: FT_Stream): FT_Open_Args;
}