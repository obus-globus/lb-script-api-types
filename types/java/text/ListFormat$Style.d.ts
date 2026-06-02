import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ListFormat$Style extends Enum<ListFormat$Style> {
    static FULL: ListFormat$Style;
    static NARROW: ListFormat$Style;
    static SHORT: ListFormat$Style;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ListFormat$Style;
    static values(): (Object | null)[];
    private constructor()
    name(): "FULL" | "SHORT" | "NARROW";
}