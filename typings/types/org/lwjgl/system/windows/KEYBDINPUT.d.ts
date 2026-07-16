import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class KEYBDINPUT extends Struct<KEYBDINPUT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DWEXTRAINFO: number;
    static DWFLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TIME: number;
    static WSCAN: number;
    static WVK: number;
    static calloc(): KEYBDINPUT;
    static calloc(paramarg0: MemoryStack): KEYBDINPUT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): KEYBDINPUT;
    static create(paramarg0: number): KEYBDINPUT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): KEYBDINPUT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): KEYBDINPUT;
    static malloc(paramarg0: MemoryStack): KEYBDINPUT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndwExtraInfo(paramarg0: number): number;
    static ndwExtraInfo(paramarg0: number, paramarg1: number): void;
    static ndwFlags(paramarg0: number): number;
    static ndwFlags(paramarg0: number, paramarg1: number): void;
    static ntime(paramarg0: number): number;
    static ntime(paramarg0: number, paramarg1: number): void;
    static nwScan(paramarg0: number): number;
    static nwScan(paramarg0: number, paramarg1: number): void;
    static nwVk(paramarg0: number): number;
    static nwVk(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): KEYBDINPUT;
    dwExtraInfo(): number;
    dwExtraInfo(arg0: number): KEYBDINPUT;
    dwFlags(): number;
    dwFlags(arg0: number): KEYBDINPUT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): KEYBDINPUT;
    set(arg0: KEYBDINPUT): KEYBDINPUT;
    sizeof(): number;
    time(): number;
    time(arg0: number): KEYBDINPUT;
    wScan(): number;
    wScan(arg0: number): KEYBDINPUT;
    wVk(): number;
    wVk(arg0: number): KEYBDINPUT;
}