import type { Config } from '../../../com/typesafe/config/Config.d.ts'
import type { ConfigLoadingStrategy } from '../../../com/typesafe/config/ConfigLoadingStrategy.d.ts'
import type { ConfigParseOptions } from '../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultConfigLoadingStrategy extends Object implements ConfigLoadingStrategy {
    constructor()
    parseApplicationConfig(arg0: ConfigParseOptions): Config;
}