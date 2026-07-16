import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { ContextLocal } from '../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { ContextThreadLocal } from '../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { InstrumentInfo } from '../../../../com/oracle/truffle/api/InstrumentInfo.d.ts'
import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$ContextReference } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextReference.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$LanguageReference } from '../../../../com/oracle/truffle/api/TruffleLanguage$LanguageReference.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleSafepoint$Interrupter } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interrupter.d.ts'
import type { TruffleSafepoint$InterruptibleFunction } from '../../../../com/oracle/truffle/api/TruffleSafepoint$InterruptibleFunction.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Accessor$EngineSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$EngineSupport.d.ts'
import type { Accessor$ModulesAccessor } from '../../../../com/oracle/truffle/api/impl/Accessor$ModulesAccessor.d.ts'
import type { DispatchOutputStream } from '../../../../com/oracle/truffle/api/impl/DispatchOutputStream.d.ts'
import type { EncapsulatingNodeReference } from '../../../../com/oracle/truffle/api/nodes/EncapsulatingNodeReference.d.ts'
import type { ExecutableNode } from '../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { AssertionError } from '../../../../java/lang/AssertionError.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadDeath } from '../../../../java/lang/ThreadDeath.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractHostLanguageService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostLanguageService.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { MessageEndpoint } from '../../../../org/graalvm/polyglot/io/MessageEndpoint.d.ts'
import type { ProcessHandler$Redirect } from '../../../../org/graalvm/polyglot/io/ProcessHandler$Redirect.d.ts'
export class EngineAccessor$EngineImpl extends Accessor$EngineSupport {
    private constructor()
    addToHostClassPath(polyglotLanguageContext: Object, entry: TruffleFile): void;
    areStaticObjectSafetyChecksRelaxed(polyglotLanguageInstance: Object): boolean;
    asBoxedGuestValue(guestObject: Object, polyglotLanguageContext: Object): Object;
    asHostException(languageContext: Object, exception: Throwable): Throwable;
    asHostObject(languageContext: Object, obj: Object): Object;
    asHostSymbol(polyglotLanguageContext: Object, symbolClass: Class<Object>): Object;
    asValue(polyglotContextImpl: Object, guestValue: Object): Object;
    assertReturnParityEnter(probe: Node, polyglotEngine: Object): void;
    assertReturnParityLeave(probe: Node, polyglotEngine: Object): void;
    calculateContextHeapSize(polyglotContext: Object, stopAtBytes: number, cancelled: AtomicBoolean): number;
    clearExplicitContextStack(polyglotContext: Object): void;
    closeContext(impl: Object, force: boolean, closeLocation: Node, resourceExhaused: boolean, resourceExhausedReason: string): void;
    closeContext(impl: Object, force: boolean, resourceExhaused: boolean, resourceExhausedReason: string): void;
    closeEngine(polyglotEngine: Object, force: boolean): void;
    createCancelExecution(sourceSection: SourceSection, message: string, resourceLimit: boolean): ThreadDeath;
    createContextReference<C extends unknown, T extends TruffleLanguage<C>>(languageClass: Class<T>): TruffleLanguage$ContextReference<C>;
    createDefaultLoggerCache(): Object;
    createExitException(sourceSection: SourceSection, message: string, exitCode: number): ThreadDeath;
    createHostAdapterClass(languageContext: Object, types: Object[], classOverrides: Object): Object;
    createInstrumentContextLocal<T extends unknown>(factory: Object): ContextLocal<T>;
    createInstrumentContextThreadLocal<T extends unknown>(factory: Object): ContextThreadLocal<T>;
    createInstrumentSystemThread(polyglotInstrument: Object, runnable: () => void, threadGroup: ThreadGroup): Thread;
    createInternalContext(sourcePolyglotLanguageContext: Object, out: OutputStream, err: OutputStream, in_: InputStream, timeZone: ZoneId, onlyLanguagesArray: string[], config: { [key: string]: Object }, options: { [key: string]: string }, arguments: { [key: string]: string[] }, sharingEnabled: boolean, initializeCreatorContext: boolean, onCancelledRunnable: () => void, onExitedRunnable: (param0: number) => void, onClosedRunnable: () => void, inheritAccess: boolean, allowCreateThreads: boolean, threadAccessDeniedHandler: (param0: string) => void, allowNativeAccess: boolean, allowIO: boolean, allowHostLookup: boolean, allowHostClassLoading: boolean, allowCreateProcess: boolean, allowPolyglotAccess: boolean, allowEnvironmentAccess: boolean, customEnvironment: { [key: string]: string }, allowInnerContextOptions: boolean): TruffleContext;
    createInterruptExecution(sourceSection: SourceSection): Throwable;
    createLanguageContextLocal<T extends unknown>(factory: Object): ContextLocal<T>;
    createLanguageContextThreadLocal<T extends unknown>(factory: Object): ContextThreadLocal<T>;
    createLanguageReference<T extends TruffleLanguage<Object>>(targetLanguageClass: Class<T>): TruffleLanguage$LanguageReference<T>;
    createLanguageSystemThread(polyglotLanguageContext: Object, runnable: () => void, threadGroup: ThreadGroup): Thread;
    createLogRecord(level: Level, loggerName: string, message: string, className: string, methodName: string, parameters: Object[], thrown: Throwable, formatKind: string): LogRecord;
    createLogRecord(loggerCache: Object, level: Level, loggerName: string, message: string, className: string, methodName: string, parameters: Object[], thrown: Throwable): LogRecord;
    createPolyglotEngineException(cause: RuntimeException): RuntimeException;
    createPolyglotSourceSection(polyglotObject: Object, source: Object, sectionImpl: SourceSection): Object;
    createPolyglotThreadScope(): AutoCloseable;
    createSubProcess(polyglotLanguageContext: Object, cmd: string[], cwd: string, environment: { [key: string]: string }, redirectErrorStream: boolean, inputRedirect: ProcessHandler$Redirect, outputRedirect: ProcessHandler$Redirect, errorRedirect: ProcessHandler$Redirect): Process;
    createThread(polyglotLanguageContext: Object, runnable: () => void, innerContextImpl: Object, group: ThreadGroup, stackSize: number, beforeEnter: () => void, afterLeave: () => void, virtual: boolean): Thread;
    engineToInstrumentException(t: Throwable): RuntimeException;
    engineToLanguageException(t: Throwable): RuntimeException;
    ensureInstrumentCreated(polyglotContextImpl: Object, instrumentId: string): void;
    enterContextAsPolyglotThread(polyglotContext: Object, contextAPI: Context): Object[];
    enterIfNeeded(polyglotContext: Object): Object;
    enterInternalContext(location: Node, polyglotLanguageContext: Object): Object;
    enterLanguageFromRuntime(language: TruffleLanguage<Object>): Object;
    enterRootNodeVisit(root: RootNode): Object;
    evalInternalContext(location: Node, polyglotContext: Object, source: Source, allowInternal: boolean): Object;
    exitContext(impl: Object, exitLocation: Node, exitCode: number): void;
    exportSymbol(polyglotLanguageContext: Object, symbolName: string, value: Object): void;
    finalizeStore(polyglotEngine: Object): Object;
    findCallTargets(polyglotEngine: Object): CallTarget[];
    findMetaObjectForLanguage(polyglotLanguageContext: Object, value: Object): Object;
    getAsynchronousStackDepth(polyglotLanguageInstance: Object): number;
    getCancelExecutionSourceLocation(cancelExecution: Throwable): SourceSection;
    getContext(polyglotLanguageContext: Object): Object;
    getContextLogHandler(polyglotContextImpl: Object): AbstractPolyglotImpl$LogHandler;
    getContextLoggerCache(polyglotLanguageContext: Object): Object;
    getContextSandboxPolicy(polyglotLanguageContext: Object): SandboxPolicy;
    getCurrentContext<C extends unknown, T extends TruffleLanguage<C>>(languageClass: Class<T>): C;
    getCurrentCreatorTruffleContext(): TruffleContext;
    getCurrentFileSystemContext(): Object;
    getCurrentHostContext(): Object;
    getCurrentLanguage<T extends TruffleLanguage<Object>>(languageClass: Class<T>): T;
    getCurrentPolyglotEngine(): Object;
    getCurrentSharingLayer(): Object;
    getDefaultLanguageView(truffleLanguage: TruffleLanguage<Object>, value: Object): Object;
    getEncapsulatingNodeReference(invalidateOnNull: boolean): EncapsulatingNodeReference;
    getEngineData(polyglotEngine: Object): Object;
    getEngineErr(engine: Object): DispatchOutputStream;
    getEngineFileTypeDetectors(engineFileSystemObject: Object): { [key: string]: TruffleFile$FileTypeDetector[] };
    getEngineFromPolyglotObject(polyglotObject: Object): Object;
    getEngineId(polyglotEngine: Object): number;
    getEngineIn(engine: Object): InputStream;
    getEngineLock(polyglotEngine: Object): Object;
    getEngineLogHandler(polyglotEngineImpl: Object): AbstractPolyglotImpl$LogHandler;
    getEngineOptionValues(polyglotEngine: Object): OptionValues;
    getEngineOut(engine: Object): DispatchOutputStream;
    getEngineResource(polyglotEngine: Object, resourceId: string): Path;
    getEngineSandboxPolicy(polyglotInstrument: Object): SandboxPolicy;
    getEnvForInstrument(info: LanguageInfo): TruffleLanguage$Env;
    getEnvForInstrument(languageId: string, mimeType: string): TruffleLanguage$Env;
    getExitExceptionExitCode(exitException: Throwable): number;
    getExitExceptionSourceLocation(exitException: Throwable): SourceSection;
    getFileSystem(polyglotContext: Object): FileSystem;
    getFormatKind(logRecord: LogRecord): string;
    getGeneratorCache(polyglotLanguageInstance: Object): Map<Pair<Class<Object>, Class<Object>>, Object>;
    getGuestToHostCodeCache(polyglotContextImpl: Object): Object;
    getHostContext(polyglotContext: Object): Object;
    getHostLanguage(polyglotLanguageContext: Object): LanguageInfo;
    getHostNull(): Object;
    getHostService(polyglotEngineImpl: Object): AbstractPolyglotImpl$AbstractHostLanguageService;
    getInstrumentContextOptions(polyglotInstrument: Object, polyglotContext: Object): OptionValues;
    getInstrumentEngine(polyglotInstrument: Object): Object;
    getInstrumentIds(): string[];
    getInstrumentSourceOptions(polyglotInstrument: Object, source: Source): OptionValues;
    getInstrumentationHandler(rootNode: RootNode): Object;
    getInstrumentationHandler(polyglotObject: Object): Object;
    getInstruments(polyglotObject: Object): { [key: string]: InstrumentInfo };
    getInternalFileSystemContext(polyglotLanguageContext: Object): Object;
    getInternalIds(): string[];
    getInternalLanguages(polyglotObject: Object): { [key: string]: LanguageInfo };
    getInternalResource(owner: Object, resourceType: Class<InternalResource>): TruffleFile;
    getInternalResource(owner: Object, resourceId: string): TruffleFile;
    getLanguageHome(languageInfo: LanguageInfo): string;
    getLanguageIds(): string[];
    getLanguageInfo(vmObject: Object, languageClass: Class<TruffleLanguage<Object>>): LanguageInfo;
    getLanguageView(viewLanguage: LanguageInfo, value: Object): Object;
    getLogLevels(loggerCache: Object): { [key: string]: Level };
    getLogger(polyglotInstrument: Object, loggerName: string): TruffleLogger;
    getLoggerOwner(loggerCache: Object): Object;
    getModulesAccessor(): Accessor$ModulesAccessor;
    getNeedsAllEncodings(): boolean;
    getOrCreateRuntimeData<T extends unknown>(layer: Object): T;
    getOuterContext(polyglotContext: Object): Object;
    getPolyglotBindingsForLanguage(polyglotLanguageContext: Object): Object;
    getPolyglotBindingsObject(): Object;
    getPolyglotEngine(polyglotLanguageInstance: Object): Object;
    getPolyglotEngineExceptionCause(polyglotEngineException: Throwable): RuntimeException;
    getPolyglotExceptionCause(polyglotExceptionImpl: Object): Throwable;
    getPolyglotSharingLayer(polyglotLanguageInstance: Object): Object;
    getProcessEnvironment(polyglotLanguageContext: Object): { [key: string]: string };
    getProvidedTags(language: LanguageInfo): Class<Object>[];
    getPublicFileSystemContext(polyglotLanguageContext: Object): Object;
    getPublicLanguages(polyglotObject: Object): { [key: string]: LanguageInfo };
    getReinitializedPath(truffleFile: TruffleFile): string;
    getReinitializedURI(truffleFile: TruffleFile): URI;
    getRelativePathInResourceRoot(truffleFile: TruffleFile): string;
    getResourceIds(componentId: string): string[];
    getScope(polyglotLanguageContext: Object, requiredLanguage: LanguageInfo, internal: boolean): Object;
    getStaticObjectClassLoaders(polyglotLanguageInstance: Object, referenceClass: Class<Object>): Object;
    getStaticObjectStorageStrategy(polyglotLanguageInstance: Object): string;
    getTimeZone(polyglotLanguageContext: Object): ZoneId;
    getTruffleContext(polyglotLanguageContext: Object): TruffleContext;
    getTruffleFile(truffleContext: TruffleContext, uri: URI): TruffleFile;
    getTruffleFile(truffleContext: TruffleContext, path: string): TruffleFile;
    getUncachedLocation(polyglotContext: Object): Node;
    getUnparsedOptionValue(optionValues: OptionValues, optionKey: OptionKey<Object>): string;
    getValidMimeTypes(engineObject: Object, language: string): string[];
    hasCurrentContext(): boolean;
    hasDefaultProcessHandler(polyglotLanguageContext: Object): boolean;
    hasNoAccess(fs: FileSystem): boolean;
    importSymbol(polyglotLanguageContext: Object, env: TruffleLanguage$Env, symbolName: string): Object;
    inContextPreInitialization(polyglotObject: Object): boolean;
    initializeInnerContext(location: Node, polyglotContext: Object, languageId: string, allowInternal: boolean): boolean;
    initializeInstrumentContextLocal(locals: ContextLocal<Object>[], polyglotInstrument: Object): void;
    initializeInstrumentContextThreadLocal(local: ContextThreadLocal<Object>[], polyglotInstrument: Object): void;
    initializeLanguage(polyglotLanguageContext: Object, targetLanguage: LanguageInfo): boolean;
    initializeLanguageContextLocal(locals: ContextLocal<Object>[], polyglotLanguageInstance: Object): void;
    initializeLanguageContextThreadLocal(local: ContextThreadLocal<Object>[], polyglotLanguageInstance: Object): void;
    initiateCancelOrExit(polyglotContext: Object, exit: boolean, exitCode: number, resourceLimit: boolean, message: string): void;
    installGuestToHostCodeCache(polyglotContextImpl: Object, cache: Object): Object;
    invalidSharingError(node: Node, previousSharingLayer: Object, newSharingLayer: Object): AssertionError;
    isCancelExecution(throwable: Throwable): boolean;
    isCharacterBasedSource(fsEngineObject: Object, language: string, mimeType: string): boolean;
    isContextActive(polyglotContext: Object): boolean;
    isContextBoundLogger(loggerCache: Object): boolean;
    isContextCancelling(polyglotContext: Object): boolean;
    isContextClosed(polyglotContext: Object): boolean;
    isContextEntered(impl: Object): boolean;
    isContextExiting(polyglotContext: Object): boolean;
    isCreateProcessAllowed(polylgotLanguageContext: Object): boolean;
    isCreateProcessSupported(): boolean;
    isCreateThreadAllowed(polyglotLanguageContext: Object): boolean;
    isCurrentNativeAccessAllowed(node: Node): boolean;
    isCurrentThreadPolyglotThread(): boolean;
    isDisposed(polyglotLanguageContext: Object): boolean;
    isEvalRoot(target: RootNode): boolean;
    isExitException(throwable: Throwable): boolean;
    isHostAccessAllowed(polyglotLanguageContext: Object, env: TruffleLanguage$Env): boolean;
    isHostException(languageContext: Object, exception: Throwable): boolean;
    isHostFunction(languageContext: Object, obj: Object): boolean;
    isHostObject(languageContext: Object, obj: Object): boolean;
    isHostSymbol(languageContext: Object, obj: Object): boolean;
    isHostToGuestRootNode(root: RootNode): boolean;
    isIOAllowed(polyglotLanguageContext: Object, env: TruffleLanguage$Env): boolean;
    isIOSupported(): boolean;
    isInnerContextOptionsAllowed(polyglotLanguageContext: Object, env: TruffleLanguage$Env): boolean;
    isInstrumentExceptionsAreThrown(polyglotInstrument: Object): boolean;
    isInstrumentReadyForContextEvents(polyglotInstrument: Object): boolean;
    isInternal(file: TruffleFile): boolean;
    isInternal(engineObject: Object, fs: FileSystem): boolean;
    isInterruptExecution(throwable: Throwable): boolean;
    isLogRecordCallerClassSet(logRecord: LogRecord): boolean;
    isLogRecordCallerMethodSet(logRecord: LogRecord): boolean;
    isMimeTypeSupported(polyglotLanguageContext: Object, mimeType: string): boolean;
    isMultiThreaded(guestObject: Object): boolean;
    isNativeAccessAllowed(polyglotLanguageContext: Object, env: TruffleLanguage$Env): boolean;
    isPolyglotBindingsAccessAllowed(polyglotLanguageContext: Object): boolean;
    isPolyglotEngineException(throwable: Throwable): boolean;
    isPolyglotEvalAllowed(polyglotLanguageContext: Object, language: LanguageInfo): boolean;
    isPolyglotSecret(polyglotObject: Object): boolean;
    isResourceLimitCancelExecution(cancelExecution: Throwable): boolean;
    isSocketIOAllowed(engineFileSystemContext: Object): boolean;
    leaveAndEnter<R extends unknown, T extends unknown>(polyglotContext: Object, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T): R;
    leaveContextAsPolyglotThread(polyglotContext: Object, prev: Object[]): void;
    leaveIfNeeded(polyglotContext: Object, prev: Object): void;
    leaveInternalContext(node: Node, impl: Object, prev: Object): void;
    leaveLanguageFromRuntime(language: TruffleLanguage<Object>, prev: Object): void;
    leaveRootNodeVisit(root: RootNode, prev: Object): void;
    loadServices<T extends unknown>(type: Class<T>): T[];
    logFallback(s: string): void;
    lookup<T extends unknown>(info: InstrumentInfo, serviceClass: Class<T>): T;
    lookup<S extends unknown>(info: LanguageInfo, serviceClass: Class<S>): S;
    lookupHostSymbol(polyglotLanguageContext: Object, env: TruffleLanguage$Env, symbolName: string): Object;
    lookupService<S extends unknown>(polyglotLanguageContext: Object, language: LanguageInfo, accessingLanguage: LanguageInfo, type: Class<S>): S;
    mergeHostGuestFrames<T extends unknown, G extends unknown>(polyglotEngine: Object, hostStack: StackTraceElement[], guestFrames: Iterator<G>, inHostLanguage: boolean, includeHostFrames: boolean, hostFrameConvertor: (param0: StackTraceElement) => T, guestFrameConvertor: (param0: G) => T): Iterator<T>;
    onSourceCreated(source: Source): void;
    parseForLanguage(sourceLanguageContext: Object, source: Source, argumentNames: string[], allowInternal: boolean): CallTarget;
    parseInlineForLanguage(languageContext: Object, source: Source, node: Node, frame: MaterializedFrame): ExecutableNode;
    parseLanguageSourceOptions(polyglotLanguageContext: Object, source: Source): OptionValues;
    pause(polyglotContext: Object): Future<void>;
    preinitializeContext(polyglotEngine: Object): void;
    publish(loggerCache: Object, logRecord: LogRecord): void;
    registerOnDispose(engineObject: Object, closeable: Closeable): void;
    reportAllContextThreads(polyglotEngine: Object, threadsListener: Object): void;
    reportAllLanguageContexts(polyglotEngine: Object, contextsListener: Object): void;
    requireLanguageWithAllEncodings(encoding: Object): boolean;
    restoreStore(polyglotEngine: Object, finalizationResult: Object): void;
    resume(polyglotContext: Object, pauseFuture: Future<void>): void;
    setAsynchronousStackDepth(polyglotInstrument: Object, depth: number): void;
    setIsolatePolyglot(instance: AbstractPolyglotImpl): void;
    setStaticObjectClassLoaders(polyglotLanguageInstance: Object, referenceClass: Class<Object>, value: Object): void;
    skipEngineValidation(rootNode: RootNode): boolean;
    startEngineServer(engineImpl: Object, uri: URI, server: MessageEndpoint): MessageEndpoint;
    submitThreadLocal(polyglotContext: Object, sourcePolyglotObject: Object, threads: Thread[], action: ThreadLocalAction, needsEnter: boolean): Future<void>;
    toGuestValue(node: Node, obj: Object, languageContext: Object): Object;
    wrapGuestException(polyglotObject: Object, e: Throwable): RuntimeException;
    wrapGuestException(languageId: string, e: Throwable): RuntimeException;
    wrapHostException(location: Node, languageContext: Object, exception: Throwable): RuntimeException;
}