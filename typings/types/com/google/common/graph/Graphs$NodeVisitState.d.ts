import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Graphs$NodeVisitState extends Enum<Graphs$NodeVisitState> {
    static COMPLETE: Graphs$NodeVisitState;
    static PENDING: Graphs$NodeVisitState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Graphs$NodeVisitState;
    static values(): Graphs$NodeVisitState[];
    private constructor()
    name(): "PENDING" | "COMPLETE";
}