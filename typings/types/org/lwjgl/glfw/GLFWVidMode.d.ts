import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLFWVidMode extends Struct<GLFWVidMode> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLUEBITS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GREENBITS: number;
    static HEIGHT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REDBITS: number;
    static REFRESHRATE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static create(paramarg0: number): GLFWVidMode;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLFWVidMode;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nblueBits(paramarg0: number): number;
    static ngreenBits(paramarg0: number): number;
    static nheight(paramarg0: number): number;
    static nredBits(paramarg0: number): number;
    static nrefreshRate(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    blueBits(): number;
    create(arg0: number, arg1: ByteBuffer): GLFWVidMode;
    greenBits(): number;
    height(): number;
    redBits(): number;
    refreshRate(): number;
    sizeof(): number;
    width(): number;
}