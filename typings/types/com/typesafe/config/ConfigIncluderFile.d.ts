import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ConfigIncludeContext } from '../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigIncluderFile extends Object{
    includeFile(arg0: ConfigIncludeContext, arg1: File): JavaMap<any, any>;
}