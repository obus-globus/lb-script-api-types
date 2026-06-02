import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ListFormat$Type extends Enum<ListFormat$Type> {
    static OR: ListFormat$Type;
    static STANDARD: ListFormat$Type;
    static UNIT: ListFormat$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ListFormat$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "STANDARD" | "OR" | "UNIT";
}