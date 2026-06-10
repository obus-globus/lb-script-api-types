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
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export abstract class AbstractPolyglotImpl$AbstractEngineDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(impl: AbstractPolyglotImpl)
    attachExecutionListener(engine: Object, onEnter: (param0: Object) => void, onReturn: (param0: Object) => void, expressions: boolean, statements: boolean, roots: boolean, sourceFilter: (param0: Object) => boolean, rootFilter: (param0: string) => boolean, collectInputValues: boolean, collectReturnValues: boolean, collectExceptions: boolean): Object;
    close(receiver: Object, apiObject: Object, cancelIfExecuting: boolean): void;
    createContext(receiver: Object, engineApi: Engine, sandboxPolicy: SandboxPolicy, out: OutputStream, err: OutputStream, in_: InputStream, allowHostLookup: boolean, hostAccess: Object, polyglotAccess: Object, allowNativeAccess: boolean, allowCreateThread: boolean, allowHostClassLoading: boolean, allowInnerContextOptions: boolean, allowExperimentalOptions: boolean, classFilter: (param0: string) => boolean, options: { [key: string]: string }, arguments: { [key: string]: string[] }, onlyLanguages: string[], ioAccess: Object, logHandler: Object, allowCreateProcess: boolean, processHandler: ProcessHandler, environmentAccess: Object, environment: { [key: string]: string }, zone: ZoneId, limitsImpl: Object, currentWorkingDirectory: string, tmpDir: string, hostClassLoader: ClassLoader, allowValueSharing: boolean, useSystemExit: boolean, registerInActiveContexts: boolean): Context;
    getCachedSources(receiver: Object): Object[];
    getImplementationName(receiver: Object): string;
    getInstruments(receiver: Object): { [key: string]: Object };
    getLanguages(receiver: Object): { [key: string]: Object };
    getOptions(receiver: Object): OptionDescriptor[];
    getSandboxPolicy(engineReceiver: Object): SandboxPolicy;
    getVersion(receiver: Object): string;
    hostToGuestException(engineReceiver: Object, throwable: Throwable): RuntimeException;
    onEngineCollected(engineReceiver: Object): void;
    requirePublicInstrument(receiver: Object, id: string): Object;
    requirePublicLanguage(receiver: Object, id: string): Object;
    setEngineAPIReference(receiver: Object, key: Reference<Engine>): void;
    shutdown(engine: Object): void;
    storeCache(engineReceiver: Object, targetFile: Path[], cancelledWord: number): boolean;
}