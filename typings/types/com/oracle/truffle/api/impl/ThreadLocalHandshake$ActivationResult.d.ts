import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ThreadLocalHandshake$ActivationResult extends Enum<ThreadLocalHandshake$ActivationResult> {
    static ACTIVATED: ThreadLocalHandshake$ActivationResult;
    static ACTIVE: ThreadLocalHandshake$ActivationResult;
    static PROCESSED: ThreadLocalHandshake$ActivationResult;
    static REACTIVATED: ThreadLocalHandshake$ActivationResult;
    static TERMINATED: ThreadLocalHandshake$ActivationResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ThreadLocalHandshake$ActivationResult;
    static values(): ThreadLocalHandshake$ActivationResult[];
    private constructor()
    name(): "ACTIVE" | "PROCESSED" | "TERMINATED" | "ACTIVATED" | "REACTIVATED";
}