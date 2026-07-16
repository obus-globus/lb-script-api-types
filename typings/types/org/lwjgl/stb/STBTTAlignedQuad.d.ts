import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTAlignedQuad extends Struct<STBTTAlignedQuad> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static S0: number;
    static S1: number;
    static SIZEOF: number;
    static T0: number;
    static T1: number;
    static X0: number;
    static X1: number;
    static Y0: number;
    static Y1: number;
    static calloc(): STBTTAlignedQuad;
    static calloc(paramarg0: MemoryStack): STBTTAlignedQuad;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTAlignedQuad;
    static create(paramarg0: number): STBTTAlignedQuad;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTAlignedQuad;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTAlignedQuad;
    static malloc(paramarg0: MemoryStack): STBTTAlignedQuad;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ns0(paramarg0: number): number;
    static ns1(paramarg0: number): number;
    static nt0(paramarg0: number): number;
    static nt1(paramarg0: number): number;
    static nx0(paramarg0: number): number;
    static nx1(paramarg0: number): number;
    static ny0(paramarg0: number): number;
    static ny1(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTAlignedQuad;
    s0(): number;
    s1(): number;
    sizeof(): number;
    t0(): number;
    t1(): number;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}