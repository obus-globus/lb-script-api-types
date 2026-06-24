import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLSLIncludeResult extends Struct<GLSLIncludeResult> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEADER_DATA: number;
    static HEADER_LENGTH: number;
    static HEADER_NAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): GLSLIncludeResult;
    static calloc(paramarg0: MemoryStack): GLSLIncludeResult;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLSLIncludeResult;
    static create(paramarg0: number): GLSLIncludeResult;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLSLIncludeResult;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLSLIncludeResult;
    static malloc(paramarg0: MemoryStack): GLSLIncludeResult;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheader_data(paramarg0: number): ByteBuffer;
    static nheader_data(paramarg0: number, paramarg1: ByteBuffer): void;
    static nheader_length(paramarg0: number): number;
    static nheader_length(paramarg0: number, paramarg1: number): void;
    static nheader_name(paramarg0: number): ByteBuffer;
    static nheader_name(paramarg0: number, paramarg1: ByteBuffer): void;
    static nheader_nameString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLSLIncludeResult;
    header_data(): ByteBuffer;
    header_data(arg0: ByteBuffer): GLSLIncludeResult;
    header_length(): number;
    header_length(arg0: number): GLSLIncludeResult;
    header_name(): ByteBuffer;
    header_name(arg0: ByteBuffer): GLSLIncludeResult;
    header_nameString(): string;
    set(arg0: ByteBuffer, arg1: ByteBuffer, arg2: number): GLSLIncludeResult;
    set(arg0: GLSLIncludeResult): GLSLIncludeResult;
    sizeof(): number;
}