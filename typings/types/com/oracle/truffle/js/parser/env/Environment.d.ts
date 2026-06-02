import type { Scope } from '../../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Symbol } from '../../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { FunctionEnvironment } from '../../../../../../com/oracle/truffle/js/parser/env/FunctionEnvironment.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { UnsupportedOperationException } from '../../../../../../java/lang/UnsupportedOperationException.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Environment extends Object {
    constructor(parent: Environment, factory: NodeFactory, context: JSContext)
    // private context: JSContext;
    // private factory: NodeFactory;
    // private functionEnvironment: FunctionEnvironment;
    readonly parent: Environment;
    addFrameSlotFromSymbol(symbol: Symbol): void;
    addFrameSlotsFromSymbols(symbols: Symbol[]): void;
    addFrameSlotsFromSymbols(symbols: Symbol[], onlyBlockScoped: boolean, filter: (param0: Symbol) => kotlin.Boolean): void;
    createLocal(frameSlot: JSFrameSlot, frameLevel: number, scopeLevel: number): JavaScriptNode;
    createTempVar(): Environment$VarRef;
    declareInternalSlot(name: Object): JSFrameSlot;
    declareLocalVar(name: Object): JSFrameSlot;
    // private declareTempVar(prefix: string): JSFrameSlot;
    ensureFrameLevelAvailable(frameLevel: number): void;
    findActiveModule(): Environment$VarRef;
    findArgumentsVar(): Environment$VarRef;
    findAsyncContextVar(): Environment$VarRef;
    findAsyncResultVar(): Environment$VarRef;
    findBlockFrameSlot(name: Object): JSFrameSlot;
    findBlockScopedVar(name: TruffleString): Environment$VarRef;
    findDynamicScopeVar(): Environment$VarRef;
    findFunctionFrameSlot(name: Object): JSFrameSlot;
    findInternalSlot(name: Object): Environment$VarRef;
    findInternalSlot(name: Object, allowDebug: boolean): Environment$VarRef;
    findInternalSlot(name: Object, allowDebug: boolean, skippedFrames: number): Environment$VarRef;
    findLocalVar(name: TruffleString): Environment$VarRef;
    findNewTargetVar(): Environment$VarRef;
    findSuperVar(): Environment$VarRef;
    findTempVar(var_: JSFrameSlot): Environment$VarRef;
    findThisVar(): Environment$VarRef;
    findVar(name: TruffleString, skipWith: boolean): Environment$VarRef;
    findVar(name: TruffleString, skipWith: boolean, skipEval: boolean, skipBlockScoped: boolean, skipGlobal: boolean, skipMapped: boolean): Environment$VarRef;
    findVar(name: TruffleString, skipWith: boolean, skipEval: boolean, skipBlockScoped: boolean, skipGlobal: boolean, skipMapped: boolean, skipVar: boolean): Environment$VarRef;
    findYieldValueVar(): Environment$VarRef;
    function(): FunctionEnvironment;
    getBlockFrameDescriptor(): JSFrameDescriptor;
    getBlockScopeSlot(frameLevel: number, scopeLevel: number): JSFrameSlot;
    getCurrentBlockScopeSlot(): JSFrameSlot;
    getFunctionFrameDescriptor(): JSFrameDescriptor;
    getParent(): Environment;
    getParentAt(frameLevel: number, scopeLevel: number): Environment;
    getScope(): Scope;
    getScopeLevel(): number;
    getVariableEnvironment(): Environment;
    hasLocalVar(name: Object): boolean;
    hasScopeFrame(): boolean;
    isDynamicScopeContext(): boolean;
    isDynamicallyScoped(): boolean;
    isStrictMode(): boolean;
    // private makeDebugWrapClosure(wrapClosure: (param0: Environment$VarRef) => Environment$VarRef, name: TruffleString, frameLevel: number): (param0: Environment$VarRef) => Environment$VarRef;
    // private makeEvalWrapClosure(wrapClosure: (param0: Environment$VarRef) => Environment$VarRef, name: TruffleString, frameLevel: number, scopeLevel: number, current: Environment): (param0: Environment$VarRef) => Environment$VarRef;
    // private makeGlobalWrapClosure(wrapClosure: (param0: Environment$VarRef) => Environment$VarRef, name: TruffleString): (param0: Environment$VarRef) => Environment$VarRef;
    // private makeWithWrapClosure(wrapClosure: (param0: Environment$VarRef) => Environment$VarRef, name: TruffleString, withVarName: Object): (param0: Environment$VarRef) => Environment$VarRef;
    reserveArgumentsSlot(): void;
    reserveDynamicScopeSlot(): void;
    reserveNewTargetSlot(): void;
    reserveSuperSlot(): void;
    reserveThisSlot(): void;
    toString(): string;
    toStringImpl(state: { [key: string]: number }): string;
    // private unsupported(): UnsupportedOperationException;
}