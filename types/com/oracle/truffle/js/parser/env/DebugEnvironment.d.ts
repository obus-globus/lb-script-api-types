import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugEnvironment extends Environment {
    constructor(parent: Environment, factory: NodeFactory, context: JSContext, scope: Object)
    readonly scope: Object;
    hasMember(name: TruffleString): boolean;
    isStrictMode(): boolean;
}