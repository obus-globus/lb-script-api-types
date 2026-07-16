import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TinyRemapper$LinkedMethodPropagation extends Enum<TinyRemapper$LinkedMethodPropagation> {
    static COMPATIBLE: TinyRemapper$LinkedMethodPropagation;
    static DISABLED: TinyRemapper$LinkedMethodPropagation;
    static ENABLED: TinyRemapper$LinkedMethodPropagation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TinyRemapper$LinkedMethodPropagation;
    static values(): TinyRemapper$LinkedMethodPropagation[];
    private constructor()
    name(): "DISABLED" | "ENABLED" | "COMPATIBLE";
}