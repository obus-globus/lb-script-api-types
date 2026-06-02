import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Memory } from '../../../../org/lwjgl/util/freetype/FT_Memory.d.ts'
import type { FT_StreamDesc } from '../../../../org/lwjgl/util/freetype/FT_StreamDesc.d.ts'
import type { FT_Stream_CloseFunc } from '../../../../org/lwjgl/util/freetype/FT_Stream_CloseFunc.d.ts'
import type { FT_Stream_CloseFuncI } from '../../../../org/lwjgl/util/freetype/FT_Stream_CloseFuncI.d.ts'
import type { FT_Stream_IoFunc } from '../../../../org/lwjgl/util/freetype/FT_Stream_IoFunc.d.ts'
import type { FT_Stream_IoFuncI } from '../../../../org/lwjgl/util/freetype/FT_Stream_IoFuncI.d.ts'
export class FT_Stream extends Struct<FT_Stream> implements NativeResource {
    static ALIGNOF: number;
    static BASE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CLOSE: number;
    static CURSOR: number;
    static DESCRIPTOR: number;
    static LIMIT: number;
    static MEMORY: number;
    static PATHNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static POS: number;
    static READ: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Stream;
    static calloc(paramarg0: MemoryStack): FT_Stream;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Stream;
    static create(paramarg0: number): FT_Stream;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Stream;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Stream;
    static malloc(paramarg0: MemoryStack): FT_Stream;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbase(paramarg0: number): ByteBuffer;
    static nbase(paramarg0: number, paramarg1: ByteBuffer): void;
    static nclose$(paramarg0: number): FT_Stream_CloseFunc;
    static nclose$(paramarg0: number, paramarg1: (param0: number) => void): void;
    static ncursor(paramarg0: number, paramarg1: number): ByteBuffer;
    static ncursor(paramarg0: number, paramarg1: ByteBuffer): void;
    static ndescriptor(paramarg0: number): FT_StreamDesc;
    static ndescriptor(paramarg0: number, paramarg1: FT_StreamDesc): void;
    static nlimit$(paramarg0: number, paramarg1: number): ByteBuffer;
    static nlimit$(paramarg0: number, paramarg1: ByteBuffer): void;
    static nmemory(paramarg0: number): FT_Memory;
    static nmemory(paramarg0: number, paramarg1: FT_Memory): void;
    static npathname(paramarg0: number): FT_StreamDesc;
    static npathname(paramarg0: number, paramarg1: FT_StreamDesc): void;
    static npos(paramarg0: number): number;
    static npos(paramarg0: number, paramarg1: number): void;
    static nread(paramarg0: number): FT_Stream_IoFunc;
    static nread(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    base(): ByteBuffer;
    base(arg0: ByteBuffer): FT_Stream;
    close(): void;
    close$(): FT_Stream_CloseFunc;
    close$(arg0: (param0: number) => void): FT_Stream;
    create(arg0: number, arg1: ByteBuffer): FT_Stream;
    descriptor(): FT_StreamDesc;
    descriptor(arg0: (param0: FT_StreamDesc) => void): FT_Stream;
    descriptor(arg0: FT_StreamDesc): FT_Stream;
    pathname(): FT_StreamDesc;
    pathname(arg0: (param0: FT_StreamDesc) => void): FT_Stream;
    pathname(arg0: FT_StreamDesc): FT_Stream;
    pos(): number;
    pos(arg0: number): FT_Stream;
    read(): FT_Stream_IoFunc;
    read(arg0: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): FT_Stream;
    set(arg0: ByteBuffer, arg1: number, arg2: number, arg3: FT_StreamDesc, arg4: FT_StreamDesc, arg5: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long, arg6: (param0: number) => void): FT_Stream;
    set(arg0: FT_Stream): FT_Stream;
    size(): number;
    size(arg0: number): FT_Stream;
    sizeof(): number;
}