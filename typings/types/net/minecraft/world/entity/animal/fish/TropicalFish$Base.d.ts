import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TropicalFish$Base extends Enum<TropicalFish$Base> {
    static LARGE: TropicalFish$Base;
    static SMALL: TropicalFish$Base;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TropicalFish$Base;
    static values(): (Object | null)[];
    private constructor(id: number)
    // private id: number;
    name(): "SMALL" | "LARGE";
}