import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Parameter extends Struct<FT_Parameter> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TAG: number;
    static calloc(): FT_Parameter;
    static calloc(paramarg0: MemoryStack): FT_Parameter;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Parameter;
    static create(paramarg0: number): FT_Parameter;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Parameter;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Parameter;
    static malloc(paramarg0: MemoryStack): FT_Parameter;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number, paramarg1: number): ByteBuffer;
    static ndata(paramarg0: number, paramarg1: ByteBuffer): void;
    static ntag(paramarg0: number): number;
    static ntag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Parameter;
    data(arg0: ByteBuffer): FT_Parameter;
    data(arg0: number): ByteBuffer;
    set(arg0: number, arg1: ByteBuffer): FT_Parameter;
    set(arg0: FT_Parameter): FT_Parameter;
    sizeof(): number;
    tag(): number;
    tag(arg0: number): FT_Parameter;
}