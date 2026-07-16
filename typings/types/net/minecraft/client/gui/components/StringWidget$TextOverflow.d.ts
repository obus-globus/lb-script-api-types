import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StringWidget$TextOverflow extends Enum<StringWidget$TextOverflow> {
    static CLAMPED: StringWidget$TextOverflow;
    static SCROLLING: StringWidget$TextOverflow;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StringWidget$TextOverflow;
    static values(): StringWidget$TextOverflow[];
    private constructor()
    name(): "CLAMPED" | "SCROLLING";
}