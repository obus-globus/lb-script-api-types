import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigIncludeContext } from '../../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { ConfigIncluder } from '../../../../com/typesafe/config/ConfigIncluder.d.ts'
import type { FullIncluder } from '../../../../com/typesafe/config/impl/FullIncluder.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleIncluder extends Object implements FullIncluder {
    constructor(arg0: ConfigIncluder)
    // private fallback: ConfigIncluder;
    include(arg0: ConfigIncludeContext, arg1: string): JavaMap<any, any>;
    includeFile(arg0: ConfigIncludeContext, arg1: File): JavaMap<any, any>;
    includeResources(arg0: ConfigIncludeContext, arg1: string): JavaMap<any, any>;
    includeURL(arg0: ConfigIncludeContext, arg1: URL): JavaMap<any, any>;
    withFallback(arg0: ConfigIncluder): ConfigIncluder;
}