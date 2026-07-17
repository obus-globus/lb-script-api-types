import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
import type { SandboxPolicy } from '../../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$ThreadScope } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$ThreadScope.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { MessageTransport } from '../../../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export abstract class Accessor$PolyglotIsolateSupport extends Accessor$Support {
    constructor()
    buildIsolatedEngine(polyglot: AbstractPolyglotImpl, localEngine: Engine, isolateLanguages: string[], permittedLanguages: string[], sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, options: { [key: string]: string }, systemPropertiesOptions: { [key: string]: string }, useSystemProperties: boolean, allowExperimentalOptions: boolean, boundEngine: boolean, messageInterceptor: MessageTransport, registerInActiveEngines: boolean, externalProcess: boolean, stackHeadRoom: number, isolateLibrary: string, isolateLauncher: string): Engine;
    createThreadScope(polyglot: AbstractPolyglotImpl): AbstractPolyglotImpl$ThreadScope;
    dumpIsolateHeap(engine: Object, folder: Path): Path;
    getAvailableIsolatedLanguages(): string[][];
    getEmbedderExceptionStackTrace(engine: Object, exception: Throwable, fromHost: boolean): Object;
    getHostStackHeadRoom(engine: Object): number;
    getIsolate(engine: Object): Object;
    hasIsolateLibraryForLanguages(languageIds: string[]): boolean;
    invokeCleaners(): void;
    isDefaultProcessHandler(processHandler: ProcessHandler): boolean;
    isInCurrentEngineHostCallback(engine: Object): boolean;
    isInternalFileSystem(fileSystem: FileSystem): boolean;
    isIsolateGuest(): boolean;
    isIsolateHost(): boolean;
    isSupported(): boolean;
    mergeHostStackTrace<T extends Throwable>(forException: Throwable, hostException: T): T;
    triggerIsolateGC(engine: Object): void;
}