import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FocusEvent$Cause extends Enum<FocusEvent$Cause> {
    static ACTIVATION: FocusEvent$Cause;
    static CLEAR_GLOBAL_FOCUS_OWNER: FocusEvent$Cause;
    static MOUSE_EVENT: FocusEvent$Cause;
    static ROLLBACK: FocusEvent$Cause;
    static TRAVERSAL: FocusEvent$Cause;
    static TRAVERSAL_BACKWARD: FocusEvent$Cause;
    static TRAVERSAL_DOWN: FocusEvent$Cause;
    static TRAVERSAL_FORWARD: FocusEvent$Cause;
    static TRAVERSAL_UP: FocusEvent$Cause;
    static UNEXPECTED: FocusEvent$Cause;
    static UNKNOWN: FocusEvent$Cause;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FocusEvent$Cause;
    static values(): FocusEvent$Cause[];
    private constructor()
    name(): "UNKNOWN" | "MOUSE_EVENT" | "TRAVERSAL" | "TRAVERSAL_UP" | "TRAVERSAL_DOWN" | "TRAVERSAL_FORWARD" | "TRAVERSAL_BACKWARD" | "ROLLBACK" | "UNEXPECTED" | "ACTIVATION" | "CLEAR_GLOBAL_FOCUS_OWNER";
}