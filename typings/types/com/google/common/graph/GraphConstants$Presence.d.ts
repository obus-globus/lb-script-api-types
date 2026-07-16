import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GraphConstants$Presence extends Enum<GraphConstants$Presence> {
    static EDGE_EXISTS: GraphConstants$Presence;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GraphConstants$Presence;
    static values(): GraphConstants$Presence[];
    private constructor()
    name(): "EDGE_EXISTS";
}