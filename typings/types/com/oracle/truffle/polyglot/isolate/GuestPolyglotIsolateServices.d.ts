import type { IsolateSourceCache } from '../../../../../com/oracle/truffle/polyglot/isolate/IsolateSourceCache.d.ts'
import type { PolyglotHostServices } from '../../../../../com/oracle/truffle/polyglot/isolate/PolyglotHostServices.d.ts'
import type { PolyglotIsolateServices } from '../../../../../com/oracle/truffle/polyglot/isolate/PolyglotIsolateServices.d.ts'
import type { ReflectionLibraryDispatch } from '../../../../../com/oracle/truffle/polyglot/isolate/ReflectionLibraryDispatch.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ZoneId } from '../../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { SandboxPolicy } from '../../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractPolyglotHostService } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractPolyglotHostService.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { MessageTransport } from '../../../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class GuestPolyglotIsolateServices extends Object implements PolyglotIsolateServices {
    private constructor(polyglot: AbstractPolyglotImpl)
    // private polyglot: AbstractPolyglotImpl;
    buildEngine(permittedLanguages: string[], sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, options: { [key: string]: string }, systemPropertiesOptions: { [key: string]: string }, useSystemProperties: boolean, allowExperimentalOptions: boolean, boundEngine: boolean, messageInterceptor: MessageTransport, logHandler: AbstractPolyglotImpl$LogHandler, polyglotHostService: AbstractPolyglotImpl$AbstractPolyglotHostService, hostLanguageServicePeer: Object): number;
    createContext(receiver: Object, sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, allowHostAccess: boolean, polyglotAccess: Object, ioAccess: Object, fileSystem: FileSystem, allowNativeAccess: boolean, allowCreateThread: boolean, allowHostClassLoading: boolean, allowInnerContextOptions: boolean, allowExperimentalOptions: boolean, allowCreateProcess: boolean, options: { [key: string]: string }, arguments: { [key: string]: string[] }, onlyLanguages: string[], currentWorkingDirectory: string, tmpDir: string, processHandler: ProcessHandler, environmentAccess: Object, environment: { [key: string]: string }, zone: ZoneId, hostStackHeadRoom: number, hostLanguageServicePeer: Object, allowValueSharing: boolean, useSystemExit: boolean, logHandler: AbstractPolyglotImpl$LogHandler, guestToHostObjectReceiver: ReflectionLibraryDispatch): number;
    ensureInstrumentCreated(guestContext: Object, instrumentId: string): void;
    getEmbedderExceptionStackTrace(receiver: Object, exception: Throwable, inHost: boolean): number;
    getGuestObjectReflection(guestContext: Object): ReflectionLibraryDispatch;
    getSourceCache(): IsolateSourceCache;
    heapDump(path: string): string;
    initialize(polyglotHostServices: PolyglotHostServices, internalResources: string): void;
    isMemoryProtected(): boolean;
    onIsolateTearDown(): void;
    parseEval(guestContext: Object, language: string, sourceHandle: number, eval: boolean): Object;
    triggerGC(): void;
}