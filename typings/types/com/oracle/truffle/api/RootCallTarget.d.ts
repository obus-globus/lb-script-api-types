import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RootCallTarget extends CallTarget, Object{
    call(location: Node, ...arguments: Object[]): Object;
    getRootNode(): RootNode;
}