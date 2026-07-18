import type { JavaMap } from '../../../JavaMap.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Handler } from '../../../java/util/logging/Handler.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Context } from '../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { EnvironmentAccess } from '../../../org/graalvm/polyglot/EnvironmentAccess.d.ts'
import type { HostAccess } from '../../../org/graalvm/polyglot/HostAccess.d.ts'
import type { HostAccess$Builder } from '../../../org/graalvm/polyglot/HostAccess$Builder.d.ts'
import type { PolyglotAccess } from '../../../org/graalvm/polyglot/PolyglotAccess.d.ts'
import type { ResourceLimits } from '../../../org/graalvm/polyglot/ResourceLimits.d.ts'
import type { SandboxPolicy } from '../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { FileSystem } from '../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { IOAccess } from '../../../org/graalvm/polyglot/io/IOAccess.d.ts'
import type { IOAccess$Builder } from '../../../org/graalvm/polyglot/io/IOAccess$Builder.d.ts'
import type { MessageTransport } from '../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
import type { ProcessHandler } from '../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class Context$Builder extends Object {
    constructor(null_: Context, ...permittedLanguages: string[])
    // private allowAllAccess: boolean;
    // private allowCreateProcess: boolean;
    // private allowCreateThread: boolean;
    // private allowExperimentalOptions: boolean;
    // private allowHostAccess: boolean;
    // private allowHostClassLoading: boolean;
    // private allowIO: boolean;
    // private allowInnerContextOptions: boolean;
    // private allowNativeAccess: boolean;
    // private allowValueSharing: boolean;
    // private arguments: JavaMap<string, string[]>;
    // private currentWorkingDirectory: Path;
    // private customFileSystem: FileSystem;
    // private customLogHandler: Object;
    // private environment: JavaMap<string, string>;
    // private environmentAccess: EnvironmentAccess;
    // private err: OutputStream;
    // private hostAccess: HostAccess;
    // private hostClassFilter: (param0: string) => boolean;
    // private hostClassLoader: ClassLoader;
    // private in: InputStream;
    // private ioAccess: IOAccess;
    // private messageTransport: MessageTransport;
    // private options: JavaMap<string, string>;
    // private out: OutputStream;
    // private permittedLanguages: string[];
    // private polyglotAccess: PolyglotAccess;
    // private processHandler: ProcessHandler;
    // private resourceLimits: ResourceLimits;
    // private sandboxPolicy: SandboxPolicy;
    // private sharedEngine: Engine;
    // private useSystemExit: boolean;
    // private zone: ZoneId;
    allowAllAccess(enabled: boolean): Context$Builder;
    allowCreateProcess(enabled: boolean): Context$Builder;
    allowCreateThread(enabled: boolean): Context$Builder;
    allowEnvironmentAccess(accessPolicy: EnvironmentAccess): Context$Builder;
    allowExperimentalOptions(enabled: boolean): Context$Builder;
    allowHostAccess(enabled: boolean): Context$Builder;
    allowHostAccess(config: HostAccess): Context$Builder;
    allowHostClassLoading(enabled: boolean): Context$Builder;
    allowHostClassLookup(classFilter: (param0: string) => boolean): Context$Builder;
    allowIO(enabled: boolean): Context$Builder;
    allowIO(ioAccess: IOAccess): Context$Builder;
    allowInnerContextOptions(enabled: boolean): Context$Builder;
    allowNativeAccess(enabled: boolean): Context$Builder;
    allowPolyglotAccess(accessPolicy: PolyglotAccess): Context$Builder;
    allowValueSharing(enabled: boolean): Context$Builder;
    apply(action: (param0: Context$Builder) => void): Context$Builder;
    arguments(language: string, args: string[]): Context$Builder;
    build(): Context;
    currentWorkingDirectory(workingDirectory: Path): Context$Builder;
    engine(engine: Engine): Context$Builder;
    environment(name: string, value: string): Context$Builder;
    environment(env: JavaMap<string, string>): Context$Builder;
    err(err: OutputStream): Context$Builder;
    extendHostAccess(defaultInitialValue: HostAccess, setup: (param0: HostAccess$Builder) => void): Context$Builder;
    extendIO(defaultInitialValue: IOAccess, setup: (param0: IOAccess$Builder) => void): Context$Builder;
    fileSystem(fileSystem: FileSystem): Context$Builder;
    hostClassFilter(classFilter: (param0: string) => boolean): Context$Builder;
    hostClassLoader(classLoader: ClassLoader): Context$Builder;
    in(in_: InputStream): Context$Builder;
    logHandler(logOut: OutputStream): Context$Builder;
    logHandler(logHandler: Handler): Context$Builder;
    option(key: string, value: string): Context$Builder;
    options(options: JavaMap<string, string>): Context$Builder;
    // private orAllAccess(optionalBoolean: boolean): boolean;
    out(out: OutputStream): Context$Builder;
    processHandler(handler: ProcessHandler): Context$Builder;
    // private resolveSandboxPolicy(): SandboxPolicy;
    resourceLimits(limits: ResourceLimits): Context$Builder;
    sandbox(policy: SandboxPolicy): Context$Builder;
    serverTransport(serverTransport: MessageTransport): Context$Builder;
    timeZone(zone: ZoneId): Context$Builder;
    useSystemExit(enabled: boolean): Context$Builder;
    // private validateSandbox(useSandboxPolicy: SandboxPolicy): void;
}