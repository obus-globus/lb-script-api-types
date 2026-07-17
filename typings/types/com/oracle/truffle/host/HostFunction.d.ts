import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode } from '../../../../com/oracle/truffle/host/HostExecuteNode.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostFunction extends Object implements TruffleObject {
    constructor(method: HostMethodDesc, obj: Object, context: HostContext)
    // private context: HostContext;
    // private method: HostMethodDesc;
    // private obj: Object;
    asHostObject(): Object;
    equals(o: Object | null): boolean;
    execute(args: Object[], node: Node, execute: HostExecuteNode): Object;
    getLanguageId(): string;
    hasLanguageId(): boolean;
    hashCode(): number;
    isExecutable(): boolean;
    isHostObject(): boolean;
    toDisplayString(allowSideEffects: boolean): string;
}