import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class MOUSEINPUT extends Struct<MOUSEINPUT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DWEXTRAINFO: number;
    static DWFLAGS: number;
    static DX: number;
    static DY: number;
    static MOUSEDATA: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TIME: number;
    static calloc(): MOUSEINPUT;
    static calloc(paramarg0: MemoryStack): MOUSEINPUT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): MOUSEINPUT;
    static create(paramarg0: number): MOUSEINPUT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): MOUSEINPUT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): MOUSEINPUT;
    static malloc(paramarg0: MemoryStack): MOUSEINPUT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndwExtraInfo(paramarg0: number): number;
    static ndwExtraInfo(paramarg0: number, paramarg1: number): void;
    static ndwFlags(paramarg0: number): number;
    static ndwFlags(paramarg0: number, paramarg1: number): void;
    static ndx(paramarg0: number): number;
    static ndx(paramarg0: number, paramarg1: number): void;
    static ndy(paramarg0: number): number;
    static ndy(paramarg0: number, paramarg1: number): void;
    static nmouseData(paramarg0: number): number;
    static nmouseData(paramarg0: number, paramarg1: number): void;
    static ntime(paramarg0: number): number;
    static ntime(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): MOUSEINPUT;
    dwExtraInfo(): number;
    dwExtraInfo(arg0: number): MOUSEINPUT;
    dwFlags(): number;
    dwFlags(arg0: number): MOUSEINPUT;
    dx(): number;
    dx(arg0: number): MOUSEINPUT;
    dy(): number;
    dy(arg0: number): MOUSEINPUT;
    mouseData(): number;
    mouseData(arg0: number): MOUSEINPUT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): MOUSEINPUT;
    set(arg0: MOUSEINPUT): MOUSEINPUT;
    sizeof(): number;
    time(): number;
    time(arg0: number): MOUSEINPUT;
}