import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { WinUser$HARDWAREINPUT } from '../../../../../com/sun/jna/platform/win32/WinUser$HARDWAREINPUT.d.ts'
import type { WinUser$KEYBDINPUT } from '../../../../../com/sun/jna/platform/win32/WinUser$KEYBDINPUT.d.ts'
import type { WinUser$MOUSEINPUT } from '../../../../../com/sun/jna/platform/win32/WinUser$MOUSEINPUT.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinUser$INPUT$INPUT_UNION extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Pointer)
    hi: WinUser$HARDWAREINPUT;
    ki: WinUser$KEYBDINPUT;
    mi: WinUser$MOUSEINPUT;
}