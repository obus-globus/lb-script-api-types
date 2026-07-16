import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SuspendAnchor extends Enum<SuspendAnchor> {
    static AFTER: SuspendAnchor;
    static BEFORE: SuspendAnchor;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SuspendAnchor;
    static values(): SuspendAnchor[];
    private constructor()
    name(): "BEFORE" | "AFTER";
}