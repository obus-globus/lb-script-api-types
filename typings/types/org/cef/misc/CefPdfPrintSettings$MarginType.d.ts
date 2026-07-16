import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefPdfPrintSettings$MarginType extends Enum<CefPdfPrintSettings$MarginType> {
    static CUSTOM: CefPdfPrintSettings$MarginType;
    static DEFAULT: CefPdfPrintSettings$MarginType;
    static NONE: CefPdfPrintSettings$MarginType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefPdfPrintSettings$MarginType;
    static values(): CefPdfPrintSettings$MarginType[];
    private constructor()
    name(): "DEFAULT" | "NONE" | "CUSTOM";
}