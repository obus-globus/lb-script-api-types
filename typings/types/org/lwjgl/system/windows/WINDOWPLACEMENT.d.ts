import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { POINT } from '../../../../org/lwjgl/system/windows/POINT.d.ts'
import type { RECT } from '../../../../org/lwjgl/system/windows/RECT.d.ts'
export class WINDOWPLACEMENT extends Struct<WINDOWPLACEMENT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LENGTH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTMAXPOSITION: number;
    static PTMINPOSITION: number;
    static RCNORMALPOSITION: number;
    static SHOWCMD: number;
    static SIZEOF: number;
    static calloc(): WINDOWPLACEMENT;
    static calloc(paramarg0: MemoryStack): WINDOWPLACEMENT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): WINDOWPLACEMENT;
    static create(paramarg0: number): WINDOWPLACEMENT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): WINDOWPLACEMENT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): WINDOWPLACEMENT;
    static malloc(paramarg0: MemoryStack): WINDOWPLACEMENT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlength(paramarg0: number): number;
    static nlength(paramarg0: number, paramarg1: number): void;
    static nptMaxPosition(paramarg0: number): POINT;
    static nptMaxPosition(paramarg0: number, paramarg1: POINT): void;
    static nptMinPosition(paramarg0: number): POINT;
    static nptMinPosition(paramarg0: number, paramarg1: POINT): void;
    static nrcNormalPosition(paramarg0: number): RECT;
    static nrcNormalPosition(paramarg0: number, paramarg1: RECT): void;
    static nshowCmd(paramarg0: number): number;
    static nshowCmd(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): WINDOWPLACEMENT;
    flags(): number;
    flags(arg0: number): WINDOWPLACEMENT;
    length(): number;
    length(arg0: number): WINDOWPLACEMENT;
    ptMaxPosition(): POINT;
    ptMaxPosition(arg0: (param0: POINT) => void): WINDOWPLACEMENT;
    ptMaxPosition(arg0: POINT): WINDOWPLACEMENT;
    ptMinPosition(): POINT;
    ptMinPosition(arg0: (param0: POINT) => void): WINDOWPLACEMENT;
    ptMinPosition(arg0: POINT): WINDOWPLACEMENT;
    rcNormalPosition(): RECT;
    rcNormalPosition(arg0: (param0: RECT) => void): WINDOWPLACEMENT;
    rcNormalPosition(arg0: RECT): WINDOWPLACEMENT;
    set(arg0: number, arg1: number, arg2: number, arg3: POINT, arg4: POINT, arg5: RECT): WINDOWPLACEMENT;
    set(arg0: WINDOWPLACEMENT): WINDOWPLACEMENT;
    showCmd(): number;
    showCmd(arg0: number): WINDOWPLACEMENT;
    sizeof(): number;
}