import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigIncludeContext } from '../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigIncluderClasspath extends Object{
    includeResources(arg0: ConfigIncludeContext, arg1: string): JavaMap<any, any>;
}