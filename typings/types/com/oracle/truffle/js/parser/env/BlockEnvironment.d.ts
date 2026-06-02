import type { Scope } from '../../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Symbol } from '../../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { JSFrameDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockEnvironment extends Environment {
    static isScopeCaptured(paramblockScope: Scope): boolean;
    constructor(parent: Environment, factory: NodeFactory, context: JSContext)
    constructor(parent: Environment, factory: NodeFactory, context: JSContext, blockScope: Scope)
    readonly blockFrameDescriptor: JSFrameDescriptor;
    // private blockScopeSlot: JSFrameSlot;
    // private frameEnd: number;
    // private frameStart: number;
    // private isFunctionBlock: boolean;
    readonly parentSlot: JSFrameSlot;
    readonly scope: Scope;
    readonly scopeLevel: number;
    addFrameSlotFromSymbol(symbol: Symbol): void;
    capturesFunctionFrame(): boolean;
    declareInternalSlot(name: Object): JSFrameSlot;
    findBlockFrameSlot(name: Object): JSFrameSlot;
    findFunctionFrameSlot(name: Object): JSFrameSlot;
    getBlockFrameDescriptor(): JSFrameDescriptor;
    getCurrentBlockScopeSlot(): JSFrameSlot;
    getEnd(): number;
    getParentSlot(): JSFrameSlot;
    getScope(): Scope;
    getScopeLevel(): number;
    getStart(): number;
    hasScopeFrame(): boolean;
    isFunctionBlock(): boolean;
    isGeneratorFunctionBlock(): boolean;
    // private slotId(name: Object): Object;
    toStringImpl(state: { [key: string]: number }): string;
    // private updateSlotRange(slot: JSFrameSlot): void;
}