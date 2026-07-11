import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CallTarget extends Object{
    call(location: Node, ...arguments: Object[]): Object;
    call(...arguments: Object[]): Object;
}