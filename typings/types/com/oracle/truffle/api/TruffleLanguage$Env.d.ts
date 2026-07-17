import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { InstrumentInfo } from '../../../../com/oracle/truffle/api/InstrumentInfo.d.ts'
import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleContext$Builder } from '../../../../com/oracle/truffle/api/TruffleContext$Builder.d.ts'
import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleFile$FileSystemContext } from '../../../../com/oracle/truffle/api/TruffleFile$FileSystemContext.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$Env$TruffleFileFactory } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env$TruffleFileFactory.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleThreadBuilder } from '../../../../com/oracle/truffle/api/TruffleThreadBuilder.d.ts'
import type { TruffleProcessBuilder } from '../../../../com/oracle/truffle/api/io/TruffleProcessBuilder.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export class TruffleLanguage$Env extends Object {
    constructor(polyglotLanguageContext: Object, language: TruffleLanguage<Object>, out: OutputStream, err: OutputStream, in_: InputStream, config: JavaMap<string, Object>, options: OptionValues, applicationArguments: string[])
    readonly applicationArguments: string[];
    readonly config: JavaMap<string, Object>;
    context: Object;
    // private contextUnchangedAssumption: Assumption;
    // private err: OutputStream;
    // private in: InputStream;
    // private initialized: boolean;
    // private initializedUnchangedAssumption: Assumption;
    // private languageServicesCollector: Object[];
    readonly options: OptionValues;
    // private out: OutputStream;
    // private polyglotLanguageContext: Object;
    // private services: Object[];
    // private spi: TruffleLanguage<Object>;
    // private valid: boolean;
    addToHostClassPath(entry: TruffleFile): void;
    asBoxedGuestValue(guestObject: Object): Object;
    asGuestValue(hostObject: Object): Object;
    asHostException(exception: Throwable): Throwable;
    asHostObject(value: Object): Object;
    asHostSymbol(symbolClass: Class<Object>): Object;
    checkDisposed(): void;
    createHostAdapter(types: Object[]): Object;
    createHostAdapterClass(types: Class<Object>[]): Object;
    // private createHostAdapterClassImpl(types: Object[], classOverrides: Object): Object;
    // private createHostAdapterClassLegacyImpl(types: Class<Object>[], classOverrides: Object): Object;
    createHostAdapterClassWithStaticOverrides(types: Class<Object>[], classOverrides: Object): Object;
    createHostAdapterWithClassOverrides(types: Object[], classOverrides: Object): Object;
    createSystemThread(runnable: () => void): Thread;
    createSystemThread(runnable: () => void, threadGroup: ThreadGroup): Thread;
    createTempDirectory(dir: TruffleFile, prefix: string, ...attrs: FileAttribute<Object>[]): TruffleFile;
    createTempFile(dir: TruffleFile, prefix: string, suffix: string, ...attrs: FileAttribute<Object>[]): TruffleFile;
    createThread(runnable: () => void): Thread;
    createThread(runnable: () => void, context: TruffleContext): Thread;
    createThread(runnable: () => void, context: TruffleContext, group: ThreadGroup): Thread;
    createThread(runnable: () => void, context: TruffleContext, group: ThreadGroup, stackSize: number): Thread;
    dispose(): void;
    err(): OutputStream;
    exportSymbol(symbolName: string, value: Object): void;
    findMetaObject(value: Object): Object;
    getApplicationArguments(): string[];
    getConfig(): JavaMap<string, Object>;
    getContext(): TruffleContext;
    getCurrentWorkingDirectory(): TruffleFile;
    getEnvironment(): JavaMap<string, string>;
    getFileNameSeparator(): string;
    getHostLanguage(): LanguageInfo;
    getInstruments(): JavaMap<string, InstrumentInfo>;
    getInternalFileSystemContext(): TruffleFile$FileSystemContext;
    getInternalLanguages(): JavaMap<string, LanguageInfo>;
    getInternalResource(resource: Class<InternalResource>): TruffleFile;
    getInternalResource(resourceId: string): TruffleFile;
    getInternalTruffleFile(uri: URI): TruffleFile;
    getInternalTruffleFile(path: string): TruffleFile;
    getLanguage<E extends TruffleLanguage<Object>>(languageClass: Class<E>): E;
    getLanguageContext(): Object;
    getLanguageInfo(languageClass: Class<TruffleLanguage<Object>>): LanguageInfo;
    getLogger(forClass: Class<Object>): TruffleLogger;
    getLogger(loggerName: string): TruffleLogger;
    getOptions(): OptionValues;
    getPathSeparator(): string;
    getPolyglotBindings(): Object;
    getPolyglotLanguageContext(): Object;
    getPublicFileSystemContext(): TruffleFile$FileSystemContext;
    getPublicLanguages(): JavaMap<string, LanguageInfo>;
    getPublicTruffleFile(uri: URI): TruffleFile;
    getPublicTruffleFile(path: string): TruffleFile;
    getSandboxPolicy(): SandboxPolicy;
    getScopeInternal(language: LanguageInfo): Object;
    getScopePublic(language: LanguageInfo): Object;
    getSpi(): TruffleLanguage<Object>;
    getTimeZone(): ZoneId;
    getTruffleFileInternal(uri: URI, filter: (param0: TruffleFile) => boolean): TruffleFile;
    getTruffleFileInternal(path: string, filter: (param0: TruffleFile) => boolean): TruffleFile;
    // private getTruffleFileInternalImpl<P extends unknown>(path: P, isStdLibFile: (param0: TruffleFile) => boolean, truffleFileFactory: TruffleLanguage$Env$TruffleFileFactory<P>): TruffleFile;
    importSymbol(symbolName: string): Object;
    in(): InputStream;
    initializeLanguage(targetLanguage: LanguageInfo): boolean;
    isCreateProcessAllowed(): boolean;
    isCreateThreadAllowed(): boolean;
    isFileIOAllowed(): boolean;
    isHostException(exception: Throwable): boolean;
    isHostFunction(value: Object): boolean;
    isHostLookupAllowed(): boolean;
    isHostObject(value: Object): boolean;
    isHostSymbol(guestObject: Object): boolean;
    isIOAllowed(): boolean;
    isInitialized(): boolean;
    isInnerContextOptionsAllowed(): boolean;
    isMimeTypeSupported(mimeType: string): boolean;
    isNativeAccessAllowed(): boolean;
    isPolyglotBindingsAccessAllowed(): boolean;
    isPolyglotEvalAllowed(): boolean;
    isPolyglotEvalAllowed(targetLanguage: LanguageInfo): boolean;
    isPreInitialization(): boolean;
    isSocketIOAllowed(): boolean;
    isVisible(value: Object): boolean;
    lookup<S extends unknown>(instrument: InstrumentInfo, type: Class<S>): S;
    lookup<S extends unknown>(language: LanguageInfo, type: Class<S>): S;
    lookup<T extends unknown>(type: Class<T>): T;
    lookupHostSymbol(symbolName: string): Object;
    newContextBuilder(): TruffleContext$Builder;
    newInnerContextBuilder(...permittedLanguages: string[]): TruffleContext$Builder;
    newProcessBuilder(...command: string[]): TruffleProcessBuilder;
    newTruffleThreadBuilder(runnable: () => void): TruffleThreadBuilder;
    out(): OutputStream;
    parseInternal(source: Source, ...argumentNames: string[]): CallTarget;
    parsePublic(source: Source, ...argumentNames: string[]): CallTarget;
    postInit(): void;
    registerOnDispose(closeable: Closeable): void;
    registerService(service: Object): void;
    setCurrentWorkingDirectory(currentWorkingDirectory: TruffleFile): void;
    submitThreadLocal(threads: Thread[], action: ThreadLocalAction): Future<void>;
    submitThreadLocalInternal(threads: Thread[], action: ThreadLocalAction, needsEnter: boolean): Future<void>;
}