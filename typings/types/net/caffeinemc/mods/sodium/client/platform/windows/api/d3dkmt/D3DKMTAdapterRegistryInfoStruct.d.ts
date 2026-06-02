import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { MemoryStack } from '../../../../../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct } from '../../../../../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class D3DKMTAdapterRegistryInfoStruct extends Struct<D3DKMTAdapterRegistryInfoStruct> {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static calloc(paramarg0: MemoryStack): D3DKMTAdapterRegistryInfoStruct;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    private constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): D3DKMTAdapterRegistryInfoStruct;
    getAdapterString(): string;
    sizeof(): number;
}