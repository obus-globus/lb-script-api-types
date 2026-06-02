import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface JavaScriptFunctionCallNode extends Object{
    getTarget(): Node;
}