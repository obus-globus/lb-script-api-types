import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinGDI$BITMAPINFOHEADER } from '../../../../../com/sun/jna/platform/win32/WinGDI$BITMAPINFOHEADER.d.ts'
import type { WinGDI$RGBQUAD } from '../../../../../com/sun/jna/platform/win32/WinGDI$RGBQUAD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinGDI$BITMAPINFO extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: number)
    bmiColors: WinGDI$RGBQUAD[];
    bmiHeader: WinGDI$BITMAPINFOHEADER;
}