import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefFocusHandler$FocusSource extends Enum<CefFocusHandler$FocusSource> {
    static FOCUS_SOURCE_NAVIGATION: CefFocusHandler$FocusSource;
    static FOCUS_SOURCE_SYSTEM: CefFocusHandler$FocusSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefFocusHandler$FocusSource;
    static values(): CefFocusHandler$FocusSource[];
    private constructor()
    name(): "FOCUS_SOURCE_NAVIGATION" | "FOCUS_SOURCE_SYSTEM";
}