import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Wincon$COORD } from '../../../../../com/sun/jna/platform/win32/Wincon$COORD.d.ts'
import type { Wincon$SMALL_RECT } from '../../../../../com/sun/jna/platform/win32/Wincon$SMALL_RECT.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Wincon$CONSOLE_SCREEN_BUFFER_INFO extends Structure {
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
    dwCursorPosition: Wincon$COORD;
    dwMaximumWindowSize: Wincon$COORD;
    dwSize: Wincon$COORD;
    srWindow: Wincon$SMALL_RECT;
    wAttributes: number;
    toString(): string;
    toString(arg0: boolean): string;
}