import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigIncludeContext } from '../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigIncluderURL extends Object{
    includeURL(arg0: ConfigIncludeContext, arg1: URL): JavaMap<any, any>;
}