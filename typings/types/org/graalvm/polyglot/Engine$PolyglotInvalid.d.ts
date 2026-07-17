import type { JavaMap } from '../../../JavaMap.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { FileSystem } from '../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { HostAccess$TargetMappingPrecedence } from '../../../org/graalvm/polyglot/HostAccess$TargetMappingPrecedence.d.ts'
import type { PolyglotException } from '../../../org/graalvm/polyglot/PolyglotException.d.ts'
import type { SandboxPolicy } from '../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { Value } from '../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
import type { ByteSequence } from '../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
import type { FileSystem as FileSystem_2 } from '../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { FileSystem$Selector } from '../../../org/graalvm/polyglot/io/FileSystem$Selector.d.ts'
import type { MessageTransport } from '../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
export class Engine$PolyglotInvalid extends AbstractPolyglotImpl {
    constructor()
    allowInternalResourceAccess(fileSystem: FileSystem_2, readOnlyResources: boolean): FileSystem_2;
    asByteSequence(object: Object): ByteSequence;
    asValue(o: Object): Object;
    buildEngine(permittedLanguages: string[], sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, options: JavaMap<string, string>, systemPropertiesOptions: JavaMap<string, string>, useSystemProperties: boolean, allowExperimentalOptions: boolean, boundEngine: boolean, useIsolatedEngine: boolean, messageInterceptor: MessageTransport, logHandler: Object, hostLanguage: Object, hostLanguageOnly: boolean, registerInActiveEngines: boolean, polyglotHostService: Object, exceptionHandler: (param0: PolyglotException) => void): Engine;
    buildLimits(statementLimit: number, statementLimitSourceFilter: (param0: Object) => boolean, onLimit: (param0: Object) => void): Object;
    buildSource(language: string, origin: Object, uri: URI, name: string, mimeType: string, content: Object, interactive: boolean, internal: boolean, cached: boolean, encoding: Charset, url: URL, path: string, options: JavaMap<string, string>): Source;
    copyResources(targetFolder: Path, ...components: string[]): boolean;
    createHostAccess(): AbstractPolyglotImpl$AbstractHostAccess;
    createHostLanguage(access: Object): Object;
    findLanguage(file: File): string;
    findLanguage(url: URL): string;
    findLanguage(mimeType: string): string;
    findMimeType(file: File): string;
    findMimeType(url: URL): string;
    fromByteBasedString(bytes: number[], offset: number, length: number, encoding: number, copy: boolean): Value;
    fromNativeString(basePointer: number, byteOffset: number, byteLength: number, encoding: number, copy: boolean): Value;
    getCurrentContext(): Object;
    getTruffleVersion(): string;
    isHostFileSystem(fileSystem: FileSystem_2): boolean;
    loadLanguageClass(className: string): Class<Object>;
    newCompositeFileSystem(fallbackFileSystem: FileSystem_2, ...delegates: FileSystem$Selector[]): FileSystem_2;
    newDefaultFileSystem(hostTmpDir: string): FileSystem_2;
    newDenyIOFileSystem(): FileSystem_2;
    newLogHandler(logHandlerOrStream: Object): Object;
    newNIOFileSystem(fileSystem: FileSystem): FileSystem_2;
    newReadOnlyFileSystem(fileSystem: FileSystem_2): FileSystem_2;
    newTargetTypeMapping<S extends unknown, T extends unknown>(sourceType: Class<S>, targetType: Class<T>, acceptsValue: (param0: S) => boolean, convertValue: (param0: S) => T, precedence: HostAccess$TargetMappingPrecedence): Object;
    preInitializeEngine(): void;
    resetPreInitializedEngine(): void;
    supportsCompilation(): boolean;
}