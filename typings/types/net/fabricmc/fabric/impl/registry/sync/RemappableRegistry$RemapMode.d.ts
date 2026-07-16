import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RemappableRegistry$RemapMode extends Enum<RemappableRegistry$RemapMode> {
    static AUTHORITATIVE: RemappableRegistry$RemapMode;
    static REMOTE: RemappableRegistry$RemapMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RemappableRegistry$RemapMode;
    static values(): RemappableRegistry$RemapMode[];
    private constructor()
    name(): "AUTHORITATIVE" | "REMOTE";
}