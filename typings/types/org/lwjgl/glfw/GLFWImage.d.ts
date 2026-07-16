import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLFWImage extends Struct<GLFWImage> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEIGHT: number;
    static PIXELS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static calloc(): GLFWImage;
    static calloc(paramarg0: MemoryStack): GLFWImage;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLFWImage;
    static create(paramarg0: number): GLFWImage;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLFWImage;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLFWImage;
    static malloc(paramarg0: MemoryStack): GLFWImage;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static npixels(paramarg0: number, paramarg1: number): ByteBuffer;
    static npixels(paramarg0: number, paramarg1: ByteBuffer): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLFWImage;
    height(): number;
    height(arg0: number): GLFWImage;
    pixels(arg0: ByteBuffer): GLFWImage;
    pixels(arg0: number): ByteBuffer;
    set(arg0: number, arg1: number, arg2: ByteBuffer): GLFWImage;
    set(arg0: GLFWImage): GLFWImage;
    sizeof(): number;
    width(): number;
    width(arg0: number): GLFWImage;
}