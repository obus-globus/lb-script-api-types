import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Handler } from '../../../java/util/logging/Handler.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { PolyglotException } from '../../../org/graalvm/polyglot/PolyglotException.d.ts'
import type { SandboxPolicy } from '../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { MessageTransport } from '../../../org/graalvm/polyglot/io/MessageTransport.d.ts'
export class Engine$Builder extends Object {
    constructor(null_: Engine, permittedLanguages: string[])
    // private allowExperimentalOptions: boolean;
    // private boundEngine: boolean;
    // private customLogHandler: Object;
    // private err: OutputStream;
    // private exceptionHandler: (param0: PolyglotException) => void;
    // private in: InputStream;
    // private messageTransport: MessageTransport;
    // private options: { [key: string]: string };
    // private out: OutputStream;
    // private permittedLanguages: string[];
    // private sandboxPolicy: SandboxPolicy;
    // private spawnIsolate: boolean;
    // private useSystemProperties: boolean;
    allowExperimentalOptions(enabled: boolean): Engine$Builder;
    build(): Engine;
    err(err: OutputStream): Engine$Builder;
    exceptionHandler(handler: (param0: PolyglotException) => void): Engine$Builder;
    in(in_: InputStream): Engine$Builder;
    logHandler(logOut: OutputStream): Engine$Builder;
    logHandler(logHandler: Handler): Engine$Builder;
    option(key: string, value: string): Engine$Builder;
    options(options: { [key: string]: string }): Engine$Builder;
    out(out: OutputStream): Engine$Builder;
    sandbox(policy: SandboxPolicy): Engine$Builder;
    serverTransport(serverTransport: MessageTransport): Engine$Builder;
    setBoundEngine(boundEngine: boolean): Engine$Builder;
    spawnIsolate(value: boolean): Engine$Builder;
    useSystemProperties(enabled: boolean): Engine$Builder;
    // private validateSandbox(): void;
}