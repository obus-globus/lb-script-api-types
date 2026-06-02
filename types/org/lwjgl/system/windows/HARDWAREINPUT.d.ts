import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class HARDWAREINPUT extends Struct<HARDWAREINPUT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UMSG: number;
    static WPARAMH: number;
    static WPARAML: number;
    static calloc(): HARDWAREINPUT;
    static calloc(paramarg0: MemoryStack): HARDWAREINPUT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): HARDWAREINPUT;
    static create(paramarg0: number): HARDWAREINPUT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): HARDWAREINPUT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): HARDWAREINPUT;
    static malloc(paramarg0: MemoryStack): HARDWAREINPUT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nuMsg(paramarg0: number): number;
    static nuMsg(paramarg0: number, paramarg1: number): void;
    static nwParamH(paramarg0: number): number;
    static nwParamH(paramarg0: number, paramarg1: number): void;
    static nwParamL(paramarg0: number): number;
    static nwParamL(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): HARDWAREINPUT;
    set(arg0: number, arg1: number, arg2: number): HARDWAREINPUT;
    set(arg0: HARDWAREINPUT): HARDWAREINPUT;
    sizeof(): number;
    uMsg(): number;
    uMsg(arg0: number): HARDWAREINPUT;
    wParamH(): number;
    wParamH(arg0: number): HARDWAREINPUT;
    wParamL(): number;
    wParamL(arg0: number): HARDWAREINPUT;
}