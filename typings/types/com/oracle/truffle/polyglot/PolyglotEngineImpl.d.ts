import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { InstrumentInfo } from '../../../../com/oracle/truffle/api/InstrumentInfo.d.ts'
import type { TruffleFile$FileTypeDetector } from '../../../../com/oracle/truffle/api/TruffleFile$FileTypeDetector.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { SpecializationStatistics } from '../../../../com/oracle/truffle/api/dsl/SpecializationStatistics.d.ts'
import type { DispatchOutputStream } from '../../../../com/oracle/truffle/api/impl/DispatchOutputStream.d.ts'
import type { ContextsListener } from '../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { ThreadsListener } from '../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InternalResourceRoots } from '../../../../com/oracle/truffle/polyglot/InternalResourceRoots.d.ts'
import type { LanguageCache } from '../../../../com/oracle/truffle/polyglot/LanguageCache.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotContextConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl$FinalizationResult } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl$FinalizationResult.d.ts'
import type { PolyglotEngineImpl$LogConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl$LogConfig.d.ts'
import type { PolyglotEngineImpl$StableLocalLocations } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl$StableLocalLocations.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { PolyglotInstrument } from '../../../../com/oracle/truffle/polyglot/PolyglotInstrument.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLimits$EngineLimits } from '../../../../com/oracle/truffle/polyglot/PolyglotLimits$EngineLimits.d.ts'
import type { PolyglotLocals$AbstractContextLocal } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$AbstractContextLocal.d.ts'
import type { PolyglotLocals$AbstractContextThreadLocal } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$AbstractContextThreadLocal.d.ts'
import type { PolyglotLocals$LocalLocation } from '../../../../com/oracle/truffle/polyglot/PolyglotLocals$LocalLocation.d.ts'
import type { PolyglotLoggers$EngineLoggerProvider } from '../../../../com/oracle/truffle/polyglot/PolyglotLoggers$EngineLoggerProvider.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { SourceCacheStatisticsListener } from '../../../../com/oracle/truffle/polyglot/SourceCacheStatisticsListener.d.ts'
import type { SystemThread$InstrumentSystemThread } from '../../../../com/oracle/truffle/polyglot/SystemThread$InstrumentSystemThread.d.ts'
import type { WeakAssumedValue } from '../../../../com/oracle/truffle/polyglot/WeakAssumedValue.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
import type { AbstractPolyglotImpl$AbstractHostLanguageService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostLanguageService.d.ts'
import type { AbstractPolyglotImpl$AbstractPolyglotHostService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractPolyglotHostService.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
import type { MessageTransport } from '../../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class PolyglotEngineImpl extends Object implements PolyglotImpl$VMObject {
    constructor(prototype: PolyglotEngineImpl)
    constructor(impl: PolyglotImpl, sandboxPolicy: SandboxPolicy, permittedLanguages: string[], out: DispatchOutputStream, err: DispatchOutputStream, in_: InputStream, engineOptions: OptionValuesImpl, logLevels: { [key: string]: Level }, engineLoggerSupplier: PolyglotLoggers$EngineLoggerProvider, options: { [key: string]: string }, allowExperimentalOptions: boolean, boundEngine: boolean, preInitialization: boolean, messageTransport: MessageTransport, logHandler: AbstractPolyglotImpl$LogHandler, hostImpl: TruffleLanguage<Object>, hostLanguageOnly: boolean, polyglotHostService: AbstractPolyglotImpl$AbstractPolyglotHostService)
    // private activeSystemThreads: SystemThread$InstrumentSystemThread[];
    // private allOptions: OptionDescriptor[];
    // private allSourceOptions: OptionDescriptor[];
    // private allowExperimentalOptions: boolean;
    // private apiAccess: AbstractPolyglotImpl$APIAccess;
    // private asynchronousStackDepth: number;
    // private boundEngine: boolean;
    // private classToLanguage: { [key: string]: PolyglotLanguage };
    // private closed: boolean;
    // private closingThread: Thread;
    // private contextLocalLocations: PolyglotEngineImpl$StableLocalLocations;
    // private contextThreadLocalLocations: PolyglotEngineImpl$StableLocalLocations;
    // private contexts: PolyglotContextImpl[];
    // private contextsReferenceQueue: ReferenceQueue<PolyglotContextImpl>;
    // private createdLocation: Exception;
    // private customHostClassLoader: Assumption;
    // private deadSourcesQueue: ReferenceQueue<Source>;
    // private engineId: number;
    // private engineLogger: TruffleLogger;
    // private engineLoggerSupplier: (param0: string) => TruffleLogger;
    // private engineLoggers: Object;
    // private engineOptionValues: OptionValuesImpl;
    // private err: DispatchOutputStream;
    // private fileTypeDetectorsSupplier: () => { [key: string]: TruffleFile$FileTypeDetector[] };
    // private host: AbstractPolyglotImpl$AbstractHostLanguageService;
    // private hostLanguage: PolyglotLanguage;
    // private hostLanguageOnly: boolean;
    // private idToInstrument: { [key: string]: PolyglotInstrument };
    // private idToInternalInstrumentInfo: { [key: string]: InstrumentInfo };
    // private idToInternalLanguageInfo: { [key: string]: LanguageInfo };
    // private idToLanguage: { [key: string]: PolyglotLanguage };
    // private idToPublicInstrument: { [key: string]: PolyglotInstrument };
    // private idToPublicLanguage: { [key: string]: PolyglotLanguage };
    readonly impl: PolyglotImpl;
    // private in: InputStream;
    // private inEnginePreInitialization: boolean;
    // private instrumentationHandler: Object;
    // private internalResourceRoots: InternalResourceRoots;
    // private languageCount: number;
    // private languages: PolyglotLanguage[];
    // private limits: PolyglotLimits$EngineLimits;
    // private lock: Object;
    // private logHandler: AbstractPolyglotImpl$LogHandler;
    // private logLevels: { [key: string]: Level };
    // private messageTransport: MessageTransport;
    // private noInnerContexts: Assumption;
    // private out: DispatchOutputStream;
    // private permittedLanguages: string[];
    // private polyglotHostService: AbstractPolyglotImpl$AbstractPolyglotHostService;
    // private preInitializedContext: AtomicReference<PolyglotContextImpl>;
    // private probeAssertionsEnabled: boolean;
    // private runtimeData: Object;
    // private runtimeInitialized: boolean;
    // private sandboxPolicy: SandboxPolicy;
    // private sharedLayers: PolyglotSharingLayer[];
    // private singleContextValue: WeakAssumedValue<PolyglotContextImpl>;
    // private singleThreadPerContext: Assumption;
    // private sourceCacheStatisticsListener: SourceCacheStatisticsListener;
    // private specializationStatistics: SpecializationStatistics;
    // private storeEngine: boolean;
    // private warnedVirtualThreadSupport: AtomicBoolean;
    // private weakAPI: Reference<Engine>;
    addContext(context: PolyglotContextImpl): void;
    addContextLocals(newLocals: PolyglotLocals$AbstractContextLocal<Object>[]): PolyglotLocals$LocalLocation[];
    addContextThreadLocals(newLocals: PolyglotLocals$AbstractContextThreadLocal<Object>[]): PolyglotLocals$LocalLocation[];
    addSystemThread(thread: SystemThread$InstrumentSystemThread): void;
    checkState(): void;
    claimSharingLayer(layer: PolyglotSharingLayer, context: PolyglotContextImpl, requestingLanguage: PolyglotLanguage): void;
    collectAliveContexts(): PolyglotContextImpl[];
    createContext(engineAPI: Engine, contextSandboxPolicy: SandboxPolicy, configOut: OutputStream, configErr: OutputStream, configIn: InputStream, allowHostLookup: boolean, hostAccess: Object, polyglotAccess: Object, allowNativeAccess: boolean, allowCreateThread: boolean, threadAccessDeniedHandler: (param0: string) => void, allowHostClassLoading: boolean, allowContextOptions: boolean, allowExperimentalOptions: boolean, classFilter: (param0: string) => boolean, options: { [key: string]: string }, arguments: { [key: string]: string[] }, onlyLanguagesArray: string[], ioAccess: Object, handler: Object, allowCreateProcess: boolean, processHandler: ProcessHandler, environmentAccess: Object, environment: { [key: string]: string }, zone: ZoneId, limitsImpl: Object, currentWorkingDirectory: string, tmpDir: string, hostClassLoader: ClassLoader, allowValueSharing: boolean, useSystemExit: boolean, registerInActiveContexts: boolean): Context;
    // private createInstruments(instrumentsOptions: Map<PolyglotInstrument, { [key: string]: string }>, deprecatedDescriptors: OptionDescriptor[]): void;
    // private createLanguage(cache: LanguageCache, index: number, initError: RuntimeException): PolyglotLanguage;
    // private createLanguageStaticIndex(): PolyglotLanguage[];
    disposeContext(context: PolyglotContextImpl): void;
    ensureClosed(force: boolean, initiatedByContext: boolean): void;
    ensureRuntimeInitialized(context: PolyglotContextImpl): void;
    enter(context: PolyglotContextImpl): Object[];
    // private enterBoundary(context: PolyglotContextImpl): Object[];
    enterCached(context: PolyglotContextImpl, pollSafepoint: boolean): Object[];
    enterIfNeeded(context: PolyglotContextImpl, pollSafepoint: boolean): Object;
    finalizeStore(): PolyglotEngineImpl$FinalizationResult;
    findLanguage(info: LanguageInfo): PolyglotLanguage;
    findLanguage(accessingLanguage: PolyglotLanguageContext, languageId: string, mimeType: string, failIfNotFound: boolean, allowInternalAndDependent: boolean): PolyglotLanguage;
    freeSharingLayer(layer: PolyglotSharingLayer, context: PolyglotContextImpl): void;
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    getAllOptions(): OptionDescriptor[];
    getAllSourceOptions(): OptionDescriptor[];
    getAsynchronousStackDepth(): number;
    getCachedSources(): Object[];
    getCallTargets(): CallTarget[];
    getDeadSourcesQueue(): ReferenceQueue<Source>;
    getEngine(): PolyglotEngineImpl;
    getEngineAPI(): Engine;
    getEngineAPIOrNull(): Engine;
    getEngineLogger(): TruffleLogger;
    getEngineLoggers(): Object;
    getEngineOptionValues(): OptionValuesImpl;
    getFileTypeDetectorsSupplier(): () => { [key: string]: TruffleFile$FileTypeDetector[] };
    getHostLanguageSPI(): TruffleLanguage<Object>;
    getImpl(): PolyglotImpl;
    getInstruments(): { [key: string]: PolyglotInstrument };
    getLanguage<T extends TruffleLanguage<Object>>(languageClass: Class<T>, fail: boolean): PolyglotLanguage;
    getOptions(): OptionDescriptor[];
    getOrCreateEngineLoggers(): Object;
    getPreInitializedContext(): PolyglotContextImpl;
    getPublicLanguages(): { [key: string]: PolyglotLanguage };
    getVersion(): string;
    // private initializeEngineLogger(supplier: (param0: string) => TruffleLogger, levels: { [key: string]: Level }): TruffleLogger;
    // private initializeInstruments(infos: { [key: string]: InstrumentInfo }): { [key: string]: PolyglotInstrument };
    // private initializeLanguages(infos: { [key: string]: LanguageInfo }): { [key: string]: PolyglotLanguage };
    initializeMultiContext(): void;
    isSharingEnabled(config: PolyglotContextConfig): boolean;
    isStoreEngine(): boolean;
    languageHomes(): { [key: string]: Path[] };
    leave(prev: Object[], context: PolyglotContextImpl): void;
    // private leaveBoundary(prev: Object[], context: PolyglotContextImpl): void;
    leaveCached(prev: Object[], context: PolyglotContextImpl): void;
    leaveIfNeeded(prev: Object, context: PolyglotContextImpl): void;
    // private loadPreinitializedContext(config: PolyglotContextConfig, engineAPI: Engine, registerInActiveContexts: boolean): Context;
    // private logCloseOnCollectedError(exception: Throwable): void;
    logMissingClose(): void;
    needsEnter(context: PolyglotContextImpl): boolean;
    notifyCreated(): void;
    onEngineCollected(): void;
    onVMShutdown(): void;
    // private parseAllOptions(targetOptions: OptionValuesImpl, unparsedOptions: { [key: string]: string }, deprecatedDescriptors: OptionDescriptor[]): void;
    // private parseOptions(options: { [key: string]: string }, languagesOptions: Map<PolyglotLanguage, { [key: string]: string }>, instrumentsOptions: Map<PolyglotInstrument, { [key: string]: string }>): void;
    patch(newSandboxPolicy: SandboxPolicy, newOut: DispatchOutputStream, newErr: DispatchOutputStream, newIn: InputStream, engineOptions: OptionValuesImpl, newLogConfig: PolyglotEngineImpl$LogConfig, logSupplier: PolyglotLoggers$EngineLoggerProvider, newOptions: { [key: string]: string }, newAllowExperimentalOptions: boolean, newBoundEngine: boolean, newLogHandler: AbstractPolyglotImpl$LogHandler, newHostLanguage: TruffleLanguage<Object>, newPolyglotHostService: AbstractPolyglotImpl$AbstractPolyglotHostService): boolean;
    preInitialize(): void;
    printDeprecatedOptionsWarning(descriptors: OptionDescriptor[]): void;
    removeContext(context: PolyglotContextImpl): void;
    removeSystemThread(thread: SystemThread$InstrumentSystemThread): void;
    reportAllContextThreads(listener: ThreadsListener): void;
    reportAllLanguageContexts(listener: ContextsListener): void;
    requireLanguage(id: string, allowInternal: boolean): PolyglotLanguage;
    requirePublicInstrument(id: string): PolyglotInstrument;
    restoreStore(result: PolyglotEngineImpl$FinalizationResult): void;
    setAsynchronousStackDepth(polyglotInstrument: PolyglotInstrument, depth: number): void;
    setEngineAPIReference(engineAPI: Reference<Engine>): void;
    storeCache(targetPath: Path[], cancelledWord: number): boolean;
    // private throwNotInstalled(id: string, allLanguages: string[]): RuntimeException;
    // private validateSandbox(): void;
    validateVirtualThreadCreation(): void;
    // private visitLanguage(initErrors: { [key: string]: RuntimeException }, cachedLanguages: { [key: string]: LanguageCache }, serializedLanguages: LanguageCache[], language: LanguageCache): void;
    // private visitLanguageImpl(visitedIds: string[], initErrors: { [key: string]: RuntimeException }, cachedLanguages: { [key: string]: LanguageCache }, serializedLanguages: LanguageCache[], language: LanguageCache): void;
}