import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class D3DKMTAdapterInfoStruct extends Struct<D3DKMTAdapterInfoStruct> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(paramarg0: number): (Object | null)[];
    static create(paramarg0: number): D3DKMTAdapterInfoStruct;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): D3DKMTAdapterInfoStruct;
    getAdapterHandle(): number;
    sizeof(): number;
}