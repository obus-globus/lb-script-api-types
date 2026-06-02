import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { D3DKMTAdapterInfoStruct } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/d3dkmt/D3DKMTAdapterInfoStruct.d.ts'
import type { MemoryStack } from '../../../../../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct } from '../../../../../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class D3DKMTQueryAdapterInfoStruct extends Struct<D3DKMTAdapterInfoStruct> {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static malloc(paramarg0: MemoryStack): D3DKMTQueryAdapterInfoStruct;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    private constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): D3DKMTAdapterInfoStruct;
    setAdapterHandle(arg0: number): void;
    setDataLength(arg0: number): void;
    setDataPointer(arg0: number): void;
    setType(arg0: number): void;
    sizeof(): number;
}