import type { UnadoptableNode } from '../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostToValueNode } from '../../../../com/oracle/truffle/host/HostToValueNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class HostToValueNodeGen$Uncached extends HostToValueNode implements UnadoptableNode {
    private constructor()
    execute(arg0Value: HostContext, arg1Value: Object): Value;
}