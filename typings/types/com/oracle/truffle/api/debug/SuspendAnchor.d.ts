import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SuspendAnchor extends Enum<SuspendAnchor> {
    static AFTER: SuspendAnchor;
    static BEFORE: SuspendAnchor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SuspendAnchor;
    static values(): SuspendAnchor[];
    private constructor()
    name(): "BEFORE" | "AFTER";
}