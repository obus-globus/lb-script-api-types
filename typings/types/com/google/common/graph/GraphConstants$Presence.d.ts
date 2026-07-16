import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GraphConstants$Presence extends Enum<GraphConstants$Presence> {
    static EDGE_EXISTS: GraphConstants$Presence;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GraphConstants$Presence;
    static values(): GraphConstants$Presence[];
    private constructor()
    name(): "EDGE_EXISTS";
}