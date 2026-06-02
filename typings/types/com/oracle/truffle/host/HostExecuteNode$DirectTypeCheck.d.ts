import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode$TypeCheckNode } from '../../../../com/oracle/truffle/host/HostExecuteNode$TypeCheckNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNode$DirectTypeCheck extends HostExecuteNode$TypeCheckNode {
    constructor(clazz: Class<Object>)
    // private clazz: Class<Object>;
    execute(test: Object, interop: InteropLibrary, context: HostContext): boolean;
    toString(): string;
}