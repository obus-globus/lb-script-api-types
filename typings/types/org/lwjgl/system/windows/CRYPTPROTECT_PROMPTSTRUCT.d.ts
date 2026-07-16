import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class CRYPTPROTECT_PROMPTSTRUCT extends Struct<CRYPTPROTECT_PROMPTSTRUCT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CBSIZE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DWPROMPTFLAGS: number;
    static HWNDAPP: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SZPROMPT: number;
    static calloc(): CRYPTPROTECT_PROMPTSTRUCT;
    static calloc(paramarg0: MemoryStack): CRYPTPROTECT_PROMPTSTRUCT;
    static create(): CRYPTPROTECT_PROMPTSTRUCT;
    static create(paramarg0: number): CRYPTPROTECT_PROMPTSTRUCT;
    static createSafe(paramarg0: number): CRYPTPROTECT_PROMPTSTRUCT;
    static malloc(): CRYPTPROTECT_PROMPTSTRUCT;
    static malloc(paramarg0: MemoryStack): CRYPTPROTECT_PROMPTSTRUCT;
    static ncbSize(paramarg0: number): number;
    static ncbSize(paramarg0: number, paramarg1: number): void;
    static ndwPromptFlags(paramarg0: number): number;
    static ndwPromptFlags(paramarg0: number, paramarg1: number): void;
    static nhwndApp(paramarg0: number): number;
    static nhwndApp(paramarg0: number, paramarg1: number): void;
    static nszPrompt(paramarg0: number): ByteBuffer;
    static nszPrompt(paramarg0: number, paramarg1: ByteBuffer): void;
    static nszPromptString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cbSize(): number;
    cbSize(arg0: number): CRYPTPROTECT_PROMPTSTRUCT;
    cbSize$Default(): CRYPTPROTECT_PROMPTSTRUCT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): CRYPTPROTECT_PROMPTSTRUCT;
    dwPromptFlags(): number;
    dwPromptFlags(arg0: number): CRYPTPROTECT_PROMPTSTRUCT;
    hwndApp(): number;
    hwndApp(arg0: number): CRYPTPROTECT_PROMPTSTRUCT;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer): CRYPTPROTECT_PROMPTSTRUCT;
    set(arg0: CRYPTPROTECT_PROMPTSTRUCT): CRYPTPROTECT_PROMPTSTRUCT;
    sizeof(): number;
    szPrompt(): ByteBuffer;
    szPrompt(arg0: ByteBuffer): CRYPTPROTECT_PROMPTSTRUCT;
    szPromptString(): string;
}