import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTVertex extends Struct<STBTTVertex> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CX: number;
    static CX1: number;
    static CY: number;
    static CY1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static X: number;
    static Y: number;
    static calloc(): STBTTVertex;
    static calloc(paramarg0: MemoryStack): STBTTVertex;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTVertex;
    static create(paramarg0: number): STBTTVertex;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTVertex;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTVertex;
    static malloc(paramarg0: MemoryStack): STBTTVertex;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncx(paramarg0: number): number;
    static ncx1(paramarg0: number): number;
    static ncy(paramarg0: number): number;
    static ncy1(paramarg0: number): number;
    static ntype(paramarg0: number): number;
    static nx(paramarg0: number): number;
    static ny(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTVertex;
    cx(): number;
    cx1(): number;
    cy(): number;
    cy1(): number;
    sizeof(): number;
    type(): number;
    x(): number;
    y(): number;
}