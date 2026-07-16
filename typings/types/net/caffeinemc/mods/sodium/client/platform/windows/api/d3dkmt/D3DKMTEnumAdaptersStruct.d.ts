import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct } from '../../../../../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class D3DKMTEnumAdaptersStruct extends Struct<D3DKMTEnumAdaptersStruct> {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static calloc(paramarg0: MemoryStack): D3DKMTEnumAdaptersStruct;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    private constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): D3DKMTEnumAdaptersStruct;
    getAdapters(): (Object | null)[];
    sizeof(): number;
}