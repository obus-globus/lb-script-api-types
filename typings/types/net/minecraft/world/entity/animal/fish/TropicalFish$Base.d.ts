import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TropicalFish$Base extends Enum<TropicalFish$Base> {
    static LARGE: TropicalFish$Base;
    static SMALL: TropicalFish$Base;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TropicalFish$Base;
    static values(): TropicalFish$Base[];
    private constructor(id: number)
    // private id: number;
    name(): "SMALL" | "LARGE";
}