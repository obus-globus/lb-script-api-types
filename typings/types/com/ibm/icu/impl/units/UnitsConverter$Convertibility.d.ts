import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UnitsConverter$Convertibility extends Enum<UnitsConverter$Convertibility> {
    static CONVERTIBLE: UnitsConverter$Convertibility;
    static RECIPROCAL: UnitsConverter$Convertibility;
    static UNCONVERTIBLE: UnitsConverter$Convertibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnitsConverter$Convertibility;
    static values(): UnitsConverter$Convertibility[];
    private constructor()
    name(): "CONVERTIBLE" | "RECIPROCAL" | "UNCONVERTIBLE";
}