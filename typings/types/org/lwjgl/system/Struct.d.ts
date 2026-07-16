import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Pointer$Default } from '../../../org/lwjgl/system/Pointer$Default.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export abstract class Struct<SELF extends Struct<SELF>> extends Pointer$Default {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: number, arg1: ByteBuffer)
    // private container: ByteBuffer;
    // private checkMemberOffset(arg0: number): void;
    clear(): void;
    create(arg0: number, arg1: ByteBuffer): SELF;
    free(): void;
    isNull(arg0: number): boolean;
    sizeof(): number;
}