import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefPrintSettings$DuplexMode extends Enum<CefPrintSettings$DuplexMode> {
    static DUPLEX_MODE_LONG_EDGE: CefPrintSettings$DuplexMode;
    static DUPLEX_MODE_SHORT_EDGE: CefPrintSettings$DuplexMode;
    static DUPLEX_MODE_SIMPLEX: CefPrintSettings$DuplexMode;
    static DUPLEX_MODE_UNKNOWN: CefPrintSettings$DuplexMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefPrintSettings$DuplexMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "DUPLEX_MODE_UNKNOWN" | "DUPLEX_MODE_SIMPLEX" | "DUPLEX_MODE_LONG_EDGE" | "DUPLEX_MODE_SHORT_EDGE";
}