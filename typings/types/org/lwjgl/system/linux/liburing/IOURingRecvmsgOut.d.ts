import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOURingRecvmsgOut extends Struct<IOURingRecvmsgOut> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONTROLLEN: number;
    static FLAGS: number;
    static NAMELEN: number;
    static PAYLOADLEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): IOURingRecvmsgOut;
    static calloc(paramarg0: MemoryStack): IOURingRecvmsgOut;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingRecvmsgOut;
    static create(paramarg0: number): IOURingRecvmsgOut;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingRecvmsgOut;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingRecvmsgOut;
    static malloc(paramarg0: MemoryStack): IOURingRecvmsgOut;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncontrollen(paramarg0: number): number;
    static ncontrollen(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nnamelen(paramarg0: number): number;
    static nnamelen(paramarg0: number, paramarg1: number): void;
    static npayloadlen(paramarg0: number): number;
    static npayloadlen(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    controllen(): number;
    controllen(arg0: number): IOURingRecvmsgOut;
    create(arg0: number, arg1: ByteBuffer): IOURingRecvmsgOut;
    flags(): number;
    flags(arg0: number): IOURingRecvmsgOut;
    namelen(): number;
    namelen(arg0: number): IOURingRecvmsgOut;
    payloadlen(): number;
    payloadlen(arg0: number): IOURingRecvmsgOut;
    set(arg0: number, arg1: number, arg2: number, arg3: number): IOURingRecvmsgOut;
    set(arg0: IOURingRecvmsgOut): IOURingRecvmsgOut;
    sizeof(): number;
}