import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Elements$Origin extends Enum<Elements$Origin> {
    static EXPLICIT: Elements$Origin;
    static MANDATED: Elements$Origin;
    static SYNTHETIC: Elements$Origin;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Elements$Origin;
    static values(): (Object | null)[];
    private constructor()
    isDeclared(): boolean;
    name(): "EXPLICIT" | "MANDATED" | "SYNTHETIC";
}