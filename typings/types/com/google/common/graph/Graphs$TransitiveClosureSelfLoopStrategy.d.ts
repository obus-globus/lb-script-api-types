import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Graphs$TransitiveClosureSelfLoopStrategy extends Enum<Graphs$TransitiveClosureSelfLoopStrategy> {
    static ADD_SELF_LOOPS_ALWAYS: Graphs$TransitiveClosureSelfLoopStrategy;
    static ADD_SELF_LOOPS_FOR_CYCLES: Graphs$TransitiveClosureSelfLoopStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Graphs$TransitiveClosureSelfLoopStrategy;
    static values(): Graphs$TransitiveClosureSelfLoopStrategy[];
    private constructor()
    name(): "ADD_SELF_LOOPS_ALWAYS" | "ADD_SELF_LOOPS_FOR_CYCLES";
}