import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ListFormatter$Width extends Enum<ListFormatter$Width> {
    static NARROW: ListFormatter$Width;
    static SHORT: ListFormatter$Width;
    static WIDE: ListFormatter$Width;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ListFormatter$Width;
    static values(): ListFormatter$Width[];
    private constructor()
    name(): "WIDE" | "SHORT" | "NARROW";
}