import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SortableNode<N extends SortableNode<N>> extends Object {
    static link<N extends SortableNode<N>>(paramarg0: N, paramarg1: N): void;
    constructor()
    // private previousNodes: N[];
    // private subsequentNodes: N[];
    // private visited: boolean;
    addPreviousNode(arg0: N): void;
    addSubsequentNode(arg0: N): void;
    getDescription(): string;
}