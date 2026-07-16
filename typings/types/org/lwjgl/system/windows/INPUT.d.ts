import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { HARDWAREINPUT } from '../../../../org/lwjgl/system/windows/HARDWAREINPUT.d.ts'
import type { KEYBDINPUT } from '../../../../org/lwjgl/system/windows/KEYBDINPUT.d.ts'
import type { MOUSEINPUT } from '../../../../org/lwjgl/system/windows/MOUSEINPUT.d.ts'
export class INPUT extends Struct<INPUT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DUMMYUNIONNAME: number;
    static DUMMYUNIONNAME_HI: number;
    static DUMMYUNIONNAME_KI: number;
    static DUMMYUNIONNAME_MI: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): INPUT;
    static calloc(paramarg0: MemoryStack): INPUT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): INPUT;
    static create(paramarg0: number): INPUT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): INPUT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): INPUT;
    static malloc(paramarg0: MemoryStack): INPUT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nDUMMYUNIONNAME_hi(paramarg0: number): HARDWAREINPUT;
    static nDUMMYUNIONNAME_hi(paramarg0: number, paramarg1: HARDWAREINPUT): void;
    static nDUMMYUNIONNAME_ki(paramarg0: number): KEYBDINPUT;
    static nDUMMYUNIONNAME_ki(paramarg0: number, paramarg1: KEYBDINPUT): void;
    static nDUMMYUNIONNAME_mi(paramarg0: number): MOUSEINPUT;
    static nDUMMYUNIONNAME_mi(paramarg0: number, paramarg1: MOUSEINPUT): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    DUMMYUNIONNAME_hi(): HARDWAREINPUT;
    DUMMYUNIONNAME_hi(arg0: (param0: HARDWAREINPUT) => void): INPUT;
    DUMMYUNIONNAME_hi(arg0: HARDWAREINPUT): INPUT;
    DUMMYUNIONNAME_ki(): KEYBDINPUT;
    DUMMYUNIONNAME_ki(arg0: (param0: KEYBDINPUT) => void): INPUT;
    DUMMYUNIONNAME_ki(arg0: KEYBDINPUT): INPUT;
    DUMMYUNIONNAME_mi(): MOUSEINPUT;
    DUMMYUNIONNAME_mi(arg0: (param0: MOUSEINPUT) => void): INPUT;
    DUMMYUNIONNAME_mi(arg0: MOUSEINPUT): INPUT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): INPUT;
    set(arg0: INPUT): INPUT;
    sizeof(): number;
    type(): number;
    type(arg0: number): INPUT;
}