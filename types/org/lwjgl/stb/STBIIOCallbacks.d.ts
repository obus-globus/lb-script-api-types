import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBIEOFCallback } from '../../../org/lwjgl/stb/STBIEOFCallback.d.ts'
import type { STBIEOFCallbackI } from '../../../org/lwjgl/stb/STBIEOFCallbackI.d.ts'
import type { STBIReadCallback } from '../../../org/lwjgl/stb/STBIReadCallback.d.ts'
import type { STBIReadCallbackI } from '../../../org/lwjgl/stb/STBIReadCallbackI.d.ts'
import type { STBISkipCallback } from '../../../org/lwjgl/stb/STBISkipCallback.d.ts'
import type { STBISkipCallbackI } from '../../../org/lwjgl/stb/STBISkipCallbackI.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBIIOCallbacks extends Struct<STBIIOCallbacks> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EOF: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static READ: number;
    static SIZEOF: number;
    static SKIP: number;
    static calloc(): STBIIOCallbacks;
    static calloc(paramarg0: MemoryStack): STBIIOCallbacks;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBIIOCallbacks;
    static create(paramarg0: number): STBIIOCallbacks;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBIIOCallbacks;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBIIOCallbacks;
    static malloc(paramarg0: MemoryStack): STBIIOCallbacks;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static neof(paramarg0: number): STBIEOFCallback;
    static neof(paramarg0: number, paramarg1: (param0: number) => kotlin.Int): void;
    static nread(paramarg0: number): STBIReadCallback;
    static nread(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number) => kotlin.Int): void;
    static nskip(paramarg0: number): STBISkipCallback;
    static nskip(paramarg0: number, paramarg1: (param0: number, param1: number) => void): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBIIOCallbacks;
    eof(): STBIEOFCallback;
    eof(arg0: (param0: number) => kotlin.Int): STBIIOCallbacks;
    read(): STBIReadCallback;
    read(arg0: (param0: number, param1: number, param2: number) => kotlin.Int): STBIIOCallbacks;
    set(arg0: STBIIOCallbacks): STBIIOCallbacks;
    set(arg0: (param0: number, param1: number, param2: number) => kotlin.Int, arg1: (param0: number, param1: number) => void, arg2: (param0: number) => kotlin.Int): STBIIOCallbacks;
    sizeof(): number;
    skip(): STBISkipCallback;
    skip(arg0: (param0: number, param1: number) => void): STBIIOCallbacks;
}