import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTPackRange extends Struct<STBTTPackRange> implements NativeResource {
    static ALIGNOF: number;
    static ARRAY_OF_UNICODE_CODEPOINTS: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHARDATA_FOR_RANGE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FIRST_UNICODE_CODEPOINT_IN_RANGE: number;
    static FONT_SIZE: number;
    static H_OVERSAMPLE: number;
    static NUM_CHARS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static V_OVERSAMPLE: number;
    static calloc(): STBTTPackRange;
    static calloc(paramarg0: MemoryStack): STBTTPackRange;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTPackRange;
    static create(paramarg0: number): STBTTPackRange;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTPackRange;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTPackRange;
    static malloc(paramarg0: MemoryStack): STBTTPackRange;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narray_of_unicode_codepoints(paramarg0: number): IntBuffer;
    static narray_of_unicode_codepoints(paramarg0: number, paramarg1: IntBuffer): void;
    static nchardata_for_range(paramarg0: number): (Object | null)[];
    static nchardata_for_range(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nfirst_unicode_codepoint_in_range(paramarg0: number): number;
    static nfirst_unicode_codepoint_in_range(paramarg0: number, paramarg1: number): void;
    static nfont_size(paramarg0: number): number;
    static nfont_size(paramarg0: number, paramarg1: number): void;
    static nh_oversample(paramarg0: number): number;
    static nh_oversample(paramarg0: number, paramarg1: number): void;
    static nnum_chars(paramarg0: number): number;
    static nnum_chars(paramarg0: number, paramarg1: number): void;
    static nv_oversample(paramarg0: number): number;
    static nv_oversample(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    array_of_unicode_codepoints(): IntBuffer;
    array_of_unicode_codepoints(arg0: IntBuffer): STBTTPackRange;
    chardata_for_range(): (Object | null)[];
    chardata_for_range(arg0: (Object | null)[]): STBTTPackRange;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTPackRange;
    first_unicode_codepoint_in_range(): number;
    first_unicode_codepoint_in_range(arg0: number): STBTTPackRange;
    font_size(): number;
    font_size(arg0: number): STBTTPackRange;
    h_oversample(): number;
    h_oversample(arg0: number): STBTTPackRange;
    num_chars(): number;
    num_chars(arg0: number): STBTTPackRange;
    set(arg0: number, arg1: number, arg2: IntBuffer, arg3: number, arg4: (Object | null)[], arg5: number, arg6: number): STBTTPackRange;
    set(arg0: STBTTPackRange): STBTTPackRange;
    sizeof(): number;
    v_oversample(): number;
    v_oversample(arg0: number): STBTTPackRange;
}