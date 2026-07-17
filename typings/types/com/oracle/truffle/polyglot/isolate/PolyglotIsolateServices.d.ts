import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { IsolateSourceCache } from '../../../../../com/oracle/truffle/polyglot/isolate/IsolateSourceCache.d.ts'
import type { PolyglotHostServices } from '../../../../../com/oracle/truffle/polyglot/isolate/PolyglotHostServices.d.ts'
import type { ReflectionLibraryDispatch } from '../../../../../com/oracle/truffle/polyglot/isolate/ReflectionLibraryDispatch.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ZoneId } from '../../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { SandboxPolicy } from '../../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$AbstractPolyglotHostService } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractPolyglotHostService.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { MessageTransport } from '../../../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export interface PolyglotIsolateServices extends Object{
    buildEngine(permittedLanguages: string[], sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, options: JavaMap<string, string>, systemPropertiesOptions: JavaMap<string, string>, useSystemProperties: boolean, allowExperimentalOptions: boolean, boundEngine: boolean, messageInterceptor: MessageTransport, logHandler: AbstractPolyglotImpl$LogHandler, polyglotHostService: AbstractPolyglotImpl$AbstractPolyglotHostService, hostLanguageServicePeer: Object): number;
    createContext(engineReceiver: Object, sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, allowHostAccess: boolean, polyglotAccess: Object, ioAccess: Object, fileSystem: FileSystem, allowNativeAccess: boolean, allowCreateThread: boolean, allowHostClassLoading: boolean, allowInnerContextOptions: boolean, allowExperimentalOptions: boolean, allowCreateProcess: boolean, options: JavaMap<string, string>, arguments: JavaMap<string, string[]>, onlyLanguages: string[], currentWorkingDirectory: string, tmpDir: string, processHandler: ProcessHandler, environmentAccess: Object, environment: JavaMap<string, string>, zoneId: ZoneId, hostStackHeadRoom: number, hostServicePeer: Object, allowValueSharing: boolean, useSystemExit: boolean, logHandler: AbstractPolyglotImpl$LogHandler, guestToHostObjectReceiver: ReflectionLibraryDispatch): number;
    ensureInstrumentCreated(contextReceiver: Object, instrumentId: string): void;
    getEmbedderExceptionStackTrace(contextReceiver: Object, exception: Throwable, inHost: boolean): number;
    getGuestObjectReflection(contextReceiver: Object): ReflectionLibraryDispatch;
    getSourceCache(): IsolateSourceCache;
    heapDump(path: string): string;
    initialize(hostServices: PolyglotHostServices, internalResources: string): void;
    isMemoryProtected(): boolean;
    onIsolateTearDown(): void;
    parseEval(contextReceiver: Object, language: string, sourceHandle: number, eval: boolean): Object;
    triggerGC(): void;
}