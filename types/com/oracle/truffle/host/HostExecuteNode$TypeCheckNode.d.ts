import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostExecuteNode$TypeCheckNode extends Node {
    constructor()
    execute(test: Object, interop: InteropLibrary, context: HostContext): boolean;
}