import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RelativeDateTimeFormatter$Direction extends Enum<RelativeDateTimeFormatter$Direction> {
    static LAST: RelativeDateTimeFormatter$Direction;
    static LAST_2: RelativeDateTimeFormatter$Direction;
    static NEXT: RelativeDateTimeFormatter$Direction;
    static NEXT_2: RelativeDateTimeFormatter$Direction;
    static PLAIN: RelativeDateTimeFormatter$Direction;
    static THIS: RelativeDateTimeFormatter$Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RelativeDateTimeFormatter$Direction;
    static values(): RelativeDateTimeFormatter$Direction[];
    private constructor()
    name(): "LAST_2" | "LAST" | "THIS" | "NEXT" | "NEXT_2" | "PLAIN";
}