import type { Scope } from '../../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { BreakTarget } from '../../../../../../com/oracle/truffle/js/nodes/control/BreakTarget.d.ts'
import type { ContinueTarget } from '../../../../../../com/oracle/truffle/js/nodes/control/ContinueTarget.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { FunctionEnvironment$JumpTargetCloseable } from '../../../../../../com/oracle/truffle/js/parser/env/FunctionEnvironment$JumpTargetCloseable.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FunctionEnvironment extends Environment {
    static DYNAMIC_SCOPE_IDENTIFIER: TruffleString;
    constructor(parent: Environment, factory: NodeFactory, context: JSContext, scope: Scope, isStrictMode: boolean, isEval: boolean, isDirectEval: boolean, isArrowFunction: boolean, isGeneratorFunction: boolean, isDerivedConstructor: boolean, isAsyncFunction: boolean, isGlobal: boolean, hasSyntheticArguments: boolean)
    // private blockScopeSlot: JSFrameSlot;
    // private breakNodeCount: number;
    // private continueNodeCount: number;
    readonly directArgumentsAccess: boolean;
    // private frameDescriptor: JSFrameDescriptor;
    readonly frozen: boolean;
    readonly functionName: TruffleString;
    // private hasAwait: boolean;
    // private hasMappedParameters: boolean;
    // private hasRestParameter: boolean;
    // private hasReturn: boolean;
    // private hasSyntheticArguments: boolean;
    // private hasYield: boolean;
    // private inDirectEval: boolean;
    readonly internalFunctionName: TruffleString;
    // private isArrowFunction: boolean;
    // private isAsyncFunction: boolean;
    // private isDerivedConstructor: boolean;
    // private isDirectEval: boolean;
    // private isEval: boolean;
    // private isGeneratorFunction: boolean;
    // private isGlobal: boolean;
    // private isNamedExpression: boolean;
    // private isStrictMode: boolean;
    // private jumpTargetStack: BreakTarget[];
    readonly needsNewTarget: boolean;
    readonly parentFunction: FunctionEnvironment;
    readonly returnSlot: JSFrameSlot;
    readonly scope: Scope;
    readonly simpleParameterList: boolean;
    addAwait(): void;
    addMappedParameter(slot: JSFrameSlot, index: number): void;
    addReturn(): void;
    addYield(): void;
    declareInternalSlot(name: Object): JSFrameSlot;
    declareLocalVar(name: Object): JSFrameSlot;
    findBlockFrameSlot(name: Object): JSFrameSlot;
    findBreakTarget(label: Object): BreakTarget;
    findContinueTarget(label: Object): ContinueTarget;
    findFunctionFrameSlot(name: Object): JSFrameSlot;
    // private findJumpTarget<T extends BreakTarget>(label: Object, targetClass: Class<T>, direct: boolean): T;
    freeze(): void;
    getAsyncContextSlot(): JSFrameSlot;
    getAsyncResultSlot(): JSFrameSlot;
    getBlockFrameDescriptor(): JSFrameDescriptor;
    getBlockScopeSlot(): JSFrameSlot;
    getBlockScopeSlot(frameLevel: number, scopeLevel: number): JSFrameSlot;
    getCurrentBlockScopeSlot(): JSFrameSlot;
    getExplicitOrInternalFunctionName(): TruffleString;
    getFunctionFrameDescriptor(): JSFrameDescriptor;
    getFunctionName(): TruffleString;
    getInternalFunctionName(): TruffleString;
    getLeadingArgumentCount(): number;
    getNonArrowParentFunction(): FunctionEnvironment;
    getOrCreateBlockScopeSlot(): JSFrameSlot;
    getParentFunction(): FunctionEnvironment;
    getReturnSlot(): JSFrameSlot;
    getScope(): Scope;
    getScopeLevel(): number;
    getThisFunctionLevel(): number;
    getVariableEnvironment(): Environment;
    getYieldResultSlot(): JSFrameSlot;
    hasAwait(): boolean;
    hasMappedParameters(): boolean;
    hasRestParameter(): boolean;
    hasReturn(): boolean;
    hasReturnSlot(): boolean;
    hasSimpleParameterList(): boolean;
    hasSyntheticArguments(): boolean;
    hasYield(): boolean;
    inDirectEval(): boolean;
    isArrowFunction(): boolean;
    isAsyncFunction(): boolean;
    isAsyncGeneratorFunction(): boolean;
    isCallerContextEval(): boolean;
    isDeepFrozen(): boolean;
    isDerivedConstructor(): boolean;
    isDirectArgumentsAccess(): boolean;
    isDirectEval(): boolean;
    isDynamicScopeContext(): boolean;
    isDynamicallyScoped(): boolean;
    isEval(): boolean;
    isFrozen(): boolean;
    isGeneratorFunction(): boolean;
    isGlobal(): boolean;
    isIndirectEval(): boolean;
    isModule(): boolean;
    isNamedFunctionExpression(): boolean;
    isScriptOrModule(): boolean;
    isStrictMode(): boolean;
    needsParentFrame(): boolean;
    // private popJumpTarget(target: BreakTarget): void;
    prepareForDirectEval(): void;
    pushBreakTarget(label: string): FunctionEnvironment$JumpTargetCloseable<BreakTarget>;
    pushContinueTarget(label: string): FunctionEnvironment$JumpTargetCloseable<ContinueTarget>;
    // private pushJumpTarget<T extends BreakTarget>(target: T): T;
    returnsLastStatementResult(): boolean;
    setDirectArgumentsAccess(directArgumentsAccess: boolean): void;
    setFunctionName(functionName: TruffleString): void;
    setInternalFunctionName(internalFunctionName: TruffleString): void;
    setIsDynamicallyScoped(isDynamicallyScoped: boolean): void;
    setNamedFunctionExpression(isNamedExpression: boolean): void;
    setNeedsNewTarget(needsNewTarget: boolean): void;
    setNeedsParentFrame(needsParentFrame: boolean): void;
    setRestParameter(restParameter: boolean): void;
    setSimpleParameterList(simpleParameterList: boolean): void;
    toStringImpl(state: { [key: string]: number }): string;
}