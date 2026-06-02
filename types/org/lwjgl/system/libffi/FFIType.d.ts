import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FFIType extends Struct<FFIType> implements NativeResource {
    static ALIGNMENT: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ELEMENTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): FFIType;
    static calloc(paramarg0: MemoryStack): FFIType;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FFIType;
    static create(paramarg0: number): FFIType;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FFIType;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FFIType;
    static malloc(paramarg0: MemoryStack): FFIType;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalignment(paramarg0: number): number;
    static nalignment(paramarg0: number, paramarg1: number): void;
    static nelements(paramarg0: number, paramarg1: number): PointerBuffer;
    static nelements(paramarg0: number, paramarg1: PointerBuffer): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alignment(): number;
    alignment(arg0: number): FFIType;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FFIType;
    elements(arg0: number): PointerBuffer;
    elements(arg0: PointerBuffer): FFIType;
    set(arg0: number, arg1: number, arg2: number, arg3: PointerBuffer): FFIType;
    set(arg0: FFIType): FFIType;
    size(): number;
    size(arg0: number): FFIType;
    sizeof(): number;
    type(): number;
    type(arg0: number): FFIType;
}