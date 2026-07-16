import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoDecodeH265ReferenceInfoFlags extends Struct<StdVideoDecodeH265ReferenceInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH265ReferenceInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH265ReferenceInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH265ReferenceInfoFlags;
    static create(paramarg0: number): StdVideoDecodeH265ReferenceInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH265ReferenceInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH265ReferenceInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH265ReferenceInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nunused_for_reference(paramarg0: number): number;
    static nunused_for_reference(paramarg0: number, paramarg1: number): void;
    static nused_for_long_term_reference(paramarg0: number): number;
    static nused_for_long_term_reference(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH265ReferenceInfoFlags;
    set(arg0: boolean, arg1: boolean): StdVideoDecodeH265ReferenceInfoFlags;
    set(arg0: StdVideoDecodeH265ReferenceInfoFlags): StdVideoDecodeH265ReferenceInfoFlags;
    sizeof(): number;
    unused_for_reference(): boolean;
    unused_for_reference(arg0: boolean): StdVideoDecodeH265ReferenceInfoFlags;
    used_for_long_term_reference(): boolean;
    used_for_long_term_reference(arg0: boolean): StdVideoDecodeH265ReferenceInfoFlags;
}