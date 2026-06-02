import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingBufStatus extends Struct<IOURingBufStatus> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUF_GROUP: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV: number;
    static SIZEOF: number;
    static calloc(): IOURingBufStatus;
    static calloc(paramarg0: MemoryStack): IOURingBufStatus;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingBufStatus;
    static create(paramarg0: number): IOURingBufStatus;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingBufStatus;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingBufStatus;
    static malloc(paramarg0: MemoryStack): IOURingBufStatus;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuf_group(paramarg0: number): number;
    static nbuf_group(paramarg0: number, paramarg1: number): void;
    static nhead(paramarg0: number): number;
    static nhead(paramarg0: number, paramarg1: number): void;
    static nresv(paramarg0: number, paramarg1: number): number;
    static nresv(paramarg0: number): IntBuffer;
    static nresv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nresv(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buf_group(): number;
    buf_group(arg0: number): IOURingBufStatus;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingBufStatus;
    head(): number;
    head(arg0: number): IOURingBufStatus;
    set(arg0: number, arg1: number): IOURingBufStatus;
    set(arg0: IOURingBufStatus): IOURingBufStatus;
    sizeof(): number;
}