import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLSLangVersion extends Struct<GLSLangVersion> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAVOR: number;
    static MAJOR: number;
    static MINOR: number;
    static PATCH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): GLSLangVersion;
    static calloc(paramarg0: MemoryStack): GLSLangVersion;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLSLangVersion;
    static create(paramarg0: number): GLSLangVersion;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLSLangVersion;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLSLangVersion;
    static malloc(paramarg0: MemoryStack): GLSLangVersion;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflavor(paramarg0: number): ByteBuffer;
    static nflavorString(paramarg0: number): string;
    static nmajor(paramarg0: number): number;
    static nminor(paramarg0: number): number;
    static npatch(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLSLangVersion;
    flavor(): ByteBuffer;
    flavorString(): string;
    major(): number;
    minor(): number;
    patch(): number;
    sizeof(): number;
}