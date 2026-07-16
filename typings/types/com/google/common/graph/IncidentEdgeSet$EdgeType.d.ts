import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class IncidentEdgeSet$EdgeType extends Enum<IncidentEdgeSet$EdgeType> {
    static BOTH: IncidentEdgeSet$EdgeType;
    static INCOMING: IncidentEdgeSet$EdgeType;
    static OUTGOING: IncidentEdgeSet$EdgeType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IncidentEdgeSet$EdgeType;
    static values(): IncidentEdgeSet$EdgeType[];
    private constructor()
    name(): "INCOMING" | "OUTGOING" | "BOTH";
}