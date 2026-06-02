import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTBitmap extends Struct<STBTTBitmap> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static H: number;
    static PIXELS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRIDE: number;
    static W: number;
    static calloc(): STBTTBitmap;
    static calloc(paramarg0: MemoryStack): STBTTBitmap;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTBitmap;
    static create(paramarg0: number): STBTTBitmap;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTBitmap;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTBitmap;
    static malloc(paramarg0: MemoryStack): STBTTBitmap;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nh(paramarg0: number): number;
    static nh(paramarg0: number, paramarg1: number): void;
    static npixels(paramarg0: number, paramarg1: number): ByteBuffer;
    static npixels(paramarg0: number, paramarg1: ByteBuffer): void;
    static nstride(paramarg0: number): number;
    static nstride(paramarg0: number, paramarg1: number): void;
    static nw(paramarg0: number): number;
    static nw(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTBitmap;
    h(): number;
    h(arg0: number): STBTTBitmap;
    pixels(arg0: ByteBuffer): STBTTBitmap;
    pixels(arg0: number): ByteBuffer;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer): STBTTBitmap;
    set(arg0: STBTTBitmap): STBTTBitmap;
    sizeof(): number;
    stride(): number;
    stride(arg0: number): STBTTBitmap;
    w(): number;
    w(arg0: number): STBTTBitmap;
}