import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EnumType$Fallback extends Enum<EnumType$Fallback> {
    static CLAMP: EnumType$Fallback;
    static WRAP: EnumType$Fallback;
    static ZERO: EnumType$Fallback;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EnumType$Fallback;
    static values(): EnumType$Fallback[];
    private constructor()
    name(): "ZERO" | "WRAP" | "CLAMP";
}