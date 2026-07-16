import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SPVParsedHeader extends Struct<SPVParsedHeader> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BOUND: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GENERATOR: number;
    static MAGIC: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED: number;
    static SIZEOF: number;
    static VERSION: number;
    static create(paramarg0: number): SPVParsedHeader;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SPVParsedHeader;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nbound(paramarg0: number): number;
    static ngenerator(paramarg0: number): number;
    static nmagic(paramarg0: number): number;
    static nreserved(paramarg0: number): number;
    static nversion(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bound(): number;
    create(arg0: number, arg1: ByteBuffer): SPVParsedHeader;
    generator(): number;
    magic(): number;
    sizeof(): number;
    version(): number;
}