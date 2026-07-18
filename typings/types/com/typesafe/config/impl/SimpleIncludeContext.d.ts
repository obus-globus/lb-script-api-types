import type { ConfigIncludeContext } from '../../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { Parseable } from '../../../../com/typesafe/config/impl/Parseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleIncludeContext extends Object implements ConfigIncludeContext {
    constructor(arg0: Parseable)
    // private options: ConfigParseOptions;
    // private parseable: Parseable;
    parseOptions(): ConfigParseOptions;
    relativeTo(arg0: string): ConfigParseable;
    setParseOptions(arg0: ConfigParseOptions): ConfigIncludeContext;
    withParseable(arg0: Parseable): SimpleIncludeContext;
}