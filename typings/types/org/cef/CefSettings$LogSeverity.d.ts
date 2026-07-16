import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class CefSettings$LogSeverity extends Enum<CefSettings$LogSeverity> {
    static LOGSEVERITY_DEFAULT: CefSettings$LogSeverity;
    static LOGSEVERITY_DISABLE: CefSettings$LogSeverity;
    static LOGSEVERITY_ERROR: CefSettings$LogSeverity;
    static LOGSEVERITY_FATAL: CefSettings$LogSeverity;
    static LOGSEVERITY_INFO: CefSettings$LogSeverity;
    static LOGSEVERITY_VERBOSE: CefSettings$LogSeverity;
    static LOGSEVERITY_WARNING: CefSettings$LogSeverity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefSettings$LogSeverity;
    static values(): CefSettings$LogSeverity[];
    private constructor()
    name(): "LOGSEVERITY_DEFAULT" | "LOGSEVERITY_VERBOSE" | "LOGSEVERITY_INFO" | "LOGSEVERITY_WARNING" | "LOGSEVERITY_ERROR" | "LOGSEVERITY_FATAL" | "LOGSEVERITY_DISABLE";
}