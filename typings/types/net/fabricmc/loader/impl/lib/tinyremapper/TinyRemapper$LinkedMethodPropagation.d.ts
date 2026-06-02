import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TinyRemapper$LinkedMethodPropagation extends Enum<TinyRemapper$LinkedMethodPropagation> {
    static COMPATIBLE: TinyRemapper$LinkedMethodPropagation;
    static DISABLED: TinyRemapper$LinkedMethodPropagation;
    static ENABLED: TinyRemapper$LinkedMethodPropagation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TinyRemapper$LinkedMethodPropagation;
    static values(): (Object | null)[];
    private constructor()
    name(): "DISABLED" | "ENABLED" | "COMPATIBLE";
}