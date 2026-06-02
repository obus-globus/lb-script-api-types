import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NodeId extends Enum<NodeId> {
    static anchor: NodeId;
    static mapping: NodeId;
    static scalar: NodeId;
    static sequence: NodeId;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NodeId;
    static values(): (Object | null)[];
    private constructor()
    name(): "scalar" | "sequence" | "mapping" | "anchor";
}