import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$ExitMode } from '../../../../com/oracle/truffle/api/TruffleLanguage$ExitMode.d.ts'
import type { TruffleSafepoint$Interrupter } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interrupter.d.ts'
import type { TruffleSafepoint$InterruptibleFunction } from '../../../../com/oracle/truffle/api/TruffleSafepoint$InterruptibleFunction.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { ContextPauseHandle } from '../../../../com/oracle/truffle/polyglot/ContextPauseHandle.d.ts'
import type { FinalIntMap } from '../../../../com/oracle/truffle/polyglot/FinalIntMap.d.ts'
import type { ObjectSizeCalculator } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator.d.ts'
import type { PolyglotBindings } from '../../../../com/oracle/truffle/polyglot/PolyglotBindings.d.ts'
import type { PolyglotContextConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig.d.ts'
import type { PolyglotContextImpl$ExitException } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl$ExitException.d.ts'
import type { PolyglotContextImpl$State } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl$State.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotEngineImpl$CancelExecution } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl$CancelExecution.d.ts'
import type { PolyglotEngineImpl$StableLocalLocations } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl$StableLocalLocations.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { PolyglotInstrument } from '../../../../com/oracle/truffle/polyglot/PolyglotInstrument.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { PolyglotThreadInfo } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadInfo.d.ts'
import type { PolyglotThreadLocalActions } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions.d.ts'
import type { PolyglotThreadTask } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadTask.d.ts'
import type { PolyglotWrapper } from '../../../../com/oracle/truffle/polyglot/PolyglotWrapper.d.ts'
import type { ProcessHandlers$ProcessDecorator } from '../../../../com/oracle/truffle/polyglot/ProcessHandlers$ProcessDecorator.d.ts'
import type { SystemThread$LanguageSystemThread } from '../../../../com/oracle/truffle/polyglot/SystemThread$LanguageSystemThread.d.ts'
import type { WeakAssumedValue } from '../../../../com/oracle/truffle/polyglot/WeakAssumedValue.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class PolyglotContextImpl extends Object implements PolyglotImpl$VMObject {
    constructor(engine: PolyglotEngineImpl, config: PolyglotContextConfig)
    constructor(creator: PolyglotLanguageContext, config: PolyglotContextConfig)
    // private activeSystemThreads: SystemThread$LanguageSystemThread[];
    // private cachedThreadInfo: PolyglotThreadInfo;
    // private cancellationOrExitingFutures: Future<void>[];
    // private childContexts: PolyglotContextImpl[];
    // private cleanupExecutorService: ExecutorService;
    // private cleanupFuture: Future<Object>;
    // private closeExitedTriggerThread: Thread;
    // private closeables: Closeable[];
    // private closingLock: ReentrantLock;
    // private closingThread: Thread;
    // private config: PolyglotContextConfig;
    // private contextBoundLoggers: Object;
    // private contextLocals: Object[];
    // private contexts: PolyglotLanguageContext[];
    // private creator: PolyglotLanguage;
    // private disposing: boolean;
    readonly engine: PolyglotEngineImpl;
    // private enterDisallowedForPolyglotThread: Thread[];
    // private exitCode: number;
    // private exitMessage: string;
    // private finalizingEmbedderThreads: boolean;
    // private hostContextImpl: Object;
    // private initializedLanguagesCount: number;
    // private initiateCancelOrExitLock: ReentrantLock;
    // private interruptingLock: ReentrantLock;
    // private invalidMessage: string;
    // private invalidResourceLimit: boolean;
    // private languageIndexMap: FinalIntMap;
    // private languageInitializationFailures: number;
    // private layer: PolyglotSharingLayer;
    // private localsCleared: boolean;
    // private objectSizeCalculator: ObjectSizeCalculator;
    // private parent: PolyglotContextImpl;
    // private pauseHandles: ContextPauseHandle[];
    polyglotBindings: JavaMap<string, Object>;
    readonly polyglotBindingsObject: PolyglotBindings;
    // private polyglotHostBindings: PolyglotBindings;
    // private singleThreadValue: WeakAssumedValue<PolyglotThreadInfo>;
    // private singleThreaded: boolean;
    // private skipPendingExit: boolean;
    // private sourcesToInvalidate: Source[];
    // private state: PolyglotContextImpl$State;
    // private statementCounter: number;
    // private statementLimit: number;
    // private strongCreatorTruffleContext: TruffleContext;
    // private subProcesses: ProcessHandlers$ProcessDecorator[];
    // private threadLocalActions: PolyglotThreadLocalActions;
    // private threads: JavaMap<Thread, PolyglotThreadInfo>;
    // private uncachedLocation: Node;
    // private volatileStatementCounter: AtomicLong;
    // private weakAPI: Reference<Context>;
    // private weakCreatorTruffleContext: Reference<TruffleContext>;
    addChildContext(child: PolyglotContextImpl): void;
    // private addRootPointersForContext(heapRoots: Object[]): void;
    // private addRootPointersForStackFrames(heapRoots: Object[]): void;
    addSystemThread(thread: SystemThread$LanguageSystemThread): void;
    asValue(hostValue: Object): Object;
    calculateHeapSize(stopAtBytes: number, calculationCancelled: AtomicBoolean): number;
    cancel(resourceLimit: boolean, message: string): void;
    // private checkAllThreadAccesses(enteringThread: Thread, singleThread: boolean): void;
    // private checkCancelled(): void;
    // private checkCancelledNotClosing(): void;
    checkClosed(): void;
    checkClosedOrDisposing(mustSucceed: boolean): void;
    checkMultiThreadedAccess(newThread: Thread): void;
    // private checkSubProcessFinished(): void;
    // private checkSystemThreadsFinished(): void;
    claimSharingLayer(language: PolyglotLanguage): void;
    claimSharingLayer(sharableLayer: PolyglotSharingLayer, languages: PolyglotLanguage[]): boolean;
    clearExplicitContextStack(): void;
    close(cancelIfExecuting: boolean): void;
    closeAndMaybeWait(force: boolean, futures: Future<void>[]): void;
    // private closeChildContexts(notifyInstruments: boolean): void;
    closeExited(exitLocation: Node, code: number): void;
    // private closeHereOrCancelInCleanupThread(futures: Future<void>[], forceSeparateThread: boolean): void;
    closeImpl(notifyInstruments: boolean): boolean;
    // private collectDeadThreads(): Pair<Thread, PolyglotThreadInfo>[];
    // private collectLanguageContextsToInitialize(threadInfo: PolyglotThreadInfo): BitSet;
    // private createCancelException(location: Node): PolyglotEngineImpl$CancelExecution;
    // private createContextArray(): PolyglotLanguageContext[];
    // private createExitException(location: Node): PolyglotContextImpl$ExitException;
    // private createThreadInfo(current: Thread, polyglotThreadTask: PolyglotThreadTask): PolyglotThreadInfo;
    decrementInitializedLanguagesCount(): void;
    // private disposeContext(): PolyglotLanguageContext[];
    enterThreadChanged(enterReverted: boolean, pollSafepoint: boolean, mustSucceed: boolean, polyglotThreadFirstEnter: PolyglotThreadTask, leaveAndEnter: boolean): Object[];
    eval(languageId: string, source: Object): Object;
    // private exitContextNotification(exitMode: TruffleLanguage$ExitMode, code: number): void;
    explicitEnter(): void;
    explicitLeave(): void;
    // private failValueSharing(): RuntimeException;
    // private finalizeAndDisposeThreads(deadThreads: Pair<Thread, PolyglotThreadInfo>[]): void;
    // private finalizeContext(notifyInstruments: boolean, mustSucceed: boolean): void;
    findLanguageContext(languageClazz: Class<TruffleLanguage<Object>>): PolyglotLanguageContext;
    finishCleanup(): void;
    // private finishClose(cancelOrExitOperation: boolean, notifyInstruments: boolean): boolean;
    // private finishInterruptForChildContexts(): void;
    // private finishThreadDispose(current: Thread, info: PolyglotThreadInfo, ex: Throwable): void;
    freeSharing(): void;
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    // private getAllLoggers(): Object[];
    getBindings(languageId: string): Object;
    getCachedThread(): PolyglotThreadInfo;
    // private getCancellingOrExitingFutures(futures: Future<void>[]): Future<void>[];
    getContext(language: PolyglotLanguage): PolyglotLanguageContext;
    getContextAPI(): Context;
    getContextAPIOrNull(): Context;
    getContextAPIReference(): Reference<Context>;
    // private getContextHeapRoots(): Object[];
    getContextImpl(language: PolyglotLanguage): Object;
    getContextInitialized(language: PolyglotLanguage, accessingLanguage: PolyglotLanguage): PolyglotLanguageContext;
    getCreatorTruffleContext(): TruffleContext;
    getCurrentThreadInfo(): PolyglotThreadInfo;
    getEngine(): PolyglotEngineImpl;
    getHostContext(): PolyglotLanguageContext;
    getHostContextImpl(): Object;
    getImpl(): PolyglotImpl;
    getInitializedLanguagesCount(): number;
    getInstrumentContextOptions(instrument: PolyglotInstrument): OptionValues;
    getLanguageContext(languageClass: Class<TruffleLanguage<Object>>): PolyglotLanguageContext;
    // private getLanguageContextBoundary(languageClass: Class<TruffleLanguage<Object>>): PolyglotLanguageContext;
    // private getLanguageContextImpl(languageClass: Class<TruffleLanguage<Object>>): PolyglotLanguageContext;
    getLocal(l: PolyglotLocals$LocalLocation): Object;
    getOrCreateContextLoggers(): Object;
    getPolyglotBindings(): Object;
    getPolyglotBindingsObject(): Object;
    getPolyglotGuestBindings(): JavaMap<string, Object>;
    getSeenThreads(): JavaMap<Thread, PolyglotThreadInfo>;
    getThreadInfo(thread: Thread): PolyglotThreadInfo;
    getThreadLocal(l: PolyglotLocals$LocalLocation, t: Thread): Object;
    // private getThreadLocals(thread: Thread): Object[];
    getUnclosedChildContexts(): PolyglotContextImpl[];
    hasActiveOtherThread(includePolyglotThreads: boolean, includeLeaveAndEnterThreads: boolean): boolean;
    hasAliveOtherPolyglotThread(): boolean;
    incrementInitializedLanguagesCount(): void;
    // private initPolyglotBindings(): void;
    initializeContextLocals(): void;
    initializeHostContext(context: PolyglotLanguageContext, newConfig: PolyglotContextConfig): void;
    initializeInnerContextLanguage(languageId: string): void;
    initializeInstrumentContextLocals(locals: Object[]): void;
    initializeInstrumentContextThreadLocals(): void;
    // private initializeLanguage(language: PolyglotLanguage): boolean;
    initializeLanguage(languageId: string): boolean;
    initializeNewThread(threadInfo: PolyglotThreadInfo, contextsToInitialize: BitSet, mustSucceed: boolean): void;
    initializeThreadLocals(threadInfo: PolyglotThreadInfo): void;
    initiateCancelOrExit(exit: boolean, code: number, resourceLimit: boolean, message: string): void;
    interrupt(timeout: Duration): boolean;
    // private interruptChildContexts(): Future<void>[];
    invokeContextLocalsFactory(locals: Object[], locations: PolyglotLocals$LocalLocation[]): void;
    // private invokeContextThreadFactory(threadLocals: Object[], locations: PolyglotLocals$LocalLocation[], thread: Thread): void;
    invokeContextThreadLocalFactory(locations: PolyglotLocals$LocalLocation[]): void;
    invokeLocalsFactories(contextLocalLocations: PolyglotLocals$LocalLocation[], contextThreadLocalLocations: PolyglotLocals$LocalLocation[]): void;
    isActive(): boolean;
    isActive(thread: Thread): boolean;
    // private isActiveNotCancelled(): boolean;
    isActiveNotCancelled(includePolyglotThreads: boolean): boolean;
    // private isAdditionalTransitionConditionSatisfied(fromState: PolyglotContextImpl$State, toState: PolyglotContextImpl$State): boolean;
    isSingleThreaded(): boolean;
    // private isTransitionAllowed(fromState: PolyglotContextImpl$State, toState: PolyglotContextImpl$State): boolean;
    leaveAndEnter<R extends unknown, T extends unknown>(interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T, mustSucceed: boolean): R;
    leaveThreadChanged(prev: Object[], entered: boolean, finalizeAndDispose: boolean): void;
    // private logCloseOnCollectedError(exception: Throwable): void;
    // private lookupLanguageContext(languageId: string): PolyglotLanguageContext;
    // private maybeInitializeHostLanguage(contextsArray: PolyglotLanguageContext[]): void;
    maybeSendInterrupt(): void;
    migrateHostWrapper(wrapper: PolyglotWrapper): Object;
    migrateValue(value: Object, valueContext: PolyglotContextImpl): Object;
    notifyContextCreated(): void;
    notifyLanguageInitializationFailure(): void;
    notifyLanguageInitializationFailureCleared(): void;
    // private notifyThreadClosed(info: PolyglotThreadInfo): void;
    // private notifyThreadDisposing(threadInfo: PolyglotThreadInfo, previousEx: Throwable): Throwable;
    // private notifyThreadFinalizing(threadInfo: PolyglotThreadInfo, previousEx: Throwable, mustSucceed: boolean): Throwable;
    onContextCollected(): void;
    parse(languageId: string, source: Object): Object;
    patch(newConfig: PolyglotContextConfig): boolean;
    pause(): Future<void>;
    // private registerCleanupTask(cleanupTask: () => void): void;
    registerOnDispose(closeable: Closeable): void;
    removeSystemThread(thread: SystemThread$LanguageSystemThread): void;
    replayInstrumentationEvents(): void;
    requirePublicLanguage(languageId: string): PolyglotLanguage;
    resetLimits(): void;
    resizeContextLocals(locations: PolyglotEngineImpl$StableLocalLocations): void;
    resizeContextThreadLocals(locations: PolyglotEngineImpl$StableLocalLocations): void;
    resizeLocals(locations: PolyglotEngineImpl$StableLocalLocations): void;
    resizeThreadLocals(locations: PolyglotEngineImpl$StableLocalLocations): void;
    // private restoreFromClosingState(cancelOperation: boolean): void;
    resume(pauseFuture: Future<void>): void;
    runOnCancelled(): void;
    runOnClosed(): void;
    runOnExited(code: number): void;
    safepoint(): void;
    setCachedThreadInfo(info: PolyglotThreadInfo): void;
    // private setCancelling(resourceLimit: boolean, message: string): Future<void>[];
    // private setClosedState(): void;
    // private setClosingState(): void;
    setContextAPIReference(contextAPI: Reference<Context>): void;
    setCreatorTruffleContextReference(reference: Reference<TruffleContext>): void;
    // private setExiting(triggeringParent: PolyglotContextImpl, code: number, message: string, skipPendingExit: boolean): Future<void>[];
    // private setFinalizingState(): void;
    // private setInterrupting(): Future<void>[];
    // private setPendingExit(code: number): boolean;
    // private setState(targetState: PolyglotContextImpl$State): void;
    // private shouldCacheThreadInfo(): boolean;
    shouldThrowException(mustSucceed: boolean, t: Throwable, operationDescription: string): boolean;
    // private submitCancellationThreadLocalAction(futures: Future<void>[]): void;
    toString(): string;
    // private transitionToMultiThreaded(mustSucceed: boolean): void;
    // private unsetInterrupting(): void;
    // private validateInterruptPrecondition(operationSource: PolyglotContextImpl): void;
    waitForAllThreads(startMillis: number, timeoutMillis: number): boolean;
    waitUntilFalse(condition: () => boolean): void;
    waitUntilFalse(condition: () => boolean, startMillis: number, timeoutMillis: number): boolean;
    waitUntilFalseWithTimeout(condition: () => boolean, startMillis: number, timeoutMillis: number): boolean;
    // private waitUntilInvalid(): void;
}