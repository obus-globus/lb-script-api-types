import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NodeCost extends Enum<NodeCost> {
    static MEGAMORPHIC: NodeCost;
    static MONOMORPHIC: NodeCost;
    static NONE: NodeCost;
    static POLYMORPHIC: NodeCost;
    static UNINITIALIZED: NodeCost;
    static fromCount(paramnodeCount: number): NodeCost;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NodeCost;
    static values(): (Object | null)[];
    private constructor()
    isTrivial(): boolean;
    name(): "NONE" | "UNINITIALIZED" | "MONOMORPHIC" | "POLYMORPHIC" | "MEGAMORPHIC";
}