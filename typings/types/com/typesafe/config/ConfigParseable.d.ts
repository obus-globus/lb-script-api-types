import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigOrigin } from '../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigParseOptions } from '../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigParseable extends Object{
    options(): ConfigParseOptions;
    origin(): ConfigOrigin;
    parse(arg0: ConfigParseOptions): JavaMap<any, any>;
}