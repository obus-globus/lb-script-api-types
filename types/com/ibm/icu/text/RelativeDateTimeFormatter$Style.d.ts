import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RelativeDateTimeFormatter$Style extends Enum<RelativeDateTimeFormatter$Style> {
    static LONG: RelativeDateTimeFormatter$Style;
    static NARROW: RelativeDateTimeFormatter$Style;
    static SHORT: RelativeDateTimeFormatter$Style;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RelativeDateTimeFormatter$Style;
    static values(): (Object | null)[];
    private constructor()
    name(): "LONG" | "SHORT" | "NARROW";
}