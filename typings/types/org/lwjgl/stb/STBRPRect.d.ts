import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBRPRect extends Struct<STBRPRect> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static H: number;
    static ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static W: number;
    static WAS_PACKED: number;
    static X: number;
    static Y: number;
    static calloc(): STBRPRect;
    static calloc(paramarg0: MemoryStack): STBRPRect;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBRPRect;
    static create(paramarg0: number): STBRPRect;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBRPRect;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBRPRect;
    static malloc(paramarg0: MemoryStack): STBRPRect;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nh(paramarg0: number): number;
    static nh(paramarg0: number, paramarg1: number): void;
    static nid(paramarg0: number): number;
    static nid(paramarg0: number, paramarg1: number): void;
    static nw(paramarg0: number): number;
    static nw(paramarg0: number, paramarg1: number): void;
    static nwas_packed(paramarg0: number): number;
    static nwas_packed(paramarg0: number, paramarg1: number): void;
    static nx(paramarg0: number): number;
    static nx(paramarg0: number, paramarg1: number): void;
    static ny(paramarg0: number): number;
    static ny(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBRPRect;
    h(): number;
    h(arg0: number): STBRPRect;
    id(): number;
    id(arg0: number): STBRPRect;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): STBRPRect;
    set(arg0: STBRPRect): STBRPRect;
    sizeof(): number;
    w(): number;
    w(arg0: number): STBRPRect;
    was_packed(): boolean;
    was_packed(arg0: boolean): STBRPRect;
    x(): number;
    x(arg0: number): STBRPRect;
    y(): number;
    y(arg0: number): STBRPRect;
}