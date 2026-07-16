import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FTC_SBit extends Struct<FTC_SBit> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static HEIGHT: number;
    static LEFT: number;
    static MAX_GRAYS: number;
    static PITCH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TOP: number;
    static WIDTH: number;
    static XADVANCE: number;
    static YADVANCE: number;
    static create(paramarg0: number): FTC_SBit;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FTC_SBit;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nbuffer(paramarg0: number, paramarg1: number): ByteBuffer;
    static nformat(paramarg0: number): number;
    static nheight(paramarg0: number): number;
    static nleft(paramarg0: number): number;
    static nmax_grays(paramarg0: number): number;
    static npitch(paramarg0: number): number;
    static ntop(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static nxadvance(paramarg0: number): number;
    static nyadvance(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(arg0: number): ByteBuffer;
    create(arg0: number, arg1: ByteBuffer): FTC_SBit;
    format(): number;
    height(): number;
    left(): number;
    max_grays(): number;
    pitch(): number;
    sizeof(): number;
    top(): number;
    width(): number;
    xadvance(): number;
    yadvance(): number;
}