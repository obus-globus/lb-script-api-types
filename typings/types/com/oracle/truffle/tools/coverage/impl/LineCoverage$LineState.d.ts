import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LineCoverage$LineState extends Enum<LineCoverage$LineState> {
    static Covered: LineCoverage$LineState;
    static NotCovered: LineCoverage$LineState;
    static Partial: LineCoverage$LineState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LineCoverage$LineState;
    static values(): LineCoverage$LineState[];
    private constructor()
    name(): "Covered" | "Partial" | "NotCovered";
}