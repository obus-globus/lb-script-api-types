import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_ColorStopIterator extends Struct<FT_ColorStopIterator> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CURRENT_COLOR_STOP: number;
    static NUM_COLOR_STOPS: number;
    static P: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static READ_VARIABLE: number;
    static SIZEOF: number;
    static calloc(): FT_ColorStopIterator;
    static calloc(paramarg0: MemoryStack): FT_ColorStopIterator;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_ColorStopIterator;
    static create(paramarg0: number): FT_ColorStopIterator;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_ColorStopIterator;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_ColorStopIterator;
    static malloc(paramarg0: MemoryStack): FT_ColorStopIterator;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncurrent_color_stop(paramarg0: number): number;
    static nnum_color_stops(paramarg0: number): number;
    static np(paramarg0: number, paramarg1: number): ByteBuffer;
    static nread_variable(paramarg0: number): boolean;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_ColorStopIterator;
    current_color_stop(): number;
    num_color_stops(): number;
    p(arg0: number): ByteBuffer;
    read_variable(): boolean;
    sizeof(): number;
}