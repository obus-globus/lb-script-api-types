import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { SimpleIncluder$NameSource } from '../../../../com/typesafe/config/impl/SimpleIncluder$NameSource.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigImpl$ClasspathNameSourceWithClass extends Object implements SimpleIncluder$NameSource {
    constructor(arg0: Class<Object>)
    // private klass: Class<Object>;
    nameToParseable(arg0: string, arg1: ConfigParseOptions): ConfigParseable;
}