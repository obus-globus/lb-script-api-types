import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FFICIF } from '../../../../org/lwjgl/system/libffi/FFICIF.d.ts'
export class FFIClosure extends Struct<FFIClosure> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CIF: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FUN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static USER_DATA: number;
    static calloc(): FFIClosure;
    static calloc(paramarg0: MemoryStack): FFIClosure;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FFIClosure;
    static create(paramarg0: number): FFIClosure;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FFIClosure;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FFIClosure;
    static malloc(paramarg0: MemoryStack): FFIClosure;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncif(paramarg0: number): FFICIF;
    static nfun(paramarg0: number): number;
    static nuser_data(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cif(): FFICIF;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FFIClosure;
    fun(): number;
    sizeof(): number;
    user_data(): number;
}