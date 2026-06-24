import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcMslShaderInterfaceVar2 extends Struct<SpvcMslShaderInterfaceVar2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUILTIN: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static LOCATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RATE: number;
    static SIZEOF: number;
    static VECSIZE: number;
    static calloc(): SpvcMslShaderInterfaceVar2;
    static calloc(paramarg0: MemoryStack): SpvcMslShaderInterfaceVar2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcMslShaderInterfaceVar2;
    static create(paramarg0: number): SpvcMslShaderInterfaceVar2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcMslShaderInterfaceVar2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcMslShaderInterfaceVar2;
    static malloc(paramarg0: MemoryStack): SpvcMslShaderInterfaceVar2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuiltin(paramarg0: number): number;
    static nbuiltin(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nlocation(paramarg0: number): number;
    static nlocation(paramarg0: number, paramarg1: number): void;
    static nrate(paramarg0: number): number;
    static nrate(paramarg0: number, paramarg1: number): void;
    static nvecsize(paramarg0: number): number;
    static nvecsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    builtin(): number;
    builtin(arg0: number): SpvcMslShaderInterfaceVar2;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcMslShaderInterfaceVar2;
    format(): number;
    format(arg0: number): SpvcMslShaderInterfaceVar2;
    location(): number;
    location(arg0: number): SpvcMslShaderInterfaceVar2;
    rate(): number;
    rate(arg0: number): SpvcMslShaderInterfaceVar2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): SpvcMslShaderInterfaceVar2;
    set(arg0: SpvcMslShaderInterfaceVar2): SpvcMslShaderInterfaceVar2;
    sizeof(): number;
    vecsize(): number;
    vecsize(arg0: number): SpvcMslShaderInterfaceVar2;
}