import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LocaleMatcher$Direction extends Enum<LocaleMatcher$Direction> {
    static ONLY_TWO_WAY: LocaleMatcher$Direction;
    static WITH_ONE_WAY: LocaleMatcher$Direction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocaleMatcher$Direction;
    static values(): LocaleMatcher$Direction[];
    private constructor()
    name(): "WITH_ONE_WAY" | "ONLY_TWO_WAY";
}