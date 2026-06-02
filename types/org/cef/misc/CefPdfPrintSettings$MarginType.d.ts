import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefPdfPrintSettings$MarginType extends Enum<CefPdfPrintSettings$MarginType> {
    static CUSTOM: CefPdfPrintSettings$MarginType;
    static DEFAULT: CefPdfPrintSettings$MarginType;
    static NONE: CefPdfPrintSettings$MarginType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefPdfPrintSettings$MarginType;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEFAULT" | "NONE" | "CUSTOM";
}