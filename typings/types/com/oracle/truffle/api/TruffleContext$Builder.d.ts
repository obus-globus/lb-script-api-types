import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleContext$Builder extends Object {
    constructor(null_: TruffleContext, env: TruffleLanguage$Env)
    // private allowCreateProcess: boolean;
    // private allowCreateThread: boolean;
    // private allowEnvironmentAccess: boolean;
    // private allowHostClassLoading: boolean;
    // private allowHostLookup: boolean;
    // private allowIO: boolean;
    // private allowInnerContextOptions: boolean;
    // private allowNativeAccess: boolean;
    // private allowPolyglotAccess: boolean;
    // private arguments: { [key: string]: string[] };
    // private config: { [key: string]: Object };
    // private environment: { [key: string]: string };
    // private err: OutputStream;
    // private in: InputStream;
    // private inheritAccess: boolean;
    // private initializeCreatorContext: boolean;
    // private onCancelled: () => void;
    // private onClosed: () => void;
    // private onExited: (param0: number) => void;
    // private options: { [key: string]: string };
    // private out: OutputStream;
    // private permittedLanguages: string[];
    // private sharingEnabled: boolean;
    // private sourceEnvironment: TruffleLanguage$Env;
    // private threadAccessDeniedHandler: (param0: string) => void;
    // private timeZone: ZoneId;
    allowCreateProcess(b: boolean): TruffleContext$Builder;
    allowCreateThread(b: boolean): TruffleContext$Builder;
    allowHostClassLoading(b: boolean): TruffleContext$Builder;
    allowHostClassLookup(b: boolean): TruffleContext$Builder;
    allowIO(b: boolean): TruffleContext$Builder;
    allowInheritEnvironmentAccess(b: boolean): TruffleContext$Builder;
    allowInnerContextOptions(b: boolean): TruffleContext$Builder;
    allowNativeAccess(b: boolean): TruffleContext$Builder;
    allowPolyglotAccess(b: boolean): TruffleContext$Builder;
    arguments(language: string, args: string[]): TruffleContext$Builder;
    build(): TruffleContext;
    config(key: string, value: Object): TruffleContext$Builder;
    environment(name: string, value: string): TruffleContext$Builder;
    environment(env: { [key: string]: string }): TruffleContext$Builder;
    err(err: OutputStream): TruffleContext$Builder;
    forceSharing(enabled: boolean): TruffleContext$Builder;
    in(in_: InputStream): TruffleContext$Builder;
    inheritAllAccess(b: boolean): TruffleContext$Builder;
    initializeCreatorContext(enabled: boolean): TruffleContext$Builder;
    onCancelled(r: () => void): TruffleContext$Builder;
    onClosed(r: () => void): TruffleContext$Builder;
    onExited(r: (param0: number) => void): TruffleContext$Builder;
    option(key: string, value: string): TruffleContext$Builder;
    options(options: { [key: string]: string }): TruffleContext$Builder;
    out(out: OutputStream): TruffleContext$Builder;
    permittedLanguages(permittedLanguages: string[]): TruffleContext$Builder;
    threadAccessDeniedHandler(handler: (param0: string) => void): TruffleContext$Builder;
    timeZone(zone: ZoneId): TruffleContext$Builder;
}