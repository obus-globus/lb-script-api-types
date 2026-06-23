import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { InstrumentInfo } from '../../../../com/oracle/truffle/api/InstrumentInfo.d.ts'
import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { InternalResource$Env } from '../../../../com/oracle/truffle/api/InternalResource$Env.d.ts'
import type { RootCallTarget } from '../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$ExitMode } from '../../../../com/oracle/truffle/api/TruffleLanguage$ExitMode.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { Frame } from '../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Accessor$LanguageSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$LanguageSupport.d.ts'
import type { ExecutableNode } from '../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class LanguageAccessor$LanguageImpl extends Accessor$LanguageSupport {
    constructor()
    addStackFrameInfo(callNode: Node, root: RootCallTarget, e: Throwable, frame: Frame): void;
    areOptionsCompatible(language: TruffleLanguage<Object>, firstContextOptions: OptionValues, newContextOptions: OptionValues): boolean;
    closeEngineLoggers(loggers: Object): void;
    configureLoggers(vmObject: Object, logLevels: { [key: string]: Level }, loggers: Object[]): void;
    createEngineLoggers(spi: Object): Object;
    createEnv(polyglotLanguageContext: Object, language: TruffleLanguage<Object>, stdOut: OutputStream, stdErr: OutputStream, stdIn: InputStream, config: { [key: string]: Object }, options: OptionValues, applicationArguments: string[]): TruffleLanguage$Env;
    createEnvContext(env: TruffleLanguage$Env, servicesCollector: Object[]): Object;
    createFileSystemContext(engineFileSystemContext: Object, fileSystem: FileSystem): Object;
    createInstrument(polyglotInstrument: Object, id: string, name: string, version: string): InstrumentInfo;
    createInternalResourceEnv(resource: InternalResource, contextPreinitializationCheck: () => boolean): InternalResource$Env;
    createOptionDescriptorsUnion(descriptors: OptionDescriptor[][]): OptionDescriptor[];
    createTruffleContext(impl: Object, parentContext: TruffleContext): TruffleContext;
    describeOptions(language: TruffleLanguage<Object>, requiredGroup: string): OptionDescriptor[];
    describeSourceOptions(language: TruffleLanguage<Object>, requiredGroup: string): OptionDescriptor[];
    detectEncoding(file: TruffleFile, mimeType: string): Charset;
    detectMimeType(file: TruffleFile, validMimeTypes: string[]): string;
    dispose(env: TruffleLanguage$Env): void;
    disposeThread(env: TruffleLanguage$Env, current: Thread): void;
    exitContext(env: TruffleLanguage$Env, exitMode: TruffleLanguage$ExitMode, exitCode: number): void;
    finalizeContext(env: TruffleLanguage$Env): void;
    finalizeThread(env: TruffleLanguage$Env, current: Thread): void;
    getContext(env: TruffleLanguage$Env): Object;
    getDefaultLoggers(): Object;
    getFileSystem(truffleFile: TruffleFile): FileSystem;
    getFileSystemContext(file: TruffleFile): Object;
    getFileSystemEngineObject(fileSystemContext: Object): Object;
    getInternalStackTraceElements(t: Throwable): StackTraceElement[];
    getLanguage(env: TruffleLanguage$Env): TruffleLanguage<Object>;
    getLanguageInfo(env: TruffleLanguage$Env): LanguageInfo;
    getLanguageInfo(language: TruffleLanguage<Object>): LanguageInfo;
    getLanguageView(env: TruffleLanguage$Env, value: Object): Object;
    getLogger(id: string, loggerName: string, loggers: Object): TruffleLogger;
    getLoggerCache(logger: TruffleLogger): Object;
    getLoggersSPI(loggerCache: Object): Object;
    getOrCreateLazyStackTrace(t: Throwable): Throwable;
    getPath(truffleFile: TruffleFile): Path[];
    getPolyglotContext(context: TruffleContext): Object;
    getPolyglotInstrument(info: InstrumentInfo): Object;
    getPolyglotLanguageContext(env: TruffleLanguage$Env): Object;
    getPolyglotLanguageInstance(language: TruffleLanguage<Object>): Object;
    getSPI(env: TruffleLanguage$Env): TruffleLanguage<Object>;
    getScope(env: TruffleLanguage$Env): Object;
    getTruffleFile(uri: URI, fileSystemContext: Object): TruffleFile;
    getTruffleFile(path: Path[], fileSystemContext: Object): TruffleFile;
    getTruffleFile(path: string, fileSystemContext: Object): TruffleFile;
    initializeLanguage(impl: TruffleLanguage<Object>, language: LanguageInfo, polyglotLanguage: Object, polyglotLanguageInstance: Object): void;
    initializeMultiContext(language: TruffleLanguage<Object>): void;
    initializeMultiThreading(env: TruffleLanguage$Env): void;
    initializeThread(env: TruffleLanguage$Env, current: Thread): void;
    invokeContextLocalFactory(factory: Object, contextImpl: Object): Object;
    invokeContextThreadLocalFactory(factory: Object, contextImpl: Object, thread: Thread): Object;
    isContextInitialized(env: TruffleLanguage$Env): boolean;
    isRecurringTLAction(action: ThreadLocalAction): boolean;
    isSideEffectingTLAction(action: ThreadLocalAction): boolean;
    isSocketIOAllowed(fileSystemContext: Object): boolean;
    isSynchronousTLAction(action: ThreadLocalAction): boolean;
    isThreadAccessAllowed(language: TruffleLanguage$Env, thread: Thread, singleThread: boolean): boolean;
    isTruffleStackTrace(t: Throwable): boolean;
    isVisible(env: TruffleLanguage$Env, value: Object): boolean;
    notifyTLActionBlocked(action: ThreadLocalAction, access: ThreadLocalAction$Access, blocked: boolean): void;
    parse(env: TruffleLanguage$Env, code: Source, optionValues: OptionValues, context: Node, argumentNames: string[]): CallTarget;
    parseInline(env: TruffleLanguage$Env, code: Source, optionValues: OptionValues, context: Node, frame: MaterializedFrame): ExecutableNode;
    patchEnvContext(env: TruffleLanguage$Env, stdOut: OutputStream, stdErr: OutputStream, stdIn: InputStream, config: { [key: string]: Object }, options: OptionValues, applicationArguments: string[]): TruffleLanguage$Env;
    performTLAction(action: ThreadLocalAction, access: ThreadLocalAction$Access): void;
    postInitEnv(env: TruffleLanguage$Env): void;
}