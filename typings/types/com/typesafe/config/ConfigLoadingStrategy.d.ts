import type { Config } from '../../../com/typesafe/config/Config.d.ts'
import type { ConfigParseOptions } from '../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigLoadingStrategy extends Object{
    parseApplicationConfig(arg0: ConfigParseOptions): Config;
}