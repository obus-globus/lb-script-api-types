import type { Scope } from '../../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Symbol } from '../../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { DerivedEnvironment } from '../../../../../../com/oracle/truffle/js/parser/env/DerivedEnvironment.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrivateEnvironment extends DerivedEnvironment {
    constructor(parent: Environment, factory: NodeFactory, context: JSContext, scope: Scope)
    readonly scope: Scope;
    addFrameSlotFromSymbol(symbol: Symbol): void;
    findBlockFrameSlot(name: Object): JSFrameSlot;
    getScope(): Scope;
}