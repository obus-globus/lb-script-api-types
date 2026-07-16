import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ListFormatter$Width extends Enum<ListFormatter$Width> {
    static NARROW: ListFormatter$Width;
    static SHORT: ListFormatter$Width;
    static WIDE: ListFormatter$Width;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ListFormatter$Width;
    static values(): ListFormatter$Width[];
    private constructor()
    name(): "WIDE" | "SHORT" | "NARROW";
}