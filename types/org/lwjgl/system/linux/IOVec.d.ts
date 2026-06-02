import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOVec extends Struct<IOVec> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IOV_BASE: number;
    static IOV_LEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): IOVec;
    static calloc(paramarg0: MemoryStack): IOVec;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOVec;
    static create(paramarg0: number): IOVec;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOVec;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOVec;
    static malloc(paramarg0: MemoryStack): IOVec;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static niov_base(paramarg0: number): ByteBuffer;
    static niov_base(paramarg0: number, paramarg1: ByteBuffer): void;
    static niov_len(paramarg0: number): number;
    static niov_len(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOVec;
    iov_base(): ByteBuffer;
    iov_base(arg0: ByteBuffer): IOVec;
    iov_len(): number;
    iov_len(arg0: number): IOVec;
    set(arg0: ByteBuffer, arg1: number): IOVec;
    set(arg0: IOVec): IOVec;
    sizeof(): number;
}