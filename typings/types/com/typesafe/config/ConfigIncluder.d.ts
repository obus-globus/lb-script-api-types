import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigIncludeContext } from '../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigIncluder extends Object{
    include(arg0: ConfigIncludeContext, arg1: string): JavaMap<any, any>;
    withFallback(arg0: ConfigIncluder): ConfigIncluder;
}