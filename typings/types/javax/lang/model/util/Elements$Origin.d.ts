import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Elements$Origin extends Enum<Elements$Origin> {
    static EXPLICIT: Elements$Origin;
    static MANDATED: Elements$Origin;
    static SYNTHETIC: Elements$Origin;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Elements$Origin;
    static values(): Elements$Origin[];
    private constructor()
    isDeclared(): boolean;
    name(): "EXPLICIT" | "MANDATED" | "SYNTHETIC";
}