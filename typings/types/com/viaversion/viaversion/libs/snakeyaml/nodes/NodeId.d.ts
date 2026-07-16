import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NodeId extends Enum<NodeId> {
    static anchor: NodeId;
    static mapping: NodeId;
    static scalar: NodeId;
    static sequence: NodeId;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NodeId;
    static values(): NodeId[];
    private constructor()
    name(): "scalar" | "sequence" | "mapping" | "anchor";
}