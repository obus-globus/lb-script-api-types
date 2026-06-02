import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SortableNode<N extends SortableNode<N>> extends Object {
    static link(paramarg0: Object | null, paramarg1: Object | null): void;
    constructor()
    // private previousNodes: N[];
    // private subsequentNodes: N[];
    // private visited: boolean;
    addPreviousNode(arg0: N): void;
    addSubsequentNode(arg0: N): void;
    getDescription(): string;
}