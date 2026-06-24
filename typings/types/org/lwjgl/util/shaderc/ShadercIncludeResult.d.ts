import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class ShadercIncludeResult extends Struct<ShadercIncludeResult> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONTENT: number;
    static CONTENT_LENGTH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SOURCE_NAME: number;
    static SOURCE_NAME_LENGTH: number;
    static USER_DATA: number;
    static calloc(): ShadercIncludeResult;
    static calloc(paramarg0: MemoryStack): ShadercIncludeResult;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): ShadercIncludeResult;
    static create(paramarg0: number): ShadercIncludeResult;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): ShadercIncludeResult;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): ShadercIncludeResult;
    static malloc(paramarg0: MemoryStack): ShadercIncludeResult;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncontent(paramarg0: number): ByteBuffer;
    static ncontent(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncontentString(paramarg0: number): string;
    static ncontent_length(paramarg0: number): number;
    static ncontent_length(paramarg0: number, paramarg1: number): void;
    static nsource_name(paramarg0: number): ByteBuffer;
    static nsource_name(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsource_nameString(paramarg0: number): string;
    static nsource_name_length(paramarg0: number): number;
    static nsource_name_length(paramarg0: number, paramarg1: number): void;
    static nuser_data(paramarg0: number): number;
    static nuser_data(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    content(): ByteBuffer;
    content(arg0: ByteBuffer): ShadercIncludeResult;
    contentString(): string;
    content_length(): number;
    create(arg0: number, arg1: ByteBuffer): ShadercIncludeResult;
    set(arg0: ByteBuffer, arg1: ByteBuffer, arg2: number): ShadercIncludeResult;
    set(arg0: ShadercIncludeResult): ShadercIncludeResult;
    sizeof(): number;
    source_name(): ByteBuffer;
    source_name(arg0: ByteBuffer): ShadercIncludeResult;
    source_nameString(): string;
    source_name_length(): number;
    user_data(): number;
    user_data(arg0: number): ShadercIncludeResult;
}