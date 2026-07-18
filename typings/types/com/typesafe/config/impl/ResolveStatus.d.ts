import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ResolveStatus extends Enum<ResolveStatus> {
    static RESOLVED: ResolveStatus;
    static UNRESOLVED: ResolveStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResolveStatus;
    static values(): ResolveStatus[];
    private constructor()
    name(): "UNRESOLVED" | "RESOLVED";
}