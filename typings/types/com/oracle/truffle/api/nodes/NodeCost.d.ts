import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NodeCost extends Enum<NodeCost> {
    static MEGAMORPHIC: NodeCost;
    static MONOMORPHIC: NodeCost;
    static NONE: NodeCost;
    static POLYMORPHIC: NodeCost;
    static UNINITIALIZED: NodeCost;
    static fromCount(paramnodeCount: number): NodeCost;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NodeCost;
    static values(): NodeCost[];
    private constructor()
    isTrivial(): boolean;
    name(): "NONE" | "UNINITIALIZED" | "MONOMORPHIC" | "POLYMORPHIC" | "MEGAMORPHIC";
}