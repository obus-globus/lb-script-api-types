import type { RootCallTarget } from '../../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultCallTarget extends Object implements RootCallTarget {
    static CALL_BOUNDARY_METHOD: string;
    constructor(function_: RootNode)
    id: number;
    // private initialized: boolean;
    // private loaded: boolean;
    readonly rootNode: RootNode;
    call(location: Node, args: Object[]): Object;
    call(args: Object[]): Object;
    getRootNode(): RootNode;
    // private initialize(): void;
    isLoaded(): boolean;
    setLoaded(): void;
    toString(): string;
}