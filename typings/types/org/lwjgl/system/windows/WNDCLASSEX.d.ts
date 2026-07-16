import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { WindowProc } from '../../../../org/lwjgl/system/windows/WindowProc.d.ts'
import type { WindowProcI } from '../../../../org/lwjgl/system/windows/WindowProcI.d.ts'
export class WNDCLASSEX extends Struct<WNDCLASSEX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CBCLSEXTRA: number;
    static CBSIZE: number;
    static CBWNDEXTRA: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HBRBACKGROUND: number;
    static HCURSOR: number;
    static HICON: number;
    static HICONSM: number;
    static HINSTANCE: number;
    static LPFNWNDPROC: number;
    static LPSZCLASSNAME: number;
    static LPSZMENUNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYLE: number;
    static calloc(): WNDCLASSEX;
    static calloc(paramarg0: MemoryStack): WNDCLASSEX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): WNDCLASSEX;
    static create(paramarg0: number): WNDCLASSEX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): WNDCLASSEX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): WNDCLASSEX;
    static malloc(paramarg0: MemoryStack): WNDCLASSEX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncbClsExtra(paramarg0: number): number;
    static ncbClsExtra(paramarg0: number, paramarg1: number): void;
    static ncbSize(paramarg0: number): number;
    static ncbSize(paramarg0: number, paramarg1: number): void;
    static ncbWndExtra(paramarg0: number): number;
    static ncbWndExtra(paramarg0: number, paramarg1: number): void;
    static nhCursor(paramarg0: number): number;
    static nhCursor(paramarg0: number, paramarg1: number): void;
    static nhIcon(paramarg0: number): number;
    static nhIcon(paramarg0: number, paramarg1: number): void;
    static nhIconSm(paramarg0: number): number;
    static nhIconSm(paramarg0: number, paramarg1: number): void;
    static nhInstance(paramarg0: number): number;
    static nhInstance(paramarg0: number, paramarg1: number): void;
    static nhbrBackground(paramarg0: number): number;
    static nhbrBackground(paramarg0: number, paramarg1: number): void;
    static nlpfnWndProc(paramarg0: number): WindowProc;
    static nlpfnWndProc(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static nlpszClassName(paramarg0: number): ByteBuffer;
    static nlpszClassName(paramarg0: number, paramarg1: ByteBuffer): void;
    static nlpszClassNameString(paramarg0: number): string;
    static nlpszMenuName(paramarg0: number): ByteBuffer;
    static nlpszMenuName(paramarg0: number, paramarg1: ByteBuffer): void;
    static nlpszMenuNameString(paramarg0: number): string;
    static nstyle(paramarg0: number): number;
    static nstyle(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cbClsExtra(): number;
    cbClsExtra(arg0: number): WNDCLASSEX;
    cbSize(): number;
    cbSize(arg0: number): WNDCLASSEX;
    cbWndExtra(): number;
    cbWndExtra(arg0: number): WNDCLASSEX;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): WNDCLASSEX;
    hCursor(): number;
    hCursor(arg0: number): WNDCLASSEX;
    hIcon(): number;
    hIcon(arg0: number): WNDCLASSEX;
    hIconSm(): number;
    hIconSm(arg0: number): WNDCLASSEX;
    hInstance(): number;
    hInstance(arg0: number): WNDCLASSEX;
    hbrBackground(): number;
    hbrBackground(arg0: number): WNDCLASSEX;
    lpfnWndProc(): WindowProc;
    lpfnWndProc(arg0: (param0: number, param1: number, param2: number, param3: number) => number): WNDCLASSEX;
    lpszClassName(): ByteBuffer;
    lpszClassName(arg0: ByteBuffer): WNDCLASSEX;
    lpszClassNameString(): string;
    lpszMenuName(): ByteBuffer;
    lpszMenuName(arg0: ByteBuffer): WNDCLASSEX;
    lpszMenuNameString(): string;
    set(arg0: number, arg1: number, arg2: (param0: number, param1: number, param2: number, param3: number) => number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ByteBuffer, arg10: ByteBuffer, arg11: number): WNDCLASSEX;
    set(arg0: WNDCLASSEX): WNDCLASSEX;
    sizeof(): number;
    style(): number;
    style(arg0: number): WNDCLASSEX;
}