import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoDecodeH264ReferenceInfoFlags extends Struct<StdVideoDecodeH264ReferenceInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH264ReferenceInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH264ReferenceInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH264ReferenceInfoFlags;
    static create(paramarg0: number): StdVideoDecodeH264ReferenceInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH264ReferenceInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH264ReferenceInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH264ReferenceInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbottom_field_flag(paramarg0: number): number;
    static nbottom_field_flag(paramarg0: number, paramarg1: number): void;
    static nis_non_existing(paramarg0: number): number;
    static nis_non_existing(paramarg0: number, paramarg1: number): void;
    static ntop_field_flag(paramarg0: number): number;
    static ntop_field_flag(paramarg0: number, paramarg1: number): void;
    static nused_for_long_term_reference(paramarg0: number): number;
    static nused_for_long_term_reference(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bottom_field_flag(): boolean;
    bottom_field_flag(arg0: boolean): StdVideoDecodeH264ReferenceInfoFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH264ReferenceInfoFlags;
    is_non_existing(): boolean;
    is_non_existing(arg0: boolean): StdVideoDecodeH264ReferenceInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): StdVideoDecodeH264ReferenceInfoFlags;
    set(arg0: StdVideoDecodeH264ReferenceInfoFlags): StdVideoDecodeH264ReferenceInfoFlags;
    sizeof(): number;
    top_field_flag(): boolean;
    top_field_flag(arg0: boolean): StdVideoDecodeH264ReferenceInfoFlags;
    used_for_long_term_reference(): boolean;
    used_for_long_term_reference(arg0: boolean): StdVideoDecodeH264ReferenceInfoFlags;
}