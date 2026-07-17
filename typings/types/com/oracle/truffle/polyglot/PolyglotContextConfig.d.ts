import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { OptionValuesImpl } from '../../../../com/oracle/truffle/polyglot/OptionValuesImpl.d.ts'
import type { PolyglotContextConfig$FileSystemConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig$FileSystemConfig.d.ts'
import type { PolyglotContextConfig$PreinitConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig$PreinitConfig.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotInstrument } from '../../../../com/oracle/truffle/polyglot/PolyglotInstrument.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLimits } from '../../../../com/oracle/truffle/polyglot/PolyglotLimits.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export class PolyglotContextConfig extends Object {
    constructor(engine: PolyglotEngineImpl, fileSystemConfig: PolyglotContextConfig$FileSystemConfig, sharableConfig: PolyglotContextConfig$PreinitConfig)
    constructor(engine: PolyglotEngineImpl, sandboxPolicy: SandboxPolicy, forceSharing: boolean, out: OutputStream, err: OutputStream, in_: InputStream, hostLookupAllowed: boolean, polyglotAccess: Object, nativeAccessAllowed: boolean, createThreadAllowed: boolean, threadAccessDeniedHandler: (param0: string) => void, hostClassLoadingAllowed: boolean, contextOptionsAllowed: boolean, allowExperimentalOptions: boolean, classFilter: (param0: string) => boolean, applicationArguments: JavaMap<string, string[]>, onlyLanguages: string[], options: JavaMap<string, string>, fileSystemConfig: PolyglotContextConfig$FileSystemConfig, logHandler: AbstractPolyglotImpl$LogHandler, createProcessAllowed: boolean, processHandler: ProcessHandler, environmentAccess: Object, environment: JavaMap<string, string>, timeZone: ZoneId, limits: PolyglotLimits, hostClassLoader: ClassLoader, hostAccess: Object, allowValueSharing: boolean, useSystemExit: boolean, creatorArguments: JavaMap<string, Object>, onCancelled: () => void, onExited: (param0: number) => void, onClosed: () => void)
    // private allowExperimentalOptions: boolean;
    // private allowValueSharing: boolean;
    // private allowedPublicLanguages: string[];
    // private api: AbstractPolyglotImpl$APIAccess;
    // private applicationArguments: JavaMap<string, string[]>;
    // private classFilter: (param0: string) => boolean;
    // private configuredInstruments: PolyglotInstrument[];
    // private configuredLanguages: PolyglotLanguage[];
    // private createProcessAllowed: boolean;
    // private createThreadAllowed: boolean;
    // private creatorArguments: JavaMap<string, Object>;
    // private customEnvironment: JavaMap<string, string>;
    // private environmentAccess: Object;
    // private err: OutputStream;
    // private fileSystemConfig: PolyglotContextConfig$FileSystemConfig;
    // private forceCodeSharing: boolean;
    // private hostAccess: Object;
    // private hostClassLoader: ClassLoader;
    // private hostClassLoadingAllowed: boolean;
    // private hostLookupAllowed: boolean;
    // private in: InputStream;
    // private innerContextOptionsAllowed: boolean;
    // private limits: PolyglotLimits;
    // private logHandler: AbstractPolyglotImpl$LogHandler;
    // private logLevels: JavaMap<string, Level>;
    // private nativeAccessAllowed: boolean;
    // private onCancelled: () => void;
    // private onClosed: () => void;
    // private onExited: (param0: number) => void;
    // private onlyLanguages: string[];
    // private optionsById: JavaMap<string, OptionValuesImpl>;
    // private originalOptions: JavaMap<string, string>;
    // private out: OutputStream;
    // private polyglotAccess: Object;
    // private processHandler: ProcessHandler;
    // private resolvedEnvironment: JavaMap<string, string>;
    // private sandboxPolicy: SandboxPolicy;
    // private threadAccessDeniedHandler: (param0: string) => void;
    // private timeZone: ZoneId;
    // private useSystemExit: boolean;
    addConfiguredLanguage(engine: PolyglotEngineImpl, languages: PolyglotLanguage[], language: PolyglotLanguage): void;
    // private collectDependentLanguages(engine: PolyglotEngineImpl, languageIds: string[], foundLanguages: PolyglotLanguage[]): void;
    getApplicationArguments(lang: PolyglotLanguage): string[];
    getConfiguredInstruments(): PolyglotInstrument[];
    getConfiguredLanguages(): PolyglotLanguage[];
    getEnvironment(): JavaMap<string, string>;
    getInstrumentOptionValues(instrument: PolyglotInstrument): OptionValuesImpl;
    getLanguageOptionValues(lang: PolyglotLanguage): OptionValuesImpl;
    getTimeZone(): ZoneId;
    isAccessPermitted(from: PolyglotLanguage, to: PolyglotLanguage): boolean;
    isAllowIO(): boolean;
    isCodeSharingDisabled(): boolean;
    isCodeSharingForced(): boolean;
}