import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { SimpleIncluder$NameSource } from '../../../../com/typesafe/config/impl/SimpleIncluder$NameSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigImpl$FileNameSource extends Object implements SimpleIncluder$NameSource {
    constructor()
    nameToParseable(arg0: string, arg1: ConfigParseOptions): ConfigParseable;
}