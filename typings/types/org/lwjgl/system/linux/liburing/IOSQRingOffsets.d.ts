import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class IOSQRingOffsets extends Struct<IOSQRingOffsets> implements NativeResource {
    static ALIGNOF: number;
    static ARRAY: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DROPPED: number;
    static FLAGS: number;
    static HEAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESV1: number;
    static RING_ENTRIES: number;
    static RING_MASK: number;
    static SIZEOF: number;
    static TAIL: number;
    static USER_ADDR: number;
    static calloc(): IOSQRingOffsets;
    static calloc(paramarg0: MemoryStack): IOSQRingOffsets;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOSQRingOffsets;
    static create(paramarg0: number): IOSQRingOffsets;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOSQRingOffsets;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOSQRingOffsets;
    static malloc(paramarg0: MemoryStack): IOSQRingOffsets;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narray(paramarg0: number): number;
    static narray(paramarg0: number, paramarg1: number): void;
    static ndropped(paramarg0: number): number;
    static ndropped(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhead(paramarg0: number): number;
    static nhead(paramarg0: number, paramarg1: number): void;
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
    array(): number;
    array(arg0: number): IOSQRingOffsets;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOSQRingOffsets;
    dropped(): number;
    dropped(arg0: number): IOSQRingOffsets;
    flags(): number;
    flags(arg0: number): IOSQRingOffsets;
    head(): number;
    head(arg0: number): IOSQRingOffsets;
    ring_entries(): number;
    ring_entries(arg0: number): IOSQRingOffsets;
    ring_mask(): number;
    ring_mask(arg0: number): IOSQRingOffsets;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): IOSQRingOffsets;
    set(arg0: IOSQRingOffsets): IOSQRingOffsets;
    sizeof(): number;
    tail(): number;
    tail(arg0: number): IOSQRingOffsets;
    user_addr(): number;
    user_addr(arg0: number): IOSQRingOffsets;
}