import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingQueryHdr extends Struct<IOURingQueryHdr> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NEXT_ENTRY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUERY_DATA: number;
    static QUERY_OP: number;
    static RESULT: number;
    static SIZE: number;
    static SIZEOF: number;
    static __RESV: number;
    static calloc(): IOURingQueryHdr;
    static calloc(paramarg0: MemoryStack): IOURingQueryHdr;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingQueryHdr;
    static create(paramarg0: number): IOURingQueryHdr;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingQueryHdr;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingQueryHdr;
    static malloc(paramarg0: MemoryStack): IOURingQueryHdr;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__resv(paramarg0: number, paramarg1: number): number;
    static n__resv(paramarg0: number): IntBuffer;
    static n__resv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static n__resv(paramarg0: number, paramarg1: IntBuffer): void;
    static nnext_entry(paramarg0: number): number;
    static nnext_entry(paramarg0: number, paramarg1: number): void;
    static nquery_data(paramarg0: number): number;
    static nquery_data(paramarg0: number, paramarg1: number): void;
    static nquery_op(paramarg0: number): number;
    static nquery_op(paramarg0: number, paramarg1: number): void;
    static nresult(paramarg0: number): number;
    static nresult(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingQueryHdr;
    next_entry(): number;
    next_entry(arg0: number): IOURingQueryHdr;
    query_data(): number;
    query_data(arg0: number): IOURingQueryHdr;
    query_op(): number;
    query_op(arg0: number): IOURingQueryHdr;
    result(): number;
    result(arg0: number): IOURingQueryHdr;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): IOURingQueryHdr;
    set(arg0: IOURingQueryHdr): IOURingQueryHdr;
    size(): number;
    size(arg0: number): IOURingQueryHdr;
    sizeof(): number;
}