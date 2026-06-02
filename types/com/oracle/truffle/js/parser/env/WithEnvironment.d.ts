import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { DerivedEnvironment } from '../../../../../../com/oracle/truffle/js/parser/env/DerivedEnvironment.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WithEnvironment extends DerivedEnvironment {
    constructor(parent: Environment, factory: NodeFactory, context: JSContext, withVarIdentifier: Object)
    readonly withVarIdentifier: Object;
    getWithVarIdentifier(): Object;
    isDynamicScopeContext(): boolean;
}