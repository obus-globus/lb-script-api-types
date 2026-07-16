import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FFIType } from '../../../../org/lwjgl/system/libffi/FFIType.d.ts'
export class FFICIF extends Struct<FFICIF> implements NativeResource {
    static ABI: number;
    static ALIGNOF: number;
    static ARG_TYPES: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BYTES: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static NARGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RTYPE: number;
    static SIZEOF: number;
    static calloc(): FFICIF;
    static calloc(paramarg0: MemoryStack): FFICIF;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FFICIF;
    static create(paramarg0: number): FFICIF;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FFICIF;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FFICIF;
    static malloc(paramarg0: MemoryStack): FFICIF;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nabi(paramarg0: number): number;
    static narg_types(paramarg0: number): PointerBuffer;
    static nbytes(paramarg0: number): number;
    static nflags(paramarg0: number): number;
    static nnargs(paramarg0: number): number;
    static nrtype(paramarg0: number): FFIType;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    abi(): number;
    arg_types(): PointerBuffer;
    bytes(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FFICIF;
    flags(): number;
    nargs(): number;
    rtype(): FFIType;
    sizeof(): number;
}