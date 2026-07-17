import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotInstructionTracers$RootNodeGroup extends Record {
    private constructor(rootNode: RootNode)
    // private rootNode: RootNode;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rootNode(): RootNode;
    toString(): string;
}