import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class ObjCPropertyAttribute extends Struct<ObjCPropertyAttribute> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VALUE: number;
    static calloc(): ObjCPropertyAttribute;
    static calloc(paramarg0: MemoryStack): ObjCPropertyAttribute;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): ObjCPropertyAttribute;
    static create(paramarg0: number): ObjCPropertyAttribute;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): ObjCPropertyAttribute;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): ObjCPropertyAttribute;
    static malloc(paramarg0: MemoryStack): ObjCPropertyAttribute;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nname(paramarg0: number): ByteBuffer;
    static nname(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnameString(paramarg0: number): string;
    static nvalue(paramarg0: number): ByteBuffer;
    static nvalue(paramarg0: number, paramarg1: ByteBuffer): void;
    static nvalueString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): ObjCPropertyAttribute;
    name(): ByteBuffer;
    name(arg0: ByteBuffer): ObjCPropertyAttribute;
    nameString(): string;
    set(arg0: ByteBuffer, arg1: ByteBuffer): ObjCPropertyAttribute;
    set(arg0: ObjCPropertyAttribute): ObjCPropertyAttribute;
    sizeof(): number;
    value(): ByteBuffer;
    value(arg0: ByteBuffer): ObjCPropertyAttribute;
    valueString(): string;
}