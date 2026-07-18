import type { ConfigIncluder } from '../../../../com/typesafe/config/ConfigIncluder.d.ts'
import type { ConfigIncluderClasspath } from '../../../../com/typesafe/config/ConfigIncluderClasspath.d.ts'
import type { ConfigIncluderFile } from '../../../../com/typesafe/config/ConfigIncluderFile.d.ts'
import type { ConfigIncluderURL } from '../../../../com/typesafe/config/ConfigIncluderURL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FullIncluder extends ConfigIncluder, ConfigIncluderClasspath, ConfigIncluderFile, ConfigIncluderURL, Object{
    withFallback(arg0: ConfigIncluder): ConfigIncluder;
}