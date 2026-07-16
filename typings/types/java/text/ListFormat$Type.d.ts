import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ListFormat$Type extends Enum<ListFormat$Type> {
    static OR: ListFormat$Type;
    static STANDARD: ListFormat$Type;
    static UNIT: ListFormat$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ListFormat$Type;
    static values(): ListFormat$Type[];
    private constructor()
    name(): "STANDARD" | "OR" | "UNIT";
}