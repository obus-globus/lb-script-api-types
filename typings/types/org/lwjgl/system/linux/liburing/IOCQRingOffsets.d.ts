import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOCQRingOffsets extends Struct<IOCQRingOffsets> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CQES: number;
    static FLAGS: number;
    static HEAD: number;
    static OVERFLOW: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV1: number;
    static RING_ENTRIES: number;
    static RING_MASK: number;
    static SIZEOF: number;
    static TAIL: number;
    static USER_ADDR: number;
    static calloc(): IOCQRingOffsets;
    static calloc(paramarg0: MemoryStack): IOCQRingOffsets;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOCQRingOffsets;
    static create(paramarg0: number): IOCQRingOffsets;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOCQRingOffsets;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOCQRingOffsets;
    static malloc(paramarg0: MemoryStack): IOCQRingOffsets;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncqes(paramarg0: number): number;
    static ncqes(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhead(paramarg0: number): number;
    static nhead(paramarg0: number, paramarg1: number): void;
    static noverflow(paramarg0: number): number;
    static noverflow(paramarg0: number, paramarg1: number): void;
    static nresv1(paramarg0: number): number;
    static nresv1(paramarg0: number, paramarg1: number): void;
    static nring_entries(paramarg0: number): number;
    static nring_entries(paramarg0: number, paramarg1: number): void;
    static nring_mask(paramarg0: number): number;
    static nring_mask(paramarg0: number, paramarg1: number): void;
    static ntail(paramarg0: number): number;
    static ntail(paramarg0: number, paramarg1: number): void;
    static nuser_addr(paramarg0: number): number;
    static nuser_addr(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cqes(): number;
    cqes(arg0: number): IOCQRingOffsets;
    create(arg0: number, arg1: ByteBuffer): IOCQRingOffsets;
    flags(): number;
    flags(arg0: number): IOCQRingOffsets;
    head(): number;
    head(arg0: number): IOCQRingOffsets;
    overflow(): number;
    overflow(arg0: number): IOCQRingOffsets;
    ring_entries(): number;
    ring_entries(arg0: number): IOCQRingOffsets;
    ring_mask(): number;
    ring_mask(arg0: number): IOCQRingOffsets;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): IOCQRingOffsets;
    set(arg0: IOCQRingOffsets): IOCQRingOffsets;
    sizeof(): number;
    tail(): number;
    tail(arg0: number): IOCQRingOffsets;
    user_addr(): number;
    user_addr(arg0: number): IOCQRingOffsets;
}