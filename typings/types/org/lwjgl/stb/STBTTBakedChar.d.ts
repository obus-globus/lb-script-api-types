import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTBakedChar extends Struct<STBTTBakedChar> implements NativeResource {
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
    static Y0: number;
    static Y1: number;
    static YOFF: number;
    static calloc(): STBTTBakedChar;
    static calloc(paramarg0: MemoryStack): STBTTBakedChar;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTBakedChar;
    static create(paramarg0: number): STBTTBakedChar;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTBakedChar;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTBakedChar;
    static malloc(paramarg0: MemoryStack): STBTTBakedChar;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nx0(paramarg0: number): number;
    static nx1(paramarg0: number): number;
    static nxadvance(paramarg0: number): number;
    static nxoff(paramarg0: number): number;
    static ny0(paramarg0: number): number;
    static ny1(paramarg0: number): number;
    static nyoff(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTBakedChar;
    sizeof(): number;
    x0(): number;
    x1(): number;
    xadvance(): number;
    xoff(): number;
    y0(): number;
    y1(): number;
    yoff(): number;
}