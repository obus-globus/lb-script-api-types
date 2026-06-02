import type { JSFrameDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DerivedEnvironment extends Environment {
    constructor(parent: Environment, factory: NodeFactory, context: JSContext)
    // private blockEnvironment: Environment;
    // private block(): Environment;
    declareInternalSlot(name: Object): JSFrameSlot;
    getBlockFrameDescriptor(): JSFrameDescriptor;
    getCurrentBlockScopeSlot(): JSFrameSlot;
    getScopeLevel(): number;
}