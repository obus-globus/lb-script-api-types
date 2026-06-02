import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_SfntName extends Struct<FT_SfntName> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENCODING_ID: number;
    static LANGUAGE_ID: number;
    static NAME_ID: number;
    static PLATFORM_ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STRING: number;
    static STRING_LEN: number;
    static calloc(): FT_SfntName;
    static calloc(paramarg0: MemoryStack): FT_SfntName;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_SfntName;
    static create(paramarg0: number): FT_SfntName;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_SfntName;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_SfntName;
    static malloc(paramarg0: MemoryStack): FT_SfntName;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nencoding_id(paramarg0: number): number;
    static nlanguage_id(paramarg0: number): number;
    static nname_id(paramarg0: number): number;
    static nplatform_id(paramarg0: number): number;
    static nstring(paramarg0: number): ByteBuffer;
    static nstring_len(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_SfntName;
    encoding_id(): number;
    language_id(): number;
    name_id(): number;
    platform_id(): number;
    sizeof(): number;
    string(): ByteBuffer;
    string_len(): number;
}