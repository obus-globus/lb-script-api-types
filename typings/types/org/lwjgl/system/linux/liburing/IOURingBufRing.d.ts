import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingBuf } from '../../../../../org/lwjgl/system/linux/liburing/IOURingBuf.d.ts'
export class IOURingBufRing extends Struct<IOURingBufRing> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV1: number;
    static RESV2: number;
    static RESV3: number;
    static SIZEOF: number;
    static TAIL: number;
    static calloc(): IOURingBufRing;
    static calloc(paramarg0: MemoryStack): IOURingBufRing;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingBufRing;
    static create(paramarg0: number): IOURingBufRing;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingBufRing;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingBufRing;
    static malloc(paramarg0: MemoryStack): IOURingBufRing;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufs(paramarg0: number, paramarg1: number): IOURingBuf;
    static nbufs(paramarg0: number): (Object | null)[];
    static nbufs(paramarg0: number, paramarg1: number, paramarg2: IOURingBuf): void;
    static nbufs(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nresv1(paramarg0: number): number;
    static nresv1(paramarg0: number, paramarg1: number): void;
    static nresv2(paramarg0: number): number;
    static nresv2(paramarg0: number, paramarg1: number): void;
    static nresv3(paramarg0: number): number;
    static nresv3(paramarg0: number, paramarg1: number): void;
    static ntail(paramarg0: number): number;
    static ntail(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufs(): (Object | null)[];
    bufs(arg0: (param0: (Object | null)[]) => void): IOURingBufRing;
    bufs(arg0: number): IOURingBuf;
    bufs(arg0: number, arg1: (param0: IOURingBuf) => void): IOURingBufRing;
    bufs(arg0: number, arg1: IOURingBuf): IOURingBufRing;
    bufs(arg0: (Object | null)[]): IOURingBufRing;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingBufRing;
    resv1(): number;
    resv1(arg0: number): IOURingBufRing;
    resv2(): number;
    resv2(arg0: number): IOURingBufRing;
    resv3(): number;
    resv3(arg0: number): IOURingBufRing;
    set(arg0: IOURingBufRing): IOURingBufRing;
    sizeof(): number;
    tail(): number;
    tail(arg0: number): IOURingBufRing;
}