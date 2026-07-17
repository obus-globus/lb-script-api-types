import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { Engine$CancellationCallback } from '../../../../org/graalvm/polyglot/Engine$CancellationCallback.d.ts'
import type { PolyglotException } from '../../../../org/graalvm/polyglot/PolyglotException.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$AbstractEngineDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractEngineDispatch.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class PolyglotEngineDispatch extends AbstractPolyglotImpl$AbstractEngineDispatch {
    constructor(polyglot: PolyglotImpl)
    // private polyglot: PolyglotImpl;
    attachExecutionListener(engineReceiver: Object, onEnter: (param0: Object) => void, onReturn: (param0: Object) => void, expressions: boolean, statements: boolean, roots: boolean, sourceFilter: (param0: Object) => boolean, rootFilter: (param0: string) => boolean, collectInputValues: boolean, collectReturnValues: boolean, collectExceptions: boolean): Object;
    close(oreceiver: Object, apiObject: Object, cancelIfExecuting: boolean): void;
    createContext(oreceiver: Object, engineApi: Engine, sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, allowHostLookup: boolean, hostAccess: Object, polyglotAccess: Object, allowNativeAccess: boolean, allowCreateThread: boolean, allowHostClassLoading: boolean, allowInnerContextOptions: boolean, allowExperimentalOptions: boolean, classFilter: (param0: string) => boolean, options: JavaMap<string, string>, arguments: JavaMap<string, string[]>, onlyLanguages: string[], ioAccess: Object, logHandler: Object, allowCreateProcess: boolean, processHandler: ProcessHandler, exceptionHandler: (param0: PolyglotException) => void, environmentAccess: Object, environment: JavaMap<string, string>, zone: ZoneId, limitsImpl: Object, currentWorkingDirectory: string, tmpDir: string, hostClassLoader: ClassLoader, allowValueSharing: boolean, useSystemExit: boolean, registerInActiveContexts: boolean): Context;
    getCachedSources(oreceiver: Object): Object[];
    getImplementationName(oreceiver: Object): string;
    getInstruments(oreceiver: Object): JavaMap<string, Object>;
    getLanguages(oreceiver: Object): JavaMap<string, Object>;
    getOptions(oreceiver: Object): OptionDescriptor[];
    getSandboxPolicy(engineReceiver: Object): SandboxPolicy;
    getVersion(oreceiver: Object): string;
    hostToGuestException(engineReceiver: Object, throwable: Throwable): RuntimeException;
    onEngineCollected(engineReceiver: Object): void;
    persistCache(engineReceiver: Object, callback: () => boolean): ByteBuffer;
    requirePublicInstrument(oreceiver: Object, id: string): Object;
    requirePublicLanguage(oreceiver: Object, id: string): Object;
    setEngineAPIReference(oreceiver: Object, engine: Reference<Engine>): void;
    shutdown(engine: Object): void;
    storeCache(engineReceiver: Object, targetFile: Path, cancelledWord: number): boolean;
}