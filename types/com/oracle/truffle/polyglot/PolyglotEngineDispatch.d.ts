import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$AbstractEngineDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractEngineDispatch.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class PolyglotEngineDispatch extends AbstractPolyglotImpl$AbstractEngineDispatch {
    constructor(polyglot: PolyglotImpl)
    // private polyglot: PolyglotImpl;
    attachExecutionListener(engineReceiver: Object, onEnter: (param0: Object) => void, onReturn: (param0: Object) => void, expressions: boolean, statements: boolean, roots: boolean, sourceFilter: (param0: Object) => kotlin.Boolean, rootFilter: (param0: string) => kotlin.Boolean, collectInputValues: boolean, collectReturnValues: boolean, collectExceptions: boolean): Object;
    close(oreceiver: Object, apiObject: Object, cancelIfExecuting: boolean): void;
    createContext(oreceiver: Object, engineApi: Engine, sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, allowHostLookup: boolean, hostAccess: Object, polyglotAccess: Object, allowNativeAccess: boolean, allowCreateThread: boolean, allowHostClassLoading: boolean, allowInnerContextOptions: boolean, allowExperimentalOptions: boolean, classFilter: (param0: string) => kotlin.Boolean, options: { [key: string]: string }, arguments: { [key: string]: string[] }, onlyLanguages: string[], ioAccess: Object, logHandler: Object, allowCreateProcess: boolean, processHandler: ProcessHandler, environmentAccess: Object, environment: { [key: string]: string }, zone: ZoneId, limitsImpl: Object, currentWorkingDirectory: string, tmpDir: string, hostClassLoader: ClassLoader, allowValueSharing: boolean, useSystemExit: boolean, registerInActiveContexts: boolean): Context;
    getCachedSources(oreceiver: Object): Object[];
    getImplementationName(oreceiver: Object): string;
    getInstruments(oreceiver: Object): { [key: string]: Object };
    getLanguages(oreceiver: Object): { [key: string]: Object };
    getOptions(oreceiver: Object): OptionDescriptor[];
    getSandboxPolicy(engineReceiver: Object): SandboxPolicy;
    getVersion(oreceiver: Object): string;
    hostToGuestException(engineReceiver: Object, throwable: Throwable): RuntimeException;
    onEngineCollected(engineReceiver: Object): void;
    requirePublicInstrument(oreceiver: Object, id: string): Object;
    requirePublicLanguage(oreceiver: Object, id: string): Object;
    setEngineAPIReference(oreceiver: Object, engine: Reference<Engine>): void;
    shutdown(engine: Object): void;
    storeCache(engineReceiver: Object, targetFile: Path[], cancelledWord: number): boolean;
}