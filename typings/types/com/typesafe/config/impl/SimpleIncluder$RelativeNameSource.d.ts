import type { ConfigIncludeContext } from '../../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { SimpleIncluder$NameSource } from '../../../../com/typesafe/config/impl/SimpleIncluder$NameSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleIncluder$RelativeNameSource extends Object implements SimpleIncluder$NameSource {
    constructor(arg0: ConfigIncludeContext)
    // private context: ConfigIncludeContext;
    nameToParseable(arg0: string, arg1: ConfigParseOptions): ConfigParseable;
}