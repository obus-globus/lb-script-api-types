import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { DispatchNode } from '../../../../../../com/oracle/truffle/regex/runtime/nodes/DispatchNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DispatchNodeGen$Uncached extends DispatchNode implements UnadoptableNode {
    private constructor()
    execute(arg0Value: Node, arg1Value: CallTarget, arg2Value: RegexResult): Object;
}