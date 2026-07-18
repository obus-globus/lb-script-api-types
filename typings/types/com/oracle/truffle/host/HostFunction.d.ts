import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode } from '../../../../com/oracle/truffle/host/HostExecuteNode.d.ts'
import type { HostLanguage } from '../../../../com/oracle/truffle/host/HostLanguage.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostFunction extends Object implements TruffleObject {
    static isInstance(paramlanguage: HostLanguage, paramobj: TruffleObject): boolean;
    static isInstance(paramlanguage: HostLanguage, paramobj: Object): boolean;
    constructor(method: HostMethodDesc, obj: Object, context: HostContext)
    // private context: HostContext;
    // private method: HostMethodDesc;
    // private obj: Object;
    equals(o: Object | null): boolean;
    execute(args: Object[], node: Node, execute: HostExecuteNode): Object;
    getLanguage(): Class<TruffleLanguage<Object>>;
    hasLanguage(): boolean;
    hashCode(): number;
    isExecutable(): boolean;
    toDisplayString(allowSideEffects: boolean): string;
}