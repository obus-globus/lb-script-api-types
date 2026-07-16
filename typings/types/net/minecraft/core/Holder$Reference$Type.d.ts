import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Holder$Reference$Type extends Enum<Holder$Reference$Type> {
    static INTRUSIVE: Holder$Reference$Type;
    static STAND_ALONE: Holder$Reference$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Holder$Reference$Type;
    static values(): Holder$Reference$Type[];
    private constructor()
    name(): "STAND_ALONE" | "INTRUSIVE";
}