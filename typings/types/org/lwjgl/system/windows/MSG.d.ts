import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { POINT } from '../../../../org/lwjgl/system/windows/POINT.d.ts'
export class MSG extends Struct<MSG> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HWND: number;
    static LPARAM: number;
    static MESSAGE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PT: number;
    static SIZEOF: number;
    static TIME: number;
    static WPARAM: number;
    static calloc(): MSG;
    static calloc(paramarg0: MemoryStack): MSG;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): MSG;
    static create(paramarg0: number): MSG;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): MSG;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): MSG;
    static malloc(paramarg0: MemoryStack): MSG;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhwnd(paramarg0: number): number;
    static nhwnd(paramarg0: number, paramarg1: number): void;
    static nlParam(paramarg0: number): number;
    static nlParam(paramarg0: number, paramarg1: number): void;
    static nmessage(paramarg0: number): number;
    static nmessage(paramarg0: number, paramarg1: number): void;
    static npt(paramarg0: number): POINT;
    static npt(paramarg0: number, paramarg1: POINT): void;
    static ntime(paramarg0: number): number;
    static ntime(paramarg0: number, paramarg1: number): void;
    static nwParam(paramarg0: number): number;
    static nwParam(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): MSG;
    hwnd(): number;
    hwnd(arg0: number): MSG;
    lParam(): number;
    lParam(arg0: number): MSG;
    message(): number;
    message(arg0: number): MSG;
    pt(): POINT;
    pt(arg0: (param0: POINT) => void): MSG;
    pt(arg0: POINT): MSG;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: POINT): MSG;
    set(arg0: MSG): MSG;
    sizeof(): number;
    time(): number;
    time(arg0: number): MSG;
    wParam(): number;
    wParam(arg0: number): MSG;
}