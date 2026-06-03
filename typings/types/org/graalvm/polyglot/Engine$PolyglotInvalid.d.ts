import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { FileSystem } from '../../../java/nio/file/FileSystem.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
import type { SandboxPolicy } from '../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { AbstractPolyglotImpl } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
import type { AbstractPolyglotImpl$ThreadScope } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$ThreadScope.d.ts'
import type { ByteSequence } from '../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
import type { FileSystem as FileSystem_2 } from '../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { FileSystem$Selector } from '../../../org/graalvm/polyglot/io/FileSystem$Selector.d.ts'
import type { MessageTransport } from '../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class Engine$PolyglotInvalid extends AbstractPolyglotImpl {
    constructor()
    allowInternalResourceAccess(fileSystem: FileSystem_2): FileSystem_2;
    asByteSequence(object: Object): ByteSequence;
    asValue(o: Object): Object;
    buildEngine(permittedLanguages: string[], sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, arguments: { [key: string]: string }, allowExperimentalOptions: boolean, boundEngine: boolean, messageInterceptor: MessageTransport, logHandler: Object, hostLanguage: Object, hostLanguageOnly: boolean, registerInActiveEngines: boolean, polyglotHostService: Object): Engine;
    buildLimits(statementLimit: number, statementLimitSourceFilter: (param0: Object) => kotlin.Boolean, onLimit: (param0: Object) => void): Object;
    buildSource(language: string, origin: Object, uri: URI, name: string, mimeType: string, content: Object, interactive: boolean, internal: boolean, cached: boolean, encoding: Charset, url: URL, path: string, options: { [key: string]: string }): Source;
    copyResources(targetFolder: Path[], components: string[]): boolean;
    createHostAccess(): AbstractPolyglotImpl$AbstractHostAccess;
    createHostLanguage(access: Object): Object;
    createThreadScope(): AbstractPolyglotImpl$ThreadScope;
    createUnionOptionDescriptors(optionDescriptors: OptionDescriptor[][]): OptionDescriptor[];
    findLanguage(file: File): string;
    findLanguage(url: URL): string;
    findLanguage(mimeType: string): string;
    findMimeType(file: File): string;
    findMimeType(url: URL): string;
    getCurrentContext(): Object;
    getPriority(): number;
    getTruffleVersion(): string;
    isDefaultProcessHandler(processHandler: ProcessHandler): boolean;
    isInCurrentEngineHostCallback(engine: Object): boolean;
    isInternalFileSystem(fileSystem: FileSystem_2): boolean;
    loadLanguageClass(className: string): Class<Object>;
    newCompositeFileSystem(fallbackFileSystem: FileSystem_2, delegates: FileSystem$Selector[]): FileSystem_2;
    newDefaultFileSystem(hostTmpDir: string): FileSystem_2;
    newDefaultProcessHandler(): ProcessHandler;
    newDenyIOFileSystem(): FileSystem_2;
    newNIOFileSystem(fileSystem: FileSystem): FileSystem_2;
    newReadOnlyFileSystem(fileSystem: FileSystem_2): FileSystem_2;
    newTargetTypeMapping(sourceType: Class<S>, targetType: Class<T>, acceptsValue: (param0: S) => kotlin.Boolean, convertValue: (param0: S) => T, precedence: HostAccess$TargetMappingPrecedence): Object;
    onEngineCreated(polyglotEngine: Object): void;
    preInitializeEngine(): void;
    resetPreInitializedEngine(): void;
}