import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { PolyglotContextDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotContextDispatch.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineDispatch.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotExceptionDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionDispatch.d.ts'
import type { PolyglotExecutionEventDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionEventDispatch.d.ts'
import type { PolyglotExecutionListenerDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotExecutionListenerDispatch.d.ts'
import type { PolyglotInstrumentDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotInstrumentDispatch.d.ts'
import type { PolyglotLanguageDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageDispatch.d.ts'
import type { PolyglotSourceDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceDispatch.d.ts'
import type { PolyglotSourceSectionDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceSectionDispatch.d.ts'
import type { PolyglotValueDispatch } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { FileSystem } from '../../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionEventDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionEventDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractExecutionListenerDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExecutionListenerDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceSectionDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceSectionDispatch.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
import type { AbstractPolyglotImpl$ThreadScope } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$ThreadScope.d.ts'
import type { ByteSequence } from '../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
import type { FileSystem as FileSystem_2 } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { FileSystem$Selector } from '../../../../org/graalvm/polyglot/io/FileSystem$Selector.d.ts'
import type { MessageTransport } from '../../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class PolyglotImpl extends AbstractPolyglotImpl {
    constructor()
    // private contextDispatch: PolyglotContextDispatch;
    // private defaultFileSystemContext: Object;
    // private disconnectedBigIntegerHostValue: PolyglotValueDispatch;
    // private disconnectedHostValue: PolyglotValueDispatch;
    // private engineDispatch: PolyglotEngineDispatch;
    // private exceptionDispatch: PolyglotExceptionDispatch;
    // private executionEventDispatch: PolyglotExecutionEventDispatch;
    // private executionListenerDispatch: PolyglotExecutionListenerDispatch;
    // private hostNull: Object;
    // private instrumentDispatch: PolyglotInstrumentDispatch;
    // private languageDispatch: PolyglotLanguageDispatch;
    // private preInitializedEngineRef: AtomicReference<PolyglotEngineImpl>;
    // private primitiveValues: Map<Class<Object>, PolyglotValueDispatch>;
    // private sourceDispatch: PolyglotSourceDispatch;
    // private sourceSectionDispatch: PolyglotSourceSectionDispatch;
    allowInternalResourceAccess(fileSystem: FileSystem_2): FileSystem_2;
    asByteSequence(object: Object): ByteSequence;
    asValue(currentContext: PolyglotContextImpl, hostValue: Object): Object;
    asValue(hostValue: Object): Object;
    buildEngine(permittedLanguages: string[], sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, options: { [key: string]: string }, allowExperimentalOptions: boolean, boundEngine: boolean, messageInterceptor: MessageTransport, logHandler: Object, hostLanguage: Object, hostLanguageOnly: boolean, registerInActiveEngines: boolean, polyglotHostService: Object): Engine;
    buildLimits(statementLimit: number, statementLimitSourceFilter: (param0: Object) => boolean, onLimit: (param0: Object) => void): Object;
    buildSource(language: string, origin: Object, uri: URI, name: string, mimeType: string, content: Object, interactive: boolean, internal: boolean, cached: boolean, encoding: Charset, url: URL, path: string, options: { [key: string]: string }): Object;
    copyResources(targetFolder: Path[], components: string[]): boolean;
    createDefaultEngine(hostLanguage: TruffleLanguage<Object>): PolyglotEngineImpl;
    createEngineOptionDescriptors(): OptionDescriptor[];
    createHostAccess(): AbstractPolyglotImpl$AbstractHostAccess;
    createHostLanguage(access: Object): TruffleLanguage<Object>;
    createThreadScope(): AbstractPolyglotImpl$ThreadScope;
    createUnionOptionDescriptors(optionDescriptors: OptionDescriptor[][]): OptionDescriptor[];
    findLanguage(file: File): string;
    findLanguage(url: URL): string;
    findLanguage(mimeType: string): string;
    findMimeType(file: File): string;
    findMimeType(url: URL): string;
    fromByteBasedString(bytes: number[], offset: number, length: number, encoding: number, copy: boolean): Value;
    fromNativeString(basePointer: number, byteOffset: number, byteLength: number, encoding: number, copy: boolean): Value;
    getCurrentContext(): Object;
    // private getDefaultFileSystemContext(): Object;
    getExecutionEventDispatch(): AbstractPolyglotImpl$AbstractExecutionEventDispatch;
    getExecutionListenerDispatch(): AbstractPolyglotImpl$AbstractExecutionListenerDispatch;
    getPreinitializedEngine(): PolyglotEngineImpl;
    getPriority(): number;
    getSourceDispatch(): AbstractPolyglotImpl$AbstractSourceDispatch;
    getSourceSectionDispatch(): AbstractPolyglotImpl$AbstractSourceSectionDispatch;
    getTruffleVersion(): string;
    initialize(): void;
    isDefaultProcessHandler(processHandler: ProcessHandler): boolean;
    isHostFileSystem(fileSystem: FileSystem_2): boolean;
    isInCurrentEngineHostCallback(engine: Object): boolean;
    isInternalFileSystem(fileSystem: FileSystem_2): boolean;
    loadLanguageClass(className: string): Class<Object>;
    newCompositeFileSystem(fallbackFileSystem: FileSystem_2, delegates: FileSystem$Selector[]): FileSystem_2;
    newDefaultFileSystem(hostTmpDir: string): FileSystem_2;
    newDefaultProcessHandler(): ProcessHandler;
    newDenyIOFileSystem(): FileSystem_2;
    newFileSystem(fs: FileSystem_2): FileSystem_2;
    newIOAccess(name: string, allowHostFileAccess: boolean, allowHostSocketAccess: boolean, customFileSystem: FileSystem_2): Object;
    newLogHandler(logHandlerOrStream: Object): AbstractPolyglotImpl$LogHandler;
    newNIOFileSystem(fileSystem: FileSystem): FileSystem_2;
    newReadOnlyFileSystem(fileSystem: FileSystem_2): FileSystem_2;
    newTargetTypeMapping<S extends Object | number | string | boolean, T extends Object | number | string | boolean>(sourceType: Class<S>, targetType: Class<T>, acceptsValue: (param0: S) => boolean, convertValue: (param0: S) => T, precedence: HostAccess$TargetMappingPrecedence): Object;
    onEngineCreated(polyglotEngine: Object): void;
    preInitializeEngine(): void;
    resetPreInitializedEngine(): void;
    // private validateSandbox(sandboxPolicy: SandboxPolicy): void;
    // private validateVendorOptions(options: { [key: string]: string }): void;
}