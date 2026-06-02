import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostExecuteNode extends Node {
    constructor()
    execute(node: Node, method: HostMethodDesc, obj: Object, args: Object[], hostContext: HostContext): Object;
}