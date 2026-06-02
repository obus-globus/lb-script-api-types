import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ThreadLocalHandshake$ActivationResult extends Enum<ThreadLocalHandshake$ActivationResult> {
    static ACTIVATED: ThreadLocalHandshake$ActivationResult;
    static ACTIVE: ThreadLocalHandshake$ActivationResult;
    static PROCESSED: ThreadLocalHandshake$ActivationResult;
    static REACTIVATED: ThreadLocalHandshake$ActivationResult;
    static TERMINATED: ThreadLocalHandshake$ActivationResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ThreadLocalHandshake$ActivationResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "ACTIVE" | "PROCESSED" | "TERMINATED" | "ACTIVATED" | "REACTIVATED";
}