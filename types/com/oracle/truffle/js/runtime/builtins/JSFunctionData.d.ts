import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData$Initializer } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$Initializer.d.ts'
import type { JSFunctionData$Target } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$Target.d.ts'
import type { AtomicReferenceFieldUpdater } from '../../../../../../java/util/concurrent/atomic/AtomicReferenceFieldUpdater.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionData extends Object {
    static create(paramcontext: JSContext, paramcallTarget: CallTarget, paramconstructTarget: CallTarget, paramconstructNewTarget: CallTarget, paramlength: number, paramname: TruffleString, paramisConstructor: boolean, paramisDerived: boolean, paramisStrict: boolean, paramisBuiltin: boolean, paramneedsParentFrame: boolean, paramisGenerator: boolean, paramisAsync: boolean, paramisClassConstructor: boolean, paramstrictFunctionProperties: boolean, paramneedsNewTarget: boolean, paramisBound: boolean): JSFunctionData;
    static create(paramcontext: JSContext, paramcallTarget: CallTarget, paramconstructTarget: CallTarget, paramconstructNewTarget: CallTarget, paramlength: number, paramname: TruffleString, paramflags: number): JSFunctionData;
    static create(paramcontext: JSContext, paramcallTarget: CallTarget, paramconstructTarget: CallTarget, paramlength: number, paramname: TruffleString, paramisConstructor: boolean, paramisDerived: boolean, paramstrictMode: boolean, paramisBuiltin: boolean): JSFunctionData;
    static create(paramcontext: JSContext, paramcallTarget: CallTarget, paramlength: number, paramname: TruffleString): JSFunctionData;
    static create(paramcontext: JSContext, paramlength: number, paramname: TruffleString, paramisConstructor: boolean, paramisDerived: boolean, paramstrictMode: boolean, paramisBuiltin: boolean): JSFunctionData;
    static createCallOnly(paramcontext: JSContext, paramcallTarget: CallTarget, paramlength: number, paramname: TruffleString): JSFunctionData;
    private constructor(context: JSContext, callTarget: CallTarget, constructTarget: CallTarget, constructNewTarget: CallTarget, length: number, name: TruffleString, flags: number)
    readonly callTarget: CallTarget;
    readonly constructNewTarget: CallTarget;
    readonly constructTarget: CallTarget;
    readonly context: JSContext;
    readonly flags: number;
    readonly lazyInit: JSFunctionData$Initializer;
    readonly length: number;
    readonly name: TruffleString;
    readonly rootNode: RootNode;
    // private ensureInitialized(target: JSFunctionData$Target): CallTarget;
    // private ensureInitializedCall(): Object;
    // private ensureInitializedConstruct(): Object;
    // private ensureInitializedConstructNewTarget(): Object;
    getCallTarget(): CallTarget;
    getCallTarget(initBranch: BranchProfile): CallTarget;
    getConstructNewTarget(): CallTarget;
    getConstructNewTarget(initBranch: BranchProfile): CallTarget;
    getConstructTarget(): CallTarget;
    getConstructTarget(initBranch: BranchProfile): CallTarget;
    getContext(): JSContext;
    getFlags(): number;
    getLength(): number;
    getName(): TruffleString;
    getRootNode(): RootNode;
    getRootTarget(): CallTarget;
    hasLazyInit(): boolean;
    hasStrictFunctionProperties(): boolean;
    isAsync(): boolean;
    isAsyncGenerator(): boolean;
    isBound(): boolean;
    isBuiltin(): boolean;
    isClassConstructor(): boolean;
    isConstructor(): boolean;
    isDerived(): boolean;
    isGenerator(): boolean;
    isPrototypeNotWritable(): boolean;
    isStrict(): boolean;
    materialize(): void;
    needsNewTarget(): boolean;
    needsParentFrame(): boolean;
    releaseLazyInit(): void;
    requiresNew(): boolean;
    // private setAndGetCallTarget(updater: AtomicReferenceFieldUpdater<JSFunctionData, CallTarget>, newTarget: CallTarget): CallTarget;
    setCallTarget(callTarget: CallTarget): CallTarget;
    setConstructNewTarget(constructNewTarget: CallTarget): CallTarget;
    setConstructTarget(constructTarget: CallTarget): CallTarget;
    setLazyInit(lazyInit: JSFunctionData$Initializer): void;
    setName(name: TruffleString): void;
    setRootNode(rootNode: RootNode): RootNode;
    toString(): string;
}