import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class RECT extends Struct<RECT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BOTTOM: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LEFT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RIGHT: number;
    static SIZEOF: number;
    static TOP: number;
    static calloc(): RECT;
    static calloc(paramarg0: MemoryStack): RECT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): RECT;
    static create(paramarg0: number): RECT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): RECT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): RECT;
    static malloc(paramarg0: MemoryStack): RECT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbottom(paramarg0: number): number;
    static nbottom(paramarg0: number, paramarg1: number): void;
    static nleft(paramarg0: number): number;
    static nleft(paramarg0: number, paramarg1: number): void;
    static nright(paramarg0: number): number;
    static nright(paramarg0: number, paramarg1: number): void;
    static ntop(paramarg0: number): number;
    static ntop(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bottom(): number;
    bottom(arg0: number): RECT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): RECT;
    left(): number;
    left(arg0: number): RECT;
    right(): number;
    right(arg0: number): RECT;
    set(arg0: number, arg1: number, arg2: number, arg3: number): RECT;
    set(arg0: RECT): RECT;
    sizeof(): number;
    top(): number;
    top(arg0: number): RECT;
}