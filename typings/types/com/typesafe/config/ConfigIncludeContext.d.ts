import type { ConfigParseOptions } from '../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../com/typesafe/config/ConfigParseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigIncludeContext extends Object{
    parseOptions(): ConfigParseOptions;
    relativeTo(arg0: string): ConfigParseable;
    setParseOptions(arg0: ConfigParseOptions): ConfigIncludeContext;
}