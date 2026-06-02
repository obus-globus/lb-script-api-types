import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode$TypeCheckNode } from '../../../../com/oracle/truffle/host/HostExecuteNode$TypeCheckNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNode$JavaObjectType extends HostExecuteNode$TypeCheckNode {
    constructor(clazz: Class<Object>)
    // private clazz: Class<Object>;
    equals(obj: Object | null): boolean;
    execute(arg: Object, interop: InteropLibrary, context: HostContext): boolean;
    hashCode(): number;
    toString(): string;
}