import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Config } from '../../../com/typesafe/config/Config.d.ts'
import type { ConfigParseOptions } from '../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigResolveOptions } from '../../../com/typesafe/config/ConfigResolveOptions.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigFactory extends Object {
    static defaultApplication(): Config;
    static defaultApplication(paramarg0: ConfigParseOptions): Config;
    static defaultApplication(paramarg0: ClassLoader): Config;
    static defaultOverrides(): Config;
    static defaultOverrides(paramarg0: ClassLoader): Config;
    static defaultReference(): Config;
    static defaultReference(paramarg0: ClassLoader): Config;
    static defaultReferenceUnresolved(): Config;
    static defaultReferenceUnresolved(paramarg0: ClassLoader): Config;
    static empty(): Config;
    static empty(paramarg0: string): Config;
    static invalidateCaches(): void;
    static load(): Config;
    static load(paramarg0: Config): Config;
    static load(paramarg0: Config, paramarg1: ConfigResolveOptions): Config;
    static load(paramarg0: ConfigParseOptions): Config;
    static load(paramarg0: ConfigParseOptions, paramarg1: ConfigResolveOptions): Config;
    static load(paramarg0: ClassLoader): Config;
    static load(paramarg0: ClassLoader, paramarg1: Config): Config;
    static load(paramarg0: ClassLoader, paramarg1: Config, paramarg2: ConfigResolveOptions): Config;
    static load(paramarg0: ClassLoader, paramarg1: ConfigParseOptions): Config;
    static load(paramarg0: ClassLoader, paramarg1: ConfigParseOptions, paramarg2: ConfigResolveOptions): Config;
    static load(paramarg0: ClassLoader, paramarg1: ConfigResolveOptions): Config;
    static load(paramarg0: ClassLoader, paramarg1: string): Config;
    static load(paramarg0: ClassLoader, paramarg1: string, paramarg2: ConfigParseOptions, paramarg3: ConfigResolveOptions): Config;
    static load(paramarg0: string): Config;
    static load(paramarg0: string, paramarg1: ConfigParseOptions, paramarg2: ConfigResolveOptions): Config;
    static parseApplicationReplacement(): Optional<Config>;
    static parseApplicationReplacement(paramarg0: ConfigParseOptions): Optional<Config>;
    static parseApplicationReplacement(paramarg0: ClassLoader): Optional<Config>;
    static parseFile(paramarg0: File): Config;
    static parseFile(paramarg0: File, paramarg1: ConfigParseOptions): Config;
    static parseFileAnySyntax(paramarg0: File): Config;
    static parseFileAnySyntax(paramarg0: File, paramarg1: ConfigParseOptions): Config;
    static parseMap(paramarg0: JavaMap<string, Object>): Config;
    static parseMap(paramarg0: JavaMap<string, Object>, paramarg1: string): Config;
    static parseProperties(paramarg0: JavaMap<any, any>): Config;
    static parseProperties(paramarg0: JavaMap<any, any>, paramarg1: ConfigParseOptions): Config;
    static parseReader(paramarg0: Reader): Config;
    static parseReader(paramarg0: Reader, paramarg1: ConfigParseOptions): Config;
    static parseResources(paramarg0: Class<Object>, paramarg1: string): Config;
    static parseResources(paramarg0: Class<Object>, paramarg1: string, paramarg2: ConfigParseOptions): Config;
    static parseResources(paramarg0: ClassLoader, paramarg1: string): Config;
    static parseResources(paramarg0: ClassLoader, paramarg1: string, paramarg2: ConfigParseOptions): Config;
    static parseResources(paramarg0: string): Config;
    static parseResources(paramarg0: string, paramarg1: ConfigParseOptions): Config;
    static parseResourcesAnySyntax(paramarg0: Class<Object>, paramarg1: string): Config;
    static parseResourcesAnySyntax(paramarg0: Class<Object>, paramarg1: string, paramarg2: ConfigParseOptions): Config;
    static parseResourcesAnySyntax(paramarg0: ClassLoader, paramarg1: string): Config;
    static parseResourcesAnySyntax(paramarg0: ClassLoader, paramarg1: string, paramarg2: ConfigParseOptions): Config;
    static parseResourcesAnySyntax(paramarg0: string): Config;
    static parseResourcesAnySyntax(paramarg0: string, paramarg1: ConfigParseOptions): Config;
    static parseString(paramarg0: string): Config;
    static parseString(paramarg0: string, paramarg1: ConfigParseOptions): Config;
    static parseURL(paramarg0: URL): Config;
    static parseURL(paramarg0: URL, paramarg1: ConfigParseOptions): Config;
    static systemEnvironment(): Config;
    static systemEnvironmentOverrides(): Config;
    static systemProperties(): Config;
    private constructor()
}