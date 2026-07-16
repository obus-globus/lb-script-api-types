import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class CefApp$CefAppState extends Enum<CefApp$CefAppState> {
    static INITIALIZATION_FAILED: CefApp$CefAppState;
    static INITIALIZED: CefApp$CefAppState;
    static INITIALIZING: CefApp$CefAppState;
    static NEW: CefApp$CefAppState;
    static NONE: CefApp$CefAppState;
    static SHUTTING_DOWN: CefApp$CefAppState;
    static TERMINATED: CefApp$CefAppState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefApp$CefAppState;
    static values(): CefApp$CefAppState[];
    private constructor()
    name(): "NONE" | "NEW" | "INITIALIZING" | "INITIALIZED" | "INITIALIZATION_FAILED" | "SHUTTING_DOWN" | "TERMINATED";
}