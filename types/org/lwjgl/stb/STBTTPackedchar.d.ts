import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTPackedchar extends Struct<STBTTPackedchar> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static X0: number;
    static X1: number;
    static XADVANCE: number;
    static XOFF: number;
    static XOFF2: number;
    static Y0: number;
    static Y1: number;
    static YOFF: number;
    static YOFF2: number;
    static calloc(): STBTTPackedchar;
    static calloc(paramarg0: MemoryStack): STBTTPackedchar;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTPackedchar;
    static create(paramarg0: number): STBTTPackedchar;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTPackedchar;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTPackedchar;
    static malloc(paramarg0: MemoryStack): STBTTPackedchar;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nx0(paramarg0: number): number;
    static nx0(paramarg0: number, paramarg1: number): void;
    static nx1(paramarg0: number): number;
    static nx1(paramarg0: number, paramarg1: number): void;
    static nxadvance(paramarg0: number): number;
    static nxadvance(paramarg0: number, paramarg1: number): void;
    static nxoff(paramarg0: number): number;
    static nxoff(paramarg0: number, paramarg1: number): void;
    static nxoff2(paramarg0: number): number;
    static nxoff2(paramarg0: number, paramarg1: number): void;
    static ny0(paramarg0: number): number;
    static ny0(paramarg0: number, paramarg1: number): void;
    static ny1(paramarg0: number): number;
    static ny1(paramarg0: number, paramarg1: number): void;
    static nyoff(paramarg0: number): number;
    static nyoff(paramarg0: number, paramarg1: number): void;
    static nyoff2(paramarg0: number): number;
    static nyoff2(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTPackedchar;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): STBTTPackedchar;
    set(arg0: STBTTPackedchar): STBTTPackedchar;
    sizeof(): number;
    x0(): number;
    x0(arg0: number): STBTTPackedchar;
    x1(): number;
    x1(arg0: number): STBTTPackedchar;
    xadvance(): number;
    xadvance(arg0: number): STBTTPackedchar;
    xoff(): number;
    xoff(arg0: number): STBTTPackedchar;
    xoff2(): number;
    xoff2(arg0: number): STBTTPackedchar;
    y0(): number;
    y0(arg0: number): STBTTPackedchar;
    y1(): number;
    y1(arg0: number): STBTTPackedchar;
    yoff(): number;
    yoff(arg0: number): STBTTPackedchar;
    yoff2(): number;
    yoff2(arg0: number): STBTTPackedchar;
}