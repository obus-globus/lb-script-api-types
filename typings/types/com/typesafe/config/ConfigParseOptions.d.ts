import type { ConfigIncluder } from '../../../com/typesafe/config/ConfigIncluder.d.ts'
import type { ConfigSyntax } from '../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConfigParseOptions extends Object {
    static defaults(): ConfigParseOptions;
    private constructor(arg0: ConfigSyntax, arg1: string, arg2: boolean, arg3: ConfigIncluder, arg4: ClassLoader)
    readonly allowMissing: boolean;
    readonly classLoader: ClassLoader;
    readonly includer: ConfigIncluder;
    readonly originDescription: string;
    readonly syntax: ConfigSyntax;
    appendIncluder(arg0: ConfigIncluder): ConfigParseOptions;
    getAllowMissing(): boolean;
    getClassLoader(): ClassLoader;
    getIncluder(): ConfigIncluder;
    getOriginDescription(): string;
    getSyntax(): ConfigSyntax;
    prependIncluder(arg0: ConfigIncluder): ConfigParseOptions;
    setAllowMissing(arg0: boolean): ConfigParseOptions;
    setClassLoader(arg0: ClassLoader): ConfigParseOptions;
    setIncluder(arg0: ConfigIncluder): ConfigParseOptions;
    setOriginDescription(arg0: string): ConfigParseOptions;
    setSyntax(arg0: ConfigSyntax): ConfigParseOptions;
    setSyntaxFromFilename(arg0: string): ConfigParseOptions;
    withFallbackOriginDescription(arg0: string): ConfigParseOptions;
}