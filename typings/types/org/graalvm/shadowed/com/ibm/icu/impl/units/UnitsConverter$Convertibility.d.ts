import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class UnitsConverter$Convertibility extends Enum<UnitsConverter$Convertibility> {
    static CONVERTIBLE: UnitsConverter$Convertibility;
    static RECIPROCAL: UnitsConverter$Convertibility;
    static UNCONVERTIBLE: UnitsConverter$Convertibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UnitsConverter$Convertibility;
    static values(): UnitsConverter$Convertibility[];
    private constructor()
    name(): "CONVERTIBLE" | "RECIPROCAL" | "UNCONVERTIBLE";
}