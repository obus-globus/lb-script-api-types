import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LineCoverage$LineState extends Enum<LineCoverage$LineState> {
    static Covered: LineCoverage$LineState;
    static NotCovered: LineCoverage$LineState;
    static Partial: LineCoverage$LineState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LineCoverage$LineState;
    static values(): (Object | null)[];
    private constructor()
    name(): "Covered" | "Partial" | "NotCovered";
}