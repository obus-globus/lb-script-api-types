import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBVorbisComment extends Struct<STBVorbisComment> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMENT_LIST: number;
    static COMMENT_LIST_LENGTH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VENDOR: number;
    static calloc(): STBVorbisComment;
    static calloc(paramarg0: MemoryStack): STBVorbisComment;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBVorbisComment;
    static create(paramarg0: number): STBVorbisComment;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBVorbisComment;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBVorbisComment;
    static malloc(paramarg0: MemoryStack): STBVorbisComment;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncomment_list(paramarg0: number): PointerBuffer;
    static ncomment_list_length(paramarg0: number): number;
    static nvendor(paramarg0: number): ByteBuffer;
    static nvendorString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    comment_list(): PointerBuffer;
    comment_list_length(): number;
    create(arg0: number, arg1: ByteBuffer): STBVorbisComment;
    sizeof(): number;
    vendor(): ByteBuffer;
    vendorString(): string;
}