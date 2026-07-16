import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ListFormat$Style extends Enum<ListFormat$Style> {
    static FULL: ListFormat$Style;
    static NARROW: ListFormat$Style;
    static SHORT: ListFormat$Style;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ListFormat$Style;
    static values(): ListFormat$Style[];
    private constructor()
    name(): "FULL" | "SHORT" | "NARROW";
}