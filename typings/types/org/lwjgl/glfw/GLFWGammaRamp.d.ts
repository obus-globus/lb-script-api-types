import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLFWGammaRamp extends Struct<GLFWGammaRamp> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLUE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GREEN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RED: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): GLFWGammaRamp;
    static calloc(paramarg0: MemoryStack): GLFWGammaRamp;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLFWGammaRamp;
    static create(paramarg0: number): GLFWGammaRamp;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLFWGammaRamp;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLFWGammaRamp;
    static malloc(paramarg0: MemoryStack): GLFWGammaRamp;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nblue(paramarg0: number): ShortBuffer;
    static nblue(paramarg0: number, paramarg1: ShortBuffer): void;
    static ngreen(paramarg0: number): ShortBuffer;
    static ngreen(paramarg0: number, paramarg1: ShortBuffer): void;
    static nred(paramarg0: number): ShortBuffer;
    static nred(paramarg0: number, paramarg1: ShortBuffer): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    blue(): ShortBuffer;
    blue(arg0: ShortBuffer): GLFWGammaRamp;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLFWGammaRamp;
    green(): ShortBuffer;
    green(arg0: ShortBuffer): GLFWGammaRamp;
    red(): ShortBuffer;
    red(arg0: ShortBuffer): GLFWGammaRamp;
    set(arg0: ShortBuffer, arg1: ShortBuffer, arg2: ShortBuffer, arg3: number): GLFWGammaRamp;
    set(arg0: GLFWGammaRamp): GLFWGammaRamp;
    size(): number;
    size(arg0: number): GLFWGammaRamp;
    sizeof(): number;
}