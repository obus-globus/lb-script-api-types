import type { NodeInterface } from '../../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSBuiltinNode$Inlined extends NodeInterface, Object{
    callInlined(arguments: Object[]): Object;
    rewriteToCall(): RuntimeException;
}