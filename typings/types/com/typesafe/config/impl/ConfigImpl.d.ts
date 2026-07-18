import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigImpl extends Object {
    static computeCachedConfig(paramarg0: ClassLoader, paramarg1: string, paramarg2: () => Config): Config;
    static defaultReference(paramarg0: ClassLoader): Config;
    static defaultReferenceUnresolved(paramarg0: ClassLoader): Config;
    static emptyConfig(paramarg0: string): Config;
    static envVariablesAsConfig(): Config;
    static envVariablesOverridesAsConfig(): Config;
    static fromAnyRef(paramarg0: Object, paramarg1: string): ConfigValue;
    static fromPathMap(paramarg0: JavaMap<string, Object>, paramarg1: string): JavaMap<any, any>;
    static newEnvVariable(paramarg0: string): ConfigOrigin;
    static newFileOrigin(paramarg0: string): ConfigOrigin;
    static newSimpleOrigin(paramarg0: string): ConfigOrigin;
    static newURLOrigin(paramarg0: URL): ConfigOrigin;
    static parseFileAnySyntax(paramarg0: File, paramarg1: ConfigParseOptions): JavaMap<any, any>;
    static parseResourcesAnySyntax(paramarg0: Class<Object>, paramarg1: string, paramarg2: ConfigParseOptions): JavaMap<any, any>;
    static parseResourcesAnySyntax(paramarg0: string, paramarg1: ConfigParseOptions): JavaMap<any, any>;
    static reloadEnvVariablesConfig(): void;
    static reloadEnvVariablesOverridesConfig(): void;
    static reloadSystemPropertiesConfig(): void;
    static systemPropertiesAsConfig(): Config;
    static trace(paramarg0: number, paramarg1: string): void;
    static trace(paramarg0: string): void;
    static traceLoadsEnabled(): boolean;
    static traceSubstitutionsEnabled(): boolean;
    constructor()
}