import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Generic_Finalizer } from '../../../../org/lwjgl/util/freetype/FT_Generic_Finalizer.d.ts'
import type { FT_Generic_FinalizerI } from '../../../../org/lwjgl/util/freetype/FT_Generic_FinalizerI.d.ts'
export class FT_Generic extends Struct<FT_Generic> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static FINALIZER: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Generic;
    static calloc(paramarg0: MemoryStack): FT_Generic;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Generic;
    static create(paramarg0: number): FT_Generic;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Generic;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Generic;
    static malloc(paramarg0: MemoryStack): FT_Generic;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): number;
    static ndata(paramarg0: number, paramarg1: number): void;
    static nfinalizer(paramarg0: number): FT_Generic_Finalizer;
    static nfinalizer(paramarg0: number, paramarg1: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Generic;
    data(): number;
    data(arg0: number): FT_Generic;
    finalizer(): FT_Generic_Finalizer;
    finalizer(arg0: (param0: number) => void): FT_Generic;
    set(arg0: number, arg1: (param0: number) => void): FT_Generic;
    set(arg0: FT_Generic): FT_Generic;
    sizeof(): number;
}