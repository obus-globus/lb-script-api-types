import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class RelativeDateTimeFormatter$Style extends Enum<RelativeDateTimeFormatter$Style> {
    static LONG: RelativeDateTimeFormatter$Style;
    static NARROW: RelativeDateTimeFormatter$Style;
    static SHORT: RelativeDateTimeFormatter$Style;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RelativeDateTimeFormatter$Style;
    static values(): RelativeDateTimeFormatter$Style[];
    private constructor()
    name(): "LONG" | "SHORT" | "NARROW";
}