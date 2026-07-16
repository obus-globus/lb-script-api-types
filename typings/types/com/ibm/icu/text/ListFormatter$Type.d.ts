import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ListFormatter$Type extends Enum<ListFormatter$Type> {
    static AND: ListFormatter$Type;
    static OR: ListFormatter$Type;
    static UNITS: ListFormatter$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ListFormatter$Type;
    static values(): ListFormatter$Type[];
    private constructor()
    name(): "AND" | "OR" | "UNITS";
}